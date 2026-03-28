export const leadMagnetConfig = {
  downloadUrl:
    process.env.BLUEPRINT_DOWNLOAD_URL ??
    "https://example.com/ai-wealth-blueprint-placeholder.pdf",
  deliveryMode:
    (process.env.LEAD_MAGNET_DELIVERY_MODE as "download" | "email" | undefined) ??
    "download",
};

export const isLeadMagnetDownloadEnabled =
  leadMagnetConfig.deliveryMode === "download" && Boolean(leadMagnetConfig.downloadUrl);
