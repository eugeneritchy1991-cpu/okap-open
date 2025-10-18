import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  // ✅ Use your live domain for correct absolute URLs in OG/Twitter
  metadataBase: new URL("https://www.okapopen.com"),
  title: "Okap Open — Cap-Haïtien Tennis & Culture (Dec 19–21, 2025)",
  description:
    "Premier tennis & tourism event in Cap-Haïtien. Player registration and partnership opportunities.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Okap Open 2025 — Dec 19–21 · Cap-Haïtien, Haiti",
    description:
      "Where sport meets culture. Where Haiti meets the world. Register to play or partner with us.",
    url: "https://www.okapopen.com",
    siteName: "Okap Open",
    images: [
      {
        url: "/okap-social-banner.jpg",
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
      <body className={poppins.className}>
        {/* Header / Navbar */}
        <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo and title */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Okap Open 2025 Logo"
                width={50}
                height={50}
                priority
              />
              <span className="text-2xl font-bold text-[#0A5F59] tracking-tight">
                Okap Open 2025
              </span>
            </Link>

            {/* Navigation links */}
            <div className="flex items-center gap-8">
              <a
                href="https://www.eventbrite.com/e/okap-open-tickets-1841514301849?aff=oddtdtcreator&utm_source=site&utm_medium=nav&utm_campaign=okapopen2025"
                target="_blank"
                rel="noreferrer"
                className="text-[16px] font-semibold text-[#0A5F59] hover:text-[#088C7E] transition-colors"
              >
                Tickets
              </a>
              <Link
                href="/players"
                className="text-[16px] font-semibold text-[#0A5F59] hover:text-[#088C7E] transition-colors"
              >
                Players
              </Link>
              <Link
                href="/partners"
                className="text-[16px] font-semibold text-[#0A5F59] hover:text-[#088C7E] transition-colors"
              >
                Sponsors &amp; Partners
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>
              © 2025{" "}
              <a
                href="https://instagram.com/psn_entertainment"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0A5F59] hover:text-[#088C7E]"
              >
                PSN Entertainment
              </a>{" "}
              · Okap Open
            </p>
            <div className="flex gap-5">
              <a
                href="https://www.eventbrite.com/e/okap-open-tickets-1841514301849?aff=oddtdtcreator&utm_source=site&utm_medium=footer&utm_campaign=okapopen2025"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#088C7E]"
              >
                Buy Tickets
              </a>
              <Link href="/players" className="hover:text-[#088C7E]">
                Register
              </Link>
              <Link href="/partners" className="hover:text-[#088C7E]">
                Partner
              </Link>
              <a
                href="https://instagram.com/okap_open"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#088C7E]"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WP192P4B4H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WP192P4B4H');
            `,
          }}
        />
      </body>
    </html>
  );
}
