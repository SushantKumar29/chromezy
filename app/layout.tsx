import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import BgOverlay from "./shared/ui/BgOverlay";
import { LazyMotion, domAnimation } from "framer-motion";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Metadata here because of the SEO reasons
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL! || "https://chromezy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chromezy - Digital Transformation Platform",
    template: "%s | Chromezy",
  },
  description: "We Engineer your Software Success & Digital Transformation.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Chromezy - Digital Transformation Platform",
    description: "We Engineer your Software Success & Digital Transformation.",
    url: siteUrl,
    siteName: "Chromezy",
    images: [
      {
        url: `${siteUrl}/assets/icons/logo-final.svg`,
        width: 800,
        height: 600,
        alt: "Chromezy",
      },
    ],
    locale: "en_US",
    alternateLocale: ["en_CA", "en_AU"],
    type: "website",
  },
  // Add content-language via alternates
  alternates: {
    languages: {
      en: "/",
      "en-CA": "/en-CA",
      "en-AU": "/en-AU",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body suppressHydrationWarning className={`${sora.variable} ${inter.variable} antialiased`}>
        <LazyMotion features={domAnimation}>
          <div className="relative min-h-screen w-full overflow-x-hidden text-primary">
            <div className="pointer-events-none fixed inset-0 -z-20">
              <BgOverlay />
            </div>

            {children}
          </div>
        </LazyMotion>
      </body>
    </html>
  );
}
