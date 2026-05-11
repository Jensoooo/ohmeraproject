# Ohmera Website – GitHub Upload Anleitung

## Schritt 1 – ZIP entpacken
Entpacke die ZIP-Datei. Du siehst folgende Ordnerstruktur:

  index.html
  css/
    style.css
  js/
    main.js
  assets/
    images/
      team.jpg
    icons/
      logo.svg

## Schritt 2 – GitHub hochladen
WICHTIG: Lade ALLE Dateien + Ordner in dein Repo hoch.
Die Ordner css/, js/ und assets/ müssen im GLEICHEN Verzeichnis wie index.html sein.

In GitHub:
1. Repo öffnen
2. "Add file" → "Upload files"
3. Alle Dateien und Ordner reinziehen (drag & drop)
4. Commit

## Schritt 3 – GitHub Pages aktivieren
Settings → Pages → Branch: main → / (root) → Save

## Schritt 4 – Domain verbinden
Bei deinem Domain-Anbieter (wo ohmera.de registriert ist):
CNAME: www → deinusername.github.io
A-Records: 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153

In GitHub: Settings → Pages → Custom domain → ohmera.de

## Noch offen
- Steuernummer im Impressum ergänzen (suche nach "[bitte ergänzen]" in index.html)
