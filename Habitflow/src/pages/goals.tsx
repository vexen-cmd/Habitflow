import { useState } from "react"
import GoalsCard from "../components/goalsCard.tsx"
import axios from "axios"

function Goals(){

const [userDetails,setuserDetails] = useState(localStorage.getItem("details") || "")
const [inputValue,setinputValue] = useState("")
return(
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
                onChange={(e)=>{
                  const value=e.target.value
                  if(!value) return;

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

            <div className="mt-2 h-px bg-zinc-800"/>

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
            onClick={()=>{
              async () => {
                // const response = await axios.post("https:/localhost:1134",inputValue)
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

</div>:
<div>
    <GoalsCard/>
    </div>
}
        
        </div>
    )
}

export default Goals