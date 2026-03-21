import { MetadataRoute } from "next";

/*
  This is the robots.ts file which helps to:
  - Creates /robots.txt at our domain root
  - Tells search engines: "For OUR ENTIRE SITE, here are the rules"
  - Controls crawling across all pages
  - Points to our sitemap location

*/

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NODE_ENV === "production" ? "https://chromezy.com" : "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
