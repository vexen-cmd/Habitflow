import { useState } from "react"
import GoalsCard from "../components/goalsCard.tsx"
import axios from "axios"
import GoalDescription from "../components/GoalDescription.tsx";


function Goals() {
const apiKey = import.meta.env.VITE_GEMINI_API;
const openRouterApiKey = import.meta.env.VITE_OPENROUTER_API;
const [userDetails, setuserDetails] = useState(localStorage.getItem("details") || "")
const [inputValue, setinputValue] = useState("")

async function userGoalPost(inputValue: string) {


try {
        console.log("Started")
            const systemPrompt = `
You are an AI Career Planner.

Your purpose is to help users achieve positive, legal, ethical, educational, healthy, and career-focused goals.

RULES:

- Only support legal, ethical, and constructive goals.
- Never generate roadmaps for illegal, harmful, violent, hateful, sexual, explicit, adult, fraudulent, or unethical activities.
- If the goal is unsafe or inappropriate, return ONLY this JSON:

{
"rejected": true,
"reason": "Short explanation.",
"safeAlternative": "Suggest a positive alternative."
}

If the goal is acceptable, return ONLY valid JSON.

DO NOT:
- Use markdown.
- Wrap the JSON in \`\`\`.
- Add explanations before or after the JSON.
- Include any extra keys.

Return ONLY this JSON structure:

{
"rejected": false,
"title": "string",
"goalSummary": "string",
"focusAreas": [
"string"
],
"suggestedRoadmap": [
{
    "title": "string",
    "description": "string"
}
]
}

Requirements:

title:
- Short and professional.
- Maximum 6 words.

goalSummary:
- 2-3 sentences.
- Around 50-80 words.
- Explain what the user wants to achieve and the skills required.

focusAreas:
- 5-8 items.
- Each item should be 1-3 words.
- Include only technologies, concepts, or skills directly related to the goal.
- No duplicates.

suggestedRoadmap:
- 6-10 steps.
- Ordered from beginner to advanced.
- Each step must contain:
- title
- description
- Make the roadmap practical and realistic.

`;

    const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
   model: "google/gemini-2.5-flash",
        max_tokens: 700,
        response_format: {
        type: "json_object",
        },

        messages: [
        {
            role: "system",
            content: systemPrompt,
        },
        {
            role: "user",
            content: inputValue,
        },
        ],
    },
    {
        headers: {
        Authorization: `Bearer ${openRouterApiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "HabitFlow",
        },
    }
    );
    console.log("reached here")
    const result = JSON.parse(response.data.choices[0].message.content);
    return result;
} catch (error: any) {
    console.error(error.response?.data || error.message);
}
}

return (
    <div>
        {!userDetails ? <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6">

            <div className="w-full max-w-3xl">

                <div className="text-center">

                    <span className="text-green-400 text-xs font-medium tracking-[0.25em] uppercase">
                        AI Goal Architect
                    </span>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Let's build the
                        <br />
                        future version of you.
                    </h1>

                    <p className="mt-5 text-zinc-400 text-base leading-7 max-w-lg mx-auto">
                        Forget forms. Just tell me your story and I'll transform it
                        into a personalized roadmap with milestones, progress tracking,
                        and AI coaching.
                    </p>

                </div>

                <div className="mt-14">

                    <textarea
                        rows={7}
                        placeholder="I want to become..."
                        value={inputValue}
                        onChange={(e) => {
                            const value = e.target.value
                            setinputValue(value)
                        }}
                        className="
w-full
bg-transparent
text-lg
text-white
placeholder:text-zinc-600
resize-none
outline-none
leading-9
border-none
overflow-hidden
"
                    />

                    <div className="mt-2 h-px bg-zinc-800" />

                    <div className="flex items-center justify-between mt-3 text-sm text-zinc-600">

                        <span>
                            Write naturally. No formatting needed.
                        </span>

                        <span>
                            0 words
                        </span>

                    </div>

                </div>

                <div className="mt-12 flex justify-center">

                    <button
                        onClick={async () => {
                            if (!inputValue) return;
                            const data = await userGoalPost(inputValue);

                            try {
                                localStorage.setItem("details", JSON.stringify(data));
                                setuserDetails(JSON.stringify(data));
                            } catch (error) {
                                console.error("Error saving to localStorage:", error);
                            }

                        }}
                        className="
px-8
py-3
rounded-full
bg-green-500
text-black
font-semibold
text-sm
hover:bg-green-400
transition-all
duration-300
hover:scale-105
"
                    >
                        ✨ Generate My Journey
                    </button>

                </div>

            </div>

        </div> :
            <div className="flex justify-center">
                <div className="flex flex-col">
                <GoalsCard />
                <GoalDescription/>

                </div>
            </div>
        }

    </div>
)
}

export default Goals