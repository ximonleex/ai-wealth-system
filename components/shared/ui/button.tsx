import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wealth-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
        variant === "primary" &&
          "border border-[#3a5b4f] bg-[linear-gradient(140deg,#1a6a51,#0f4536)] text-[#ecf1ee] shadow-[0_10px_30px_rgba(8,24,19,0.45),inset_0_1px_0_rgba(212,220,216,0.15)] hover:border-[#4b7062] hover:brightness-[1.05]",
        variant === "secondary" &&
          "border border-card-border bg-[linear-gradient(180deg,rgba(28,34,36,0.92),rgba(19,23,25,0.9))] text-foreground shadow-[inset_0_1px_0_rgba(208,216,211,0.08)] hover:border-wealth-gold/45",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
