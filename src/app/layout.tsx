import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { site } from "@/lib/content";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const letterSerif = Newsreader({
  variable: "--font-letter-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const letterSans = Inter({
  variable: "--font-letter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  // Update once a real domain is live — needed for OG/Twitter image URLs to resolve correctly.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.name} — Builder. Future policymaker.`,
  description:
    "I build AI products and think about how institutions should work. This is a letter, not a resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${letterSerif.variable} ${letterSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <PageTransition>{children}</PageTransition>
        </MotionConfig>
      </body>
    </html>
  );
}
