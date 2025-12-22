import { serve } from "bun";

const DIST = ".output/public";
const BASE = "/live";

serve({
  port: 5173,
  async fetch(req) {
    const url = new URL(req.url);

    if (!url.pathname.startsWith(BASE)) {
      return new Response("Not Found", { status: 404 });
    }

    let filePath = url.pathname.slice(BASE.length);
    if (filePath === "" || filePath === "/") {
      filePath = "/index.html";
    }

    const file = Bun.file(DIST + filePath);

    if (!(await file.exists())) {
      return new Response(Bun.file(DIST + "/index.html"));
    }

    return new Response(file);
  },
});

console.log("Organiser UI running on port 4173");
