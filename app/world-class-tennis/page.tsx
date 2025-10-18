import Link from "next/link";
import Image from "next/image";

export default function WorldClassTennis() {
  return (
    <>
      {/* === PAGE HERO (uses tennis-action.jpg) === */}
      <section className="relative">
        <div className="relative h-[460px] md:h-[560px] w-full">
          <Image
            src="/tennis-action.jpg"
            alt="World-Class Tennis — Okap Open competition"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Brand gradient overlay for cohesion */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/18 to-[#0A5F59]/22" />
        </div>

        {/* Top content card (same structure as homepage hero card) */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative -mt-24 md:-mt-32 bg-white/95 backdrop-blur rounded-2xl p-6 md:p-9 shadow-lg border border-gray-200">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#0A5F59] tracking-tight">
              Okap Open 2025 — December 19–21 · Cap-Haïtien, Haiti
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
              Okap Open is the tennis & tourism showcase of Cap-Haïtien — where world-class competition meets culture, heritage, beaches, and nightlife.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm bg-[#0A5F59] text-white hover:bg-[#088C7E] transition-colors"
              >
                Register to Play
              </Link>
              <a
                href="https://www.eventbrite.com/e/okap-open-tickets-1841514301849"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition-colors"
              >
                Buy Tickets
              </a>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition-colors"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PAGE CONTENT === */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">World-Class Tennis</h2>
          <p className="text-gray-700 leading-relaxed">
            Okap Open transforms Cap-Haïtien’s energy into a stage for athletic excellence, where every serve
            carries pride and purpose. Our first edition sets a professional standard while opening pathways for Haitian talent.
          </p>
          <p className="text-gray-700 leading-relaxed">
            More than a tournament, Okap Open is a mission to uplift Haitian youth through sport — with mentorship,
            visibility, and a culture of discipline that builds champions on and off the court.
          </p>
        </section>

        {/* Tournament Format — add breathing room before this block */}
        <section className="space-y-6 mt-10">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0A5F59]">Tournament Format (1st Edition)</h3>

          {/* Quick facts cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Categories</p>
              <p className="mt-1 font-semibold text-gray-800">Men’s Singles · Women’s Singles</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Players per Category</p>
              <p className="mt-1 font-semibold text-gray-800">20</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Format</p>
              <p className="mt-1 font-semibold text-gray-800">Single-Elimination</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Event Length</p>
              <p className="mt-1 font-semibold text-gray-800">3 Days</p>
            </div>
          </div>

          {/* Day-by-day timeline */}
          <div className="mt-2 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0A5F59]">Day 1</p>
              <h4 className="mt-1 text-lg font-semibold">Preliminary Phase</h4>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                20 players start per category. Lose once, you’re out. Play down to the <strong>Top 8</strong>.
              </p>
              <div className="mt-3 rounded-lg bg-gray-50 p-3 font-mono text-xs text-gray-800">
                20 → 10 → <span className="font-semibold">Top 8 advance</span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0A5F59]">Day 2</p>
              <h4 className="mt-1 text-lg font-semibold">Final Phase</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Round of 16 (1/8 Final)</li>
                <li>Quarterfinals (1/4 Final)</li>
                <li>Semifinals (1/2 Final)</li>
              </ul>
              <div className="mt-3 rounded-lg bg-gray-50 p-3 font-mono text-xs text-gray-800">
                16 → 8 → 4 → <span className="font-semibold">2 Finalists</span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0A5F59]">Day 3</p>
              <h4 className="mt-1 text-lg font-semibold">Grand Finals</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>3rd Place Match (Men & Women)</li>
                <li>Championship Final (Men & Women)</li>
                <li>Awards & Closing Ceremony</li>
              </ul>
              <div className="mt-3 rounded-lg bg-gray-50 p-3 font-mono text-xs text-gray-800">
                <span className="font-semibold">Bronze Match</span> | <span className="font-semibold">Grand Final</span>
              </div>
            </div>
          </div>

          {/* Bracket-style visual (simple, responsive) */}
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="font-semibold text-gray-800">Bracket Overview</h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Start</p>
                <p className="font-semibold">Top 16</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-500">After R16</p>
                <p className="font-semibold">Quarterfinals (8)</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-500">After QF</p>
                <p className="font-semibold">Semifinals (4)</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Final</p>
                <p className="font-semibold">Championship (2)</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              *Men’s and Women’s categories run in separate brackets following the same schedule.
            </p>
          </div>
        </section>

        {/* Extra spacing before back link so it's not cramped */}
        <div className="pt-12 mt-10">
          <Link href="/" className="text-[#0A5F59] hover:underline">
            ← Back to Discover Cap-Haïtien
          </Link>
        </div>
      </main>
    </>
  );
}
