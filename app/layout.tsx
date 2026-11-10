import type { Metadata } from "next";
import "./globals.css";
import { asset } from "@/lib/assets";

const description =
  "Explore how 100 cities in 47 countries rank in education, the labor market, and digital technologies. Download the complete 2026 report.";

export const metadata: Metadata = {
  title: "City Human Potential Ranking 2026",
  description,
  icons: { icon: asset("/favicon.svg") },
  openGraph: {
    title: "City Human Potential Ranking 2026",
    description,
    type: "website",
    images: [{ url: asset("/media/report-cover.webp"), alt: "City Human Potential Ranking 2026 report cover" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Human Potential Ranking 2026",
    description,
    images: [asset("/media/report-cover.webp")],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body id="top">{children}</body>
    </html>
  );
}
