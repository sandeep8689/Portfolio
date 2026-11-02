import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/utils";

export function Reveal({ children, delay = 0, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  if (reduce) return <Tag className={className}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}

export function Section({ id, eyebrow, title, description, children, className }) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="container-x">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          {eyebrow && <p className="label-mono mb-3">{eyebrow}</p>}
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
