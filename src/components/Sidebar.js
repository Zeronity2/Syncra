
export default function Sidebar({ darkMode }) {
  return (
    <aside
      className={`relative hidden w-[245px] shrink-0 border-r px-6 py-8 lg:block ${
        darkMode
          ? "border-[#39342e] bg-[#1c1b19]"
          : "border-[#d4c9b9] bg-[#f4eee4]"
      }`}
    >
      {/* Logo */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl italic tracking-tight">
          syncra<span className="text-[#d47752]">.</span>
        </h1>

        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] opacity-45">
          work together
        </p>
      </div>

      {/* Main navigation */}
      <nav className="space-y-2 text-sm">
        <div className="rounded-xl bg-[#d47752] px-4 py-3 text-white shadow-sm">
          <span className="mr-3">⌂</span>
          Home
        </div>

        <div className="rounded-xl px-4 py-3 opacity-60 transition hover:bg-white/10">
          <span className="mr-3">✦</span>
          My Tasks
        </div>

        <div className="rounded-xl px-4 py-3 opacity-60 transition hover:bg-white/10">
          <span className="mr-3">✉</span>
          Inbox

          <span className="float-right rounded-full bg-[#d47752] px-2 py-0.5 text-[10px] text-white">
            3
          </span>
        </div>

        <div className="rounded-xl px-4 py-3 opacity-60 transition hover:bg-white/10">
          <span className="mr-3">⌁</span>
          Analytics
        </div>
      </nav>

      {/* Workspaces */}
      <div className="mt-12">
        <p className="mb-4 px-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
          Workspaces
        </p>

        <div className="rounded-xl bg-current/5 px-4 py-3 text-sm">
          <span className="mr-2">✦</span>
          Design Team
        </div>

        <div className="px-4 py-3 text-sm opacity-60">
          <span className="mr-2">✦</span>
          Dev Squad
        </div>

        <div className="px-4 py-3 text-sm opacity-60">
          <span className="mr-2">✦</span>
          Product
        </div>

        <button className="mt-3 px-4 text-sm opacity-50 hover:opacity-100">
          + New workspace
        </button>
      </div>

      {/* User profile */}
      <div className="absolute bottom-8 left-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d47752] text-sm text-white">
          K
        </div>

        <div>
          <p className="text-sm font-medium">Khushi ✦</p>
          <p className="text-xs opacity-45">Keep going ♡</p>
        </div>
      </div>
    </aside>
  );
}