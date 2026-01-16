# PowerShell Script zum Pushen zum GitHub Repository
# Führe dieses Skript im Projektverzeichnis aus

# Wechsle ins Projektverzeichnis (anpassen falls nötig)
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

Write-Host "Aktuelles Verzeichnis: $(Get-Location)"
Write-Host "Prüfe Dateien..."

# Prüfe ob wir im richtigen Verzeichnis sind
if (-not (Test-Path "package.json") -or -not (Test-Path "astro.config.mjs") -or -not (Test-Path "src")) {
    Write-Host "FEHLER: Nicht im Projektverzeichnis oder Dateien fehlen!"
    exit 1
}

# Entferne Git-Repository aus Home-Verzeichnis (falls vorhanden)
$homeGit = "$env:USERPROFILE\.git"
if (Test-Path $homeGit) {
    Write-Host "Entferne Git-Repository aus Home-Verzeichnis..."
    Remove-Item -Recurse -Force $homeGit -ErrorAction SilentlyContinue
}

# Initialisiere Git im Projektverzeichnis
if (Test-Path .git) {
    Write-Host "Entferne existierendes .git Verzeichnis..."
    Remove-Item -Recurse -Force .git
}

Write-Host "Initialisiere Git..."
git init

Write-Host "Füge Dateien hinzu..."
git add package.json astro.config.mjs tsconfig.json .gitignore README.md SETUP.md GIT_PUSH.md src/ index.html

Write-Host "Erstelle Commit..."
git commit -m "Initial commit: Astro Projekt Setup für Cloudflare Pages"

Write-Host "Erstelle main Branch..."
git branch -M main

Write-Host "Füge Remote Repository hinzu..."
git remote remove origin 2>&1 | Out-Null
git remote add origin https://github.com/thatsitoffice/Workflow.git

Write-Host "Pushe zu GitHub..."
git push -u origin main

Write-Host "Fertig! Projekt wurde zu GitHub gepusht."
