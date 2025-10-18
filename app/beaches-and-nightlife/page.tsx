import Link from "next/link";
import Image from "next/image";

export default function BeachesAndNightlife() {
  return (
    <>
      {/* === PAGE HERO (uses cap-beach.jpg) === */}
      <section className="relative">
        <div className="relative h-[460px] md:h-[560px] w-full">
          <Image
            src="/cap-beach.jpg"
            alt="Cap-Haïtien coastline — Beaches & Nightlife"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/18 to-[#0A5F59]/22" />
        </div>

        {/* Top content card */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative -mt-24 md:-mt-32 bg-white/95 backdrop-blur rounded-2xl p-6 md:p-9 shadow-lg border border-gray-200">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#0A5F59] tracking-tight">
              Okap Open 2025 — December 19–21 · Cap-Haïtien, Haiti
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
              Okap Open is the tennis & tourism showcase of Cap-Haïtien — where world-class competition meets culture, heritage, beaches, and nightlife.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/players" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm bg-[#0A5F59] text-white hover:bg-[#088C7E] transition-colors">Register to Play</Link>
              <a href="https://www.eventbrite.com/e/okap-open-tickets-1841514301849" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition-colors">Buy Tickets</a>
              <Link href="/partners" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition-colors">Become a Sponsor</Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PAGE CONTENT === */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-8">
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Beaches & Nightlife</h2>

          <p className="text-gray-700 leading-relaxed">
            Beyond the courts, Cap-Haïtien opens its heart through sun, sea, and sound. Here, paradise isn’t a concept — it’s a daily rhythm. Between the waves and the music, visitors discover the warmth and creativity that make northern Haiti one of the Caribbean’s hidden gems. Okap Open invites you to explore that rhythm — where relaxation and celebration flow together in perfect balance.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">Belly Beach — The Local Favorite</h3>
          <p className="text-gray-700 leading-relaxed">
            Just minutes from downtown, <strong>Belly Beach</strong> offers calm turquoise water and soft golden sand — a peaceful escape framed by mountains and palm trees. Locals and visitors gather to swim, unwind, and share laughter over grilled seafood and chilled drinks. The air carries the scent of the sea and the sound of joy.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">Cormier Beach — Elegance by the Shore</h3>
          <p className="text-gray-700 leading-relaxed">
            A few kilometers west, <strong>Cormier Beach Resort</strong> blends Caribbean charm with quiet sophistication. Its beachfront restaurant and boutique hotel attract travelers from around the world. Whether a morning swim, a beachside lunch, or a sunset cocktail, Cormier embodies the refined yet laid-back spirit of the north coast.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">Cadras Beach — Hidden Escape</h3>
          <p className="text-gray-700 leading-relaxed">
            For those seeking tranquility, <strong>Cadras Beach</strong> is the perfect hideaway. Its untouched coastline offers privacy, peace, and panoramic views of the bay. Locals call it one of the north’s best-kept secrets — a place where you can still hear the whispers of the sea and feel Haiti’s natural beauty.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">A Taste of the City — Food, Music & Culture</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Lakay Restaurant</strong> — A local landmark by the sea, famous for lobster, grilled fish, and live music under the stars.</li>
            <li><strong>Boukanye</strong> — Equal parts restaurant and beach club, mixing elegance and fun with a modern Caribbean flair.</li>
            <li><strong>Cap Deli</strong> — A cozy favorite for breakfast by the harbor or cocktails at dusk — the perfect spot to feel Cap-Haïtien’s rhythm.</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">Nightlife — The Rhythm of Okap</h3>
          <p className="text-gray-700 leading-relaxed">
            As night falls, Cap-Haïtien glows. From seaside lounges to open-air bars, music flows through the streets — Kompa, Afrobeats, reggae, and Haitian fusion beats. Strangers dance like friends, and laughter fills the air. Okap Open embraces this energy — reminding the world that Haiti’s heartbeat lives not only in its history, but in its music and its nights by the sea.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">The Spirit of the North</h3>
          <p className="text-gray-700 leading-relaxed">
            Cap-Haïtien’s beaches and nightlife are not just leisure — they are expressions of identity. They show the world that Haiti is alive, creative, and welcoming. From the sand to the stage, Okap Open celebrates this spirit — the beauty of a nation that shines brightest when it’s free to enjoy itself.
          </p>
        </section>

        <div className="pt-12 mt-10">
          <Link href="/" className="text-[#0A5F59] hover:underline">
            ← Back to Discover Cap-Haïtien
          </Link>
        </div>
      </main>
    </>
  );
}
