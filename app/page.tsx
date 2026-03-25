import { BenefitsSection } from "@/components/sections/benefits";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { LeadCaptureSection } from "@/components/sections/lead-capture";

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
