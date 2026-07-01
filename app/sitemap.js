const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/machinery",
  "/clients",
  "/credentials",
  "/careers",
  "/contact",
];

export default function sitemap() {
  const baseUrl = "https://www.ortechinfra.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}