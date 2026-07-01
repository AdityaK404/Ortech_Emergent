export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.ortechinfra.com/sitemap.xml",
    host: "https://www.ortechinfra.com",
  };
}