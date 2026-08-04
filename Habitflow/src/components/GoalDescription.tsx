import { FileText } from "lucide-react";

interface FocusArea {
  label: string;
  emoji: string;
}

const paragraphs: string[] = [
  "I want to become a backend engineer capable of building production-ready web applications.",
  "Mastering the technologies and concepts needed to design, build and scale real-world systems.",
];

const focusAreas: FocusArea[] = [
  { label: "Node.js", emoji: "🟢" },
  { label: "Express", emoji: "🚂" },
  { label: "MongoDB", emoji: "🍃" },
  { label: "Authentication", emoji: "🔒" },
  { label: "System Design", emoji: "🧩" },
  { label: "Docker", emoji: "🐳" },
  { label: "Redis", emoji: "🟥" },
  { label: "Deployment", emoji: "🚀" },
];

 function GoalDescription() {
  return (
    <div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <FileText size={18} className="text-purple-400" />
        <h2 className="text-white font-semibold">Goal Description</h2>
      </div>

      <div className="space-y-3 mb-6">
        {paragraphs.map((text, i) => (
          <p key={i} className="text-gray-400 text-sm leading-relaxed">
            {text}
          </p>
        ))}
      </div>

      <h3 className="text-purple-400 text-sm font-medium mb-3">Focus Areas</h3>

      <div className="grid grid-cols-3 gap-2">
        {focusAreas.map((area) => (
          <div
            key={area.label}
            className="flex items-center gap-2 bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200"
          >
            <span>{area.emoji}</span>
            <span>{area.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalDescription;