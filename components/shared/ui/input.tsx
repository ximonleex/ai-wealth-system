import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-card-border/90 bg-[#0f1315]/85 px-4 py-3.5 text-sm text-foreground placeholder:text-text-muted/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-sm transition-colors duration-200 focus:border-wealth-gold/60 focus:outline-none focus:ring-2 focus:ring-wealth-gold/20",
        className
      )}
      {...props}
    />
  );
}
