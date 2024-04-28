import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Alvarez Figueroa",
  description: "Makeup artist and content creator",
  openGraph: {
    title: "Isaac Álvarez",
    description: "Makeup artist and content creator",
    images: [
      {
        url: "https://vihvelibreassets.s3.sa-east-1.amazonaws.com/isaac.png",
        width: 1200,
        height: 630,
        alt: "Isaac Álvarez",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/flower.png" sizes="any" />
      <meta property="og:title" content="Isaac Álvarez" />
      <meta
        property="og:description"
        content="Makeup artist and content creator"
      />
      <meta property="og:url" content="https://www.isaacalvarez.beauty/" />
      <meta
        property="og:image"
        content="https://vihvelibreassets.s3.sa-east-1.amazonaws.com/isaac.png"
      />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:type" content="article" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
