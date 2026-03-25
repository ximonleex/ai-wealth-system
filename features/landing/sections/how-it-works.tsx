import { Section } from "@/components/shared/layout/section";
import { Card } from "@/components/shared/ui/card";
import { SectionTitle } from "@/components/shared/ui/section-title";

const steps = [
  {
    step: "01",
    title: "Request Access",
    description: "Submit your name and email to unlock the blueprint package.",
  },
  {
    step: "02",
    title: "Study the Framework",
    description:
      "Review the concise model for opportunities, offer design, and execution sequencing.",
  },
  {
    step: "03",
    title: "Execute With Focus",
    description:
      "Apply the framework to your niche and begin building your first monetizable AI asset.",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <SectionTitle
        eyebrow="Process"
        title="How It Works"
        description="A simple three-step path from insight to implementation."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((item) => (
          <Card key={item.step} className="relative h-full overflow-hidden">
            <p className="text-xs tracking-[0.22em] text-wealth-gold/90">
              STEP {item.step}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
