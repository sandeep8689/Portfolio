import { cn } from "../../lib/utils";

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
