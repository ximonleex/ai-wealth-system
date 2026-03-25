export type LeadPayload = {
  name: string;
  email: string;
};

export type LeadIntegrationProvider =
  | "placeholder"
  | "systeme"
  | "convertkit"
  | "webhook"
  | "custom";

export type LeadSubmissionResult = {
  ok: boolean;
  message: string;
};
