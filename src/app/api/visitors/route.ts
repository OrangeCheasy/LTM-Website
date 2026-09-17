import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";
import { isSameOriginRequest } from "@/lib/request-security";

const VISITOR_COOKIE = "ltm_visitor_seen";
const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

interface VisitorCountRow {
  count: number;
}

function unavailableResponse() {
  return NextResponse.json(
    { count: null },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json(
      { count: null },
      {
        status: 403,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    const db = env.VISITOR_DB;

    if (!db) {
      return unavailableResponse();
    }

    await db
      .prepare(
        "CREATE TABLE IF NOT EXISTS visitor_counter (id INTEGER PRIMARY KEY CHECK (id = 1), count INTEGER NOT NULL DEFAULT 0)",
      )
      .run();

    const alreadyCounted = request.cookies.has(VISITOR_COOKIE);

    const row = alreadyCounted
      ? await db
          .prepare("SELECT count FROM visitor_counter WHERE id = 1")
          .first<VisitorCountRow>()
      : await db
          .prepare(
            "INSERT INTO visitor_counter (id, count) VALUES (1, 1) ON CONFLICT(id) DO UPDATE SET count = count + 1 RETURNING count",
          )
          .first<VisitorCountRow>();

    const response = NextResponse.json(
      { count: row?.count ?? 0 },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );

    if (!alreadyCounted) {
      response.cookies.set({
        name: VISITOR_COOKIE,
        value: "1",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: VISITOR_COOKIE_MAX_AGE,
      });
    }

    return response;
  } catch {
    // Avoid logging raw database/Cloudflare errors from a public endpoint. The
    // counter is non-critical and intentionally degrades without exposing
    // deployment details to logs or visitors.
    console.error("Visitor counter failed");
    return unavailableResponse();
  }
}
