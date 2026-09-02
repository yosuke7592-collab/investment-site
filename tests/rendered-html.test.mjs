import assert from "node:assert/strict";
import test from "node:test";

test("renders production search metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
  assert.match(html, /<meta name="robots" content="index, follow"\/>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/toushi-gensoku\.jp\/"\/>/i);
});

test("permanently redirects the legacy host while preserving path and query", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("redirect-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("https://investment-map-18.yskhksn.chatgpt.site/articles/etf-vs-investment-trust?ref=legacy"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "https://toushi-gensoku.jp/articles/etf-vs-investment-trust?ref=legacy");
});

test("renders the DMM Stock disclosure, issued link code, and learning pathways", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("affiliate-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const services = await worker.fetch(new Request("http://localhost/services"), env, ctx);
  assert.equal(services.status, 200);
  const servicesHtml = await services.text();
  assert.match(servicesHtml, /一部にPRを含みます/);
  assert.match(servicesHtml, /href="https:\/\/h\.accesstrade\.net\/sp\/cc\?rk=0100mkk300oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"/);
  assert.match(servicesHtml, /src="https:\/\/h\.accesstrade\.net\/sp\/rr\?rk=0100mkk300oy0o" width="1" height="1" border="0" alt=""/);
  assert.match(servicesHtml, /<link rel="canonical" href="https:\/\/toushi-gensoku\.jp\/services"\/>/i);

  for (const path of ["/start", "/articles/stocks-from-10000-yen"]) {
    const response = await worker.fetch(new Request(`http://localhost${path}`), env, ctx);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /href="\/services"/);
  }
});
