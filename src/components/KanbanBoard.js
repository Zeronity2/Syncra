import { columns } from "@/data/boardData";
import TaskCard from "./TaskCard";

const columnStyles = {
  ideas: {
    light: "bg-[#eee3ce]",
    dark: "bg-[#302b25]",
    icon: "💡",
    accent: "#d7a24c",
  },
  progress: {
    light: "bg-[#e5e0ed]",
    dark: "bg-[#2d2b35]",
    icon: "⚙",
    accent: "#8f7bb0",
  },
  review: {
    light: "bg-[#f0ddd2]",
    dark: "bg-[#352b27]",
    icon: "🏆",
    accent: "#d47752",
  },
  done: {
    light: "bg-[#dfe6d8]",
    dark: "bg-[#293029]",
    icon: "✓",
    accent: "#71876b",
  },
};

export default function KanbanBoard({ darkMode }) {
  return (
    <div className="grid gap-5 xl:grid-cols-4">
      {columns.map((column) => {
        const style = columnStyles[column.id];

        return (
          <section
            key={column.id}
            className={`relative overflow-hidden rounded-[22px] p-3.5 transition-colors duration-500 ${
              darkMode ? style.dark : style.light
            }`}
          >
            {/* Decorative corner */}
            <div
              className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20"
              style={{ backgroundColor: style.accent }}
            />

            {/* Column header */}
            <div className="relative mb-3 flex items-center justify-between px-1.5 pt-1">
              <div className="flex items-center gap-2">

                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl text-sm shadow-sm"
                  style={{
                    backgroundColor: darkMode
                      ? `${style.accent}30`
                      : `${style.accent}25`,
                  }}
                >
                  {style.icon}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">
                      {column.title}
                    </h3>

                    <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] opacity-60 dark:bg-white/10">
                      {column.count}
                    </span>
                  </div>

                  <p className="mt-0.5 text-[9px] uppercase tracking-widest opacity-40">
                    {column.title === "Ideas"
                      ? "Things to explore"
                      : column.title === "In Progress"
                      ? "Currently working"
                      : column.title === "Review"
                      ? "Needs attention"
                      : "Completed work"}
                  </p>
                </div>
              </div>

              <button className="flex h-7 w-7 items-center justify-center rounded-full text-sm opacity-40 transition hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10">
                ···
              </button>
            </div>

            {/* Tasks */}
            <div className="relative space-y-3">
              {column.tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  darkMode={darkMode}
                />
              ))}
            </div>

            {/* Add card */}
            <button
              className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed py-3 text-xs transition ${
                darkMode
                  ? "border-white/15 text-white/45 hover:bg-white/5 hover:text-white/70"
                  : "border-black/15 text-black/45 hover:bg-black/5 hover:text-black/70"
              }`}
            >
              <span className="text-base">+</span>
              Add a card
            </button>
          </section>
        );
      })}
    </div>
  );
}