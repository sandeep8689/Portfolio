import { Briefcase, CalendarDays, CheckCircle2, ExternalLink, Github, Info, Wifi } from "lucide-react";
import { experience } from "../data/experience";
import { Section, Reveal } from "./Section";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Learning by building, under real project structure.">
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
        {experience.map((x) => (
          <Reveal as="li" key={x.id} className="relative">
            <span
              className="absolute -left-[31px] top-6 h-5 w-5 rounded-full border border-violet-400 bg-violet-500 sm:-left-[51px]"
              aria-hidden="true"
            />
            <article className="glass border-violet-400/20 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-violet-400/30 bg-violet-500/10 text-violet-200">
                  <Briefcase size={12} /> {x.type}
                </Badge>
                <Badge><Wifi size={12} /> {x.mode}</Badge>
                <Badge className="border-emerald-400/25 bg-emerald-400/10 text-emerald-200">Ongoing</Badge>
              </div>

              <h3 className="mt-4 text-2xl font-semibold">{x.role}</h3>
              <p className="mt-1 text-slate-300">
                {x.organisation} · {x.programme}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays size={14} /> {x.duration}
                <span className="text-xs opacity-70">({x.durationNote})</span>
              </p>

              <p className="mt-5 text-[15px] leading-relaxed text-slate-300">{x.description}</p>

              <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5">
                <p className="label-mono">Project</p>
                <p className="mt-1.5 font-heading text-lg font-semibold">{x.project}</p>
                <ul className="mt-4 space-y-2.5">
                  {x.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-300" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {x.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={x.demo}>
                  View Live Project <ExternalLink size={15} />
                </Button>
                <Button href={x.repo} variant="outline">
                  <Github size={16} /> Source Code
                </Button>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
                <Info size={14} className="mt-0.5 shrink-0" /> {x.disclaimer}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
