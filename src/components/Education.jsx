import { GraduationCap, MapPin, CalendarDays, School } from "lucide-react";
import { education } from "../data/education";
import { Section, Reveal } from "./Section";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation in Computer Science.">
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
        {education.map((e, i) => (
          <Reveal as="li" key={e.id} delay={i * 0.08} className="relative">
            <span
              className={cn(
                "absolute -left-[31px] top-6 grid h-5 w-5 place-items-center rounded-full border sm:-left-[51px]",
                e.primary ? "border-violet-400 bg-violet-500" : "border-white/30 bg-background"
              )}
              aria-hidden="true"
            />
            <article className={cn("glass p-6 sm:p-7", e.primary && "border-violet-400/20")}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-3 text-violet-300">
                    {e.primary ? <GraduationCap size={20} /> : <School size={20} />}
                    {e.status && <Badge className="border-emerald-400/25 bg-emerald-400/10 text-emerald-200">{e.status}</Badge>}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{e.degree}</h3>
                  <p className="mt-1 text-slate-300">{e.institution}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><MapPin size={14} /> {e.location}</li>
                    <li className="flex items-center gap-2"><CalendarDays size={14} /> {e.duration}</li>
                    {e.affiliation && <li className="pl-[22px]">Affiliated to {e.affiliation}</li>}
                  </ul>
                </div>

                <div
                  className={cn(
                    "shrink-0 rounded-2xl border px-6 py-4 text-center",
                    e.primary ? "border-violet-400/30 bg-violet-500/10" : "border-white/10 bg-white/[0.03]"
                  )}
                >
                  <p className="label-mono">{e.scoreLabel}</p>
                  <p className={cn("mt-1 font-heading font-semibold", e.primary ? "text-4xl gradient-text" : "text-2xl")}>
                    {e.score}
                    {e.scoreOutOf && <span className="ml-1 text-base text-muted-foreground">{e.scoreOutOf}</span>}
                  </p>
                </div>
              </div>

              {e.subjects && (
                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <p className="label-mono mb-3">Relevant subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {e.subjects.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
