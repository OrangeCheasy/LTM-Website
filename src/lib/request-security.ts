const JSON_CONTENT_TYPE = "application/json";

/**
 * Reject browser requests initiated from a different origin. This is not a
 * replacement for edge rate limiting, but it prevents ordinary cross-site
 * form/fetch abuse from using public POST endpoints as CSRF targets.
 *
 * Requests without an Origin header are allowed because non-browser clients,
 * uptime checks, and some same-origin navigations may omit it. They still pass
 * the endpoint's normal validation and Cloudflare edge controls.
 */
export function isSameOriginRequest(request: Request): boolean {
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (secFetchSite === "cross-site") return false;

  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function hasJsonContentType(request: Request): boolean {
  const contentType = request.headers.get("content-type");
  if (!contentType) return false;

  return contentType.split(";", 1)[0]?.trim().toLowerCase() === JSON_CONTENT_TYPE;
}

export function contentLengthExceeds(request: Request, maxBytes: number): boolean {
  const value = request.headers.get("content-length");
  if (!value) return false;

  const length = Number(value);
  return !Number.isSafeInteger(length) || length < 0 || length > maxBytes;
}
