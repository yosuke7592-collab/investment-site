import type { Metadata } from "next";
const title="長期資産形成の基本"; const description="長期・積立・分散・低コストを軸に、無理なく続ける資産形成の考え方を学びます。";
export const metadata:Metadata={title,description,alternates:{canonical:"/long-term"},openGraph:{title,description,url:"/long-term",type:"article"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
