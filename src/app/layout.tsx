import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Alvarez Figueroa",
  description: "Makeup artist and content creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/flower.png" sizes="any" />
      <meta property="og:image" content="https://vihvelibreassets.s3.sa-east-1.amazonaws.com/isaac.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
