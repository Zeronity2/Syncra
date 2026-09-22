
export default function TaskCard({ task, darkMode }) {
  return (
    <article
      className={`group rounded-2xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        darkMode
          ? "border-[#4a433b] bg-[#292723]"
          : "border-[#d8cdbd] bg-[#faf5ec]"
      }`}
    >
      {/* Task heading */}
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-medium leading-6">
          {task.title}
        </h4>

        <button className="text-xs opacity-40 transition group-hover:opacity-100">
          ···
        </button>
      </div>

      {/* Description */}
      <p className="mt-2 text-xs leading-5 opacity-55">
        {task.description}
      </p>

      {/* Footer */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-[10px] ${
            darkMode
              ? "bg-[#403a32] text-[#d9c6ad]"
              : "bg-[#e9dfd0] text-[#71675b]"
          }`}
        >
          {task.tag}
        </span>

        <span className="text-[10px] opacity-50">
          {task.date}
        </span>
      </div>

      {/* Bottom row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-current/10 bg-[#d47752] text-[9px] text-white">
            K
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-current/10 bg-[#829b7c] text-[9px] text-white">
            A
          </span>
        </div>

        <span className="text-[10px] opacity-40">
          ↗
        </span>
      </div>
    </article>
  );
}