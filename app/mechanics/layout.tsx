import type { Metadata } from "next";
const title="金融商品の取引が成立する仕組み"; const description="株式、投資信託、ETF、先物などの取引と利益・損失が生まれる仕組みを解説します。";
export const metadata:Metadata={title,description,alternates:{canonical:"/mechanics"},openGraph:{title,description,url:"/mechanics",type:"article"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
