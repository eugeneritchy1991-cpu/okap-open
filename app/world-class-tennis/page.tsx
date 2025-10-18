import Link from "next/link";
import Image from "next/image";

export default function WorldClassTennis() {
  return (
    <>
      {/* === SAME HERO AS HOMEPAGE === */}
      <section className="relative">
        <div className="relative h-[460px] md:h-[560px] w-full">
          <Image
            src="/hero-cap-haitien.jpg?v=3"
            alt="Okap Open — Cap-Haïtien coastal tennis atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/18 to-[#0A5F59]/22" />
        </div>

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
                href="https://www.eventbrite.com/e/okap-open-tickets-1841514301849?aff=oddtdtcreator&utm_source=site&utm_medium=hero&utm_campaign=okapopen2025"
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

      {/* === PAGE-SPECIFIC BANNER (REUSE SAME IMAGE AS HOMEPAGE CARD) === */}
      <section className="relative">
        <div className="relative h-[420px] w-full">
          <Image
            src="/tennis-action.jpg"
            alt="World-Class Tennis — Okap Open competition"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A5F59]/60 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl md:text-5xl font-bold">World-Class Tennis</h2>
            <p className="mt-2 text-lg text-white/90 max-w-2xl">
              Where passion meets purpose — the next chapter for Haitian sport.
            </p>
          </div>
        </div>
      </section>

      {/* === CONTENT === */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Where Passion Builds Legacy</h3>
          <p className="text-gray-700 leading-relaxed">
            The <strong>Okap Open</strong> transforms Cap-Haïtien’s energy into a stage for athletic excellence,
            where every serve carries pride and purpose. Our goal is to prove that world-class competition can
            thrive on Haitian soil.
          </p>
          <p className="text-gray-700 leading-relaxed">
            More than a tournament, the Okap Open is a mission to uplift Haitian youth through sport. By introducing
            professional standards, mentorship, and visibility, we open pathways for the next generation of players,
            coaches, and organizers. Here, discipline meets opportunity — under the Caribbean sun.
          </p>
        </section>

        <section className="space-y-4">
          <h4 className="text-xl md:text-2xl font-semibold text-[#0A5F59]">Tournament Format (1st Edition)</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Men’s Singles: 20 players</li>
            <li>Women’s Singles: 20 players</li>
            <li>Day 1 – Preliminary Phase: Single-elimination to determine Top 8</li>
            <li>Day 2 – Final Phase: Round of 16 → Quarterfinals → Semifinals</li>
            <li>Day 3 – Grand Finals: 3rd Place Matches & Championship Finals</li>
          </ul>

          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-800">
{`DAY 1: PRELIMINARY
20 Players → 10 Winners → Top 8 Advance

DAY 2: FINAL PHASE
8 → 4 → 2 → Finalists

DAY 3: GRAND FINALS
3rd Place Match  |  Grand Final (Men & Women)`}
          </div>
        </section>

        <div className="pt-6">
          <Link href="/" className="text-[#0A5F59] hover:underline">
            ← Back to Discover Cap-Haïtien
          </Link>
        </div>
      </main>
    </>
  );
}
