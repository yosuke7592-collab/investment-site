import type { Metadata } from "next";
const title="長期投資とアクティブ投資の選び方"; const description="目的、期間、使える時間から、長期資産形成とアクティブ投資のどちらを学ぶか考えます。";
export const metadata:Metadata={title,description,alternates:{canonical:"/courses"},openGraph:{title,description,url:"/courses",type:"article"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
