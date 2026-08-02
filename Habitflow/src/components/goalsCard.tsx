import {
  Calendar,
  Target,
  ChartColumn,
  Pencil,
  TrendingUp,
} from "lucide-react";

function GoalCard() {
  return (
    <div className="w-[90%] rounded-3xl border border-zinc-800 bg-[#101214] px-10 py-8 flex items-center justify-between mt-8">

      {/* Left */}
      <div className="flex flex-col gap-8">

        <div>
          <p className="text-green-500 font-semibold uppercase tracking-widest text-sm flex items-center gap-2">
            <Target size={15} />
            Main Goal
          </p>

          <h1 className="text-5xl font-bold text-white mt-4">
            Become a Backend Engineer
          </h1>

          <p className="text-zinc-400 text-xl mt-5 max-w-xl leading-relaxed">
            Building scalable APIs and production-ready backend systems.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-16">

          <div className="flex items-center gap-3">
            <Calendar className="text-green-500" size={22} />

            <div>
              <p className="text-zinc-500 text-sm">Started</p>
              <p className="text-white font-semibold text-2xl">
                Jan 2026
              </p>
            </div>
          </div>

          <div className="h-14 w-px bg-zinc-800" />

          <div className="flex items-center gap-3">
            <Target className="text-violet-500" size={22} />

            <div>
              <p className="text-zinc-500 text-sm">Target</p>
              <p className="text-white font-semibold text-2xl">
                Mar 2027
              </p>
            </div>
          </div>

          <div className="h-14 w-px bg-zinc-800" />

          <div className="flex items-center gap-3">
            <ChartColumn className="text-lime-400" size={22} />

            <div>
              <p className="text-zinc-500 text-sm">
                Current Progress
              </p>

              <p className="text-white font-semibold text-2xl">
                48%
              </p>
            </div>
          </div>
        </div>

        <button className="w-fit flex items-center gap-2 rounded-xl border border-green-600 px-6 py-3 text-green-400 hover:bg-green-500/10 transition">
          <Pencil size={18} />
          Edit Goal
        </button>

      </div>

      {/* Right */}
      <div className="relative h-[320px] w-[320px] flex items-center justify-center">

        {/* Outer Circle */}
        <div className="absolute h-full w-full rounded-full border-[18px] border-zinc-800"></div>

        {/* Progress Circle */}
        <div
          className="absolute h-full w-full rounded-full"
          style={{
            background: `conic-gradient(
              #4ade80 0deg,
              #4ade80 173deg,
              transparent 173deg,
              transparent 360deg
            )`,
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 18px), black 0)",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 18px), black 0)",
          }}
        />

        <div className="text-center z-10">

          <h1 className="text-7xl font-bold text-green-400">
            48%
          </h1>

          <p className="text-zinc-400 mt-2 text-xl">
            Goal Progress
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-2 text-green-400">
            <TrendingUp size={16} />
            On Track
          </div>

        </div>

      </div>

    </div>
  );
}

export default GoalCard;