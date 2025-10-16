import { MetadataRoute } from "next";

export default function robots() {
  const baseUrl = "https://www.sadeeqdev.tech";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"], // Add any private routes you want to block
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
