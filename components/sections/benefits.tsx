import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const benefits = [
  {
    title: "Market Positioning",
    description:
      "Identify where AI demand is already proven and where premium positioning gives you pricing power.",
  },
  {
    title: "Monetization Clarity",
    description:
      "Choose a focused revenue path with less noise, faster execution, and stronger economic logic.",
  },
  {
    title: "Execution Discipline",
    description:
      "Deploy a simple operating cadence to turn ideas into assets that compound over time.",
  },
];

export function BenefitsSection() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Value"
        title="Why Founders Download This"
        description="Designed for operators who want strategic leverage, not generic motivation."
        align="center"
      />
      <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="h-full border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
