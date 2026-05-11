export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  content: string[];
};

export const localPosts: Post[] = [
  {
    slug: "ai-ops-for-african-restaurants",
    title: "AI Operations Playbook for African Restaurant Operators",
    description:
      "How to automate customer support, ordering, and follow-ups without losing the human touch.",
    publishedAt: "2026-05-01",
    readTime: "8 min read",
    category: "Operations",
    content: [
      "Most restaurant teams are understaffed and over-messaged. AI should remove repetitive bottlenecks, not replace your brand voice.",
      "Start with WhatsApp intake, quote generation, and post-order retention flows. That one stack usually recovers 5-10 hours per week.",
      "Treat automation as an operations system, not a random tool experiment. Measure response times, repeat orders, and booking conversion weekly.",
    ],
  },
  {
    slug: "make-vs-zapier-for-growing-teams",
    title: "Make vs Zapier for Growing Teams in Africa",
    description:
      "The tradeoffs in cost, flexibility, governance, and deployment speed for local operators.",
    publishedAt: "2026-04-20",
    readTime: "6 min read",
    category: "Automation",
    content: [
      "Zapier is fast for first workflows. Make wins when scenario complexity and costs scale.",
      "If your business depends on WhatsApp + payment + CRM handoffs, map reliability and failure retries before choosing.",
      "Use one owner for automation governance so every workflow has clear maintenance responsibility.",
    ],
  },
];
