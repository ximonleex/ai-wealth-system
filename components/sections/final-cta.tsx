import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FinalCtaSection() {
  return (
    <Section>
      <Card className="mx-auto max-w-4xl border-wealth-gold/30 bg-gradient-to-r from-[#13241f] via-[#12181a] to-[#1f1c16] p-8 text-center md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-wealth-gold">Final Access</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Build With Precision Before the Market Saturates.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-muted md:text-base">
          Get the AI Wealth Blueprint and start executing a cleaner, more strategic AI income roadmap.
        </p>
        <a href="#lead-form" className="mt-8 inline-block">
          <Button>Get the Blueprint</Button>
        </a>
      </Card>
    </Section>
  );
}
