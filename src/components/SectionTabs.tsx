import { SectionId } from "./PortfolioFolder";
import { LucideIcon } from "lucide-react";

type Section = {
  id: string;
  label: string;
  color: string;
  icon: LucideIcon;
};

type SectionTabsProps = {
  sections: Section[];
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
};

export default function SectionTabs({
  sections,
  activeSection,
  setActiveSection,
}: SectionTabsProps) {
  return (
    <nav className="absolute left-1/2 top-0 z-[100] flex w-full -translate-x-1/2 -translate-y-full items-end justify-start gap-0 overflow-x-auto px-1 sm:w-auto sm:justify-center sm:overflow-visible sm:px-0">
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() =>
              setActiveSection(
                activeSection === section.id ? "home" : (section.id as SectionId)
              )
            }
            className={`${section.color} ${
              isActive
                ? "-translate-y-2 shadow-xl"
                : "translate-y-0 hover:-translate-y-1"
            } flex shrink-0 items-center justify-center gap-1 rounded-t-lg border-r border-white/60 px-3 py-3 text-xs font-black uppercase tracking-wide text-slate-950 shadow-md transition-all duration-200 last:border-r-0 sm:gap-2 sm:px-5 sm:py-3 sm:text-base`}
          >
            <Icon size={15} className="sm:h-[17px] sm:w-[17px]" />
            {section.label}
          </button>
        );
      })}
    </nav>
  );
}