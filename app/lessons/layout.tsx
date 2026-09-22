import type { Metadata } from "next";
const title = "投資の基礎講座20回"; const description = "お金、リスク、金融商品、注文の仕組みを20回で順番に学ぶ初心者向け講座です。";
export const metadata: Metadata={title,description,alternates:{canonical:"/lessons"},openGraph:{title,description,url:"/lessons",type:"website"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
