import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Goals() {

    const navigate = useNavigate()

    return (

        <div className="min-h-screen w-screen bg-[#111111] text-white flex items-center justify-center px-8">

               <Outlet />
            <div className="w-full max-w-6xl flex gap-8">

                {/* Left Section */}
                <div className="flex-1 bg-[#1a1a1a] rounded-3xl p-8 border border-zinc-800">

                    <h1 className="text-4xl font-bold mb-8">
                        Today <span className="text-green-400">Stats</span>
                    </h1>

                    {/* Today's Stats */}
                    <div className="grid grid-cols-2 gap-6">

                        <div className="bg-[#242424] rounded-2xl p-6 h-36 border border-zinc-700">
                            <p className="text-zinc-400 text-sm mb-2">
                                Tasks Completed
                            </p>

                            <h2 className="text-4xl font-bold">00</h2>
                        </div>

                        <div className="bg-[#242424] rounded-2xl p-6 h-36 border border-zinc-700">
                            <p className="text-zinc-400 text-sm mb-2">
                                Goal Progress
                            </p>

                            <h2 className="text-4xl font-bold">0%</h2>
                        </div>

                        <div className="bg-[#242424] rounded-2xl p-6 h-36 border border-zinc-700">
                            <p className="text-zinc-400 text-sm mb-2">
                                Time Focused
                            </p>

                            <h2 className="text-4xl font-bold">0h</h2>
                        </div>

                        <div className="bg-[#242424] rounded-2xl p-6 h-36 border border-zinc-700">
                            <p className="text-zinc-400 text-sm mb-2">
                                Streak
                            </p>

                            <h2 className="text-4xl font-bold">0 🔥</h2>
                        </div>

                    </div>

                </div>

                {/* Right Section */}
                <div className="w-80 bg-[#1a1a1a] rounded-3xl border border-zinc-800 p-6 flex flex-col gap-5">

                    <button onClick={() => {
                        console.log("main goal")
                        navigate("maingoal")
                    }} className="w-full rounded-xl bg-green-500 py-4 text-lg font-semibold transition hover:bg-green-600">
                        Main Goal
                    </button>

                    <button onClick={() => {
                        navigate("todaygoal")
                    }} className="w-full rounded-xl bg-[#242424] border border-zinc-700 py-4 text-lg transition hover:bg-[#2e2e2e]">
                        Today Goal
                    </button>

                    <button onClick={() => {
                        navigate("progress")
                    }} className="w-full rounded-xl bg-[#242424] border border-zinc-700 py-4 text-lg transition hover:bg-[#2e2e2e]">
                        Progress
                    </button>

                </div>

            </div>
        </div>


    );
}

export default Goals;