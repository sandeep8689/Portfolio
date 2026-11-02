import { useState } from "react";
import { ArrowRight, Download, GraduationCap, Trophy, Briefcase, Award, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { dsa } from "../data/dsa";
import { education } from "../data/education";
import { resume } from "../data/resume";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import { Reveal } from "./Section";

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  const btech = education.find((e) => e.id === "btech");

  const highlights = [
    { icon: GraduationCap, label: "B.Tech CSE — Final Year", sub: "KG Reddy College" },
    { icon: Award, label: `CGPA: ${btech.score}/10`, sub: "B.Tech CSE" },
    { icon: Trophy, label: `${dsa.total} LeetCode Problems`, sub: `Solved · ${dsa.snapshotLabel}` },
    { icon: Briefcase, label: "Infosys Springboard", sub: "AI Track · Virtual Internship" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-xs text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              {profile.hero.pre} <span className="gradient-text">{profile.hero.highlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{profile.hero.lead}</p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{profile.hero.secondary}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" size="lg">
              Explore My Projects <ArrowRight size={16} />
            </Button>
            <Button href={profile.links.leetcode} variant="outline" size="lg">
              View My LeetCode
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </Reveal>

          <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center gap-5">
            <Button href={resume.file} variant="ghost" size="md" className="-ml-2">
              <Download size={16} /> Download Resume
            </Button>
            <span className="hidden h-5 w-px bg-white/10 sm:block" />
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mx-auto w-full max-w-md">
          <div className="glass overflow-hidden p-3">
            <div className="flex items-center gap-5 rounded-xl bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-blue-600/20 p-4 sm:p-5">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[1.4rem] border border-white/15 bg-gradient-to-br from-violet-600/40 to-blue-600/40 shadow-lg shadow-black/30 sm:h-28 sm:w-28">
                {photoOk ? (
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover object-[50%_18%]"
                    onError={() => setPhotoOk(false)}
                    width={112}
                    height={112}
                  />
                ) : (
                  <div className="grid h-full place-items-center font-heading text-3xl font-bold text-white/90">
                    {profile.initials}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xl font-semibold leading-tight sm:text-2xl">{profile.name}</p>
                <p className="mt-2 flex items-start gap-1.5 font-mono text-xs leading-snug text-slate-400 sm:text-[13px]">
                  <MapPin size={14} className="mt-px shrink-0" /> <span>{profile.location}</span>
                </p>
              </div>
            </div>

            <div
              className="mt-3 overflow-hidden border-y border-white/[0.07] py-3"
              style={{
                WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
                maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
              }}
              aria-label={profile.ticker.join(", ")}
            >
              <div
                className="ticker flex w-max gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400"
                aria-hidden="true"
              >
                {[...profile.ticker, ...profile.ticker].map((t, i) => (
                  <span key={i} className="flex items-center gap-6 whitespace-nowrap">
                    {t} <span className="text-violet-400/70">·</span>
                  </span>
                ))}
              </div>
            </div>

            <ul className="mt-3 grid grid-cols-2 gap-2">
              {highlights.map(({ icon: Icon, label, sub }) => (
                <li key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                  <Icon size={16} className="text-violet-300" />
                  <p className="mt-2 text-[13px] font-medium leading-snug">{label}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{sub}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
