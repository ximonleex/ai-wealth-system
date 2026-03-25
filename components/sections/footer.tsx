import { Container } from "@/components/layout/container";

export function FooterSection() {
  return (
    <footer className="border-t border-card-border/80 py-8">
      <Container>
        <div className="flex flex-col gap-3 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AI Wealth Blueprint. All rights reserved.</p>
          <p>Built for strategic operators in the AI economy.</p>
        </div>
      </Container>
    </footer>
  );
}
