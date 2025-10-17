import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO — full-width image with gradient overlay */}
      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] w-full">
          <Image
            src="/hero-banner.jpg"
            alt="Okap Open — Cap-Haïtien coastal tennis atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* subtle brand gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/20 to-[#0A5F59]/25" />
        </div>

        {/* Hero content */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative -mt-24 md:-mt-32 bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0A5F59]">
              Okap Open 2025 - December 19–21 · Cap-Haïtien, Haiti
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Where sport meets culture. Where Haiti meets the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm bg-[#0A5F59] text-white hover:bg-[#073A36] transition"
              >
                Register to Play
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">What Is the Okap Open?</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Okap Open</strong> is more than a tennis tournament — it’s a movement.
          Born from a vision to make <strong>Cap-Haïtien the Capital of Tennis in the Caribbean</strong>,
          the event unites athletes, fans, and travelers from Haiti, the diaspora, and around the world.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For three days, the city becomes a stage where competition meets celebration —
          international-level tennis by day, and culture, music, and hospitality by night.
          Explore the Citadelle Laferrière, the Palais Sans-Souci, and Milot’s historic charm,
          then unwind on Cap-Haïtien’s beaches and vibrant nightlife.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Whether you’re a player, partner, or spectator, this is your invitation to witness history in motion.
          Come play. Come explore. Come experience Okap Open.
        </p>
      </section>

      {/* FEATURE IMAGES — Tennis / Citadelle / Beach */}
      <section className="bg-[#FFF8EC]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Discover Cap-Haïtien</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Tennis action */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/tennis-action.jpg"
                alt="Tennis action at the Okap Open"
                width={1200}
                height={900}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">World-Class Tennis</h3>
                <p className="mt-1 text-gray-700 text-sm">
                  Players from Haiti, the diaspora, and abroad compete at international standards.
                </p>
              </div>
            </div>

            {/* Citadelle */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/citadelle.jpg"
                alt="Citadelle Laferrière — heritage and pride"
                width={1200}
                height={900}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Heritage & Pride</h3>
                <p className="mt-1 text-gray-700 text-sm">
                  Visit the Citadelle and Sans-Souci — icons of Haitian history.
                </p>
              </div>
            </div>

            {/* Beach */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/cap-beach.jpg"
                alt="Cap-Haïtien beach — relax after the matches"
                width={1200}
                height={900}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Beaches & Nightlife</h3>
                <p className="mt-1 text-gray-700 text-sm">
                  Unwind on white-sand beaches and enjoy vibrant local nightlife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Our Mission</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            "Elevate Haitian tennis to international standards.",
            "Promote Cap-Haïtien as a global tourism destination.",
            "Create opportunities for athletes, youth, and local businesses.",
            "Unite the Haitian diaspora and international visitors around a shared cultural experience.",
            "Build a legacy — an annual December tradition that grows in prestige year after year.",
          ].map((item) => (
            <li
              key={item}
              className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Event Highlights</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Dates</h3>
            <p className="text-gray-700">December 19–21, 2025</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-700">Cap-Haïtien, Haiti</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Divisions</h3>
            <p className="text-gray-700">Men’s Singles · Women’s Singles</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Admission</h3>
            <p className="text-gray-700">Free to watch · Free to play (first edition)</p>
          </div>
        </div>
      </section>
    </>
  );
}
