// Assets resolve to the original origin by default (the build sandbox could not
// download binaries). Run `npm run fetch-assets` locally to copy them into
// /public and set NEXT_PUBLIC_ASSET_BASE="" to serve everything from this app.
const ORIGIN = "https://city-human-potential-ranking-2026.magdalenagaete.chatgpt.site";

export const ASSET_BASE: string =
  process.env.NEXT_PUBLIC_ASSET_BASE !== undefined ? process.env.NEXT_PUBLIC_ASSET_BASE : ORIGIN;

export const asset = (path: string) => `${ASSET_BASE}${path}`;
