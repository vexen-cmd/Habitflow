import { Target, Calendar, Flame, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function MainGoal() {

    const [title, setTitle] = useState(localStorage.getItem("mainGoal") || "");
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="min-h-screen bg-[#111111] text-white px-8 py-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        {!title && (

                            <div className="flex items-center gap-4 mb-2">
                                <input onChange={(e) => {
                                    const newTitle = e.target.value;
                                    setInputValue(newTitle);
                                }} 
                                 type="text"
                                 value={inputValue}
                                 placeholder="Name your journey" className="bg-transparent border-b border-zinc-600 text-4xl font-bold focus:outline-none w-full" />
                                <button
                                    onClick={() => {
                                        localStorage.setItem("mainGoal", inputValue.toUpperCase());
                                        setTitle(inputValue);
                                    }}
                                    className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 active:scale-95 transition-all duration-200 font-semibold text-black shadow-lg shadow-green-500/20"
                                >
                                    Done
                                </button>
                            </div>
                        )
                        }
                        {title && (
                            localStorage.getItem("mainGoal") && <h1 className="text-4xl font-bold">{localStorage.getItem("mainGoal")}</h1>
                        )}

                        <p className="text-zinc-400 mt-2">
                            Define your main goal and stay focused on what matters most.
                        </p>
                        {/* </div> */}

                        <p className="text-zinc-400 mt-2">
                            Stay consistent. Small progress every day compounds.
                        </p>
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold">
                        Edit Goal
                    </button>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-5 mb-10">

                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-zinc-800">
                        <Target className="text-green-400 mb-3" size={28} />
                        <p className="text-zinc-400 text-sm">Progress</p>
                        <h2 className="text-3xl font-bold mt-1">67%</h2>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-zinc-800">
                        <Flame className="text-orange-400 mb-3" size={28} />
                        <p className="text-zinc-400 text-sm">Current Streak</p>
                        <h2 className="text-3xl font-bold mt-1">14 Days</h2>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-zinc-800">
                        <CheckCircle2 className="text-blue-400 mb-3" size={28} />
                        <p className="text-zinc-400 text-sm">Tasks Completed</p>
                        <h2 className="text-3xl font-bold mt-1">92</h2>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-zinc-800">
                        <Calendar className="text-purple-400 mb-3" size={28} />
                        <p className="text-zinc-400 text-sm">Deadline</p>
                        <h2 className="text-3xl font-bold mt-1">48 Days</h2>
                    </div>

                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Side */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Goal Description */}
                        <div className="bg-[#1a1a1a] rounded-3xl border border-zinc-800 p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Goal Description
                            </h2>

                            <p className="text-zinc-400 leading-8">
                                Become job-ready as a backend engineer by mastering Node.js,
                                Express, MongoDB, authentication, system design, DSA and
                                building production-ready projects.
                            </p>
                        </div>

                        {/* Today's Tasks */}
                        <div className="bg-[#1a1a1a] rounded-3xl border border-zinc-800 p-6">

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">
                                    Today's Tasks
                                </h2>

                                <button className="text-green-400 hover:text-green-300">
                                    + Add Task
                                </button>
                            </div>

                            <div className="space-y-4">

                                <div className="flex justify-between items-center bg-[#222222] p-4 rounded-xl">
                                    <span>Finish Authentication API</span>
                                    <button className="bg-green-500 px-4 py-2 rounded-lg">
                                        Complete
                                    </button>
                                </div>

                                <div className="flex justify-between items-center bg-[#222222] p-4 rounded-xl">
                                    <span>Solve 3 DSA Questions</span>
                                    <button className="bg-green-500 px-4 py-2 rounded-lg">
                                        Complete
                                    </button>
                                </div>

                                <div className="flex justify-between items-center bg-[#222222] p-4 rounded-xl">
                                    <span>Read Express Documentation</span>
                                    <button className="bg-green-500 px-4 py-2 rounded-lg">
                                        Complete
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">

                        {/* Progress */}
                        <div className="bg-[#1a1a1a] rounded-3xl border border-zinc-800 p-6">

                            <h2 className="text-xl font-semibold mb-6">
                                Goal Progress
                            </h2>

                            <div className="w-full h-4 rounded-full bg-zinc-800 overflow-hidden">
                                <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
                            </div>

                            <p className="mt-4 text-zinc-400">
                                Keep going. You're closer than yesterday.
                            </p>

                        </div>

                        {/* AI Insight */}
                        <div className="bg-[#1a1a1a] rounded-3xl border border-zinc-800 p-6">

                            <h2 className="text-xl font-semibold mb-4">
                                AI Insight
                            </h2>

                            <p className="text-zinc-400 leading-7">
                                Based on your recent consistency, you're maintaining a healthy
                                pace. Completing one additional task each day could help you
                                reach your goal almost two weeks earlier.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Nested Routes */}
                <Outlet />

            </div>
        </div>
    );
}

export default MainGoal;