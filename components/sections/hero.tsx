import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="pt-20 md:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.24em] text-wealth-gold">
            Private Intelligence Briefing
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build Your AI Wealth Blueprint With Strategic Clarity.
          </h1>
          <p className="max-w-xl text-base leading-8 text-text-muted md:text-lg">
            A concise framework designed to help you structure profitable AI offers,
            assets, and systems before the market gets louder.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#lead-form" className="sm:w-auto">
              <Button>Get the Free Blueprint</Button>
            </a>
            <a href="#how-it-works" className="sm:w-auto">
              <Button variant="secondary">See How It Works</Button>
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-card-border bg-gradient-to-b from-wealth-green-dark/25 to-card-surface p-8 shadow-[0_0_45px_rgba(14,59,46,0.32)]">
          <p className="text-xs uppercase tracking-[0.2em] text-wealth-gold">
            Inside the Blueprint
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-text-muted">
            <li>
              <span className="font-medium text-foreground">01.</span> A practical
              AI opportunity map for 2026.
            </li>
            <li>
              <span className="font-medium text-foreground">02.</span> A focused
              monetization model for lean execution.
            </li>
            <li>
              <span className="font-medium text-foreground">03.</span> A weekly
              implementation rhythm to compound progress.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
