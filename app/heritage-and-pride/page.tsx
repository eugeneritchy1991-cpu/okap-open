import Link from "next/link";
import Image from "next/image";

export default function HeritageAndPride() {
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

      {/* === PAGE-SPECIFIC BANNER === */}
      <section className="relative">
        <div className="relative h-[420px] w-full">
          <Image
            src="/citadelle.jpg"
            alt="Heritage & Pride — Citadelle Laferrière"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/70 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl md:text-5xl font-bold">Heritage & Pride</h2>
            <p className="mt-2 text-lg text-white/90 max-w-2xl">
              From King Henri Christophe to the Citadelle — our story lives on.
            </p>
          </div>
        </div>
      </section>

      {/* === CONTENT === */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">
            Rooted in Greatness, Rising with Purpose
          </h3>
          <p className="text-gray-700 leading-relaxed">
            From the <strong>Citadelle Laferrière</strong> to the <strong>Sans-Souci Palace</strong>,
            Cap-Haïtien stands as a living museum of courage, artistry, and independence. It was here that{" "}
            <strong>King Henri Christophe</strong> built monuments of freedom that continue to inspire the world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At the Okap Open, we honor this legacy by merging history with modern expression.
            The strength that once built castles now fuels creativity, sport, and unity.
            Every serve and every cheer echo the same message: Haiti’s pride is unshakable,
            and its story continues to rise.
          </p>
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
