import type { Metadata } from "next";
import "./globals.css";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

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
        {/* <Navbar /> */}

        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}

