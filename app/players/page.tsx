import Image from "next/image";

export default function PlayersPage() {
  return (
    <>
      {/* HERO — matches homepage look */}
      <section className="relative">
        <div className="relative h-[360px] md:h-[460px] w-full">
          <Image
            src="/players-banner.jpg?v=2" // rename or use ?v=2 to bust cache
            alt="Players — Okap Open"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 via-[#11A37F]/18 to-[#0A5F59]/22" />
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative -mt-20 md:-mt-28 bg-white/95 backdrop-blur rounded-2xl p-6 md:p-9 shadow-lg border border-gray-200">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#0A5F59] tracking-tight">
              Play the Okap Open — Be Part of History
            </h1>
            <p className="mt-3 text-gray-700">
              Registration is <strong>free</strong> for the inaugural edition (Dec 19–21, 2025).
            </p>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="font-semibold text-lg">Who Can Participate</h2>
            <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-1">
              <li>Local players from clubs across Haiti</li>
              <li>Diaspora players (U.S., Canada, Caribbean, Europe)</li>
              <li>International players seeking competition & culture</li>
            </ul>
            <p className="mt-3 text-gray-700"><strong>Divisions:</strong> Men’s Singles, Women’s Singles</p>
            <p className="text-gray-700"><strong>Minimum age:</strong> 16 years</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="font-semibold text-lg">Key Dates</h2>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li><strong>Registration closes:</strong> December 5, 2025</li>
              <li><strong>Player check-in:</strong> December 18, 2025</li>
              <li><strong>Tournament:</strong> December 19–21, 2025</li>
            </ul>
          </div>
        </div>

        {/* REGISTRATION FORM */}
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm mt-10">
          <h2 className="font-semibold text-lg">Registration Form</h2>
          <p className="text-gray-600 text-sm">
            No entry fee for the first edition. Selected players will receive email confirmation.
          </p>

          <form
            className="mt-6 grid md:grid-cols-2 gap-4"
            method="POST"
            action="https://formspree.io/f/xblzwzgz"
          >
            {/* Formspree helpers */}
            <input type="hidden" name="_subject" value="New Player Registration — Okap Open" />
            <p className="hidden">
              <label>Leave this field empty: <input name="company_website" /></label>
            </p>

            <input name="fullName" placeholder="Full Name" className="border rounded-xl px-4 py-3" required />
            <input name="dob" placeholder="Date of Birth (YYYY-MM-DD)" className="border rounded-xl px-4 py-3" required />
            <input type="email" name="email" placeholder="Email" className="border rounded-xl px-4 py-3" required />
            <input name="phone" placeholder="WhatsApp / Phone" className="border rounded-xl px-4 py-3" required />
            <select name="division" className="border rounded-xl px-4 py-3" required>
              <option value="">Division</option>
              <option>Men’s Singles</option>
              <option>Women’s Singles</option>
            </select>
            <input name="nationality" placeholder="Nationality / City of Residence" className="border rounded-xl px-4 py-3" />
            <input name="arrival" placeholder="Arrival Date (YYYY-MM-DD)" className="border rounded-xl px-4 py-3" />
            <select name="pickup" className="border rounded-xl px-4 py-3">
              <option value="">Need airport pickup?</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <textarea name="message" placeholder="Message to organizers (optional)" className="md:col-span-2 border rounded-xl px-4 py-3 min-h-[120px]" />
            <label className="md:col-span-2 flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" required /> I agree to the event’s Player Code of Conduct.
            </label>
            <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm bg-[#0A5F59] text-white hover:bg-[#088C7E] transition-colors">
              Submit My Registration
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
