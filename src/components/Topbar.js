
export default function Topbar({ darkMode, setDarkMode }) {
  return (
    <header
      className={`flex items-center justify-between border-b px-5 py-5 md:px-10 ${
        darkMode ? "border-[#39342e]" : "border-[#d4c9b9]"
      }`}
    >
      {/* Breadcrumb */}
      <div className="text-xs opacity-55 md:text-sm">
        Design Team /{" "}
        <span className="opacity-100">Board</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-4">

        <button className="hidden rounded-full border border-current/20 px-4 py-2 text-xs opacity-70 transition hover:opacity-100 md:block">
          ⌕ Search
        </button>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          className={`flex h-10 w-[76px] items-center rounded-full border p-1 transition ${
            darkMode
              ? "border-[#5c5144] bg-[#39342e]"
              : "border-[#cfc3b3] bg-[#ddd2c1]"
          }`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-sm transition-transform duration-300 ${
              darkMode
                ? "translate-x-9 bg-[#f1dfc8] text-[#292724]"
                : "translate-x-0 bg-white text-[#292724]"
            }`}
          >
            {darkMode ? "☾" : "☀"}
          </span>
        </button>

        {/* Add button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d47752] text-xl text-white shadow-sm transition hover:scale-105">
          +
        </button>
      </div>
    </header>
  );
}