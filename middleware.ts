// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  return NextResponse.rewrite(
    new URL(`/?tab=${searchParams.get("tab")}`, request.url)
  );
}
