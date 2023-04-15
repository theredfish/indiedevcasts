import React from "react";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "../styles/global.css";
import "../styles/shades-of-purple.css";
import Image from "next/image";
import Link from "next/link";

const siteTitle = "Indiedevcasts";
const siteDescription =
  "Indiedevcasts is a community-centric project where I share content for indie gamedevs such as tutorials, videos, devlogs and more. Join us now!";
const logoPath = "/metadata_logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ||
      `http://localhost:${process.env.PORT || 3000}`
    }`
  ),
  title: siteTitle,
  description: siteDescription,
  keywords: "gamedev, indie, indiedev, indiedevcasts, indiegame",
  icons: [
    {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      rel: "apple-touch-icon",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
    },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: logoPath,
        alt: "Indiedevcasts logo",
      },
    ],
  },
  twitter: {
    site: "@indiedevcasts",
    title: siteTitle,
    images: logoPath,
    description: siteDescription,
    card: "summary_large_image",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="indiedevcasts.com" />
      </head>
      <body className="bg-gray-50 text-slate-800 antialiased">
        <header className="bg-overlapping-circles py-10">
          <div className="relative py-10">
            <Link href="/">
              {/* initial ratio: 330x258 */}
              <Image
                priority
                src="/logo.png"
                width="270"
                height="206"
                alt="Indiedevcasts logo"
                className="mx-auto"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </Link>
          </div>
        </header>
        <hr className="mb-16 border-t-[#18181b] bg-gradient-to-r from-teal-300 via-purple-400 to-red-400 h-2" />
        {children}
      </body>
    </html>
  );
}
