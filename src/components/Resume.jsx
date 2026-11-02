import { Download, FileText } from "lucide-react";
import { resume } from "../data/resume";
import { education } from "../data/education";
import { skillCategories } from "../data/skills";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { dsa } from "../data/dsa";
import { Section, Reveal } from "./Section";
import { Button } from "./ui/button";

function Block({ title, children }) {
  return (
    <div>
      <p className="label-mono mb-2">{title}</p>
      <div className="text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}

export default function Resume() {
  const x = experience[0];
  const topSkills = skillCategories
    .flatMap((c) => c.items)
    .filter((i) => i.level === "Practising" || i.level === "Project Experience")
    .map((i) => i.name);
  const uniqueSkills = [...new Set(topSkills)].join(" · ");

  return (
    <Section id="resume" eyebrow="Resume" title="A one-page summary for recruiters.">
      <Reveal className="glass p-6 sm:p-8">
        <div className="flex flex-col gap-4 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
              <FileText size={20} />
            </span>
            <div>
              <p className="font-semibold">Badavath Sandeep — Resume</p>
              <p className="text-xs text-muted-foreground">PDF · opens in a new tab</p>
            </div>
          </div>
          <Button href={resume.file}>
            <Download size={16} /> Download Resume
          </Button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Block title="Professional summary">{resume.summary}</Block>
          <Block title="Education">
            <ul className="space-y-1.5">
              {education.map((e) => (
                <li key={e.id}>
                  {e.degree.replace("Bachelor of Technology — ", "B.Tech ")} · {e.institution.split(" (")[0]} · {e.duration} · {e.scoreLabel} {e.score}
                  {e.scoreOutOf ? "/10" : ""}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Technical skills">{uniqueSkills}</Block>
          <Block title="Infosys Springboard AI internship">
            {x.role} ({x.type}), {x.duration}. Project: {x.project}.
          </Block>
          <Block title="Selected projects">
            {projects
              .filter((p) => p.repo || p.demo || p.onGithub)
              .map((p) => p.title)
              .join(" · ")}
          </Block>
          <Block title="Certifications">{certifications.map((c) => `${c.title} (${c.issuer})`).join(" · ")}</Block>
          <Block title="Coding achievements">
            {dsa.total} LeetCode problems solved, {dsa.activeDays} active days, {dsa.maxStreak}-day max streak ({dsa.snapshotLabel.replace("Snapshot · ", "")} snapshot).
          </Block>
        </div>
      </Reveal>
    </Section>
  );
}
