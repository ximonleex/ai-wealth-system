"use client";

import { FormEvent, useMemo, useState } from "react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";

type FormState = {
  name: string;
  email: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadCaptureSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isFormValid = useMemo(() => {
    return form.name.trim().length > 1 && EMAIL_REGEX.test(form.email.trim());
  }, [form.email, form.name]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();

    if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setErrorMessage(
          data.message ??
            "We could not process your request. Please try again in a moment."
        );
        return;
      }

      setSuccessMessage(
        data.message ??
          "Success. Please check your inbox for your AI Wealth Blueprint shortly."
      );
      setForm({ name: "", email: "" });
    } catch {
      setErrorMessage(
        "Connection issue detected. Please retry in a few seconds."
      );
    } finally {
      setIsSubmitting(false);
    }
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
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              autoComplete="name"
              aria-invalid={Boolean(errorMessage) && !form.name.trim()}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              autoComplete="email"
              aria-invalid={
                Boolean(errorMessage) && !EMAIL_REGEX.test(form.email.trim())
              }
              required
            />
          </div>
          <Button
            type="submit"
            fullWidth
            className="mt-1"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? "Securing Access..." : "Send Me the Blueprint"}
          </Button>
        </form>

        <p className="mt-4 text-center text-xs leading-6 text-text-muted">
          {successMessage || "No spam. High-signal updates only."}
        </p>

        {errorMessage ? (
          <p className="mt-2 text-center text-xs leading-6 text-[#d8a89d]">
            {errorMessage}
          </p>
        ) : null}
      </Card>
    </Section>
  );
}
