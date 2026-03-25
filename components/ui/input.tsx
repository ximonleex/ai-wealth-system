import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-card-border bg-[#121618] px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:border-wealth-gold/50 focus:outline-none focus:ring-2 focus:ring-wealth-gold/20",
        className
      )}
      {...props}
    />
  );
}
