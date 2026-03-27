import Link from "next/link";
import { Container } from "@/components/shared/layout/container";
import { Button } from "@/components/shared/ui/button";
import { Card } from "@/components/shared/ui/card";
import { FooterSection } from "@/features/landing/sections/footer";

export default function ThankYouPage() {
  const blueprintDownloadUrl = process.env.BLUEPRINT_DOWNLOAD_URL;
  const isDownloadAvailable = Boolean(blueprintDownloadUrl);

  return (
    <div className="min-h-screen">
      <main className="relative py-18 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Card className="border-wealth-gold/28 bg-[linear-gradient(145deg,rgba(17,30,25,0.78),rgba(15,19,21,0.9)_62%,rgba(34,28,21,0.52))] p-7 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-wealth-gold/90">
                Access Confirmed
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Thank you. Your signup is complete.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
                Your signup is complete. Please check your inbox for your AI Wealth
                Blueprint and follow-up instructions.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-card-border/80 bg-[#101416]/80 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-wealth-gold/80">
                    Delivery Status
                  </p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">
                    {isDownloadAvailable
                      ? "Your direct blueprint download is now available. You can still check your inbox for the follow-up sequence."
                      : "Your blueprint is being delivered by email. Check your inbox in the next few minutes."}
                  </p>
                </div>
                <div className="rounded-2xl border border-card-border/80 bg-[#101416]/80 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-wealth-gold/80">
                    Important
                  </p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">
                    If you do not see the email in a few minutes, check your spam or
                    promotions folder and move it to primary.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {isDownloadAvailable ? (
                  <a
                    href={blueprintDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto">Download the Blueprint</Button>
                  </a>
                ) : (
                  <Button disabled className="w-full sm:w-auto">
                    Download Link Coming to Your Inbox
                  </Button>
                )}
                <Link href="/tools" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    View Recommended Tools
                  </Button>
                </Link>
                <Link href="/" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Back to Homepage
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
}
