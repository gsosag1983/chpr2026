#!/usr/bin/env bash
# Downloads images, favicon and PDFs from the original site into ./public so the
# clone is self-contained. Afterwards run with NEXT_PUBLIC_ASSET_BASE="" (see .env.example).
set -euo pipefail
ORIGIN="https://city-human-potential-ranking-2026.magdalenagaete.chatgpt.site"
cd "$(dirname "$0")/../public"
mkdir -p media reports
for f in universidad-panamericana-logo.png report-cover-photo.webp report-cover.webp initial-coverage-map.webp \
  leading-cities-map.webp moscow.webp beijing.webp mexico-city.webp sao-paulo.webp \
  guillermo-sosa-gomez.webp magdalena-gaete-sepulveda.webp juan-cordoba-marentes.webp \
  miguel-esquivias-padilla.webp haliyana-khalid.webp chpr-2023-cover-photo.jpg; do
  curl -fsSL "$ORIGIN/media/$f" -o "media/$f" && echo "ok media/$f"
done
for f in CHPR-2026-Public-Report.pdf CHPR-2026-Full-Report.pdf CHPR-2023.pdf; do
  curl -fsSL "$ORIGIN/reports/$f" -o "reports/$f" && echo "ok reports/$f"
done
curl -fsSL "$ORIGIN/favicon.svg" -o favicon.svg && echo "ok favicon.svg"
echo 'NEXT_PUBLIC_ASSET_BASE=""' > ../.env.local
echo "Done. Restart the dev server / rebuild."
