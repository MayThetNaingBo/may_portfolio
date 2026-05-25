"use client";

import { useState } from "react";
import { Mail, UserRound, Code2, FolderKanban, Briefcase } from "lucide-react";
import SectionTabs from "./SectionTabs";
import PortfolioCard from "./PortfolioCard";


const sections = [
  {
    id: "about",
    label: "About",
    color: "bg-sky-300",
    icon: UserRound,
  },
  {
    id: "skills",
    label: "Skills",
    color: "bg-emerald-300",
    icon: Code2,
  },
  {
    id: "projects",
    label: "Projects",
    color: "bg-amber-300",
    icon: FolderKanban,
  },
  
  {
    id: "contact",
    label: "Contact",
    color: "bg-rose-300",
    icon: Mail,
  },
];

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"

  | "contact";

export default function PortfolioFolder() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#edf7fb] px-3 py-6 text-slate-900 sm:px-4">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl items-center justify-center">
        <div className="relative w-full pt-16 sm:pt-12">
          <div className="relative mx-auto h-[500px] w-full max-w-4xl sm:h-[520px]">
            {/* Tabs attached to the top edge of the home card */}
            <SectionTabs
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            {/* Back paper effect */}
            <div className="absolute left-3 top-6 z-0 h-[410px] w-[92%] rotate-[-2deg] rounded-xl bg-white shadow-md sm:left-6 sm:top-8 sm:h-[430px] sm:w-[90%]" />

            {/* Hidden section cards behind home */}
            {sections.map((section, index) => (
              <PortfolioCard
                key={section.id}
                cardId={section.id as SectionId}
                activeSection={activeSection}
                index={index}
                color={section.color}
                label={section.label}
              />
            ))}

            {/* Home cover card */}
            <PortfolioCard cardId="home" activeSection={activeSection} />
          </div>
        </div>
      </section>
    </main>
  );
}