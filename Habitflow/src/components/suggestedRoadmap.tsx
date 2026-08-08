function SuggestedRoadmap() {

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 w-[140%]">

  {/* Header */}
  <div className="mb-8">
    <p className="text-sm text-blue-400 font-medium">
      AI Suggested
    </p>

    <h2 className="mt-1 text-2xl font-semibold text-white">
      Backend Developer Roadmap
    </h2>

    <p className="mt-2 text-sm text-zinc-400">
      A suggested learning path based on your current goal and progress.
    </p>
  </div>


  {/* Roadmap */}
  <div className="space-y-6">

    {/* Step 1 */}
    <div className="flex gap-4">

      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
          ✓
        </div>

        <div className="mt-2 h-full w-px bg-zinc-800" />
      </div>

      <div className="pb-6 flex-1">
        <p className="text-xs text-emerald-400 font-medium">
          COMPLETED
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white">
          Programming Fundamentals
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Build a strong foundation in programming and problem solving.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            C++
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            OOP
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Git
          </span>
        </div>
      </div>

    </div>


    {/* Step 2 */}
    <div className="flex gap-4">

      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500/10">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
        </div>

        <div className="mt-2 h-full w-px bg-zinc-800" />
      </div>

      <div className="pb-6 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-xs text-blue-400 font-medium">
            CURRENT
          </p>

          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400">
            IN PROGRESS
          </span>
        </div>

        <h3 className="mt-1 text-lg font-semibold text-white">
          Data Structures & Algorithms
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Improve problem solving skills and prepare for technical
          interviews.
        </p>

        {/* Progress */}
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-zinc-500">
              Progress
            </span>

            <span className="text-zinc-300">
              45%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[45%] rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Arrays
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Hashmaps
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Trees
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Graphs
          </span>
        </div>
      </div>

    </div>


    {/* Step 3 */}
    <div className="flex gap-4">

      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
          3
        </div>

        <div className="mt-2 h-full w-px bg-zinc-800" />
      </div>

      <div className="pb-6 flex-1">
        <p className="text-xs text-zinc-500 font-medium">
          UPCOMING
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white">
          JavaScript Deep Dive
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Master advanced JavaScript concepts required for backend
          development.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Promises
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Async/Await
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Event Loop
          </span>
        </div>
      </div>

    </div>


    {/* Step 4 */}
    <div className="flex gap-4">

      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
          4
        </div>

        <div className="mt-2 h-full w-px bg-zinc-800" />
      </div>

      <div className="pb-6 flex-1">
        <p className="text-xs text-zinc-500 font-medium">
          UPCOMING
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white">
          Node.js & Express
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Learn backend architecture and build scalable REST APIs.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Node.js
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Express
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            REST API
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Authentication
          </span>
        </div>
      </div>

    </div>


    {/* Step 5 */}
    <div className="flex gap-4">

      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
          5
        </div>
      </div>

      <div className="flex-1">
        <p className="text-xs text-zinc-500 font-medium">
          FUTURE
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white">
          Databases & System Design
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Learn database architecture, caching, scalability and
          distributed systems.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            PostgreSQL
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            Redis
          </span>

          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            System Design
          </span>
        </div>
      </div>

    </div>

  </div>

</div>
  );
}

export default SuggestedRoadmap;