import Image from "next/image";

export default function PartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[320px] md:h-[420px] w-full">
          <Image
            src="/partnership-banner.jpg"
            alt="Sponsors & Partners — Okap Open"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/15 via-[#11A37F]/15 to-[#0A5F59]/20" />
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative -mt-20 md:-mt-28 bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0A5F59]">
              Partner with the Okap Open — Build the Legacy
            </h1>
            <p className="mt-3 text-gray-700">
              Join a first-year platform that unites sport, tourism, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Visibility & Brand Reach","Feature your brand across event materials, digital campaigns, press releases, and diaspora promotions."],
            ["Economic Impact","Drive bookings, transportation use, and local business revenue throughout the city."],
            ["Activation Opportunities","Engage visitors through booths, fan zones, hospitality lounges, and special experiences."],
          ].map(([title,desc]) => (
            <div key={title} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm mt-10">
          <h2 className="font-semibold text-lg">Sponsorship & Partnership Opportunities</h2>
          <p className="mt-2 text-gray-700">
            We offer <strong>customized sponsorships</strong> aligned to your brand’s goals and level of engagement.
            Our team will tailor packages that reflect your desired visibility, audience reach, and activation scope.
          </p>
          <ul className="mt-4 list-disc ml-5 text-gray-700 space-y-1">
            <li><strong>Official Sponsors</strong> — premium visibility across venues, press materials, and digital campaigns.</li>
            <li><strong>Gold Sponsors</strong> — prominent media and event integration with featured logo placement and VIP access.</li>
            <li><strong>Silver Sponsors</strong> — inclusion in digital promotions and social visibility.</li>
            <li><strong>In-Kind Partners</strong> — essential support such as transportation, logistics, hospitality, or product supply.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            To receive our detailed <strong>Sponsorship Framework and Agreement</strong>, please complete the inquiry form below.
            Our Partnerships Team will contact you within 24 hours.
          </p>
        </div>

        {/* INQUIRY FORM */}
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm mt-10">
          <h2 className="font-semibold text-lg">Sponsor / Partner Inquiry</h2>

          <form
            className="mt-6 grid md:grid-cols-2 gap-4"
            method="POST"
            action="https://formspree.io/f/xjkalayj"
          >
            {/* Formspree helpers */}
            <input type="hidden" name="_subject" value="New Sponsor/Partner Inquiry — Okap Open" />
            <p className="hidden">
              <label>Leave this field empty: <input name="company_website" /></label>
            </p>

            <input name="company" placeholder="Company / Brand Name" className="border rounded-xl px-4 py-3" required />
            <input name="website" placeholder="Website / Instagram" className="border rounded-xl px-4 py-3" />
            <input name="contactName" placeholder="Contact Name" className="border rounded-xl px-4 py-3" required />
            <input name="role" placeholder="Position / Role" className="border rounded-xl px-4 py-3" />
            <input type="email" name="email" placeholder="Email Address" className="border rounded-xl px-4 py-3" required />
            <input name="phone" placeholder="Phone / WhatsApp" className="border rounded-xl px-4 py-3" required />
            <select name="interest" className="border rounded-xl px-4 py-3 md:col-span-2" required>
              <option value="">Area of Interest</option>
              <option>Sponsorship — Official</option>
              <option>Sponsorship — Gold</option>
              <option>Sponsorship — Silver</option>
              <option>In-Kind Partnership</option>
              <option>Hotel</option>
              <option>Airline</option>
              <option>Transport</option>
              <option>Telecom</option>
              <option>Bank</option>
              <option>Media</option>
              <option>Other</option>
            </select>
            <textarea name="message" placeholder="Message / Goals / Notes" className="md:col-span-2 border rounded-xl px-4 py-3 min-h-[120px]" />
            <label className="md:col-span-2 flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" required /> I agree to be contacted by the Okap Open Partnerships Team.
            </label>
            <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm bg-[#0A5F59] text-white hover:bg-[#073A36] transition">
              Send My Partnership Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
