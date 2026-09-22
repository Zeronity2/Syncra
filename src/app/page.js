
"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import KanbanBoard from "@/components/KanbanBoard";
import ActivityPanel from "@/components/ActivityPanel";
import Decorations from "@/components/Decorations";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#151412] text-[#f5eee3]"
          : "bg-[#eee7db] text-[#292724]"
      }`}
    >
      {/* Background decorations */}
      <Decorations darkMode={darkMode} />

      {/* Main layout */}
      <div className="relative z-10 flex min-h-screen">

        <Sidebar darkMode={darkMode} />

        <section className="min-w-0 flex-1">
          <Topbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <div className="px-5 py-8 md:px-10">

            {/* Workspace header */}
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-2 font-serif text-sm italic opacity-55">
                  Tuesday, September 22
                </p>

                <h2 className="font-serif text-5xl tracking-tight md:text-6xl">
                  Good Evening, Khushi ✨
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-6 opacity-60">
                  A shared space for ideas, progress and everything
                  in between.
                </p>
              </div>

              <button className="rounded-full bg-[#d47752] px-6 py-3 text-sm text-white shadow-sm transition hover:scale-105">
                + Invite
              </button>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex gap-7 border-b border-current/15 pb-4 text-sm">
              <button className="border-b-2 border-current pb-4 font-medium">
                ◈ Board
              </button>

              <button className="opacity-45">
                ☷ Timeline
              </button>

              <button className="opacity-45">
                ▣ Calendar
              </button>

              <button className="opacity-45">
                ⌁ Analytics
              </button>
            </div>

            {/* Board + activity */}
            <div className="grid gap-8 2xl:grid-cols-[1fr_280px]">

              <KanbanBoard darkMode={darkMode} />

              <ActivityPanel darkMode={darkMode} />

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}