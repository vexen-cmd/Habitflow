import {
  LayoutDashboard,
  Target,
  CalendarDays,
  ChartColumn,
  Settings,
} from "lucide-react";

function Navbar() {
  const nav = ["Dashboard", "Goals", "Calendar", "Analytics", "Settings"]
  const icons = [LayoutDashboard, Target, CalendarDays, ChartColumn, Settings]
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
          {
            nav.map((item, index) => {
              const Icon = icons[index]
              return (
                <button key={index} className="flex items-center gap-2 text-[#A7BF80] font-medium hover:text-[#FFFFFF] transition-colors duration-200 ease-in cursor-pointer">
                  <Icon size={18} />
                  {item}
                </button>
              )
            })
          }
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