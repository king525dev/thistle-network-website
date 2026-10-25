import type { Metadata } from "next";
import NavBar from "../layout/NavBar";
import { getSiteContent } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thistle.network"),
  title: {
    default: "Thistle Network | Scottish Apprentice Community",
    template: "%s | Thistle Network",
  },
  description:
    "Thistle Network is a community-led network connecting current and aspiring apprentices across Scotland.",
  openGraph: {
    title: "Thistle Network | Scottish Apprentice Community",
    description: "Connecting current and aspiring apprentices across Scotland.",
    siteName: "Thistle Network",
    locale: "en_GB",
    type: "website",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = await getSiteContent();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout, not pages/_document */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <NavBar site={site} />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
