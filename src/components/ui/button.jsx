import { cn, isExternal } from "../../lib/utils";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:brightness-110",
  outline:
    "border border-white/15 bg-white/[0.03] text-foreground hover:border-white/25 hover:bg-white/[0.08]",
  ghost: "text-muted-foreground hover:bg-white/5 hover:text-foreground",
};

const sizes = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

export function Button({ href, variant = "primary", size = "md", className, children, ...props }) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const ext = isExternal(href);
    return (
      <a
        href={href}
        className={cls}
        {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
