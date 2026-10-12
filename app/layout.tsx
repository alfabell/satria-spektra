import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: "Satria Spektra Production | Event & Experience Production",
  description: "Merangkai ide menjadi pengalaman. Partner kreatif untuk perencanaan dan produksi acara.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
