const BASE = "https://api.printify.com/v1";

// Per-store curated catalog — PRIMARY source for storefront (never replace with shared shop dump)
const SELECTED: any[] = [
  {
    "id": "printify-beauty-1",
    "sku": "PFY-BEAU-TOTE-GLOW",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Glow Beauty Tote",
    "category": "Beauty Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 22.5,
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a67478e?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-2",
    "sku": "PFY-BEAU-TOTE-NOTES",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Perfume Notes Canvas Tote",
    "category": "Perfumes",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 23.9,
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-3",
    "sku": "PFY-BEAU-TOTE-RITUAL",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Self-Care Ritual Tote",
    "category": "Skincare",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-4",
    "sku": "PFY-BEAU-TEE-GLOW",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Glow Unisex Tee",
    "category": "Beauty Merch",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 29.9,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-5",
    "sku": "PFY-BEAU-TEE-CLUB",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Skincare Club T-Shirt",
    "category": "Skincare",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 28.5,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-6",
    "sku": "PFY-BEAU-TEE-ROSE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Rose Atelier Soft Tee",
    "category": "Perfumes",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 27.9,
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-7",
    "sku": "PFY-BEAU-MUG-ACCENT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Accent Mug \u2014 Nordic Beauty",
    "category": "Beauty Merch",
    "supplierPriceUsd": 6.5,
    "suggestedRetailUsd": 19.9,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcc036?auto=format&fit=crop&w=800&q=80",
    "matchType": "mug",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-8",
    "sku": "PFY-BEAU-MUG-GLOW",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Morning Glow Coffee Mug",
    "category": "Skincare",
    "supplierPriceUsd": 6.5,
    "suggestedRetailUsd": 18.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "matchType": "mug",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-9",
    "sku": "PFY-BEAU-MUG-SPA",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Spa Day Ceramic Mug",
    "category": "Beauty",
    "supplierPriceUsd": 6.5,
    "suggestedRetailUsd": 17.9,
    "image": "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80",
    "matchType": "mug",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-10",
    "sku": "PFY-BEAU-CREW-GLOW",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Soft Glow Crewneck",
    "category": "Beauty Merch",
    "supplierPriceUsd": 16.5,
    "suggestedRetailUsd": 44.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "crewneck",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-11",
    "sku": "PFY-BEAU-CREW-VELVET",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Velvet Night Crewneck",
    "category": "Perfumes",
    "supplierPriceUsd": 16.5,
    "suggestedRetailUsd": 46.9,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "crewneck",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-12",
    "sku": "PFY-BEAU-TEE-BARRIER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Barrier Care Affirmation Tee",
    "category": "Skincare",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 26.9,
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-13",
    "sku": "PFY-BEAU-TEE-SERUM",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Silk Serum Soft Tee",
    "category": "Skincare",
    "supplierPriceUsd": 9.4,
    "suggestedRetailUsd": 27.5,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-14",
    "sku": "PFY-BEAU-MUG-ATELIER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Atelier Candle Mug",
    "category": "Beauty Merch",
    "supplierPriceUsd": 6.5,
    "suggestedRetailUsd": 18.5,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcc036?auto=format&fit=crop&w=800&q=80",
    "matchType": "mug",
    "sector": "beauty"
  },
  {
    "id": "printify-beauty-15",
    "sku": "PFY-BEAU-TOTE-BLOOM",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Bloom Canvas Tote",
    "category": "Perfumes",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 24.9,
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a67478e?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "beauty"
  }
];

const SECTOR_ALIASES: Record<string, string> = {
  "beauty": "beauty",
  "perfume": "beauty",
  "perfumes": "beauty",
  "skincare": "beauty",
  "toys": "toys",
  "kids": "toys",
  "kid": "toys",
  "children": "toys",
  "electronics": "electronics",
  "tech": "electronics",
  "technology": "electronics",
  "pet supplies": "pet supplies",
  "pets": "pet supplies",
  "pet": "pet supplies",
  "home living": "home living",
  "home": "home living",
  "living": "home living",
  "fitness": "fitness",
  "outdoor": "fitness",
  "sports": "fitness",
  "solar energy": "solar energy",
  "energy": "solar energy",
  "solar": "solar energy",
  "car accessories": "car accessories",
  "car": "car accessories",
  "auto": "car accessories",
  "automotive": "car accessories"
};

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? Math.round(amount * 100) / 100 : 0;
}

function resolveSector(raw: string) {
  const key = String(raw || "").toLowerCase().trim();
  if (!key) return SELECTED[0]?.sector || "beauty";
  if (SECTOR_ALIASES[key]) return SECTOR_ALIASES[key];
  for (const [alias, sector] of Object.entries(SECTOR_ALIASES)) {
    if (key.includes(alias) || alias.includes(key)) return sector;
  }
  return key;
}

