import { FileText } from "lucide-react";
import { userDetails } from "../functions/resuable";

function GoalDescription() {
  
  const focusAreas:String []= userDetails("focusAreas") || [];
  const description = userDetails("goalSummary");

  return (
    <div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <FileText size={18} className="text-purple-400" />
        <h2 className="text-white font-semibold">Goal Description</h2>
      </div>

      <div className="space-y-3 mb-6">
     
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
    
      </div>

      <h3 className="text-purple-400 text-sm font-medium mb-3">Focus Areas</h3>

      <div className="grid grid-cols-3 gap-2">
        {focusAreas.map((focusArea, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200"
          >
            <span>{focusArea}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalDescription;