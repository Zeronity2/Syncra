
const activities = [
  {
    name: "Aarav",
    action: "moved API integration to Review",
    time: "2 min ago",
    color: "#829b7c",
  },
  {
    name: "Riya",
    action: "commented on Design system v2",
    time: "8 min ago",
    color: "#a99ab9",
  },
  {
    name: "Khushi",
    action: "created a new task",
    time: "15 min ago",
    color: "#d47752",
  },
];

export default function ActivityPanel({ darkMode }) {
  return (
    <aside
      className={`rounded-3xl border p-5 ${
        darkMode
          ? "border-[#474037] bg-[#24211e]"
          : "border-[#d8cdbd] bg-[#f8f0e5]"
      }`}
    >
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-2xl italic">
          Live now
        </h3>

        <span className="flex items-center gap-1 text-[10px] text-[#829b7c]">
          <span className="h-2 w-2 rounded-full bg-[#829b7c]" />
          Online
        </span>
      </div>

      {/* Avatars */}
      <div className="mt-5 flex -space-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current/10 bg-[#d47752] text-xs text-white">
          K
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current/10 bg-[#829b7c] text-xs text-white">
          A
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current/10 bg-[#a99ab9] text-xs text-white">
          R
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current/10 bg-[#d5b477] text-xs">
          +2
        </div>
      </div>

      <p className="mt-3 text-xs opacity-50">
        5 teammates working together
      </p>

      {/* Divider */}
      <div className="my-6 border-t border-current/10" />

      {/* Activity */}
      <h4 className="text-xs font-semibold uppercase tracking-widest opacity-50">
        Recent activity
      </h4>

      <div className="mt-5 space-y-5">
        {activities.map((activity) => (
          <div key={`${activity.name}-${activity.time}`} className="flex gap-3">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] text-white"
              style={{ backgroundColor: activity.color }}
            >
              {activity.name.charAt(0)}
            </div>

            <div>
              <p className="text-xs leading-5">
                <strong>{activity.name}</strong>{" "}
                <span className="opacity-60">{activity.action}</span>
              </p>

              <p className="mt-1 text-[10px] opacity-40">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div
        className={`mt-8 rotate-[-2deg] p-4 font-serif text-base italic ${
          darkMode
            ? "bg-[#4b4235] text-[#f0ddc3]"
            : "bg-[#e8d4a9] text-[#5d4d39]"
        }`}
      >
        Better together. ♡
      </div>
    </aside>
  );
}