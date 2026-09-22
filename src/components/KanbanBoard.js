
import { columns } from "@/data/boardData";
import TaskCard from "./TaskCard";

export default function KanbanBoard({ darkMode }) {
  return (
    <div className="grid gap-6 xl:grid-cols-4">
      {columns.map((column) => (
        <div key={column.id} className="min-w-0">

          {/* Column heading */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: column.color }}
              />

              <h3 className="text-sm font-medium">
                {column.title}
              </h3>

              <span className="text-xs opacity-45">
                {column.count}
              </span>
            </div>

            <button className="text-sm opacity-50 hover:opacity-100">
              ···
            </button>
          </div>

          {/* Tasks */}
          <div className="space-y-3">
            {column.tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                darkMode={darkMode}
              />
            ))}
          </div>

          {/* Add task */}
          <button
            className={`mt-4 w-full rounded-xl border border-dashed py-3 text-xs transition ${
              darkMode
                ? "border-[#575047] text-[#aaa095] hover:bg-[#302c27]"
                : "border-[#c9bdad] text-[#938778] hover:bg-[#e5dbcd]"
            }`}
          >
            + Add a card
          </button>
        </div>
      ))}
    </div>
  );
}