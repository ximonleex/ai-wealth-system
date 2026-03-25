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
    <Section id="lead-form" className="pt-8">
      <Card className="mx-auto max-w-4xl border-wealth-gold/25 bg-gradient-to-b from-[#18211f] to-card-surface p-8 md:p-10">
        <SectionTitle
          eyebrow="Access"
          title="Receive the AI Wealth Blueprint"
          description="Enter your details below to unlock the PDF and strategic implementation notes."
          align="center"
        />

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="text" name="name" placeholder="Your name" required />
            <Input type="email" name="email" placeholder="Your email" required />
          </div>
          <Button type="submit" fullWidth>
            Send Me the Blueprint
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-text-muted">
          {isSubmitted
            ? "Thanks. Your request was received. Delivery integration will be connected in the next step."
            : "No spam. High-signal updates only."}
        </p>
      </Card>
    </Section>
  );
}
