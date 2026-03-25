import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const textAlignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-4 ${textAlignment}`}>
      {eyebrow ? (
        <p className="text-xs tracking-[0.22em] text-wealth-gold uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-sm leading-7 text-text-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
