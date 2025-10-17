import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Okap Open — Cap-Haïtien Tennis & Culture (Dec 19–21, 2025)",
  description:
    "Premier tennis & tourism event in Cap-Haïtien. Player registration and partnership opportunities.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Okap Open 2025 — Dec 19–21 · Cap-Haïtien, Haiti",
    description:
      "Where sport meets culture. Where Haiti meets the world. Register to play or partner with us.",
    url: "https://okap-open.vercel.app", // optional: replace with your final custom domain later
    siteName: "Okap Open",
    images: [
      {
        url: "/okap-social-banner.jpg", // put this file in /public
        width: 1200,
        height: 630,
        alt: "Okap Open 2025 — Cap-Haïtien Tennis & Culture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Okap Open 2025 — Dec 19–21 · Cap-Haïtien",
    description:
      "The tennis & tourism showcase of Cap-Haïtien. Play, partner, experience.",
    images: ["/okap-social-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header / Nav */}
        <header className="border-b border-gray-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Okap Open 2025"
                width={44}
                height={44}
                priority
              />
              <span className="text-xl font-extrabold text-[#0A5F59]">
                Okap Open 2025
              </span>
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/players" className="hover:underline">
                Players
              </Link>
              <Link href="/partners" className="hover:underline">
                Sponsors & Partners
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© 2025 PSN Entertainment · Okap Open</p>
            <div className="flex gap-4">
              <Link href="/players" className="hover:underline">
                Register
              </Link>
              <Link href="/partners" className="hover:underline">
                Partner
              </Link>
              <a
                href="https://instagram.com/okap_open"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
