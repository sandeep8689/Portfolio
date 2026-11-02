import { ArrowUpRight, Code2, CalendarDays, Flame, Medal, Info, CheckCircle2 } from "lucide-react";
import { dsa, achievements } from "../data/dsa";
import { profile } from "../data/profile";
import { getIcon } from "../lib/icons";
import { Section, Reveal } from "./Section";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import GitHubActivity from "./GitHubActivity";

const difficulties = [
  { key: "easy", label: "Easy", color: "#2dd4bf" },
  { key: "medium", label: "Medium", color: "#fbbf24" },
  { key: "hard", label: "Hard", color: "#fb7185" },
];

function Ring() {
  const r = 70;
  const c = 2 * Math.PI * r;
  const gap = 6;
  let offset = 0;
  return (
    <div className="relative mx-auto h-52 w-52 shrink-0">
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90" role="img" aria-label={`${dsa.total} problems solved: ${dsa.easy} easy, ${dsa.medium} medium, ${dsa.hard} hard`}>
        <circle cx="90" cy="90" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
        {difficulties.map((d) => {
          const len = (dsa[d.key] / dsa.total) * c;
          const seg = (
            <circle
              key={d.key}
              cx="90"
              cy="90"
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${Math.max(len - gap, 0)} ${c}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return seg;
        })}
      </svg>
      <div className="absolute inset-0 grid place-content-center text-center">
        <p className="font-heading text-5xl font-semibold">{dsa.total}</p>
        <p className="mt-1 text-xs text-muted-foreground">problems solved</p>
      </div>
    </div>
  );
}

export default function Dsa() {
  const stats = [
    { icon: CalendarDays, label: "Total active days", value: dsa.activeDays },
    { icon: Flame, label: "Maximum streak", value: `${dsa.maxStreak} days` },
    { icon: Medal, label: "Badges", value: dsa.badges.length },
  ];

  return (
    <Section
      id="dsa"
      eyebrow="DSA & Achievements"
      title="Consistent problem-solving, in Java."
      description="A coding dashboard built from my LeetCode profile snapshot."
    >
      {/* Dashboard */}
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/15 text-amber-300">
                <Code2 size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold">LeetCode</p>
                <p className="font-mono text-xs text-muted-foreground">@{dsa.username}</p>
              </div>
            </div>
            <Badge className="border-amber-400/30 bg-amber-400/10 text-amber-200">{dsa.snapshotLabel}</Badge>
          </div>

          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Ring />
            <ul className="w-full space-y-4">
              {difficulties.map((d) => (
                <li key={d.key}>
                  <div className="mb-1.5 flex items-baseline justify-between text-sm">
                    <span style={{ color: d.color }}>{d.label}</span>
                    <span className="font-mono text-slate-200">{dsa[d.key]}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(dsa[d.key] / dsa.total) * 100}%`, background: d.color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Info size={14} className="mt-0.5 shrink-0" /> {dsa.note}
          </p>
        </Reveal>

        <div className="grid content-start gap-5">
          <div className="grid grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={i * 0.06} className="glass p-4 text-center">
                <Icon size={18} className="mx-auto text-violet-300" />
                <p className="mt-3 font-heading text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="glass p-6">
            <p className="label-mono">Coding approach</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{dsa.approach}</p>
            <Button href={profile.links.leetcode} className="mt-5 w-full sm:w-auto">
              Solve Problems on LeetCode <ArrowUpRight size={16} />
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Topics + activities */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Reveal className="glass p-6">
          <p className="label-mono mb-4">Practice & learning areas</p>
          <ul className="flex flex-wrap gap-2">
            {dsa.topics.map((t) => (
              <li key={t}>
                <Badge className="px-3 py-1.5 text-[13px]">{t}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">Areas I practise and am still learning — not a claim of mastery.</p>
        </Reveal>

        <Reveal className="glass p-6">
          <p className="label-mono mb-4">Problem-solving activities</p>
          <ul className="space-y-2.5">
            {dsa.activities.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-300" /> {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Achievements */}
      <div className="mt-14">
        <Reveal className="mb-5">
          <h3 className="text-xl font-semibold">Coding achievements</h3>
          <p className="mt-1 text-sm text-muted-foreground">Items marked “snapshot” come from my {dsa.snapshotLabel.replace("Snapshot · ", "")} LeetCode profile, not live data.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = getIcon(a.icon);
            return (
              <Reveal key={a.title} delay={(i % 4) * 0.05} className="glass glass-hover p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Icon size={18} />
                  </span>
                  {a.snapshot && (
                    <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200">
                      snapshot
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[15px] font-semibold leading-snug">{a.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>

      <GitHubActivity />
    </Section>
  );
}
