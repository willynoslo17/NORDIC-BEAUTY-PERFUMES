#!/usr/bin/env node
/**
 * Smoke checks for Bellafru /pe/ (Peru) and safety invariants.
 * Run: node tests/smoke-pe.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = [];
const ok = [];

function read(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) {
    fail.push("missing file: " + rel);
    return "";
  }
  return readFileSync(p, "utf8");
}

function assert(cond, msg) {
  if (cond) ok.push(msg);
  else fail.push(msg);
}

const pe = read("pe/index.html");
const region = read("region-switch.js");
const bridge = read("supplier-bridge.js");
const runtime = read("commerce-runtime.js");
const checkout = read("functions/api/create-checkout-session.ts");
const index = read("index.html");
const peCatalog = read("catalog/pe-products.json");

assert(pe.includes('lang="es-PE"'), "pe/index.html is Spanish (es-PE)");
assert(/IGV|igv/.test(pe) && pe.includes("18"), "pe page mentions IGV 18%");
assert(pe.includes("PEN") || pe.includes("currency:'PEN'"), "pe page uses PEN");
assert(pe.includes('id="regionSwitch"'), "pe header has region switch");
assert(pe.includes("/region-switch.js"), "pe loads region-switch.js");
assert(pe.includes("/commerce-runtime.js"), "pe loads commerce-runtime");
assert(!pe.includes("supplier-bridge.js"), "pe does not load supplier-bridge (no live API)");
assert(!pe.includes("/api/cj-products") && !pe.includes("loadNordicCatalog"), "pe does not call live catalog API");
assert(pe.includes("/catalog/pe-products.json"), "pe loads local snapshot catalog");
assert(!/CHECKOUT_ENABLED\s*=\s*true/.test(pe), "pe page does not enable checkout locally");
assert(pe.includes("disabled") && /CAJA PRONTO|PAGO PRONTO/.test(pe), "pe checkout is disabled");

assert(region.includes("bellafru-region"), "region-switch uses localStorage key bellafru-region");
assert(region.includes("/pe/"), "region-switch knows /pe/ path");
assert(region.includes("europa") && region.includes("peru"), "region-switch has Europa/Perú");

assert(bridge.includes("/catalog/selected-products.json"), "supplier-bridge uses absolute catalog paths");
assert(/const CHECKOUT_ENABLED = false/.test(runtime), "commerce-runtime CHECKOUT_ENABLED=false");
assert(/const CHECKOUT_ENABLED = false/.test(checkout), "create-checkout-session CHECKOUT_ENABLED=false");

assert(index.includes('id="regionSwitch"') || index.includes("region-switch.js"), "Norwegian index wires region switch");
assert(index.includes('lang="nb"'), "Norwegian store html lang unchanged");
assert(/Parfyme, hudpleie og skjønnhetsverktøy/.test(index), "Norwegian hero copy unchanged");
assert(!index.includes("lima.css"), "Norwegian store does not load lima.css");

const legalPages = [
  ["pe/terminos.html", "Términos", "IGV"],
  ["pe/privacidad.html", "MARTINEZ LOZANO INTERNASJONAL HANDEL", "responsable"],
  ["pe/envios.html", "Envío a todo el Perú", "S/ 14"],
  ["pe/cambios.html", "devoluciones", "support@bellafru.no"],
  ["pe/libro-reclamaciones.html", "Libro de Reclamaciones", "mailto:support@bellafru.no"],
];
for (const [file, a, b] of legalPages) {
  const text = read(file);
  assert(text.includes(a) && text.includes(b), file + " has required legal content");
  assert(text.includes("regionSwitch") || text.includes("region-switch.js"), file + " has region switch");
  assert(text.includes("support@bellafru.no"), file + " books to support@bellafru.no");
}
assert(existsSync(join(root, "pe/legal.css")), "pe/legal.css exists");
assert(pe.includes("/pe/libro-reclamaciones"), "pe homepage links Libro de Reclamaciones");
assert(pe.includes("support@bellafru.no"), "pe homepage mentions support@bellafru.no");

const lima = read("pe/lima.css");
assert(lima.includes("--sun") && lima.includes("Archivo Black"), "lima.css defines Lima palette/fonts");
assert(pe.includes("/pe/lima.css"), "pe storefront loads lima.css");
assert(pe.includes("Yape") && pe.includes("Plin") && /pr[oó]ximamente/i.test(pe), "pe shows Yape/Plin próximamente");
assert(pe.includes("badge stock") && pe.includes("Envío a todo el Perú"), "pe products show stock and Peru shipping badges");
assert(pe.includes("reseñas") || pe.includes("reviews"), "pe products show reviews");
assert(/dermatol[oó]gic/i.test(pe) === false || /no afirmamos resultados dermatológicos/i.test(pe), "pe does not invent dermatological claims");

let catalog;
try {
  catalog = JSON.parse(peCatalog);
  assert(Array.isArray(catalog) && catalog.length > 20, "pe-products.json has beauty/perfume rows");
  assert(catalog.every((p) => p.priceNok > 0 && p.image && p.name), "every pe product has price, image, name");
  assert(!/supplierPrice|cj_api_key|sk_live/i.test(peCatalog), "pe catalog has no supplier costs or secrets");
  const blob = peCatalog.toLowerCase();
  assert(blob.includes("perfume") || blob.includes("beauty") || catalog.some((p) => /perfume|belleza|maquillaje/i.test(p.category + p.name)), "pe catalog is beauty/perfume");
  assert(!/\b(motorcycle|moto parts|car accessories)\b/i.test(peCatalog), "pe catalog excludes auto/moto");
} catch (e) {
  fail.push("pe-products.json parse: " + e.message);
}

console.log("PASS " + ok.length);
ok.forEach((m) => console.log("  ✓ " + m));
if (fail.length) {
  console.log("FAIL " + fail.length);
  fail.forEach((m) => console.log("  ✗ " + m));
  process.exit(1);
}
console.log("All smoke checks passed.");
