import { Pencil } from "lucide-react";
import {userDetails} from "../functions/resuable.tsx";

function GoalCard() {

  const userdetails = userDetails("");
  console.log(userdetails);
  return (
    <section className="rounded-3xl border border-zinc-800 bg-[#111315] p-10 shadow-xl">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
              🎯 Main Goal
            </span>

            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
              AI Generated
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">
            {userdetails.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            {userdetails.goalSummary}
          </p>

        </div>

        <button
          className="
          flex items-center
          gap-2
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-5
          py-3
          text-sm
          text-zinc-300
          transition
          hover:border-green-500
          hover:text-white
          "
        >
          <Pencil size={17} />
          Edit Goal
        </button>

      </div>

      {/* Progress */}

      <div className="mt-12">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm text-zinc-500">
            Overall Progress
          </span>

          <span className="font-semibold text-green-400">
            {89}%
          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-zinc-800">

          <div
            className="h-full rounded-full bg-green-500 transition-all duration-500"
            style={{
              width: `${89}%`,
            }}
          />

        </div>

        <p className="mt-4 text-sm text-zinc-500">
          {userdetails.completed} of {userdetails.total} milestones completed
        </p>

      </div>

    </section>
  );
}

export default GoalCard;