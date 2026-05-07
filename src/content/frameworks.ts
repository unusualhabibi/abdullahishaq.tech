export type Framework = {
  slug: string;
  title: string;
  summary: string;
  status: "Live" | "Beta";
};

export const localFrameworks: Framework[] = [
  {
    slug: "whatsapp-conversion-system",
    title: "WhatsApp Conversion System",
    summary: "A step-by-step conversion framework for inbound leads, follow-up, and bookings.",
    status: "Live",
  },
  {
    slug: "ai-service-delivery-os",
    title: "AI Service Delivery OS",
    summary: "Operational blueprint to run delivery, QA, and retention through AI-supported workflows.",
    status: "Beta",
  },
];
