# Linnavy Restaurant

Vollwertig-vegane Restaurant-Website im Stil von [Just Falafel](https://jfvegancafe.com/), gebaut mit **Astro** und bereit für **Cloudflare Pages** über GitHub.

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Die statische Ausgabe liegt in `dist/`.

## Deployment auf Cloudflare Pages (via GitHub)

1. **Repository auf GitHub anlegen**
   - Projekt in einen Ordner legen (z. B. nur `Linnavyrestaurant`), dann:
   ```bash
   cd "c:\Users\info\Documents\Henneberg\Akquise Webdesign\Linnavyrestaurant"
   git init
   git add .
   git commit -m "Initial: Astro Linnavy Restaurant"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git
   git push -u origin main
   ```

2. **Cloudflare Pages verbinden**
   - [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
   - GitHub-Account verbinden und das Repository auswählen
   - **Build-Einstellungen:**
     - **Framework preset:** Astro (oder „None“)
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
   - **Save and Deploy**

3. **Weitere Pushes**
   - Jeder Push auf `main` (oder den gewählten Branch) löst automatisch einen neuen Build und ein neues Deployment aus.

## Anpassungen

- **Texte & Menü:** In `src/pages/` (index.astro, menu/index.astro, about/index.astro, contact/index.astro) anpassen.
- **Adresse & Öffnungszeiten:** In `src/pages/contact/index.astro` und im Footer in `src/layouts/Layout.astro` eintragen.
- **Farben & Schrift:** In `src/styles/global.css` unter `:root` anpassen.
- **Bilder:** Eigene Bilder in `public/images/` legen und in den Seiten statt der Placeholder-URLs verwenden.

## Technik

- **Astro 4** (statischer Output)
- **Cloudflare Pages** (statisches Hosting, kein Adapter nötig)
- Responsives Layout, dunkles Theme, Akzentfarbe Gold (#c9a227)
