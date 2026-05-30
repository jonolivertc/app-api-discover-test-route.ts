import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/discover`, {
    method: "POST",
  });

  const data = await response.json();

  return NextResponse.json(data);
}
