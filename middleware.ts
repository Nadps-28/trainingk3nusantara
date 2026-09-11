import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import kotaData from "@/data/kota.json";

// Create a Set of valid city slugs from data/kota.json for fast O(1) lookup
const validKotaSlugs = new Set(kotaData.map((k) => k.slug));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude static assets & internal Next.js requests
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Get host header or hostname
  const hostHeader = request.headers.get("host") || request.nextUrl.hostname;

  // Remove port if present (e.g., "bandung.localhost:3000" -> "bandung.localhost")
  const host = hostHeader.split(":")[0].toLowerCase();

  let subdomain: string | null = null;

  // Extract subdomain directly (without "training" prefix stripping)
  if (host.endsWith(".trainingk3nusantara.id")) {
    subdomain = host.replace(".trainingk3nusantara.id", "");
  } else if (host.endsWith(".localhost")) {
    subdomain = host.replace(".localhost", "");
  } else if (host.endsWith(".vercel.app")) {
    const parts = host.split(".");
    if (parts.length > 3) {
      subdomain = parts[0];
    }
  } else {
    const parts = host.split(".");
    if (parts.length > 2) {
      subdomain = parts[0];
    }
  }

  // Ignore main domain, www, or local host without subdomain
  if (
    !subdomain ||
    subdomain === "www" ||
    host === "trainingk3nusantara.id" ||
    host === "localhost" ||
    host === "127.0.0.1"
  ) {
    return NextResponse.next();
  }

  // Validate extracted city slug against data/kota.json
  // If slug is not found in data/kota.json, rewrite to 404 page
  if (!validKotaSlugs.has(subdomain)) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  // If pathname already starts with /kota/${subdomain}, continue directly
  if (pathname.startsWith(`/kota/${subdomain}`)) {
    return NextResponse.next();
  }

  // Rewrite homepage of subdomain (/) to /kota/${subdomain}
  // Rewrite inner pages (/${layanan}) to /kota/${subdomain}${pathname}
  const targetPath =
    pathname === "/" ? `/kota/${subdomain}` : `/kota/${subdomain}${pathname}`;

  return NextResponse.rewrite(new URL(targetPath, request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (e.g. .svg, .png, .jpg, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
