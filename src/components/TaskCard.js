const tagStyles = {
  Design: {
    light: "bg-[#ddd6ed] text-[#5e5278]",
    dark: "bg-[#423b52] text-[#cfc3e6]",
  },
  Development: {
    light: "bg-[#d6e0ee] text-[#52657d]",
    dark: "bg-[#354052] text-[#c4d2e6]",
  },
  Product: {
    light: "bg-[#dce6d6] text-[#5e7257]",
    dark: "bg-[#3a4736] text-[#c5d5bd]",
  },
  Planning: {
    light: "bg-[#eadbc4] text-[#806747]",
    dark: "bg-[#4a3d2d] text-[#ddc6a0]",
  },
  Marketing: {
    light: "bg-[#ecd6df] text-[#805669]",
    dark: "bg-[#4b353f] text-[#dcb9c6]",
  },
};

const priorityStyles = {
  High: {
    light: "bg-[#f1c8b9] text-[#9b4f36]",
    dark: "bg-[#5a3930] text-[#e8ad98]",
  },
  Medium: {
    light: "bg-[#e8dcc1] text-[#806a43]",
    dark: "bg-[#4c412c] text-[#d8c28f]",
  },
  Low: {
    light: "bg-[#d9e4d5] text-[#5e7558]",
    dark: "bg-[#354434] text-[#bfd0b9]",
  },
};

export default function TaskCard({ task, darkMode }) {
  const tag = tagStyles[task.tag] || tagStyles.Design;
  const priority = priorityStyles[task.priority] || priorityStyles.Medium;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(70,55,40,0.12)] ${
        darkMode
          ? "border-white/10 bg-[#211f1c] shadow-black/20"
          : "border-[#ddd2c2] bg-[#faf6ee] shadow-[0_4px_15px_rgba(70,55,40,0.06)]"
      }`}
    >
      {/* Small decorative corner */}
      <span
        className={`absolute right-3 top-3 text-sm transition-transform duration-300 group-hover:rotate-12 ${
          darkMode ? "text-[#d8a67e]" : "text-[#bd7654]"
        }`}
      >
        ✦
      </span>

      {/* Title */}
      <div className="pr-6">
        <h4 className="text-sm font-medium leading-5">
          {task.title}
        </h4>

        <p className="mt-2 text-[11px] leading-5 opacity-50">
          {task.description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
            darkMode ? tag.dark : tag.light
          }`}
        >
          {task.tag}
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
            darkMode ? priority.dark : priority.light
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] opacity-40">
            Progress
          </span>

          <span className="text-[9px] opacity-50">
            3/5
          </span>
        </div>

        <div
          className={`h-1 overflow-hidden rounded-full ${
            darkMode ? "bg-white/10" : "bg-black/5"
          }`}
        >
          <div
            className="h-full w-[60%] rounded-full bg-[#d47752]"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">

        {/* Avatars */}
        <div className="flex -space-x-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[9px] text-white ${
              darkMode
                ? "border-[#211f1c]"
                : "border-[#faf6ee]"
            } bg-[#d47752]`}
          >
            K
          </div>

          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[9px] text-white ${
              darkMode
                ? "border-[#211f1c]"
                : "border-[#faf6ee]"
            } bg-[#829b7c]`}
          >
            A
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-[10px] opacity-45">
          <span>💬 2</span>
          <span>☑ 3/5</span>
        </div>
      </div>

      {/* Due date */}
      <div
        className={`mt-4 flex items-center justify-between border-t pt-3 text-[9px] ${
          darkMode
            ? "border-white/10"
            : "border-black/5"
        }`}
      >
        <span className="opacity-40">
          Due date
        </span>

        <span className="font-medium opacity-60">
          {task.date}
        </span>
      </div>
    </article>
  );
}