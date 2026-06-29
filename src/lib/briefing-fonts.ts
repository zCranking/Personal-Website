import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

export const briefingSans = Space_Grotesk({
  variable: "--font-brief-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const briefingMono = JetBrains_Mono({
  variable: "--font-brief-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
