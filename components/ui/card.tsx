import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-card-border bg-card-surface/70 p-6 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
