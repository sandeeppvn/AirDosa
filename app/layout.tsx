import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AirDosa — Hot dosas, airborne.",
  description:
    "AirDosa griddles your dosa to order and flies it to your doorstep by drone. Crisp on arrival, every time.",
  metadataBase: new URL("https://airdosa.example"),
  openGraph: {
    title: "AirDosa — Hot dosas, airborne.",
    description:
      "Stone-ground batter, seared on a 250°C griddle, flown to you in minutes by autonomous drone.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
