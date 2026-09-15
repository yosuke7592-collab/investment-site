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

test("renders operator trust pages, comparison evidence, and footer links", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("trust-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const expected = [
    ["/about", "株式会社SOG", "運営情報・編集方針"],
    ["/contact", "contact@toushi-gensoku.jp", "お問い合わせ"],
    ["/privacy", "アクセス解析", "プライバシーポリシー"],
    ["/disclaimer", "元本割れ", "免責事項"],
    ["/affiliate-policy", "報酬額だけで", "広告・アフィリエイト方針"],
  ];

  for (const [path, content, title] of expected) {
    const response = await worker.fetch(new Request(`http://localhost${path}`), env, ctx);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(content));
    assert.match(html, new RegExp(`<title>${title}｜投資の原則</title>`));
    assert.match(html, new RegExp(`<link rel="canonical" href="https://toushi-gensoku\\.jp${path}"/>`));
    for (const footerPath of ["/about", "/contact", "/privacy", "/disclaimer", "/affiliate-policy"]) {
      assert.match(html, new RegExp(`href="${footerPath}"`));
    }
  }

  for (const path of ["/about", "/contact", "/privacy"]) {
    const response = await worker.fetch(new Request(`http://localhost${path}`), env, ctx);
    assert.match(await response.text(), /href="mailto:contact@toushi-gensoku\.jp"/);
  }

  const services = await worker.fetch(new Request("http://localhost/services"), env, ctx);
  const servicesHtml = await services.text();
  assert.match(servicesHtml, /三菱UFJ eスマート証券/);
  assert.match(servicesHtml, /向かない可能性がある人/);
  assert.match(servicesHtml, /公式参照先/);
  assert.match(servicesHtml, /情報確認日/);

  const sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  for (const path of ["/contact", "/privacy", "/disclaimer", "/affiliate-policy"]) {
    assert.match(sitemapXml, new RegExp(`https://toushi-gensoku\\.jp${path}`));
  }
});

test("renders approved Matsui pathways and the NISA/iDeCo education page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("matsui-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const services = await worker.fetch(new Request("http://localhost/services"), env, ctx);
  assert.equal(services.status, 200);
  const servicesHtml = await services.text();
  for (const rk of ["01000t2p00oy0o", "0100p7ck00oy0o"]) {
    assert.match(servicesHtml, new RegExp(`href="https://h\\.accesstrade\\.net/sp/cc\\?rk=${rk}" rel="nofollow"`));
    assert.match(servicesHtml, new RegExp(`src="https://h\\.accesstrade\\.net/sp/rr\\?rk=${rk}"`));
  }
  assert.match(servicesHtml, /id="ideco"/);
  assert.match(servicesHtml, /松井証券 iDeCo/);
  assert.match(servicesHtml, /<small>PR<\/small>/);
  assert.match(servicesHtml, /0100mkk300oy0o/);

  const longTerm = await worker.fetch(new Request("http://localhost/long-term"), env, ctx);
  assert.equal(longTerm.status, 200);
  assert.match(await longTerm.text(), /href="\/nisa-vs-ideco"/);

  const education = await worker.fetch(new Request("http://localhost/nisa-vs-ideco"), env, ctx);
  assert.equal(education.status, 200);
  const educationHtml = await education.text();
  assert.match(educationHtml, /原則60歳まで自由に引き出せません/);
  assert.match(educationHtml, /href="\/services#ideco"/);
  assert.match(educationHtml, /<link rel="canonical" href="https:\/\/toushi-gensoku\.jp\/nisa-vs-ideco"\/>/i);

  const sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  assert.match(await sitemap.text(), /https:\/\/toushi-gensoku\.jp\/nisa-vs-ideco/);
});

test("renders seven service detail pages with correct advertising boundaries", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("service-detail-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const approved = {
    "dmm-kabu": "0100mkk300oy0o",
    matsui: "01000t2p00oy0o",
    "matsui-ideco": "0100p7ck00oy0o",
  };
  const unapproved = ["sbi-securities", "mufg-esmart", "monex", "monex-ideco"];

  for (const [slug, rk] of Object.entries(approved)) {
    const response = await worker.fetch(new Request(`http://localhost/services/${slug}`), env, ctx);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /情報確認日：(?:<!-- -->)?2026年9月15日/);
    assert.match(html, /<small>PR<\/small>/);
    assert.match(html, new RegExp(`href="https://h\\.accesstrade\\.net/sp/cc\\?rk=${rk}" rel="nofollow"`));
    assert.match(html, new RegExp(`<link rel="canonical" href="https://toushi-gensoku\\.jp/services/${slug}"/>`));
  }

  for (const slug of unapproved) {
    const response = await worker.fetch(new Request(`http://localhost/services/${slug}`), env, ctx);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.doesNotMatch(html, /h\.accesstrade\.net/);
    assert.doesNotMatch(html, /<small>PR<\/small>/);
    assert.match(html, /アフィリエイト広告を掲載していません/);
  }

  const services = await worker.fetch(new Request("http://localhost/services"), env, ctx);
  const servicesHtml = await services.text();
  for (const slug of [...Object.keys(approved), ...unapproved]) {
    assert.match(servicesHtml, new RegExp(`href="/services/${slug}"`));
  }

  const sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  const sitemapXml = await sitemap.text();
  for (const slug of [...Object.keys(approved), ...unapproved]) {
    assert.match(sitemapXml, new RegExp(`https://toushi-gensoku\\.jp/services/${slug}`));
  }
});
