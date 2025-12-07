import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnSkill - Coding Không Chuột",
  description: "Lộ trình học coding hoàn toàn bằng bàn phím",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}

