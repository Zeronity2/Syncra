const activities = [
  {
    name: "Aarav",
    initial: "A",
    color: "#829b7c",
    action: "moved",
    task: "API integration",
    time: "2 min ago",
  },
  {
    name: "Riya",
    initial: "R",
    color: "#9b89ad",
    action: "commented on",
    task: "Design system v2",
    time: "8 min ago",
  },
  {
    name: "Khushi",
    initial: "K",
    color: "#d47752",
    action: "created",
    task: "Mobile app concept",
    time: "15 min ago",
  },
];

const members = [
  { initial: "K", color: "#d47752" },
  { initial: "A", color: "#829b7c" },
  { initial: "R", color: "#9b89ad" },
  { initial: "M", color: "#c5a56d" },
];

export default function ActivityPanel({ darkMode }) {
  return (
    <aside className="space-y-5">

      {/* ================= LIVE NOW ================= */}

      <section
        className={`rounded-[24px] border p-5 ${
          darkMode
            ? "border-white/10 bg-[#211f1c]"
            : "border-[#d8cdbd] bg-[#f8f1e7]"
        }`}
      >
        {/* Heading */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">
              Collaboration
            </p>

            <h3 className="mt-1 font-serif text-2xl italic">
              Live now
            </h3>
          </div>

          <span className="flex items-center gap-1.5 rounded-full bg-[#78916f]/10 px-2.5 py-1 text-[9px] text-[#78916f]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#78916f]" />
            5 online
          </span>
        </div>

        {/* Members */}
        <div className="mt-6 flex items-center">

          <div className="flex -space-x-3">
            {members.map((member) => (
              <div
                key={member.initial}
                className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs text-white ${
                  darkMode
                    ? "border-[#211f1c]"
                    : "border-[#f8f1e7]"
                }`}
                style={{ backgroundColor: member.color }}
              >
                {member.initial}

                {/* Online dot */}
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-current bg-[#78916f]" />
              </div>
            ))}

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-[10px] ${
                darkMode
                  ? "border-[#211f1c] bg-[#35312c]"
                  : "border-[#f8f1e7] bg-[#e4dbcf]"
              }`}
            >
              +1
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 opacity-50">
          Your team is actively working across
          <span className="font-medium opacity-100">
            {" "}Design Team.
          </span>
        </p>

        {/* Current activity */}
        <div
          className={`mt-5 rounded-2xl p-4 ${
            darkMode
              ? "bg-white/5"
              : "bg-[#eee5d9]"
          }`}
        >
          <div className="flex items-start gap-3">

            <div className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#829b7c] text-[10px] text-white">
                A
              </div>

              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#eee5d9] bg-[#78916f]" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] leading-5">
                <strong>Aarav</strong>{" "}
                <span className="opacity-50">
                  is working on
                </span>
              </p>

              <p className="mt-1 truncate text-xs font-medium">
                API integration
              </p>

              <p className="mt-1 text-[9px] opacity-40">
                In Review · just now
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECENT ACTIVITY ================= */}

      <section
        className={`rounded-[24px] border p-5 ${
          darkMode
            ? "border-white/10 bg-[#211f1c]"
            : "border-[#d8cdbd] bg-[#f8f1e7]"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl italic">
            Recent activity
          </h3>

          <button className="text-[9px] opacity-40 transition hover:opacity-100">
            View all →
          </button>
        </div>

        <div className="mt-5 space-y-5">
          {activities.map((activity) => (
            <div
              key={`${activity.name}-${activity.time}`}
              className="flex gap-3"
            >
              {/* Avatar */}
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[9px] text-white"
                style={{
                  backgroundColor: activity.color,
                }}
              >
                {activity.initial}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-[10px] leading-5">
                  <strong>{activity.name}</strong>{" "}
                  <span className="opacity-50">
                    {activity.action}
                  </span>
                </p>

                <p className="truncate text-[10px] font-medium">
                  {activity.task}
                </p>

                <p className="mt-0.5 text-[9px] opacity-35">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HANDWRITTEN NOTE ================= */}

      <div
        className={`relative rotate-[2deg] px-6 py-5 shadow-[3px_7px_18px_rgba(50,40,30,0.12)] ${
          darkMode
            ? "bg-[#4b4235] text-[#f0dfc8]"
            : "bg-[#e8d4a8] text-[#5b4c38]"
        }`}
      >
        {/* Tape */}
        <div
          className={`absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] ${
            darkMode
              ? "bg-[#806e52]"
              : "bg-[#d8bd8d]"
          }`}
        />

        <p className="font-serif text-lg italic">
          Better together.
        </p>

        <p className="mt-1 text-[10px] opacity-60">
          Every idea gets a chance to become something.
        </p>

        <span className="absolute bottom-3 right-4 text-lg">
          ♡
        </span>
      </div>
    </aside>
  );
}