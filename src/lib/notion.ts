import { cacheLife } from "next/cache";

export interface Panelist {
  name: string;
  role: string;
}

export interface KonaEvent {
  id: string;
  title: string;
  subtitle: string;
  series: string;
  seriesNumber: string;
  documentaryAnchor: string;
  date: string;
  timeRange: string;
  venue: string;
  city: string;
  format: string;
  description: string;
  rsvpUrl: string;
  featured: boolean;
  status: string;
  coConvener: string;
  panelists: Panelist[];
}

const FALLBACK_EVENT: KonaEvent = {
  id: "seed-001",
  title: "Carbon Colony",
  subtitle: "Land, Power & the Climate Trade",
  series: "Pith Off Series",
  seriesNumber: "No. 001",
  documentaryAnchor: "Carbon Colony — Africa Uncensored",
  date: "2026-05-29",
  timeRange: "5:00 PM – 9:30 PM",
  venue: "Afrika House, Karen Hardy",
  city: "Nairobi",
  format: "Documentary screening + panel discussion",
  description:
    "Who benefits when Africa's land becomes a carbon market? This gathering convenes voices from ecology, policy, community organising, and climate finance to interrogate the carbon credits business in Kenya — its impact on native communities and the ranging debate on land resource re-colonisation.",
  rsvpUrl: "#",
  featured: true,
  status: "Upcoming",
  coConvener: "Afrika House",
  panelists: [
    {
      name: "Martin Siele",
      role: "Documentary producer · Carbon Colony / Africa Uncensored",
    },
    {
      name: "Mordecai Ogada",
      role: "Carnivore ecologist & conservation policy scholar",
    },
    {
      name: "Donald Maringa",
      role: "East Africa Climate Officer · Plan Vivo",
    },
    {
      name: "Jane Mukami",
      role: "Community organiser & activist · Golden Fields Association",
    },
    { name: "Moses Maesya", role: "TBC" },
  ],
};

function getText(prop: Record<string, unknown> | undefined): string {
  if (!prop) return "";
  const rt = prop.rich_text as Array<{ plain_text: string }> | undefined;
  if (rt?.[0]?.plain_text) return rt[0].plain_text;
  const title = prop.title as Array<{ plain_text: string }> | undefined;
  if (title?.[0]?.plain_text) return title[0].plain_text;
  return "";
}

export async function getFeaturedEvent(): Promise<KonaEvent> {
  "use cache";
  cacheLife("hours");

  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    return FALLBACK_EVENT;
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            and: [
              { property: "Featured", checkbox: { equals: true } },
              { property: "Status", select: { equals: "Upcoming" } },
            ],
          },
        }),
      }
    );

    if (!res.ok) return FALLBACK_EVENT;

    const data = await res.json();
    const page = data.results?.[0];
    if (!page) return FALLBACK_EVENT;

    const props = page.properties as Record<string, Record<string, unknown>>;

    let panelists: Panelist[] = [];
    try {
      panelists = JSON.parse(getText(props.Panelists));
    } catch {
      panelists = [];
    }

    return {
      id: page.id as string,
      title: getText(props.Title),
      subtitle: getText(props.Subtitle),
      series: (props.Series?.select as { name: string } | undefined)?.name ?? "",
      seriesNumber: getText(props.SeriesNumber),
      documentaryAnchor: getText(props.DocumentaryAnchor),
      date: (props.Date?.date as { start: string } | undefined)?.start ?? "",
      timeRange: getText(props.TimeRange),
      venue: getText(props.Venue),
      city: (props.City?.select as { name: string } | undefined)?.name ?? "",
      format: (props.Format?.select as { name: string } | undefined)?.name ?? "",
      description: getText(props.Description),
      rsvpUrl: (props.RSVPUrl?.url as string | undefined) ?? "#",
      featured: (props.Featured?.checkbox as boolean | undefined) ?? false,
      status: (props.Status?.select as { name: string } | undefined)?.name ?? "",
      coConvener: getText(props.CoConvener),
      panelists,
    };
  } catch {
    return FALLBACK_EVENT;
  }
}
