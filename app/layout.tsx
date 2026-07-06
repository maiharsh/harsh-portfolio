import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://harshvardhan.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Harshvardhan portfolio",
  description:
    "Full Stack Engineer building modern web applications. Explore my projects, stack, and experience in React, Next.js, Node.js and more.",

  icons: {
    icon: [
      { url: "/meta/newfav16.png", sizes: "16x16", type: "image/png" },
      { url: "/meta/newfav32.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/newfav48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/meta/apple-touch-icon180.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/meta/apple-touch-icon180.png",
        color: "#000000",
      },
      { rel: "msapplication-TileImage", url: "/meta/mstile144.png" },
    ],
  },
  openGraph: {
    title: "Harshvardhan — I Build Things for the Web",
    description: "Full Stack Engineer building modern web applications.",
    url: siteUrl,
    siteName: "Harshvardhan",
    images: [
      {
        url: "/meta/og-profile_photo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshvardhan — I Build Things for the Web",
    description:
      "Full Stack Engineer building modern web applications. Explore my projects, stack, and experience in React, Next.js, Node.js and more.",
    images: ["/meta/twitter-image.png"],
  },
  manifest: "/meta/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/font2.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/font1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font1 font2 antialiased`}>
        <div className="sticky top-0 h-2 w-full bg1 z-50"></div>
        <Navbar />
        <ThemeToggle />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
