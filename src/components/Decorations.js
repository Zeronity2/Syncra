
export default function Decorations({ darkMode }) {
  const leafColor = darkMode ? "#78816b" : "#8f9b7c";
  const branchColor = darkMode ? "#a2937b" : "#7f765f";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* Subtle paper texture */}
      <div
        className={`absolute inset-0 opacity-20 ${
          darkMode
            ? "bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)]"
            : "bg-[radial-gradient(#756b5b_0.7px,transparent_0.7px)]"
        } [background-size:8px_8px]`}
      />

      {/* Large decorative leaf branch */}
      <svg
        className="absolute -bottom-10 left-0 h-[390px] w-[230px] -rotate-12 opacity-80 md:left-36"
        viewBox="0 0 230 390"
        fill="none"
      >
        <path
          d="M115 390 C105 280 125 150 180 25"
          stroke={branchColor}
          strokeWidth="2"
        />

        <path
          d="M122 310 C65 290 30 245 40 200 C90 215 120 255 122 310Z"
          fill={leafColor}
        />

        <path
          d="M130 260 C185 230 210 185 200 145 C155 165 130 210 130 260Z"
          fill={darkMode ? "#626d58" : "#758565"}
        />

        <path
          d="M145 185 C85 170 60 125 70 85 C115 100 145 140 145 185Z"
          fill={darkMode ? "#69755f" : "#a6b093"}
        />

        <path
          d="M163 115 C190 95 205 55 195 25 C170 40 160 75 163 115Z"
          fill={darkMode ? "#93866d" : "#b3b99e"}
        />
      </svg>

      {/* Small right branch */}
      <svg
        className="absolute right-[-20px] top-44 h-64 w-40 rotate-12 opacity-60"
        viewBox="0 0 140 260"
        fill="none"
      >
        <path
          d="M20 260 C50 190 70 100 100 10"
          stroke={branchColor}
          strokeWidth="2"
        />

        <ellipse
          cx="60"
          cy="160"
          rx="13"
          ry="35"
          transform="rotate(-40 60 160)"
          fill={leafColor}
        />

        <ellipse
          cx="82"
          cy="105"
          rx="13"
          ry="35"
          transform="rotate(40 82 105)"
          fill={leafColor}
        />

        <ellipse
          cx="99"
          cy="55"
          rx="11"
          ry="28"
          transform="rotate(35 99 55)"
          fill={darkMode ? "#9c8d75" : "#b5b79c"}
        />
      </svg>

      {/* Stars */}
      <span
        className={`absolute left-[35%] top-28 text-3xl ${
          darkMode ? "text-[#d7aa83]" : "text-[#b87550]"
        }`}
      >
        ✦
      </span>

      <span
        className={`absolute right-[28%] top-[42%] text-xl ${
          darkMode ? "text-[#d6c49f]" : "text-[#b58d62]"
        }`}
      >
        ✧
      </span>

      {/* Decorative circle */}
      <div
        className={`absolute -right-24 top-24 h-64 w-64 rounded-full border ${
          darkMode ? "border-[#50483d]" : "border-[#c9bba5]"
        }`}
      />

      {/* Tape-style decoration */}
      <div
        className={`absolute left-[43%] top-24 hidden h-8 w-28 rotate-[-8deg] opacity-70 md:block ${
          darkMode ? "bg-[#8a7657]" : "bg-[#d8bd8f]"
        }`}
      />

      {/* Small paper note */}
      <div
        className={`absolute bottom-16 left-[43%] hidden w-40 rotate-[-7deg] p-5 font-serif text-lg italic shadow-md md:block ${
          darkMode
            ? "bg-[#4b4438] text-[#f1dfc7]"
            : "bg-[#e8d4a9] text-[#554838]"
        }`}
      >
        Small steps.
        <br />
        Big ideas. ♡
      </div>
    </div>
  );
}