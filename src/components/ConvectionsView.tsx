"use client";

import { useState } from "react";
import Image from "next/image";
import type { KonaEvent } from "@/lib/notion";

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

function formatShortDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  } catch {
    return dateStr;
  }
}

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

/* ── Detail view (shown when a card/row is clicked) ── */

function EventDetail({ event, onBack }: { event: KonaEvent; onBack: () => void }) {
  return (
    <section className="border-b border-[0.5px] border-gold/10">
      <button
        onClick={onBack}
        className="px-10 lg:px-16 pt-8 font-display text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-2"
      >
        ← Back to Convections
      </button>


      <div className="grid grid-cols-12">
        {/* Left */}
        <div className="col-span-12 lg:col-span-7 p-10 lg:p-16 border-b border-[0.5px] border-gold/10 lg:border-b-0 lg:border-r">
          {event.documentaryAnchor && (
            <div className="mb-8">
              <p className="font-display text-[9px] tracking-[0.15em] uppercase text-muted mb-2">
                Anchored in the documentary
              </p>
              <p className="font-display text-gold-light text-lg">
                {event.documentaryAnchor}
              </p>
            </div>
          )}

          <h2
            className="font-display font-normal text-ink leading-none mb-3"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {event.title}
          </h2>
          <p className="font-display text-muted text-xl mb-8">{event.subtitle}</p>

          <p className="font-display text-muted leading-relaxed text-sm mb-10 max-w-lg">
            {event.description}
          </p>

          <div className="grid grid-cols-2 gap-6 border-t border-[0.5px] border-gold/10 pt-8 mb-10">
            <MetaItem label="Date" value={formatDate(event.date)} />
            <MetaItem label="Time" value={event.timeRange} />
            <MetaItem label="Venue" value={event.venue} />
            <MetaItem label="Format" value={event.format} />
            <MetaItem label="City" value={event.city} />
            <MetaItem label="Access" value="Open to Members & Guests" />
          </div>

          {event.status === "Upcoming" && event.rsvpUrl && event.rsvpUrl !== "#" && (
            <a
              href={event.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-light transition-colors font-medium"
            >
              Reserve Your Place →
            </a>
          )}
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-5 p-10 lg:p-16">
          <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted mb-8">
            Panelists
          </p>
          <div className="divide-y divide-[0.5px] divide-gold/10">
            {event.panelists.map((panelist) => (
              <div key={panelist.name} className="py-6 first:pt-0">
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
      </div>
    </section>
  );
}

/* ── Up Next card (summary only — clicks through to detail) ── */

function UpNextCard({ event, onClick }: { event: KonaEvent; onClick: () => void }) {
  return (
    <div>
      <h2 className="font-display font-bold text-[20px] text-ink mb-5">
        Up Next
      </h2>
      <button
        onClick={onClick}
        className="w-full text-left bg-white border border-warm rounded-xl shadow-sm overflow-hidden group cursor-pointer"
      >
        {/* Cover image — portrait 3:4 */}
        {event.coverImage ? (
          <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        ) : (
          <div
            className="w-full bg-warm flex items-center justify-center"
            style={{ aspectRatio: "3/4" }}
          >
            <span className="text-muted/40 text-6xl font-display">K</span>
          </div>
        )}

        {/* Card content */}
        <div className="px-[28px] py-[30px]">
          {/* Status pill */}
          {event.status && (
            <div className="mb-4">
              <span className="bg-ink text-gold-light text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full">
                {event.status}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="font-display font-bold text-[28px] leading-tight text-ink mb-2 group-hover:text-gold transition-colors">
            {event.title}
          </h3>

          {/* Subtitle */}
          {event.subtitle && (
            <p className="font-display text-[15px] text-muted mb-5">
              {event.subtitle}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-display text-muted">
            {event.date && <span>{formatDate(event.date)}</span>}
            {event.timeRange && (
              <>
                <span className="text-warm">|</span>
                <span>{event.timeRange}</span>
              </>
            )}
            {event.venue && (
              <>
                <span className="text-warm">|</span>
                <span>{event.venue}</span>
              </>
            )}
            {event.city && (
              <>
                <span className="text-warm">|</span>
                <span>{event.city}</span>
              </>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

/* ── Past row with accordion ── */

function PastRow({
  event,
  isOpen,
  onToggle,
  onSelect,
}: {
  event: KonaEvent;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: () => void;
}) {
  return (
    <div className="border-b border-warm last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-4 text-left hover:bg-warm/30 transition-colors px-1"
      >
        {/* Thumbnail */}
        {event.coverImage ? (
          <div className="relative flex-shrink-0 w-[56px] h-[72px] rounded overflow-hidden">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-[56px] h-[72px] rounded bg-warm flex items-center justify-center">
            <span className="text-muted/30 text-lg font-display">K</span>
          </div>
        )}

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-[16px] text-ink leading-snug truncate">
            {event.title}
          </p>
          <p className="font-display text-[13px] text-muted mt-0.5">
            {formatShortDate(event.date)}
            {event.city && <> &middot; {event.city}</>}
          </p>
        </div>

        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion content */}
      {isOpen && (
        <div className="px-1 pb-5 pl-[76px]">
          {event.description && (
            <p className="font-display text-[14px] text-ink leading-relaxed mb-3">
              {event.description}
            </p>
          )}
          {event.coConvener && (
            <p className="font-display text-[13px] text-muted mb-3">
              Hosted by <span className="font-medium text-ink">{event.coConvener}</span>
            </p>
          )}
          <button
            onClick={onSelect}
            className="inline-flex items-center gap-1 font-display text-[13px] font-medium text-gold hover:text-gold-light transition-colors"
          >
            View full details <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Main view ── */

export default function ConvectionsView({
  featured,
  past,
}: {
  featured: KonaEvent;
  past: KonaEvent[];
}) {
  const [selected, setSelected] = useState<KonaEvent | null>(null);
  const [openPastId, setOpenPastId] = useState<string | null>(null);

  if (selected) {
    return <EventDetail event={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
      {/* Left — Up Next */}
      <UpNextCard event={featured} onClick={() => setSelected(featured)} />

      {/* Right — Past */}
      <div>
        <h2 className="font-display font-bold text-[20px] text-ink mb-5">
          Past
        </h2>
        {past.length === 0 ? (
          <p className="font-display text-[14px] text-muted italic">
            No past conventions yet.
          </p>
        ) : (
          <div>
            {past.map((event) => (
              <PastRow
                key={event.id}
                event={event}
                isOpen={openPastId === event.id}
                onToggle={() =>
                  setOpenPastId(openPastId === event.id ? null : event.id)
                }
                onSelect={() => setSelected(event)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
