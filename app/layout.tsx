import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "@styles/global.css";
import "@styles/shades-of-purple.css";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "components/social-icons";

const siteTitle = "Indiedevcasts";
const siteDescription =
  "Indiedevcasts is a community-centric project where I share content for indie gamedevs such as tutorials, videos, devlogs and more. Join us now!";
const logoPath = "/metadata_logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
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

function Footer() {
  return (
    <div className="mt-28">
      <hr className="bg-gradient-to-r from-teal-300 via-purple-400 to-red-400 h-2" />
      <footer className="flex w-full bg-[#18181b] text-gray-100 py-5">
        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between sm:w-full xl:w-3/5 max-w-4xl mx-auto px-10">
          <div className="flex flex-col sm:flex-row sm:inline-flex sm:space-x-6">
            <span>&copy; {new Date().getFullYear()} Indiedevcasts</span>
            <Link href="/privacy-policy" className="text-gray-100 border-b-0">
              Privacy Policy
            </Link>
            <Link href="/legal-notice" className="text-gray-100 border-b-0">
              Legal Notice
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://mastodon.online/@indiedevcasts" />
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
                width="189"
                height="144"
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
        <Footer />
      </body>
    </html>
  );
}
