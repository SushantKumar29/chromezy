import { MetadataRoute } from "next";

/*
  Robots.ts file which helps to:
  - Creates /robots.txt at our domain root
  - Tells search engines: "For OUR ENTIRE SITE, here are the rules"
  - Controls crawling across all pages
  - Points to our sitemap location
*/

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL! || "https://chromezy.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: `${siteUrl!}/sitemap.xml`,
  };
}
