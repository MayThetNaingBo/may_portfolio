import { Download, ExternalLink, Mail, Phone } from "lucide-react";
import { personalInfo } from "../library/constants";

const contactLinks = [
  {
    label: "Email Me",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: ExternalLink,
  },
  {
    label: "Download Resume",
    href: personalInfo.resumeUrl,
    icon: Download,
  },
  {
    label: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
  },
];

export default function ContactLinks() {
  return (
    <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
      {contactLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-3xl bg-white/80 p-4 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 sm:text-base"
          >
            {/* running shine effect */}
            <span className="absolute inset-y-0 left-[-75%] w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-700 group-hover:left-[125%]" />

            {/* soft background color on hover */}
            <span className="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-sky-50/80" />

            <span className="relative z-10 flex min-w-0 items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
              <span className="break-words">{link.label}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}