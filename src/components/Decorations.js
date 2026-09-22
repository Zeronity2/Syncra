export default function Decorations({ darkMode }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* ================= PAPER TEXTURE ================= */}

      <div
        className={`absolute inset-0 opacity-[0.18] ${
          darkMode
            ? "bg-[radial-gradient(#fff_0.7px,transparent_0.7px)]"
            : "bg-[radial-gradient(#6f6659_0.7px,transparent_0.7px)]"
        } [background-size:7px_7px]`}
      />

      {/* ================= TOP PAPER SCRAP ================= */}

      <div
        className={`absolute -top-12 left-[32%] hidden h-32 w-[430px] rotate-[-3deg] rounded-[8px] shadow-sm md:block ${
          darkMode ? "bg-[#292622]" : "bg-[#ded4c4]"
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-3 ${
            darkMode ? "bg-[#24211e]" : "bg-[#d4c8b7]"
          }`}
        />
      </div>

      {/* ================= TAPE ================= */}

      <div
        className={`absolute left-[45%] top-[73px] hidden h-8 w-28 rotate-[-7deg] opacity-80 shadow-sm md:block ${
          darkMode ? "bg-[#79684f]" : "bg-[#d9bd8d]"
        }`}
      />

      {/* ================= LEFT BOTANICAL BRANCH ================= */}

      <svg
        className="absolute -bottom-8 left-[-35px] h-[440px] w-[270px] -rotate-[12deg] opacity-80 md:left-[90px]"
        viewBox="0 0 270 440"
        fill="none"
      >
        {/* Branch */}
        <path
          d="M125 440 C110 330 125 205 195 25"
          stroke={darkMode ? "#9a8c73" : "#756b56"}
          strokeWidth="2"
        />

        {/* Leaf 1 */}
        <path
          d="M125 350 C65 330 30 285 40 245 C95 255 125 295 125 350Z"
          fill={darkMode ? "#55604e" : "#929d7b"}
        />

        {/* Leaf 2 */}
        <path
          d="M132 300 C195 270 225 225 215 180 C165 195 135 240 132 300Z"
          fill={darkMode ? "#69755d" : "#7e8c68"}
        />

        {/* Leaf 3 */}
        <path
          d="M145 235 C85 215 60 170 70 130 C120 145 145 185 145 235Z"
          fill={darkMode ? "#59634f" : "#a8b095"}
        />

        {/* Leaf 4 */}
        <path
          d="M160 175 C215 150 235 110 225 72 C180 90 160 130 160 175Z"
          fill={darkMode ? "#747d65" : "#899676"}
        />

        {/* Leaf 5 */}
        <path
          d="M178 105 C145 85 145 45 165 20 C195 42 195 75 178 105Z"
          fill={darkMode ? "#9a8b6f" : "#b3b79a"}
        />
      </svg>

      {/* ================= RIGHT BOTANICAL BRANCH ================= */}

      <svg
        className="absolute right-[-35px] top-[220px] h-[330px] w-[190px] rotate-[14deg] opacity-70"
        viewBox="0 0 190 330"
        fill="none"
      >
        <path
          d="M25 330 C65 245 90 145 135 20"
          stroke={darkMode ? "#95886f" : "#756d59"}
          strokeWidth="2"
        />

        <ellipse
          cx="65"
          cy="240"
          rx="18"
          ry="48"
          transform="rotate(-45 65 240)"
          fill={darkMode ? "#59634f" : "#8f9b7b"}
        />

        <ellipse
          cx="90"
          cy="180"
          rx="17"
          ry="45"
          transform="rotate(42 90 180)"
          fill={darkMode ? "#69755c" : "#7d896c"}
        />

        <ellipse
          cx="110"
          cy="115"
          rx="15"
          ry="40"
          transform="rotate(-35 110 115)"
          fill={darkMode ? "#737e65" : "#a7af91"}
        />

        <ellipse
          cx="130"
          cy="65"
          rx="13"
          ry="34"
          transform="rotate(35 130 65)"
          fill={darkMode ? "#9c8d74" : "#b7b89c"}
        />
      </svg>

      {/* ================= DECORATIVE STARS ================= */}

      <span
        className={`absolute left-[29%] top-[155px] rotate-12 text-3xl ${
          darkMode ? "text-[#d8a67e]" : "text-[#b36f4e]"
        }`}
      >
        ✦
      </span>

      <span
        className={`absolute right-[30%] top-[260px] text-2xl ${
          darkMode ? "text-[#d2bd92]" : "text-[#aa8a62]"
        }`}
      >
        ✧
      </span>

      <span
        className={`absolute left-[55%] bottom-[27%] text-lg ${
          darkMode ? "text-[#c49a76]" : "text-[#a87b5e]"
        }`}
      >
        +
      </span>

      {/* ================= ORGANIC CIRCLE ================= */}

      <div
        className={`absolute -right-28 top-[100px] h-[330px] w-[330px] rounded-full border-[1.5px] ${
          darkMode ? "border-[#4c453c]" : "border-[#c8bba7]"
        }`}
      />

      <div
        className={`absolute -right-16 top-[150px] h-[230px] w-[230px] rounded-full border ${
          darkMode ? "border-[#39342e]" : "border-[#d6cbbb]"
        }`}
      />

      {/* ================= HANDWRITTEN NOTE ================= */}

      <div
        className={`absolute bottom-[70px] left-[38%] hidden w-[175px] rotate-[-6deg] px-6 py-5 font-serif text-lg italic shadow-[3px_6px_15px_rgba(0,0,0,0.12)] md:block ${
          darkMode
            ? "bg-[#494035] text-[#f0dfc8]"
            : "bg-[#e8d4a8] text-[#5b4c38]"
        }`}
      >
        <p>Small steps.</p>
        <p>Big ideas.</p>
        <p>Same team. ♡</p>

        <span className="absolute -right-3 -top-3 text-xl">
          ✦
        </span>
      </div>

      {/* ================= SMALL PAPER CARD ================= */}

      <div
        className={`absolute bottom-[120px] right-[25%] hidden h-[90px] w-[115px] rotate-[7deg] shadow-md md:block ${
          darkMode ? "bg-[#332f29]" : "bg-[#f3eadc]"
        }`}
      >
        <div className="p-4 font-serif text-xs italic opacity-60">
          Ideas are better
          <br />
          when shared.
        </div>
      </div>

      {/* ================= DOODLE ================= */}

      <div
        className={`absolute left-[24%] top-[48%] hidden rotate-[-12deg] font-serif text-2xl md:block ${
          darkMode ? "text-[#817661]" : "text-[#a39279]"
        }`}
      >
        ~~~
      </div>

    </div>
  );
}