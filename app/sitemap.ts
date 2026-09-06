import type { MetadataRoute } from "next";
import { articles } from "./data/articles";
import { glossaryTerms } from "./data/glossary";
const base="https://toushi-gensoku.jp";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/start","/lessons","/mechanics","/mechanics/leverage","/courses","/plan","/long-term","/strategies","/strategies/products","/strategies/chart","/strategies/patterns","/strategies/methods","/lab","/glossary","/services","/articles","/about","/contact","/privacy","/disclaimer","/affiliate-policy"];return[...routes.map(url=>({url:base+url,lastModified:new Date(["/about","/contact","/privacy","/disclaimer","/affiliate-policy","/services"].includes(url)?"2026-09-06":"2026-08-20")})),...articles.map(a=>({url:`${base}/articles/${a.slug}`,lastModified:new Date("2026-08-20")})),...glossaryTerms.map(t=>({url:`${base}/glossary/${t.slug}`,lastModified:new Date("2026-08-20")}))]}
