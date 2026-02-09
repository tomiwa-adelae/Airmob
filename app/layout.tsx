import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Head from "next/head";
import { ContactFooter } from "./(home)/_components/ContactFooter";
import { Toaster } from "sonner";

const outfits = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "AIRMOB Nigeria Limited | Aspiring to Greatness",
    template: "%s | AIRMOB Nigeria",
  },
  description:
    "Founded in 2018, AIRMOB Nigeria Limited is a leading oil and gas industrial company specializing in exploration support, lubricant production, and innovative energy solutions across Africa.",
  keywords: [
    "AIRMOB Nigeria Limited",
    "Oil and Gas Nigeria",
    "Precision Drilling Support",
    "Industrial Lubricant Production",
    "Energy Value Chain Africa",
    "Digital Oilfields AI IoT",
    "Carbon Capture Nigeria",
    "Forbliz Global Resources",
    "Nigeria Energy Sector Solutions",
    "Sustainable Drilling Practices",
    "Tomiwa Adelae",
    "Tomiwa",
    "Adelae",
  ],
  metadataBase: new URL("https://airmob.net.ng"), // Update to your actual domain
  authors: [{ name: "AIRMOB Corporate Communications" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://airmob.net.ng",
    siteName: "AIRMOB Nigeria Limited",
    title: "AIRMOB Nigeria Limited | Powering the Energy Value Chain",
    description:
      "A testament to innovation and excellence in the energy sector. We provide solutions in exploration, manufacturing, and industrial services.",
    images: [
      {
        url: "/assets/images/og-image.png", // Recommended: Use a high-res image of an oil rig or the logo on a dark background
        width: 1200,
        height: 630,
        alt: "AIRMOB Nigeria Limited - Aspiring to Greatness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIRMOB Nigeria Limited | Energy & Innovation",
    description:
      "Transforming the energy value chain with AI, IoT, and sustainable drilling practices.",
    images: ["/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/assets/images/og-image.png" />
        <meta property="og:image" content="/assets/images/og-image.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          data-n-head="ssr"
          data-hid="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <body className={`${outfits.className} antialiased`}>
        <Header />
        <Toaster />
        <div className="pt-20">{children}</div>
        <ContactFooter />
      </body>
    </html>
  );
}
