import {
  LayoutDashboard,
  Target,
  CalendarDays,
  ChartColumn,
  Settings,
} from "lucide-react";

 function Navbar() {
  return (
    <nav className="bg-[#232729] border-b border-[#323638] px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#A7BF80] flex items-center justify-center font-bold text-[#232729]">
            H
          </div>

          <h1 className="text-white font-semibold text-xl">
            HabitFlow
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <button className="flex items-center gap-2 text-[#A7BF80] font-medium">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <Target size={18} />
            Goals
          </button>

          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <CalendarDays size={18} />
            Calendar
          </button>

          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ChartColumn size={18} />
            Analytics
          </button>

          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <Settings size={18} />
            Settings
          </button>

        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#A7BF80] flex items-center justify-center text-[#232729] font-semibold">
            H
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;