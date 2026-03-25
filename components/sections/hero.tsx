import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-18 md:pt-24">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />
      <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="space-y-7">
          <p className="text-[11px] uppercase tracking-[0.26em] text-wealth-gold/90">
            Private Intelligence Briefing
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.07] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build Your First AI Income System With Strategic Clarity.
          </h1>
          <p className="max-w-xl text-base leading-8 text-text-muted md:text-lg">
            A free blueprint for beginners who want structured online income with
            AI automation, not random side-hustle experiments.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <a href="#lead-form" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Get the Free Blueprint</Button>
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </a>
          </div>
          <p className="text-xs tracking-[0.06em] text-text-muted/90">
            Trusted framework. Clear steps. Calm execution.
          </p>
        </div>

        <div className="relative rounded-3xl border border-card-border/90 bg-gradient-to-b from-[#16251f]/88 via-[#141a1b]/86 to-[#121618]/88 p-7 shadow-[0_24px_50px_rgba(2,6,8,0.55)] backdrop-blur-xl md:p-8">
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-wealth-gold/45 to-transparent" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-wealth-gold/90">
            Inside the Blueprint
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-text-muted md:text-[15px]">
            <li>
              <span className="mr-2 font-semibold text-foreground">01.</span>
              AI-powered income paths mapped for beginner execution.
            </li>
            <li>
              <span className="mr-2 font-semibold text-foreground">02.</span>
              A practical system to select offers with monetization clarity.
            </li>
            <li>
              <span className="mr-2 font-semibold text-foreground">03.</span>
              A simple weekly operating rhythm to compound momentum.
            </li>
          </ul>
          <div className="mt-6 rounded-2xl border border-card-border/85 bg-[#101416]/85 px-4 py-3">
            <p className="text-xs leading-6 text-text-muted">
              Designed for focused beginners who want a structured path into the AI
              economy.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
