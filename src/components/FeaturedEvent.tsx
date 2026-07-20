import type { KonaEvent } from "@/lib/notion";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-[9px] tracking-[0.20em] uppercase text-muted mb-1">
        {label}
      </p>
      <p className="font-display text-sm text-ink">{value}</p>
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  } catch {
    return dateStr;
  }
}

export default function FeaturedEvent({ event }: { event: KonaEvent }) {
  return (
    <section
      id="event"
      className="border-b border-[0.5px] border-gold/10 grid grid-cols-12"
    >
      {/* Left */}
      <div className="col-span-12 lg:col-span-7 p-10 lg:p-16 border-b border-[0.5px] border-gold/10 lg:border-b-0 lg:border-r">
        {/* Series badge */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-display text-[9px] tracking-[0.22em] uppercase text-gold">
            {event.series}
          </span>
          <span className="text-gold/30">·</span>
          <span className="font-display text-[9px] tracking-[0.22em] uppercase text-muted">
            {event.seriesNumber}
          </span>
        </div>

        {/* Documentary anchor */}
        {event.documentaryAnchor && (
          <div className="mb-8">
            <p className="font-display text-[9px] tracking-[0.15em] uppercase text-muted mb-2">
              Anchored in the documentary
            </p>
            <p className="font-display italic text-gold-light text-lg">
              {event.documentaryAnchor}
            </p>
          </div>
        )}

        {/* Title */}
        <h2
          className="font-display font-normal italic text-ink leading-none mb-3"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          {event.title}
        </h2>
        <p className="font-display text-muted text-xl mb-8">{event.subtitle}</p>

        {/* Description */}
        <p className="font-display text-muted leading-relaxed text-sm mb-10 max-w-lg">
          {event.description}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-6 border-t border-[0.5px] border-gold/10 pt-8 mb-10">
          <MetaItem label="Date" value={formatDate(event.date)} />
          <MetaItem label="Time" value={event.timeRange} />
          <MetaItem label="Venue" value={event.venue} />
          <MetaItem label="Format" value={event.format} />
          <MetaItem label="City" value={event.city} />
          <MetaItem label="Access" value="Open to Members & Guests" />
        </div>

        {/* RSVP */}
        <a
          href={event.rsvpUrl}
          target={event.rsvpUrl !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-display text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-light transition-colors font-medium"
        >
          Reserve Your Seat →
        </a>
      </div>

      {/* Right */}
      <div className="col-span-12 lg:col-span-5 p-10 lg:p-16">
        <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted mb-8">
          Panelists
        </p>
        <div className="divide-y divide-[0.5px] divide-gold/10">
          {event.panelists.map((panelist) => (
            <div
              key={panelist.name}
              className="py-6 first:pt-0"
            >
              <p className="font-display font-semibold text-ink text-xl">
                {panelist.name}
              </p>
              <p className="font-display text-muted text-xs mt-1 leading-relaxed">
                {panelist.role}
              </p>
            </div>
          ))}
        </div>

        {event.coConvener && (
          <div className="mt-12 pt-8 border-t border-[0.5px] border-gold/10">
            <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted mb-3">
              Co-convened with
            </p>
            <p className="font-display text-ink text-2xl">
              {event.coConvener}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
