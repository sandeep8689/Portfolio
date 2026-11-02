import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Info, FolderGit2 } from "lucide-react";
import { projects, projectFilters } from "../data/projects";
import { profile } from "../data/profile";
import { getIcon } from "../lib/icons";
import { cn } from "../lib/utils";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const tones = {
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  repo: "border-blue-400/30 bg-blue-400/10 text-blue-200",
  prototype: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  concept: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  private: "border-slate-400/25 bg-slate-400/10 text-slate-200",
};

function ProjectCard({ p }) {
  const Icon = getIcon(p.icon);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass glass-hover flex flex-col p-6",
        p.featured && "border-violet-400/25 bg-gradient-to-br from-violet-500/[0.08] to-blue-500/[0.05] md:col-span-2"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
          <Icon size={20} />
        </span>
        <div className="flex flex-wrap justify-end gap-2">
          {p.featured && (
            <Badge className="border-violet-400/40 bg-violet-500/20 text-violet-100">Featured</Badge>
          )}
          <span className={cn("rounded-full border px-2.5 py-1 text-xs", tones[p.status.tone])}>{p.status.label}</span>
        </div>
      </div>

      <h3 className={cn("mt-4 font-semibold", p.featured ? "text-2xl" : "text-lg")}>{p.title}</h3>
      <p className="mt-1.5 flex flex-wrap gap-x-2 text-xs text-muted-foreground">
        {p.categories.map((c) => (
          <span key={c}>#{c.replace(/\s+/g, "")}</span>
        ))}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.description}</p>
      {p.detail && <p className="mt-2 text-sm text-slate-300">{p.detail}</p>}

      {p.features && (
        <ul className={cn("mt-4 gap-x-6 gap-y-1.5 text-sm text-slate-300", p.featured ? "grid sm:grid-cols-2" : "space-y-1.5")}>
          {p.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-slate-300">
            {t}
          </span>
        ))}
      </div>

      {p.disclaimer && (
        <p className="mt-4 flex items-start gap-2 rounded-lg border border-amber-400/20 bg-amber-400/[0.06] p-3 text-xs leading-relaxed text-amber-100/90">
          <Info size={14} className="mt-0.5 shrink-0" /> {p.disclaimer}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        {p.demo && (
          <Button href={p.demo} size="sm">
            Live Demo <ExternalLink size={13} />
          </Button>
        )}
        {p.repo && (
          <Button href={p.repo} size="sm" variant="outline">
            <Github size={14} /> GitHub
          </Button>
        )}
        {!p.repo && p.onGithub && (
          <>
            <Button href={profile.links.github} size="sm" variant="outline">
              <Github size={14} /> GitHub Profile
            </Button>
            <span className="text-xs text-muted-foreground">Find it in my public repositories</span>
          </>
        )}
        {!p.repo && !p.onGithub && (
          <span className="text-xs text-muted-foreground">
            {p.repoNote || (p.status.tone === "concept" ? "Concept — no repository yet" : "Source code not published")}
          </span>
        )}
        {!p.demo && (p.repo || p.onGithub) && <span className="text-xs text-muted-foreground">No live demo yet</span>}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const counts = useMemo(() => {
    const c = { All: projects.length };
    projectFilters.slice(1).forEach((f) => (c[f] = projects.filter((p) => p.categories.includes(f)).length));
    return c;
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="Every card is labelled with its real status — working, repository available, or concept. Links appear only where they exist."
    >
      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const disabled = counts[f] === 0;
          const on = filter === f;
          return (
            <button
              key={f}
              type="button"
              disabled={disabled}
              aria-pressed={on}
              onClick={() => setFilter(f)}
              title={disabled ? "No projects in this category yet" : undefined}
              className={cn(
                "rounded-full border px-4 py-2 text-[13px] transition-all disabled:cursor-not-allowed disabled:opacity-35",
                on
                  ? "border-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:text-white"
              )}
            >
              {f} <span className="ml-1 text-[11px] opacity-70">{counts[f]}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <p className="glass mt-4 flex items-center gap-3 p-6 text-sm text-muted-foreground">
          <FolderGit2 size={18} /> No projects in this category yet.
        </p>
      )}
    </Section>
  );
}
