import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seo-test-site.netlify.app",
      lastModified: new Date(),
    },
    {
      url: "https://seo-test-site.netlify.app/python",
      lastModified: new Date(),
    },
        {
      url: "https://seo-test-site.netlify.app/postgresql",
      lastModified: new Date(),
    },
    {
      url: "https://seo-test-site.netlify.app/pandas",
      lastModified: new Date(),
    },
    {
      url: "https://seo-test-site.netlify.app/superset",
      lastModified: new Date(),
    },
    {
      url: "https://seo-test-site.netlify.app/great-expectations",
      lastModified: new Date(),
    },

  ];
}