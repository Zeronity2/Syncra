export default function Sidebar({ darkMode }) {
  return (
    <aside
      className={`relative hidden w-[250px] shrink-0 border-r px-5 py-7 lg:block ${
        darkMode
          ? "border-white/10 bg-[#1b1917]"
          : "border-[#d5cab9] bg-[#f4eee4]"
      }`}
    >
      {/* Logo */}
      <div className="px-3">
        <div className="flex items-center gap-2">
          <h1 className="font-serif text-4xl italic tracking-tight">
            syncra
            <span className="text-[#d47752]">.</span>
          </h1>

          <span className="mt-[-18px] text-lg text-[#d47752]">
            ✦
          </span>
        </div>

        <p className="mt-1 text-[9px] uppercase tracking-[0.28em] opacity-40">
          work together
        </p>
      </div>

      {/* Main navigation */}
      <nav className="mt-10 space-y-1">

        <p className="mb-3 px-3 text-[9px] uppercase tracking-[0.2em] opacity-35">
          Workspace
        </p>

        {/* Home */}
        <button
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
            darkMode
              ? "bg-[#d47752] text-white"
              : "bg-[#292724] text-white"
          }`}
        >
          <span className="text-base">⌂</span>
          <span>Home</span>

          <span className="ml-auto text-[9px] opacity-60">
            H
          </span>
        </button>

        {/* My Tasks */}
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm opacity-60 transition hover:bg-current/5 hover:opacity-100">
          <span className="text-base">✓</span>
          <span>My Tasks</span>
        </button>

        {/* Inbox */}
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm opacity-60 transition hover:bg-current/5 hover:opacity-100">
          <span className="text-base">○</span>
          <span>Inbox</span>

          <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d47752] px-1.5 text-[9px] text-white">
            3
          </span>
        </button>

        {/* Activity */}
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm opacity-60 transition hover:bg-current/5 hover:opacity-100">
          <span className="text-base">⌁</span>
          <span>Activity</span>
        </button>
      </nav>

      {/* Workspaces */}
      <div className="mt-10">

        <div className="mb-3 flex items-center justify-between px-3">
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-35">
            Your spaces
          </p>

          <button className="text-sm opacity-40 hover:opacity-100">
            +
          </button>
        </div>

        {/* Design workspace */}
        <button
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm ${
            darkMode
              ? "bg-white/5"
              : "bg-[#e2d9cc]"
          }`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#d8c5aa] text-xs">
            ✦
          </span>

          <div>
            <p className="font-medium">
              Design Team
            </p>

            <p className="text-[9px] opacity-40">
              12 tasks
            </p>
          </div>

          <span className="ml-auto text-xs opacity-30">
            →
          </span>
        </button>

        {/* Dev */}
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm opacity-60 transition hover:bg-current/5 hover:opacity-100">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c9d3c3] text-xs">
            ◇
          </span>

          <div>
            <p>Dev Squad</p>
            <p className="text-[9px] opacity-40">
              8 tasks
            </p>
          </div>
        </button>

        {/* Product */}
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm opacity-60 transition hover:bg-current/5 hover:opacity-100">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#d8c8dc] text-xs">
            ○
          </span>

          <div>
            <p>Product</p>
            <p className="text-[9px] opacity-40">
              5 tasks
            </p>
          </div>
        </button>

      </div>

      {/* New workspace */}
      <button className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm opacity-40 transition hover:bg-current/5 hover:opacity-100">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-dashed border-current">
          +
        </span>

        New workspace
      </button>

      {/* Decorative quote */}
      <div
        className={`absolute bottom-[115px] left-7 right-7 rotate-[-3deg] px-4 py-3 font-serif text-sm italic ${
          darkMode
            ? "bg-[#3d372f] text-[#dfcdb4]"
            : "bg-[#e7d6b4] text-[#65543d]"
        }`}
      >
        Make space for
        <br />
        good ideas. ✦
      </div>

      {/* User profile */}
      <div
        className={`absolute bottom-6 left-5 right-5 flex items-center gap-3 border-t pt-5 ${
          darkMode
            ? "border-white/10"
            : "border-[#d5cab9]"
        }`}
      >
        <div className="relative">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d47752] text-sm font-medium text-white">
            K
          </div>

          {/* Online */}
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#f4eee4] bg-[#78916f]" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            Khushi
          </p>

          <p className="text-[10px] opacity-40">
            Online · working on Syncra
          </p>
        </div>

        <button className="ml-auto text-sm opacity-40 hover:opacity-100">
          ···
        </button>
      </div>
    </aside>
  );
}