function curated(sector: string) {
  return SELECTED
    .filter((p) => !p.sector || String(p.sector).toLowerCase() === sector)
    .map((p, i) => ({
      id: String(p.id || `printify-selected-${i}`),
      sku: String(p.sku || ""),
      supplier: "Printify",
      provider: "printify",
      printifyProductId: String(p.printifyProductId || ""),
      printifyVariantId: String(p.printifyVariantId || ""),
      name: String(p.name || "Printify product"),
      category: String(p.category || sector),
      supplierPriceUsd: money(p.supplierPriceUsd) || money(p.suggestedRetailUsd),
      suggestedRetailUsd: money(p.suggestedRetailUsd) || money(p.supplierPriceUsd),
      image: String(p.image || ""),
      matchType: String(p.matchType || ""),
      sector: String(p.sector || sector),
    }))
    .filter((p) => p.suggestedRetailUsd > 0 && p.name);
}

function haystack(p: any) {
  return [p.name, p.title, p.category, ...(Array.isArray(p.tags) ? p.tags : []), p.sku].join(" ").toLowerCase();
}

async function enrichFromLive(token: string, shopId: string, curatedProducts: any[]) {
  try {
    const apiUrl = new URL(BASE + `/shops/${shopId}/products.json`);
    apiUrl.searchParams.set("limit", "50");
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}`, "User-Agent": "NordicStore/1.0" },
    });
    if (!response.ok) return curatedProducts;
    const result: any = await response.json();
    const list = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    if (!list.length) return curatedProducts;

    const typeWords: Record<string, string[]> = {
      tote: ["tote", "bag"],
      tee: ["t-shirt", "tshirt", "tee", "shirt"],
      mug: ["mug", "cup", "coffee"],
      crewneck: ["crewneck", "crew neck", "sweatshirt"],
      hoodie: ["hoodie", "zip"],
      poster: ["poster", "print"],
      case: ["case", "phone", "tough"],
      cap: ["cap", "hat"],
    };

    return curatedProducts.map((item) => {
      const words = typeWords[String(item.matchType || "").toLowerCase()] || [];
      const match = list.find((live: any) => {
        const id = String(live?.id || "");
        if (item.printifyProductId && id && id === item.printifyProductId) return true;
        if (!words.length) return false;
        const text = haystack({ name: live?.title, tags: live?.tags, sku: "" });
        return words.some((w) => text.includes(w));
      });
      if (!match) return item;
      const variants = Array.isArray(match.variants) ? match.variants : [];
      const enabled = variants.find((v: any) => v?.is_enabled !== false) || variants[0] || {};
      const images = Array.isArray(match.images) ? match.images : [];
      const image = images.find((img: any) => img?.is_default)?.src || images[0]?.src || item.image;
      const cost = money(enabled.cost);
      const retail = money(enabled.price) || (cost > 0 ? Math.round(cost * 2.2 * 100) / 100 : 0);
      return {
        ...item,
        printifyProductId: String(match.id || item.printifyProductId || ""),
        printifyVariantId: String(enabled.id || item.printifyVariantId || ""),
        sku: String(enabled.sku || item.sku || ""),
        supplierPriceUsd: cost || item.supplierPriceUsd,
        suggestedRetailUsd: retail || item.suggestedRetailUsd,
        image: image || item.image,
        enriched: true,
      };
    });
  } catch (_) {
    return curatedProducts;
  }
}

export default async (req: Request, context: any) => {
  if (req.method !== "GET") return Response.json({ error: "Method not allowed" }, { status: 405 });
  const url = new URL(req.url);
  const wanted = url.searchParams.get("q") || url.searchParams.get("sector") || "";
  const defaultSector = String(SELECTED[0]?.sector || "beauty");
  const sector = resolveSector(wanted || defaultSector);
  const headers = {
    "access-control-allow-origin": "*",
    "cache-control": "public, max-age=60",
  };

  // PRIMARY: curated per-store list. Live Printify only enriches — never replaces.
  let products = curated(sector).slice(0, 30);
  const token = (typeof Netlify !== "undefined" && Netlify.env?.get) ? Netlify.env.get("PRINTIFY_API_TOKEN") : context?.env?.PRINTIFY_API_TOKEN;
  const shopId = ((typeof Netlify !== "undefined" && Netlify.env?.get) ? Netlify.env.get("PRINTIFY_SHOP_ID") : context?.env?.PRINTIFY_SHOP_ID) || "28847802";
  if (token && products.length) {
    products = await enrichFromLive(String(token), String(shopId), products);
  }

  return Response.json(
    {
      ok: true,
      supplier: "printify",
      sector,
      query: sector,
      products,
      count: products.length,
      source: "printify-selected-primary",
      markets: ["NO", "EU", "PE"],
    },
    { status: products.length ? 200 : 503, headers }
  );
};
export const config = { path: "/api/printify-products" };
