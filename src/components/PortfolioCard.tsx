"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionId } from "./PortfolioFolder";
import { personalInfo } from "../library/constants";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";
import ProjectCard from "./ProjectCard";
import ContactLinks from "./ContactLinks";

type PortfolioCardProps = {
  cardId: SectionId;
  activeSection: SectionId;
  index?: number;
  color?: string;
  label?: string;
};

export default function PortfolioCard({
  cardId,
  activeSection,
  index = 0,
  color = "bg-white",
  label = "Home",
}: PortfolioCardProps) {
  const isHomeCard = cardId === "home";
  const isActive = activeSection === cardId;

  return (
    <motion.section
      className={`absolute left-1/2 top-0 w-[94%] overflow-hidden rounded-2xl border border-slate-200 shadow-2xl sm:w-[92%] ${
        isHomeCard
          ? "h-[410px] bg-[#dfe9e4] sm:h-[430px]"
          : `h-[410px] sm:h-[430px] ${color}`
      }`}
      initial={false}
      animate={{
        x: isActive ? ["-50%", "calc(-50% - 55px)", "-50%"] : "-50%",

        y: isActive ? [0, -90, 0] : 0,

        rotate: isActive ? [0, -6, 0] : 0,

        scale: isActive ? [1, 1.06, 1] : 1,

        opacity: 1,

        zIndex: isActive ? 90 : isHomeCard ? 60 : 5,
      }}
      transition={{
        duration: isActive ? 0.38 : 0.2,
        times: isActive ? [0, 0.45, 1] : undefined,
        ease: "easeOut",
      }}
      style={{
        pointerEvents: isHomeCard || isActive ? "auto" : "none",
        transformOrigin: "left center",
      }}
    >
      {!isHomeCard && (
        <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/85 px-4 py-3 backdrop-blur sm:px-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 sm:text-sm sm:tracking-[0.25em]">
            {label}
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">
            Click tab again to close
          </p>
        </div>
      )}

      <div
        className={`h-full ${
          isHomeCard
            ? "bg-[#dfe9e4] p-2"
            : "overflow-y-auto bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:24px_24px] bg-white/90 px-4 pt-5 pb-28 sm:bg-[size:28px_28px] sm:px-6 sm:pt-6 sm:pb-32 md:px-8 md:pt-8 md:pb-36"
        }`}
      >
        {cardId === "home" && <HomeSection />}
        {cardId === "about" && <AboutSection />}
        {cardId === "skills" && <SkillsSection />}
        {cardId === "projects" && <ProjectsSection />}
        {cardId === "contact" && <ContactSection />}
      </div>
    </motion.section>
  );
}

