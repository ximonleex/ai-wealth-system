import { LeadIntegrationProvider } from "@/types/leads";

export const leadConfig: {
  provider: LeadIntegrationProvider;
  webhookUrl?: string;
  customApiUrl?: string;
} = {
  provider: "placeholder",
};
