export default function Topbar({ darkMode, setDarkMode }) {
  return (
    <header
      className={`relative z-20 flex h-[72px] items-center justify-between border-b px-5 md:px-10 ${
        darkMode
          ? "border-white/10 bg-[#171614]/70"
          : "border-[#d8cdbd] bg-[#f4eee4]/70"
      } backdrop-blur-xl`}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs md:text-sm">
        <span className="opacity-45">
          Design Team
        </span>

        <span className="opacity-25">/</span>

        <span className="font-medium">
          Board
        </span>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2 md:gap-3">

        {/* Search */}
        <button
          className={`hidden h-10 items-center gap-3 rounded-full border px-4 text-xs transition md:flex ${
            darkMode
              ? "border-white/10 bg-white/5 hover:bg-white/10"
              : "border-[#d4c9b9] bg-white/40 hover:bg-white/70"
          }`}
        >
          <span className="text-sm opacity-60">⌕</span>

          <span className="opacity-55">
            Find anything...
          </span>

          <kbd
            className={`ml-4 rounded-md px-1.5 py-0.5 text-[9px] ${
              darkMode
                ? "bg-white/10"
                : "bg-black/5"
            }`}
          >
            ⌘ K
          </kbd>
        </button>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className={`relative flex h-10 w-[82px] items-center rounded-full border p-1 transition-all duration-500 ${
            darkMode
              ? "border-[#5b5043] bg-[#332f29]"
              : "border-[#cec2b1] bg-[#ded3c2]"
          }`}
        >
          {/* Icons */}
          <span className="absolute left-3 text-xs">
            ☀
          </span>

          <span className="absolute right-3 text-xs">
            ☾
          </span>

          {/* Sliding circle */}
          <span
            className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-transform duration-500 ${
              darkMode
                ? "translate-x-10 bg-[#f1dfc8] text-[#292724]"
                : "translate-x-0 bg-white text-[#292724]"
            }`}
          >
            {darkMode ? "☾" : "☀"}
          </span>
        </button>

        {/* Notification */}
        <button
          className={`relative hidden h-10 w-10 items-center justify-center rounded-full border text-sm md:flex ${
            darkMode
              ? "border-white/10 bg-white/5"
              : "border-[#d4c9b9] bg-white/40"
          }`}
        >
          ♡

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d47752]" />
        </button>

        {/* Create */}
        <button className="flex h-10 items-center gap-2 rounded-full bg-[#d47752] px-4 text-xs font-medium text-white shadow-sm transition duration-200 hover:scale-105 hover:bg-[#c66b49]">
          <span className="text-base">+</span>

          <span className="hidden sm:block">
            Create
          </span>
        </button>

      </div>
    </header>
  );
}