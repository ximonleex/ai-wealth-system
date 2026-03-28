import { Container } from "@/components/shared/layout/container";
import { SectionTitle } from "@/components/shared/ui/section-title";
import { FooterSection } from "@/features/landing/sections/footer";
import { ToolCard } from "@/features/tools/components/tool-card";
import { toolsData } from "@/features/tools/data/tools";

export default function ToolsDirectoryPage() {
  return (
    <div className="min-h-screen">
      <main className="relative pb-10 pt-14 md:pb-16 md:pt-20">
        <Container>
          <div className="rounded-3xl border border-card-border/70 bg-[linear-gradient(145deg,rgba(17,28,24,0.72),rgba(16,19,21,0.9)_65%,rgba(31,27,20,0.56))] px-6 py-10 shadow-[0_24px_65px_rgba(2,6,8,0.52)] md:px-10 md:py-12">
            <SectionTitle
              eyebrow="Curated Stack"
              title="Premium AI & Automation Tools Directory"
              description="A focused collection of recommended tools to help you build and scale a structured AI income system with less operational noise."
            />
            <p className="mt-5 max-w-3xl text-xs leading-6 tracking-[0.04em] text-text-muted/90 md:text-sm">
              Affiliate links are active placeholders. Replace each URL with your partner
              tracking link when ready.
            </p>
          </div>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
            {toolsData.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </section>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
}
