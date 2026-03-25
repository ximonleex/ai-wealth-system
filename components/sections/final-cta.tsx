import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FinalCtaSection() {
  return (
    <Section className="pb-20 md:pb-28">
      <Card className="mx-auto max-w-4xl border-wealth-gold/32 bg-[linear-gradient(120deg,rgba(15,48,38,0.6),rgba(15,19,21,0.88)_55%,rgba(40,33,23,0.5))] px-6 py-10 text-center md:px-10 md:py-12">
        <p className="text-xs uppercase tracking-[0.22em] text-wealth-gold/90">Final Access</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Build With Precision Before the Market Saturates.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-text-muted/90 md:text-base">
          Get the AI Wealth Blueprint and start executing a cleaner, more strategic AI income roadmap.
        </p>
        <a href="#lead-form" className="mt-9 inline-block w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Get the Blueprint</Button>
        </a>
      </Card>
    </Section>
  );
}
