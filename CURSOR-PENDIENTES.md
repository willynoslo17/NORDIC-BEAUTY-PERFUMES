# CURSOR-PENDIENTES — bellafru-no

Lista interna para el dueño. No está enlazada desde la tienda. Nada de esto se ha hecho: queda por confirmar.

## Por confirmar — no tocado

- Rentabilidad del catálogo. `catalog/` no trae coste ni margen, y no hay un umbral del dueño para decidir qué es «no rentable». No se ocultó ni se borró ningún producto.
- Certificación. En el snapshot interno, los 31 productos públicos (`catalog/selected-products.json` y `catalog/cj-products.json`) tienen `hasCECertification: false`. No está claro si cada artículo (rodillo, perfume, aparato) debe llevar marcado CE u otra certificación. No se añadió ningún flag de ocultación.
- Si el texto genérico de `personvern.html` (socios de cumplimiento, sin nombres) basta como información de encargados. Se quitaron los nombres de la página; los fines y los lugares que ya estaban publicados se dejaron igual.
- Si la copia de plazos en `frakt-og-levering.html` y `slik-handler-du.html` sigue vigente ahora que las fuentes de impresión bajo pedido están en `enabled: false` en `supplier-config.json`. Se mantuvieron los plazos que ya estaban escritos y solo se quitaron los nombres.
- Versión en inglés de kjøpsvilkår, personvern y kontakt. El pie y `frakt-og-levering.html` enlazan a `#en` en esas tres páginas, y el ancla no existe (solo hay `#no` y `#es`). No se redactó texto legal en inglés.
- `_redirects` envía `/terms` y `/privacy` a `#en`. No se tocó `_redirects`.
- `README.md` y `STRIPE-SETUP.md` siguen nombrando proveedores. No son HTML de la tienda. Si el alojamiento publica todo el directorio, esas URL se pueden abrir. No se reescribieron.
- `supplier-config.json` sigue siendo un archivo estático con claves internas (`cjDropshipping`, `printify`, `gelato`, `printful`) y `germanDrop.enabled: true`. Las notas ya no repiten los nombres. No se cambiaron claves ni flags. Qué es `germanDrop` y si debe seguir activo: por confirmar.
- Las fotos de producto siguen en el dominio del proveedor. No se cambiaron las URL: romperían las imágenes, y las imágenes las hace el dueño.
- `functions/` (payload hacia Make y el resumen interno del pedido) sigue nombrando proveedores. No se tocó `functions/`, como pide el encargo. El correo al cliente es solo la plantilla en `docs/ordrebekreftelse-mal.md`.
- VOEC: número, umbral, si Bellafru entra en el régimen y si el «MVA» publicado sigue vigente. Ver `docs/voec-mva-sjekkliste.md`. No hay cifras nuevas.
- Nombre del proyecto de Cloudflare Pages y si el despliegue es integración Git o subida directa. No hay workflow ni `wrangler.toml`. No se desplegó nada.
- Pasar la comprobación de Stripe de `sk_live_` a modo de prueba. Se dejó igual, a propósito.
- PRs abiertos #2 y #3 (canal `/pe/`): no se fusionaron, no se cerraron y no se partió de ellos. Esta rama sale de `main`.

## Hecho en esta rama

- Nombres de proveedor fuera del HTML que ve el cliente y fuera de los textos que pinta la tienda (`supplier-bridge.js`).
- Campo `supplier` quitado de los JSON públicos del catálogo. Productos, precios e imágenes siguen.
- `docs/ordrebekreftelse-mal.md` y `docs/voec-mva-sjekkliste.md`.
- Búsqueda de WhatsApp: sin resultados.
- `create-checkout-session.ts` sin cambios. La kasse sigue cerrada (`CHECKOUT_ENABLED` en false).
