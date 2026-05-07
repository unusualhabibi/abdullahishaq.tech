import { z } from "zod";

const schema = z.object({
  email: z.email(),
  context: z.string().min(1).max(50),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const result = schema.safeParse(payload);

  if (!result.success) {
    return Response.json({ ok: false, errors: result.error.flatten() }, { status: 400 });
  }

  const convertKitApiKey = process.env.CONVERTKIT_API_KEY;
  const convertKitFormId = process.env.CONVERTKIT_FORM_ID;

  if (convertKitApiKey && convertKitFormId) {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: convertKitApiKey,
        email: result.data.email,
        tags: [result.data.context],
      }),
    });

    if (!response.ok) {
      return Response.json({ ok: false }, { status: 502 });
    }
  } else {
    console.info("newsletter_subscription", {
      ...result.data,
      timestamp: new Date().toISOString(),
    });
  }

  return Response.json({ ok: true });
}
