import { useState } from 'react';
import Calendar from 'react-calendar';


function App() {

  const [value, setValue] = useState<Date>(new Date());

  return(
    <div className="flex justify-center items-center min-h-screen bg-[#1b1d1f] gap-6">

  {/* Stats Card */}
  <div className="bg-[#232729] rounded-xl p-5 w-64 h-64 flex flex-col justify-between shadow-lg">

    {/* Goals */}
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-gray-400 text-sm">Goals</h2>
        <h1 className="text-4xl font-bold text-[#A7BF80]">12</h1>
      </div>

      <div className="w-14 h-14 rounded-full bg-[#2d3235] flex items-center justify-center text-3xl">
        🎯
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-[#34393b]" />

    {/* Streak */}
    <div>
      <h2 className="text-gray-400 text-sm mb-2">Current Streak</h2>

      <div className="flex items-end gap-1 h-14">
        <div className="w-2 h-4 bg-[#A7BF80] rounded"></div>
        <div className="w-2 h-7 bg-[#A7BF80] rounded"></div>
        <div className="w-2 h-10 bg-[#A7BF80] rounded"></div>
        <div className="w-2 h-6 bg-[#A7BF80] rounded"></div>
        <div className="w-2 h-12 bg-[#A7BF80] rounded"></div>
        <div className="w-2 h-8 bg-[#A7BF80] rounded"></div>
        <div className="w-2 h-14 bg-[#A7BF80] rounded"></div>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        7 day streak 🔥
      </p>
    </div>

  </div>

  {/* Calendar */}
  <Calendar
    className="custom-calendar"
    value={value}
    onChange={(date) => setValue(date as Date)}
  />

</div>
  )
}

export default App
