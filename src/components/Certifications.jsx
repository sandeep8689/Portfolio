import { Award, ExternalLink, CalendarDays, Hash, Info } from "lucide-react";
import { certifications, certificationsNote } from "../data/certifications";
import { Section, Reveal } from "./Section";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials.">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.07} className="glass glass-hover flex flex-col p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                <Award size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-0.5 text-sm text-slate-300">{c.issuer}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Hash size={14} /> {c.credentialId}</li>
              <li className="flex items-center gap-2">
                <CalendarDays size={14} /> {c.date ?? "Completion date: add from certificate"}
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.skills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            <div className="mt-auto pt-5">
              {c.verifyUrl ? (
                <Button href={c.verifyUrl} size="sm" variant="outline">
                  Verify Certificate <ExternalLink size={13} />
                </Button>
              ) : (
                <p className="text-xs text-muted-foreground">Verification link not added yet.</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
        <Info size={14} className="mt-0.5 shrink-0" /> {certificationsNote}
      </p>
    </Section>
  );
}
