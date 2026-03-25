import { LeadIntegrationProvider } from "@/types/leads";

export const leadConfig: {
  provider: LeadIntegrationProvider;
  webhookUrl?: string;
  customApiUrl?: string;
} = {
  provider:
    (process.env.LEAD_PROVIDER as LeadIntegrationProvider | undefined) ??
    "webhook",
  webhookUrl: process.env.LEAD_WEBHOOK_URL,
  customApiUrl: process.env.LEAD_CUSTOM_API_URL,
};
