# That's It Marketing - Workflow Landing Page

Eine moderne Landing Page für That's It Marketing, gebaut mit Astro und gehostet auf Cloudflare Pages.

## 🚀 Features

- Moderne, responsive Design mit dunklem Theme
- Strukturierter Workflow-Prozess Darstellung
- Komponentenbasierte Architektur mit Astro
- Optimiert für Cloudflare Pages

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Die Seite läuft dann unter `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 📁 Projektstruktur

```
/
├── public/
│   └── images/          # Statische Bilder
├── src/
│   ├── components/      # Astro-Komponenten
│   │   ├── Layout.astro
│   │   ├── Sidebar.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Workflow.astro
│   │   ├── About.astro
│   │   └── Footer.astro
│   ├── layouts/         # Layout-Dateien
│   ├── pages/           # Seiten
│   │   └── index.astro  # Hauptseite
│   ├── styles/          # CSS-Dateien
│   │   └── global.css
│   └── scripts/         # JavaScript-Dateien
│       └── navigation.js
└── package.json
```

## 🌐 Deployment auf Cloudflare Pages

1. **GitHub Repository verbinden:**
   - Gehe zu Cloudflare Dashboard → Pages
   - Klicke auf "Create a project"
   - Verbinde dein GitHub Repository: `thatsitoffice/Workflow`

2. **Build-Einstellungen:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (root)
   - Environment variables: Keine erforderlich

3. **Framework Preset:**
   - Framework: Astro

4. **Nach dem Deployment:**
   - Die Seite wird automatisch bei jedem Push auf `main` neu deployed
   - Preview-Deployments werden für jeden Pull Request erstellt

## 📝 Anmerkungen

- Die Bilder müssen im `public/images/` Ordner liegen
- Cloudflare Pages unterstützt automatisch SSR mit dem Cloudflare Adapter
- Das Projekt nutzt Astro 4.x mit Cloudflare Adapter
