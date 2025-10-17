import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Okap Open — Cap-Haïtien Tennis & Culture (Dec 19–21, 2025)",
  description:
    "Premier tennis & tourism event in Cap-Haïtien. Player registration and partnership opportunities.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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

        <main>{children}</main>

        <footer className="mt-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© 2025 PSN Entertainment · Okap Open</p>
            <div className="flex gap-4">
              <Link href="/players" className="hover:underline">Register</Link>
              <Link href="/partners" className="hover:underline">Partner</Link>
              <a href="https://instagram.com/okap_open" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
