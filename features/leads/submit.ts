import { leadConfig } from "@/features/leads/config";
import { LeadPayload, LeadSubmissionResult } from "@/types/leads";

const DELAY_MS = 900;
const WEBHOOK_TIMEOUT_MS = 10_000;

export async function submitLead(lead: LeadPayload): Promise<LeadSubmissionResult> {
  switch (leadConfig.provider) {
    case "placeholder":
      return placeholderSubmit(lead);
    case "systeme":
      return notConfigured("Systeme.io");
    case "convertkit":
      return notConfigured("ConvertKit");
    case "webhook":
      return webhookSubmit(lead);
    case "custom":
      return notConfigured("custom API endpoint");
    default:
      return {
        ok: false,
        message: "Unknown lead provider configuration.",
      };
  }
}

async function placeholderSubmit(lead: LeadPayload): Promise<LeadSubmissionResult> {
  await wait(DELAY_MS);

  // Simulate occasional failure so the UI error path can be tested.
  if (lead.email.toLowerCase().includes("fail")) {
    return {
      ok: false,
      message: "We could not process your request right now. Please try again.",
    };
  }

  return {
    ok: true,
    message: "Access granted. Your blueprint delivery is being prepared.",
  };
}

async function webhookSubmit(lead: LeadPayload): Promise<LeadSubmissionResult> {
  if (!leadConfig.webhookUrl) {
    return {
      ok: false,
      message: "Webhook URL is not configured.",
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, WEBHOOK_TIMEOUT_MS);

    const response = await fetch(leadConfig.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
      }),
      signal: controller.signal,
    }).finally(() => {
      clearTimeout(timeoutId);
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "Lead delivery failed. Please try again shortly.",
      };
    }

    return {
      ok: true,
      message: "Success. Please check your inbox for next steps.",
    };
  } catch {
    return {
      ok: false,
      message: "We could not reach the lead delivery service. Please try again.",
    };
  }
}

function notConfigured(target: string): LeadSubmissionResult {
  return {
    ok: false,
    message: `${target} integration is not configured yet.`,
  };
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
