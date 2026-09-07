type Market = "NO" | "EU" | "PE";
type Supplier = "dropi" | "bigbuy" | "cj" | "syncee" | "printify" | "printful";
type Offer = { supplier: Supplier; sku: string; market: Market; category: "perfume" | "skincare" | "beauty" | "beauty-tech"; inStock: boolean; productCost: number; shippingCost: number; deliveryDaysMax: number; salePrice: number; currency: "NOK" | "EUR" | "PEN"; tracking: boolean; warehouseRegion: "PE" | "EU" | "CN" | "OTHER" };

const priorities: Record<Market, Supplier[]> = {
  PE: ["dropi", "cj", "syncee", "printful", "printify", "bigbuy"],
  NO: ["syncee", "bigbuy", "printful", "printify", "cj", "dropi"],
  EU: ["syncee", "bigbuy", "printful", "printify", "cj", "dropi"],
};
const validMarkets = new Set<Market>(["NO", "EU", "PE"]);

function chooseOffer(market: Market, offers: Offer[]) {
  return offers.filter(o => o.market === market && o.inStock && o.tracking && o.salePrice > o.productCost + o.shippingCost).map(o => {
    const margin = o.salePrice - o.productCost - o.shippingCost;
    const regional = (market === "PE" && o.warehouseRegion === "PE") || (market !== "PE" && o.warehouseRegion === "EU") ? 25 : 0;
    const rank = priorities[market].indexOf(o.supplier);
    return { ...o, margin, score: regional + Math.max(0, 20 - o.deliveryDaysMax) + (margin / o.salePrice) * 50 + Math.max(0, 10 - rank * 2) };
  }).sort((a, b) => b.score - a.score)[0] ?? null;
}

export default async (request: Request) => {
  if (request.method === "GET") return Response.json({ ok: true, service: "Nordic Beauty supplier router", sector: "beauty", markets: ["NO", "EU", "PE"], configured: { cj: Boolean(Netlify.env.get("CJ_API_KEY")), syncee: Boolean(Netlify.env.get("SYNCEE_API_KEY")), bigbuy: Boolean(Netlify.env.get("BIGBUY_API_TOKEN")), dropi: Boolean(Netlify.env.get("DROPI_API_TOKEN")), printify: Boolean(Netlify.env.get("PRINTIFY_API_TOKEN")), printful: Boolean(Netlify.env.get("PRINTFUL_API_TOKEN")) } });
  if (request.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405 });
  let body: { market?: Market; offers?: Offer[] };
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400 }); }
  if (!body.market || !validMarkets.has(body.market) || !Array.isArray(body.offers)) return Response.json({ error: "market and offers are required" }, { status: 400 });
  return Response.json({ selected: chooseOffer(body.market, body.offers), evaluated: body.offers.length });
};

export const config = { path: "/api/supplier-route" };
