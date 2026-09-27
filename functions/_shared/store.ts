/** Per-store identity. This is the only checkout/webhook file that differs between the NORDIC-* repos. */
export const STORE = {
  slug: "nordic-beauty-perfumes",
  brand: "Bellafru",
  domain: "bellafru.no",
  siteUrl: "https://bellafru.no/",
  /** Catalog sector used by the Gelato/Printful endpoints (never taken from the query string). */
  sector: "beauty",
} as const;
