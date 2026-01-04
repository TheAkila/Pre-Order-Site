import type { Metadata } from "next";
import { Inter, Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lifting Social - Pre-Order Limited Edition Tee",
  description: "Built for Those Who Lift. Reserve your limited-edition T-shirt now.",
  keywords: ["Lifting Social", "gym apparel", "fitness clothing", "pre-order"],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#000000',
  openGraph: {
    title: "Lifting Social - Pre-Order Limited Edition Tee",
    description: "Built for Those Who Lift. Reserve your limited-edition T-shirt now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${ibmPlexSans.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
