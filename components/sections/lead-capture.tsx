"use client";

import { FormEvent, useState } from "react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";

export function LeadCaptureSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Section id="lead-form" className="pt-6 md:pt-10">
      <Card className="mx-auto max-w-4xl border-wealth-gold/25 bg-gradient-to-b from-[#18211f]/95 to-card-surface p-6 md:p-10">
        <SectionTitle
          eyebrow="Access"
          title="Receive the AI Wealth Blueprint"
          description="Enter your details below to unlock the PDF and strategic implementation notes."
          align="center"
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-7 max-w-2xl space-y-4 md:mt-9"
        >
          <div className="grid gap-3.5 md:grid-cols-2 md:gap-4">
            <Input type="text" name="name" placeholder="Your name" required />
            <Input type="email" name="email" placeholder="Your email" required />
          </div>
          <Button type="submit" fullWidth className="mt-1">
            Send Me the Blueprint
          </Button>
        </form>

        <p className="mt-4 text-center text-xs leading-6 text-text-muted">
          {isSubmitted
            ? "Thanks. Your request was received. Delivery integration will be connected in the next step."
            : "No spam. High-signal updates only."}
        </p>
      </Card>
    </Section>
  );
}
