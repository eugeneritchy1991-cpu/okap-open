import Image from "next/image";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF9] px-6 py-16">
      <div className="max-w-2xl text-center bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Okap Open Logo"
            width={80}
            height={80}
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A5F59]">
          Thank You for Connecting with Okap Open!
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We’ve successfully received your submission. Our team will review your
          message and follow up within <strong>24 hours</strong>.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Until then, feel free to explore more about the tournament, our mission, and
          upcoming news.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm bg-[#0A5F59] text-white hover:bg-[#073A36] transition"
          >
            Back to Home
          </Link>
          <Link
            href="/players"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition"
          >
            Register Another Player
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm border border-[#0A5F59] text-[#0A5F59] hover:bg-[#0A5F59] hover:text-white transition"
          >
            Partner With Us
          </Link>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>© 2025 PSN Entertainment · Okap Open</p>
        </div>
      </div>
    </section>
  );
}
