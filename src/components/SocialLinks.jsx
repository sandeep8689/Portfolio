import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "../data/profile";
import { cn } from "../lib/utils";

const items = [
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "LeetCode", href: profile.links.leetcode, icon: Code2 },
];

export default function SocialLinks({ withEmail = false, className }) {
  const list = withEmail ? [...items, { label: "Email", href: `mailto:${profile.email}`, icon: Mail }] : items;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {list.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
