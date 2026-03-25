import { BenefitsSection } from "@/features/landing/sections/benefits";
import { FaqSection } from "@/features/landing/sections/faq";
import { FinalCtaSection } from "@/features/landing/sections/final-cta";
import { FooterSection } from "@/features/landing/sections/footer";
import { HeroSection } from "@/features/landing/sections/hero";
import { HowItWorksSection } from "@/features/landing/sections/how-it-works";
import { LeadCaptureSection } from "@/features/landing/sections/lead-capture";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative">
        <HeroSection />
        <LeadCaptureSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
