import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import GlobalJourney from "./components/GlobalJourney";

const sans = Noto_Sans_JP({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mincho = Shippori_Mincho({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://investment-map-18.yskhksn.chatgpt.site"),
  title: { default: "投資の原則", template: "%s｜投資の原則" },
  description: "金融投資の仕組みを理解し、自分に合う方法と守れるルールを作るための投資教材。",
  openGraph: { title: "投資の原則", description: "金融投資の仕組みを理解し、自分に合う方法と守れるルールを作るための投資教材。", type: "website", locale: "ja_JP" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${sans.variable} ${mincho.variable}`}>{children}<GlobalJourney /></body></html>;
}
