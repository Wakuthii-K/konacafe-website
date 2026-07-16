import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_DATABASE_ID;

  const status = {
    hasToken: !!token,
    tokenPrefix: token ? token.slice(0, 8) + "..." : "MISSING",
    hasDbId: !!dbId,
    dbId: dbId || "MISSING",
  };

  if (!token || !dbId) {
    return NextResponse.json({ ...status, error: "Missing env vars" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${dbId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json({ ...status, notionStatus: res.status, notionError: body }, { status: 500 });
    }

    const data = await res.json();
    const events = data.results.map((p: Record<string, unknown>) => {
      const props = p.properties as Record<string, Record<string, unknown>>;
      return {
        title: (props.Title?.title as Array<{ plain_text: string }>)?.[0]?.plain_text || "untitled",
        status: (props.Status?.select as { name: string })?.name || "none",
        featured: (props.Featured?.checkbox as boolean) || false,
        hasCoverImage: !!(props.CoverImage?.url),
      };
    });

    return NextResponse.json({ ...status, eventCount: events.length, events });
  } catch (err) {
    return NextResponse.json({ ...status, error: String(err) }, { status: 500 });
  }
}
