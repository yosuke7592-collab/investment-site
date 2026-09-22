import type { Metadata } from "next";
const title = "投資を始める前に知っておきたいこと";
const description = "投資の本質、損失の可能性、自分のルールが必要な理由を初心者向けに整理します。";
export const metadata: Metadata = { title, description, alternates:{canonical:"/start"}, openGraph:{title,description,url:"/start",type:"article"}, twitter:{title,description} };
export default function Layout({children}:{children:React.ReactNode}){return children;}
