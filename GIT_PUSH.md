# Git Push Anleitung

Das Git-Repository wurde im falschen Verzeichnis initialisiert. Bitte führe die folgenden Befehle **im Projektverzeichnis** aus:

## Schritte:

1. **Öffne ein Terminal/CMD/PowerShell im Projektverzeichnis:**
   ```
   cd "C:\Users\info\Documents\That´s it. Marketing\Thatsit websitelandingpage"
   ```

2. **Entferne das Git-Repository, falls es im Home-Verzeichnis ist:**
   ```powershell
   Remove-Item -Recurse -Force C:\Users\info\.git -ErrorAction SilentlyContinue
   ```

3. **Initialisiere Git im Projektverzeichnis:**
   ```powershell
   git init
   ```

4. **Füge nur die Projektdateien hinzu:**
   ```powershell
   git add package.json astro.config.mjs tsconfig.json .gitignore README.md SETUP.md src/ index.html
   ```

5. **Erstelle den Commit:**
   ```powershell
   git commit -m "Initial commit: Astro Projekt Setup für Cloudflare Pages"
   ```

6. **Benenne den Branch um:**
   ```powershell
   git branch -M main
   ```

7. **Füge das Remote Repository hinzu:**
   ```powershell
   git remote add origin https://github.com/thatsitoffice/Workflow.git
   ```

8. **Pushe zu GitHub:**
   ```powershell
   git push -u origin main
   ```

## Alternative: Manuell über GitHub Desktop oder Git GUI

Falls die Terminal-Befehle Probleme machen, kannst du auch:
1. GitHub Desktop installieren
2. Repository klonen oder erstellen
3. Dateien hinzufügen und committen
4. Push über die GUI durchführen
