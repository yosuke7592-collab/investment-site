import type { MetadataRoute } from "next";
import { articles } from "./data/articles";
import { glossaryTerms } from "./data/glossary";
const base="https://investment-map-18.yskhksn.chatgpt.site";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/start","/lessons","/mechanics","/mechanics/leverage","/courses","/plan","/long-term","/strategies","/strategies/products","/strategies/chart","/strategies/patterns","/strategies/methods","/lab","/glossary","/services","/articles","/about"];return[...routes.map(url=>({url:base+url,lastModified:new Date("2026-08-20")})),...articles.map(a=>({url:`${base}/articles/${a.slug}`,lastModified:new Date("2026-08-20")})),...glossaryTerms.map(t=>({url:`${base}/glossary/${t.slug}`,lastModified:new Date("2026-08-20")}))]}
