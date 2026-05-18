import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { PODCAST_NAME, HOSTS, SITE_URL, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeScript } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description = `A video podcast with ${HOSTS} exploring technology, open source, and the future of the web.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PODCAST_NAME} with ${HOSTS}`,
    template: `%s | ${PODCAST_NAME}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: PODCAST_NAME,
    title: `${PODCAST_NAME} with ${HOSTS}`,
    description,
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 1280,
        height: 720,
        alt: `${PODCAST_NAME} with ${HOSTS}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PODCAST_NAME} with ${HOSTS}`,
    description,
    images: [HOME_OG_IMAGE_URL],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: PODCAST_NAME,
  description,
  url: SITE_URL,
  author: [
    { "@type": "Person", name: "Matt Carolan" },
    { "@type": "Person", name: "Bibi Souza" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeScript />
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
