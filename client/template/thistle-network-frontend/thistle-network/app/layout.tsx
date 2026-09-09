import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/mock/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thistlenetwork.org"),
  title: {
    default: `${siteConfig.organisationName} | Connecting Apprentices Across Scotland`,
    template: `%s | ${siteConfig.organisationName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.organisationName} | Connecting Apprentices Across Scotland`,
    description: siteConfig.description,
    siteName: siteConfig.organisationName,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          next/font/google requires outbound access to fonts.googleapis.com
          at build time. Using plain <link> tags here instead keeps the
          MVP buildable in restricted/offline environments; switch to
          next/font/google once the deployment target has normal internet
          access, for automatic self-hosting and better performance.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout, not pages/_document */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
