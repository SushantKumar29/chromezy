import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import BgOverlay from "./shared/ui/BgOverlay";

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

const siteUrl =
  process.env.NODE_ENV === "production" ? "https://chromezy.com" : "http://localhost:3000";

/*
  We are using Metadata here because of the SEO reasons
  - Title & Description - helps search engines to know what the page is about to show it in search results
  - OpenGraph - helps social platforms (Facebook, LinkedIn) to display your content properly when shared.
  - Robots - tells search engines which pages to index and which to ignore
*/

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // This line sets the base URL for all relative URLs in metadata because social platforms might not find your images it sees relative URLs
  // The below attribute ensures consistent branding across all pages
  title: {
    default: "Chromezy - Digital Transformation Platform", // The title shown on the homepage
    template: "%s | Chromezy", // Auto-formats titles for other pages (e.g. "Contact | Chromezy")
  },
  description: "We Engineer your Software Success & Digital Transformation.", // The meta description shown in search results
  robots: {
    index: true, // Allow search engines to index the page
    follow: true, // Allow search engines to follow links
    // Google-specific settings
    googleBot: {
      index: true, // Allow google search engine to index the page
      follow: true, // Allow google search engine to follow links
    },
  },
  openGraph: {
    title: "Chromezy - Digital Transformation Platform", // Title shown when shared on Facebook/LinkedIn
    description: "We Engineer your Software Success & Digital Transformation.", // Description shown when shared
    url: siteUrl, // Canonical URL for the shared content
    siteName: "Chromezy", // Site name displayed on social platforms
    images: [
      { url: `${siteUrl}/assets/icons/logo-final.svg`, width: 800, height: 600, alt: "Chromezy" }, // Image shown when shared
    ],
    locale: "en_US", // Language and region
    alternateLocale: ["en_CA", "en_AU"], // Other supported locales
    type: "website", // Type of content (website, article, etc.)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr" // THis direction attribute is added for better accessibility
      className="scroll-smooth"
    >
      {/* THis is the language meta tag for better SEO */}
      <meta httpEquiv="content-language" content="en" />
      <body suppressHydrationWarning className={`${sora.variable} ${inter.variable} antialiased`}>
        <div className="relative min-h-screen w-full overflow-x-hidden text-primary">
          <div className="pointer-events-none fixed inset-0 -z-20">
            <BgOverlay />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
