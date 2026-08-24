import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Thistle Network",
  description: "For Apprentices, by Apprentices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>

        <main id="top">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}

