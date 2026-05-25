import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/85 p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-3">
      {project.imageUrl && (
       <div className="relative mb-5 h-48 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:h-72">
          <Image
            src={project.imageUrl}
            alt={`${project.name} project screenshot`}
            fill
            className="object-contain"
          />
        </div>
      )}

      <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-600 sm:text-sm sm:tracking-[0.25em]">
        {project.category}
      </p>

      <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
        {project.name}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-700 sm:mt-5 sm:text-lg sm:leading-8">
        {project.description}
      </p>

      {project.highlights.length > 0 && (
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
        {project.liveUrl && project.liveUrl !== "#" && (
          <p className="flex items-start gap-2">
            <ExternalLink size={18} className="mt-1 shrink-0" />
            <span>
              Try a live demo of this project:{" "}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600 underline underline-offset-4 hover:text-pink-600"
              >
                {project.name}
              </a>
            </span>
          </p>
        )}

        {project.githubUrl && project.githubUrl !== "#" && (
          <p className="flex items-start gap-2">
            <ExternalLink size={18} className="mt-1 shrink-0" />
            <span>
              View the source code:{" "}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600 underline underline-offset-4 hover:text-pink-600"
              >
                GitHub
              </a>
            </span>
          </p>
        )}

        {project.frontendUrl && (
          <p className="flex items-start gap-2">
            <ExternalLink size={18} className="mt-1 shrink-0" />
            <span>
              View the source code for the Frontend:{" "}
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600 underline underline-offset-4 hover:text-pink-600"
              >
                GitHub
              </a>
            </span>
          </p>
        )}

        {project.backendUrl && (
          <p className="flex items-start gap-2">
            <ExternalLink size={18} className="mt-1 shrink-0" />
            <span>
              View the source code for the Backend:{" "}
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600 underline underline-offset-4 hover:text-pink-600"
              >
                GitHub
              </a>
            </span>
          </p>
        )}

        {project.reportUrl && (
          <p className="flex items-start gap-2">
            <FileText size={18} className="mt-1 shrink-0" />
            <span>
              Read the analysis and documentation:{" "}
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600 underline underline-offset-4 hover:text-pink-600"
              >
                Project Report
              </a>
            </span>
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 sm:px-4 sm:py-2 sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}