# PowerShell Script zum Pushen der Änderungen zu GitHub
# Dieses Skript muss im Projektverzeichnis ausgeführt werden

# Entferne Git-Repository aus Home-Verzeichnis (falls vorhanden)
$homeGit = "$env:USERPROFILE\.git"
if (Test-Path $homeGit) {
    Write-Host "Entferne Git-Repository aus Home-Verzeichnis..."
    Remove-Item -Recurse -Force $homeGit -ErrorAction SilentlyContinue
}

# Entferne Git-Repository aus Projektverzeichnis (falls vorhanden)
if (Test-Path .git) {
    Write-Host "Entferne existierendes .git Verzeichnis..."
    Remove-Item -Recurse -Force .git
}

Write-Host "Initialisiere Git..."
git init

Write-Host "Füge Dateien hinzu..."
git add .

Write-Host "Erstelle Commit..."
git commit -m "Mobile improvements: Added padding below hero button and no-break styling for headline"

Write-Host "Erstelle main Branch..."
git branch -M main

Write-Host "Füge Remote Repository hinzu..."
git remote remove origin 2>&1 | Out-Null
git remote add origin https://github.com/thatsitoffice/Workflow.git

Write-Host "Pushe zu GitHub..."
git push -u origin main

Write-Host "Fertig! Änderungen wurden zu GitHub gepusht."
