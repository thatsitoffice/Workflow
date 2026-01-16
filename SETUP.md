# Setup-Anleitung für Astro-Projekt

## 📋 Vorbereitung

### 1. Bilder verschieben

Verschiebe alle Bilder aus dem `images/` Ordner in den `public/images/` Ordner:

```bash
# Erstelle den public/images Ordner (falls noch nicht vorhanden)
mkdir -p public/images

# Verschiebe alle Bilder
mv images/* public/images/
```

Die folgenden Bilder werden benötigt:
- `hero.jpg` - Hintergrundbild für Hero-Section
- `logo_white.png` - Logo für Sidebar und Hero
- `logo_black.png` - Falls benötigt
- `team_illustration.png` - Team-Foto für About-Section
- Alle anderen Bilder, die verwendet werden

### 2. Abhängigkeiten installieren

```bash
npm install
```

### 3. Entwicklungsserver starten

```bash
npm run dev
```

Die Seite sollte dann unter `http://localhost:4321` erreichbar sein.

## 🚀 Deployment auf Cloudflare Pages

### GitHub Repository Setup

1. Initialisiere Git (falls noch nicht geschehen):
```bash
git init
git add .
git commit -m "Initial commit: Astro Projekt Setup"
```

2. Verbinde mit GitHub Repository:
```bash
git remote add origin https://github.com/thatsitoffice/Workflow.git
git branch -M main
git push -u origin main
```

### Cloudflare Pages Konfiguration

1. Gehe zu [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Klicke auf "Create a project"
3. Wähle "Connect to Git"
4. Verbinde dein GitHub Repository: `thatsitoffice/Workflow`
5. Konfiguriere die Build-Einstellungen:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
   - **Environment variables:** Keine erforderlich

6. Klicke auf "Save and Deploy"

### Nach dem Deployment

- Jeder Push auf den `main` Branch löst automatisch ein neues Deployment aus
- Pull Requests erhalten automatisch Preview-Deployments
- Die Seite ist unter der generierten `.pages.dev` URL erreichbar
- Du kannst eine eigene Domain in den Cloudflare Pages Settings hinzufügen

## 📝 Hinweise

- Das Projekt nutzt Astro 4.x mit dem Cloudflare Adapter für SSR
- Alle statischen Assets (Bilder, CSS, JS) werden automatisch optimiert
- Die Build-Zeit beträgt typischerweise 1-2 Minuten
