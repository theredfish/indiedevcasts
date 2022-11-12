import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const siteTitle = "Indiedevcasts";
const siteDescription =
  "Indiedevcasts is a community-centric project where I share content for indie gamedevs such as tutorials, videos, devlogs and more. Join us now!";
const siteUrl = "https://indiedevcasts.com";
const siteImage = "/metadata_logo.png";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={siteTitle} key="og_title" />
        <meta property="og:url" content={siteUrl} key="og_url" />
        <meta
          property="og:description"
          content={siteDescription}
          key="og_descr"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteImage} key="og_image" />

        <meta property="twitter:site" content="@indiedevcasts" />
        <meta property="twitter:url" content={siteUrl} key="twitter_url" />
        <meta
          property="twitter:title"
          content={siteTitle}
          key="twitter_title"
        />
        <meta
          property="twitter:description"
          content={siteDescription}
          key="twitter_descr"
        />
        <script
          defer
          data-domain="indiedevcasts.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <header className="bg-overlapping-circles">
        {home && (
          <div className="relative text-center py-10">
            <Image
              priority
              src="/logo.png"
              height="175.5"
              width="225"
              alt="Indiedevcasts logo"
            />
          </div>
        )}
      </header>

      <main className="mx-2">
        {!home && (
          <div className="pt-16 pl-5 md:pl-0 md:max-w-3xl md:mx-auto">
            <Link href="/">
              <a className="btn text-base font-semibold leading-snug py-2 px-4">
                ← Home
              </a>
            </Link>
          </div>
        )}
        {children}
        {!home && (
          <div className="pt-5 pb-8 pl-5 md:pl-0 md:max-w-3xl md:mx-auto">
            <Link href="/">
              <a className="btn text-base font-semibold leading-snug py-2 px-4">
                ← Home
              </a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
