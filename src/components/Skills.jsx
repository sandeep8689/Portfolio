import { skillCategories, skillLevels } from "../data/skills";
import { getIcon } from "../lib/icons";
import { Section, Reveal } from "./Section";
import { cn } from "../lib/utils";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Tools and technologies I work with."
      description="Labels describe honest experience levels — no inflated percentages."
    >
      <Reveal className="mb-8 flex flex-wrap gap-2" aria-label="Skill level legend">
        {Object.entries(skillLevels).map(([level, style]) => (
          <span key={level} className={cn("rounded-full border px-3 py-1 text-xs", style)}>
            {level}
          </span>
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = getIcon(cat.icon);
          return (
            <Reveal key={cat.id} delay={(i % 3) * 0.06} className="glass glass-hover p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon size={19} />
                </span>
                <h3 className="text-base font-semibold">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    title={item.level}
                    className={cn("rounded-lg border px-2.5 py-1.5 text-[13px]", skillLevels[item.level])}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
