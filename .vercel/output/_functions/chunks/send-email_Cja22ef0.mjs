const prerender = false;
const SMTP_API_KEY = "api-5804E92744B04811B7B80DED3A3C5A61";
const SMTP_SENDER = "back2nature@ping.bestin.cy";
const SMTP_TO = "payal.rising416@Gmail.com";
const SMTP_ENDPOINT = "https://api.smtp2go.com/v3/email/send";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const GET = () => json({ error: "Method not allowed" }, 405);
const PUT = () => json({ error: "Method not allowed" }, 405);
const DELETE = () => json({ error: "Method not allowed" }, 405);
const POST = async ({ request }) => {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Expected application/json" }, 400);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  const { subject, text_body, reply_to } = body;
  if (!subject || !text_body) {
    return json({ error: "Missing required fields: subject, text_body" }, 400);
  }
  const clean = (v, max = 2e3) => String(v).replace(/\0/g, "").slice(0, max);
  const payload = {
    api_key: SMTP_API_KEY,
    to: [SMTP_TO],
    sender: SMTP_SENDER,
    subject: clean(subject, 200),
    text_body: clean(text_body)
  };
  if (reply_to && EMAIL_RE.test(String(reply_to))) {
    payload.custom_headers = [
      { header: "Reply-To", value: clean(reply_to, 200) }
    ];
  }
  try {
    const res = await fetch(SMTP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data?.data?.succeeded > 0) {
      return json({ ok: true });
    }
    const detail = data?.data?.failures?.[0]?.error || data?.data?.failures?.[0]?.status_desc || "Mail service returned an error";
    return json({ error: detail }, 502);
  } catch (err) {
    console.error("[send-email] fetch error:", err);
    return json({ error: "Could not reach mail service" }, 503);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
