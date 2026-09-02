import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス・参考書比較",
  description: "投資の目的、取扱商品、コスト、使いやすさ・安心感から証券会社や学習サービスを比較します。",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
