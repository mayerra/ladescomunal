# La Descomunal — proposta de web

Proposta de renovació de la web de La Descomunal (Comunalitat Urbana de la Zona 09 de Lleida), en català i castellà.

**Disseny i desenvolupament:** Magdalena Ayerra — https://mayerra.github.io

Publicada a https://mayerra.github.io/ladescomunal/

## Com està feta

Lloc estàtic fet amb [Astro](https://astro.build). No carrega JavaScript de framework: només un petit script per al menú del mòbil.

- `src/i18n/content.ts` — **tots els textos**, en català i castellà. Per canviar un text, edita'l aquí.
- `src/assets/` — imatges (`brand/`, `committee/`, `projects/`, `nova-essencia/`). Astro les converteix a WebP i en genera diverses mides.
- `src/components/Home.astro` — portada · `src/components/Nova.astro` — pàgina de Nova Essència
- `src/layouts/Layout.astro` — capçalera, menú, peu i avís de proposta
- `src/styles/site.css` — estils
- `src/pages/` — rutes: `index.html`, `es.html`, `nova-essencia.html`, `es/nova-esencia.html`

## Treballar-hi

```bash
npm ci
npm run dev      # http://localhost:4321/ladescomunal/
npm run build    # genera dist/
```

## Publicació

Cada canvi a `main` es publica sol amb GitHub Actions (`.github/workflows/deploy.yml`).
Cal tenir configurat una vegada: *Settings → Pages → Source: GitHub Actions*.

## Pendents

- Secció de notícies / actualitat i qui l'actualitza
- Mapa de la Zona 09
- Logotips obligatoris segons el conveni amb la Generalitat
