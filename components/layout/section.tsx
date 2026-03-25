import { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-24 lg:py-28 ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
