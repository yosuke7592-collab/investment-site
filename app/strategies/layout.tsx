import type { Metadata } from "next";
const title="アクティブ投資の学び方"; const description="商品、チャート、手法、売買ルールを学び、記録と検証につなげる順番を解説します。";
export const metadata:Metadata={title,description,alternates:{canonical:"/strategies"},openGraph:{title,description,url:"/strategies",type:"article"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
