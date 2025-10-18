import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO — full-width image with brand gradient and content card */}
      <section className="relative">
        {/* Background image */}
        <div className="relative h-[460px] md:h-[560px] w-full">
          <Image
            src="/hero-cap-haitien.jpg?v=3"
            alt="Okap Open — Cap-Haïtien coastal tennis atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Brand gradient overlay for cohesion with header */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/18 to-[#0A5F59]/22" />
        </div>

        {/* Content card */}
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

      {/* WHAT IS OKAP OPEN */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">What Is Okap Open?</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Okap Open</strong> is more than a tennis tournament — it’s a movement to make
          <strong> Cap-Haïtien the Capital of Tennis in the Caribbean</strong>. The event unites athletes,
          fans, and travelers from Haiti, the diaspora, and around the world.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For three days, the city becomes a stage where competition meets celebration — international-level tennis by day,
          and culture, music, and hospitality by night. Explore the Citadelle Laferrière and Palais Sans-Souci,
          then unwind on Cap-Haïtien’s beaches and vibrant nightlife.
        </p>
      </section>

      {/* FEATURE IMAGES — Tennis / Citadelle / Beach */}
      <section className="bg-[#FFF8EC]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A5F59]">Discover Cap-Haïtien</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Tennis action */}
            <Link
              href="/world-class-tennis"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A5F59]"
            >
              <Image
                src="/tennis-action.jpg"
                alt="World-Class Tennis"
                width={1200}
                height={900}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-semibold">World-Class Tennis</h3>
                <p className="mt-1 text-gray-700 text-sm">
                  Players from Haiti, the diaspora, and abroad compete at international standards.
                </p>
              </div>
            </Link>

            {/* Citadelle */}
            <Link
              href="/heritage-and-pride"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A5F59]"
            >
              <Image
                src="/citadelle.jpg"
                alt="Heritage & Pride"
                width={1200}
                height={900}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-semibold">Heritage & Pride</h3>
                <p className="mt-1 text-gray-700 text-sm">
                  Visit the Citadelle and Sans-Souci — icons of Haitian history.
                </p>
              </div>
            </Link>

            {/* Beach */}
            <Link
              href="/beaches-and-nightlife"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A5F59]"
            >
              <Image
                src="/cap-beach.jpg"
                alt="Beaches & Nightlife"
                width={1200}
                height={900}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-semibold">Beaches & Nightlife</h3>
                <p className="mt-1 text-gray-700 text-sm">
                  Unwind on white-sand beaches and enjoy vibrant local nightlife.
                </p>
              </div>
            </Link>
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
            <h3 className="font-semibold">Spectator Admission</h3>
            <p className="text-gray-700">
              $10 (1-Day Pass) via Eventbrite.
            </p>
            <a
              href="https://www.eventbrite.com/e/okap-open-tickets-1841514301849?aff=oddtdtcreator&utm_source=site&utm_medium=highlights&utm_campaign=okapopen2025"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 mt-3 text-sm font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition-colors"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
