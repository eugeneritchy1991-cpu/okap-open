import Link from "next/link";
import Image from "next/image";

export default function HeritageAndPride() {
  return (
    <>
      {/* === PAGE HERO (uses citadelle.jpg) === */}
      <section className="relative">
        <div className="relative h-[460px] md:h-[560px] w-full">
          <Image
            src="/citadelle.jpg"
            alt="Citadelle Laferrière — Heritage & Pride"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/18 to-[#0A5F59]/22" />
        </div>

        {/* Top content card (same as homepage hero) */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Heritage & Pride</h2>

          <p className="text-gray-700 leading-relaxed">
            Cap-Haïtien is more than a destination — it is a living chronicle of Haiti’s greatness. From its cobblestone streets to the rhythm of its people, this city carries the spirit of a nation that changed the course of world history. Okap Open honors that legacy, turning the same land that once witnessed revolution into a new arena of excellence, unity, and pride.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">The Foundation of Cap-Haïtien (1670 – 1803)</h3>
          <p className="text-gray-700 leading-relaxed">
            Founded in 1670 by French colonists and originally named <em>Cap-Français</em>, Cap-Haïtien quickly rose to prominence as the “Paris of the Caribbean.” With elegant architecture, thriving trade, and a flourishing cultural life, it became one of the most refined cities in the New World. But beneath that refinement, the seeds of liberation were growing — dreams of freedom that would soon transform the city forever.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">Revolution & Independence (1803 – 1804)</h3>
          <p className="text-gray-700 leading-relaxed">
            Cap-Haïtien became the heart of the Haitian Revolution. Near here, at <strong>Vertières</strong>, General <strong>Jean-Jacques Dessalines</strong> led the final victory over the French in November 1803, paving the way for independence. Heroes like <strong>Henri Christophe</strong> and <strong>Capois-la-Mort</strong> showed that courage and sacrifice could overcome empires — values Okap Open seeks to inspire through sport today.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">The Kingdom of Henri Christophe (1807 – 1820)</h3>
          <p className="text-gray-700 leading-relaxed">
            After independence, King Henri Christophe established Cap-Haïtien — then called <em>Cap-Henri</em> — as his capital. He built the <strong>Citadelle Laferrière</strong> and the <strong>Sans-Souci Palace</strong>, symbols of power, pride, and architectural brilliance. These monuments prove that Haiti’s greatness was never defined by size, but by vision — a spirit Okap Open carries forward today.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">Modern Cap-Haïtien — Culture, Faith & Resilience</h3>
          <p className="text-gray-700 leading-relaxed">
            Today, Cap-Haïtien remains a city of balance — where history meets progress, and tradition dances with modern life. The city celebrates faith and freedom through its festivals: <em>Fèt Vertières</em>, <em>Notre Dame de l’Assomption</em>, and Carnival, moments when Haitians unite in pride and gratitude. The same strength that built fortresses now fuels creativity, innovation, and community.
          </p>

          <h3 className="text-xl font-semibold text-[#0A5F59] mt-10">From Yesterday to Tomorrow</h3>
          <p className="text-gray-700 leading-relaxed">
            From 1670 to 2025, Cap-Haïtien has been a symbol of courage, elegance, and rebirth. Okap Open extends that heritage into a new chapter — where excellence on the court reflects the excellence of a people. Every serve, every rally, every cheer is a celebration of Haiti’s unbreakable spirit — proof that the same soil that birthed freedom now nurtures greatness once again.
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
