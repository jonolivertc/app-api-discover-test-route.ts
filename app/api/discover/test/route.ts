import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const sampleLeads = [
    {
      org_name: "Sample Christian Podcast",
      category: "podcast",
      country: "USA",
      score: 80,
      status: "new"
    },
    {
      org_name: "Sample Men's Ministry",
      category: "church",
      country: "USA",
      score: 90,
      status: "new"
    }
  ];

  const { data, error } = await supabase
    .from("leads")
    .insert(sampleLeads)
    .select();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    inserted: data
  });
}
