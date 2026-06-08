// HMAC-SHA256 cookie signing using Web Crypto (Edge-compatible, no extra packages)

export const COOKIE_NAME = "gw_admin_session";
const SESSION_TTL = 8 * 60 * 60; // 8 hours in seconds

function getSecret(): ArrayBuffer {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  const enc = new TextEncoder().encode(secret);
  return enc.buffer as ArrayBuffer;
}

async function computeHmac(secret: ArrayBuffer, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(data)
  );
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  let result = 0;
  for (let i = 0; i < aBytes.length; i++) result |= aBytes[i] ^ bBytes[i];
  return result === 0;
}

export async function createSessionCookie(): Promise<string> {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL;
  const payload = String(expiresAt);
  const sig = await computeHmac(getSecret(), payload);
  return `${payload}.${sig}`;
}

export async function verifySessionCookie(value: string): Promise<boolean> {
  try {
    const dotIdx = value.indexOf(".");
    if (dotIdx === -1) return false;
    const payload = value.slice(0, dotIdx);
    const providedSig = value.slice(dotIdx + 1);
    const expiresAt = parseInt(payload, 10);
    if (isNaN(expiresAt) || expiresAt < Math.floor(Date.now() / 1000))
      return false;
    const expectedSig = await computeHmac(getSecret(), payload);
    return timingSafeEqual(providedSig, expectedSig);
  } catch {
    return false;
  }
}
