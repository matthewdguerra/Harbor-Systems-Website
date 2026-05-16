export const runtime = "nodejs";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514";

const SYSTEM_PROMPT =
  "You are Harbor AI, a premium AI consultant assistant for Harbor Systems LLC. Harbor Systems helps churches, nonprofits, faith-based organizations, and schools with responsible AI, operational intelligence audits, workflow automation, dashboards, connected data systems, reporting automation, and AI operational assistants. Be warm, intelligent, concise, trustworthy, and practical. Never overpromise; recommend a discovery call for implementation-specific advice.";

const fallback =
  "Harbor AI is temporarily unavailable. You can still ask Harbor Systems about operational audits, workflow automation, dashboards, and responsible AI implementation.";

function normalizeMessages(body) {
  const messages = Array.isArray(body.messages)
    ? body.messages
    : body.message
      ? [{ role: "user", content: body.message }]
      : [];

  return messages
    .filter((message) => message && ["user", "assistant"].includes(message.role) && typeof message.content === "string")
    .slice(-12)
    .map((message) => ({ role: message.role, content: message.content.slice(0, 2000) }));
}

export async function POST(req) {
  try {
    const body = await req.json();
    const cleanMessages = normalizeMessages(body);

    if (!cleanMessages.length) {
      return Response.json({ content: "Please send a message and I'll help.", error: "empty_message" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json({
        content:
          "The live Claude connection is not configured yet. Add ANTHROPIC_API_KEY to .env.local or your Vercel environment variables to enable real responses.",
        configured: false
      });
    }

    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: cleanMessages
    });

    const text = response.content?.find((block) => block.type === "text")?.text;

    return Response.json({
      content: text || fallback,
      configured: true
    });
  } catch (error) {
    const message = error?.error?.message || error?.message;
    const status = error?.status;

    if (status === 401 || status === 403) {
      return Response.json({
        content: "The Claude API key is invalid or unauthorized. Check ANTHROPIC_API_KEY in your environment settings.",
        error: "auth_failed"
      });
    }

    if (message) {
      return Response.json({ content: fallback, error: "api_error", detail: message });
    }

    return Response.json({ content: fallback, error: "unknown_error" });
  }
}