function HomeSection() {
  return (
    <div className="relative h-full bg-[#dfe9e4]">
      {/* Portfolio tag */}
      <div className="absolute left-5 top-8 rotate-[-6deg] rounded-xl bg-white px-4 py-3 shadow-md sm:left-12 sm:top-12 sm:px-6 sm:py-4">
        <p className="text-lg font-black tracking-tight text-slate-950 sm:text-2xl">
          May&apos;s Portfolio
        </p>
      </div>

      {/* Profile photo */}
      <div className="absolute right-4 top-24 rotate-[7deg] rounded-2xl bg-white p-2 shadow-xl sm:right-16 sm:top-14 sm:p-3">
        <div className="relative h-36 w-52 overflow-hidden rounded-xl bg-slate-100 sm:h-48 sm:w-72">
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tape decorations */}
        <div className="absolute -right-4 top-7 h-10 w-6 rotate-[-25deg] bg-white/70 shadow-sm sm:-right-5 sm:top-8 sm:h-14 sm:w-8" />
        <div className="absolute -left-4 bottom-8 h-10 w-6 rotate-[-25deg] bg-white/70 shadow-sm sm:-left-5 sm:bottom-10 sm:h-14 sm:w-8" />
      </div>

      {/* Stamp */}
      <div className="absolute bottom-20 left-5 rotate-[-8deg] sm:bottom-20 sm:left-20">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-red-700 text-center text-red-700 shadow-sm sm:h-40 sm:w-40 sm:border-[6px]">
          <div className="flex h-22 w-22 flex-col items-center justify-center rounded-full border-2 border-red-700 px-2 sm:h-32 sm:w-32 sm:px-3">
            <p className="text-[8px] font-black uppercase tracking-[0.1em] sm:text-[10px] sm:tracking-[0.12em]">
              IT Graduate
            </p>

            <div className="my-1.5 h-[1.5px] w-14 bg-red-700 sm:my-2 sm:w-20" />

            <p className="text-[20px] font-black uppercase leading-none tracking-normal sm:text-[26px]">
              Ready
            </p>

            <div className="my-1.5 h-[1.5px] w-14 bg-red-700 sm:my-2 sm:w-20" />

            <p className="text-[8px] font-black uppercase leading-tight tracking-[0.08em] sm:text-[10px] sm:tracking-[0.1em]">
              Full-Time
              <br />
              Role
            </p>
          </div>
        </div>
      </div>

      {/* Instruction */}
      <div className="absolute bottom-10 right-4 rotate-[7deg] rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm sm:right-20 sm:px-5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 sm:text-xs sm:tracking-[0.28em]">
          Click a tab to open
        </p>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-[1.5fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 sm:text-sm sm:tracking-[0.35em]">
            Who am I?
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            {personalInfo.name}
          </h2>

          <p className="mt-2 text-lg font-semibold text-slate-700 sm:text-xl">
            {personalInfo.shortTitle}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <b>Hey there, welcome to my portfolio!</b>
            <br />
            I’m an Information Technology graduate from Temasek Polytechnic who
            enjoys building practical web, mobile, cloud, and software projects.
            I love turning ideas into working applications and learning through
            hands-on projects. My goal is to create software that is not only
            functional, but also useful and easy to use. I’m currently looking
            for a full-time IT or software development opportunity where I can
            apply my skills, learn from real-world experience, and continue
            growing as a developer.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-sm sm:p-5">
            <p className="font-bold text-slate-900">Portfolio Focus</p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              Full-stack applications, cloud-based ideas, mobile apps,
              blockchain, IoT concepts, and practical systems that solve real
              problems.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-8 border-white shadow-xl sm:h-64 sm:w-64">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 sm:text-sm sm:tracking-[0.35em]">
          Education
        </p>

        <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
          Education
        </h3>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-lg font-black text-slate-950 sm:text-xl">
                Temasek Polytechnic
              </h4>

              <p className="text-sm font-black text-slate-600">Singapore</p>

              <p className="mt-1 text-sm font-bold text-sky-700 sm:text-base">
                Diploma in Information Technology
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 sm:text-sm">
              2023 - 2026
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 sm:text-sm sm:tracking-[0.35em]">
          Work Experience
        </p>

        <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
          Experience
        </h3>

        <div className="mt-6 space-y-5">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-sm sm:p-5"
            >
              <h4 className="text-lg font-black text-slate-950 sm:text-xl">
                {experience.role}
              </h4>

              <p className="mt-1 text-sm font-bold text-sky-700 sm:text-base">
                {experience.company}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
                {experience.location} · {experience.period}
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 sm:text-base">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-600 sm:text-sm sm:tracking-[0.35em]">
        My toolbox
      </p>

      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
        Technical Skills
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-sm sm:p-5"
          >
            <h3 className="text-base font-black text-slate-900 sm:text-lg">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-600 sm:text-sm sm:tracking-[0.35em]">
        Selected work
      </p>

    

      <h2 className="mt-3 text-center text-3xl font-black text-slate-950 sm:text-4xl">
        Projects and Creations
      </h2>

      <div className="mx-auto mt-6 h-px w-full max-w-3xl bg-slate-300" />

      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-rose-600 sm:text-sm sm:tracking-[0.35em]">
        Let&apos;s connect
      </p>

      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
        Contact
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
        I am open to full-time IT and software development opportunities. Feel
        free to contact me or view my work online.
      </p>

      <ContactLinks />
    </div>
  );
}