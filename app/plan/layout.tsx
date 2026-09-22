import type { Metadata } from "next";
const title="自分に合う投資方法を考える条件整理"; const description="資金、期間、使える時間、損失への向き合い方から無理のない投資方法を整理します。";
export const metadata:Metadata={title,description,alternates:{canonical:"/plan"},openGraph:{title,description,url:"/plan",type:"article"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
