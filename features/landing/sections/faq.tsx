import { Section } from "@/components/shared/layout/section";
import { Card } from "@/components/shared/ui/card";
import { SectionTitle } from "@/components/shared/ui/section-title";

const faqs = [
  {
    q: "Who is this blueprint for?",
    a: "Early-stage founders, operators, and creators who want to build AI-linked income with a strategic approach.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes. The framework is concise and practical, without unnecessary technical complexity.",
  },
  {
    q: "What do I receive after opting in?",
    a: "You receive a downloadable blueprint PDF plus future high-signal insights related to AI monetization.",
  },
  {
    q: "Will you send frequent promotional emails?",
    a: "No. Communication is selective and focused on quality over volume.",
  },
];

export function FaqSection() {
  return (
    <Section className="border-y border-card-border/35 bg-[#0f1416]/45">
      <SectionTitle
        eyebrow="FAQ"
        title="Strategic Questions, Clear Answers"
        description="Everything you need before requesting access."
        align="center"
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.q} className="p-5 md:p-6">
            <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{faq.a}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
