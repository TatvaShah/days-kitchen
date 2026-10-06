import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { getSiteUrl } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Day's Kitchen | Filipino Cuisine & Café in Scarborough",
  description:
    "Happiness is homemade. Filipino café, bakery, and catering at 2101 Brimley Rd and inside Freshland Supermarket on Tapscott Rd, Scarborough. Order on Uber Eats or ask about private events.",
  applicationName: "Day's Kitchen",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Day's Kitchen | Filipino Cuisine & Café",
    description:
      "Happiness is homemade. Filipino food, café favourites, and private events in Scarborough.",
    url: "/",
    siteName: "Day's Kitchen",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day's Kitchen | Filipino Cuisine & Café",
    description: "Happiness is homemade. Filipino food and catering in Scarborough.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
