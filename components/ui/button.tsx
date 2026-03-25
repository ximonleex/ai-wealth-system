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
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wealth-gold disabled:opacity-60",
        variant === "primary" &&
          "bg-gradient-to-r from-wealth-green to-wealth-green-dark text-foreground shadow-[0_0_24px_rgba(20,90,69,0.25)] hover:from-[#17634d] hover:to-[#0f3f31]",
        variant === "secondary" &&
          "border border-card-border bg-card-surface text-foreground hover:border-wealth-gold/40",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
