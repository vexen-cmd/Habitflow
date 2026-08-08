import { useState } from "react"
import GoalsCard from "../components/goalsCard.tsx"
import GoalDescription from "../components/GoalDescription.tsx";
import SuggestedRoadmap from "../components/suggestedRoadmap.tsx";
import {userGoalPost} from "../functions/resuable.tsx";

function Goals() {
// const apiKey = import.meta.env.VITE_GEMINI_API;
const [userDetails, setuserDetails] = useState(localStorage.getItem("details") || "")
const [inputValue, setinputValue] = useState("")
const [wordCount, setWordCount] = useState(0);

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
                            setWordCount(value.length)
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
                            {wordCount} characters
                        </span>

                    </div>

                </div>

                <div className="mt-12 flex justify-center">

                    <button
                        onClick={async () => {
                            if (!inputValue) return;
                            const data = await userGoalPost(inputValue);
                           console.log("Data received:", data);
                           
                           if(!data || data.rejected) {
                            alert(`Goal rejected: ${data.reason}. Suggested alternative: ${data.safeAlternative}`);
                            return;
                           }

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
                <div className="w-full max-w-7xl px-6 py-12">    
                <div className="flex flex-col gap-6">
                <GoalsCard />
                <div className="flex flex-col gap-6 md:flex-row">
                <SuggestedRoadmap />
                <GoalDescription/>
                   
                </div>
                </div>
                </div>
            </div>
        }

    </div>
)
}

export default Goals