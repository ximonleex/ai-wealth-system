import { leadConfig } from "@/features/leads/config";
import { LeadPayload, LeadSubmissionResult } from "@/types/leads";

const DELAY_MS = 900;

export async function submitLead(lead: LeadPayload): Promise<LeadSubmissionResult> {
  switch (leadConfig.provider) {
    case "placeholder":
      return placeholderSubmit(lead);
    case "systeme":
      return notConfigured("Systeme.io");
    case "convertkit":
      return notConfigured("ConvertKit");
    case "webhook":
      return notConfigured("webhook");
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
