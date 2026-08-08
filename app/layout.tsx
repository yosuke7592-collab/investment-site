import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_JP({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mincho = Shippori_Mincho({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "18歳からの投資の地図",
  description: "知識ゼロから基礎と取引準備を学び、商品比較・取引画面・模擬注文を体験して最初の少額投資へ進む投資講座。",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${sans.variable} ${mincho.variable}`}>{children}</body></html>;
}
