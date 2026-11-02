import { Sparkles } from "lucide-react";
import { about } from "../data/about";
import { dsa } from "../data/dsa";
import { getIcon } from "../lib/icons";
import { Section, Reveal } from "./Section";
import { Badge } from "./ui/badge";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering fundamentals, applied to real AI problems.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="glass space-y-4 p-6 sm:p-8">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-slate-300">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {about.interests.map((i) => (
              <Badge key={i}>{i}</Badge>
            ))}
          </div>
        </Reveal>

        <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {about.highlights.map((h, i) => {
            const Icon = getIcon(h.icon);
            const label = h.dsaTotal ? `${dsa.total} Problems Solved on LeetCode` : h.label;
            return (
              <Reveal key={h.label} delay={i * 0.06} className="glass glass-hover flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium leading-snug">{label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal className="mt-6 flex items-start gap-4 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/[0.10] to-blue-500/[0.08] p-5 sm:items-center sm:p-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-violet-200">
          <Sparkles size={20} />
        </span>
        <div>
          <p className="label-mono">{about.sapBanner.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{about.sapBanner.text}</p>
        </div>
      </Reveal>
    </Section>
  );
}
