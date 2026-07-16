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
  coverImage: string;
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
    { name: "Moses Maesya", role: "Community Leader" },
  ],
  coverImage: "",
};

function getFullText(prop: Record<string, unknown> | undefined): string {
  if (!prop) return "";
  const rt = prop.rich_text as Array<{ plain_text: string }> | undefined;
  if (rt) return rt.map((r) => r.plain_text).join("");
  const title = prop.title as Array<{ plain_text: string }> | undefined;
  if (title) return title.map((t) => t.plain_text).join("");
  return "";
}

function getText(prop: Record<string, unknown> | undefined): string {
  if (!prop) return "";
  const rt = prop.rich_text as Array<{ plain_text: string }> | undefined;
  if (rt?.[0]?.plain_text) return rt[0].plain_text;
  const title = prop.title as Array<{ plain_text: string }> | undefined;
  if (title?.[0]?.plain_text) return title[0].plain_text;
  return "";
}

function toDirectImageUrl(url: string): string {
  if (!url) return "";
  // Convert Google Drive links to direct image URLs
  const driveMatch = url.match(
    /drive\.google\.com\/(?:file\/d\/|(?:open|uc)\?.*?id=|.*?[?&]id=)([a-zA-Z0-9_-]+)/
  ) || url.match(
    /drive\.usercontent\.google\.com\/download\?id=([a-zA-Z0-9_-]+)/
  );
  if (driveMatch) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return url;
}

function parseEvent(page: Record<string, unknown>): KonaEvent {
  const props = page.properties as Record<string, Record<string, unknown>>;

  const panelistsRaw = getFullText(props.Panelists);
  const panelists: Panelist[] = panelistsRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const commaIndex = line.indexOf(",");
      if (commaIndex === -1) return { name: line, role: "" };
      return {
        name: line.slice(0, commaIndex).trim(),
        role: line.slice(commaIndex + 1).trim(),
      };
    });

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
    coverImage: toDirectImageUrl((props.CoverImage?.url as string | undefined) ?? ""),
  };
}

async function queryNotion(body: object): Promise<Response> {
  return fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: 3600 },
    }
  );
}

export async function getFeaturedEvent(): Promise<KonaEvent> {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    return FALLBACK_EVENT;
  }

  try {
    const res = await queryNotion({
      filter: {
        and: [
          { property: "Featured", checkbox: { equals: true } },
          { property: "Status", select: { equals: "Upcoming" } },
        ],
      },
    });

    if (!res.ok) return FALLBACK_EVENT;

    const data = await res.json();
    const page = data.results?.[0];
    if (!page) return FALLBACK_EVENT;

    return parseEvent(page);
  } catch {
    return FALLBACK_EVENT;
  }
}

export async function getPastEvents(): Promise<KonaEvent[]> {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    return [];
  }

  try {
    const res = await queryNotion({
      filter: {
        property: "Status",
        select: { equals: "Past" },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    if (!res.ok) return [];

    const data = await res.json();
    const pages = data.results ?? [];
    return pages.map((page: Record<string, unknown>) => parseEvent(page));
  } catch {
    return [];
  }
}
