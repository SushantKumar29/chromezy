import { MetadataRoute } from "next";

/*
  Robots.ts file which helps to:
  - Creates /robots.txt at our domain root
  - Tells search engines: "For OUR ENTIRE SITE, here are the rules"
  - Controls crawling across all pages
  - Points to our sitemap location
*/

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_UR!}/sitemap.xml`,
  };
}
