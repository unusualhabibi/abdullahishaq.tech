import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  company: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const result = schema.safeParse(payload);

  if (!result.success) {
    return Response.json({ ok: false, errors: result.error.flatten() }, { status: 400 });
  }

  console.info("contact_submission", {
    ...result.data,
    timestamp: new Date().toISOString(),
  });

  return Response.json({ ok: true });
}
