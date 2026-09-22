import type { Metadata } from "next";
const title="投資用語集"; const description="投資初心者が教材の途中で出会う金融・投資用語を、短く分かりやすく確認できます。";
export const metadata:Metadata={title,description,alternates:{canonical:"/glossary"},openGraph:{title,description,url:"/glossary",type:"website"},twitter:{title,description}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
