import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Great Coffee | Artisan Roasters",
  description: "Discover exceptional coffee roasted with passion. Single-origin beans, expert roasting, and a warm community space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased`}
    >
      <ClientProviders>
        <body className="min-h-full flex flex-col bg-surface">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </ClientProviders>
    </html>
  );
}
