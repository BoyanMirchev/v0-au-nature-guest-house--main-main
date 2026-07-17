import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ScrollReveal } from "@/components/scroll-reveal"

import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8A3E36",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aunaturetroyanhotel.com"),
  title: {
    default: "Къща за гости Троян | Au Nature Guest House",
    template: "%s | Au Nature Guest House",
  },
  description:
    "Au Nature Guest House е къща за гости в Троянския Балкан, подходяща за почивка, семейни събирания, събития и престой сред природата.",
  keywords: [
    "къща за гости Троян",
    "къща за гости Троянски Балкан",
    "къща за гости Голяма Желязна",
    "Au Nature Guest House",
    "настаняване Троян",
    "нощувки Троян",
    "почивка Троян",
    "почивка в Троянския Балкан",
    "язовир Сопот",
    "Троянски манастир",
    "вила под наем Троян",
    "къща под наем Троян",
    "семейна почивка",
    "уикенд в планината",
    "guest house Troyan",
    "Troyan accommodation",
    "mountain accommodation Bulgaria",
  ],
  authors: [{ name: "Au Nature Guest House" }],
  creator: "Au Nature Guest House",
  publisher: "Au Nature Guest House",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Къща за гости Троян | Au Nature Guest House",
    description:
      "Къща за гости в Троянския Балкан — уют, природа, спокойствие, басейн, градина и място за събития.",
    type: "website",
    url: "https://www.aunaturetroyanhotel.com",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    images: [
      {
        url: "/kushtata.jpg",
        width: 1200,
        height: 630,
        alt: "Au Nature Guest House - Къща за гости Троян",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Къща за гости Троян | Au Nature Guest House",
    description:
      "Планинска къща за гости в Троянския Балкан. Резервирайте престой сред природа и спокойствие.",
    images: ["/kushtata.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com",
  },
}

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.aunaturetroyanhotel.com/#business",
  name: "Au Nature Guest House",
  alternateName: ["Къща за гости Au Nature", "Къща за гости Троян"],
  description:
    "Къща за гости в Троянския Балкан, подходяща за почивка, събития и престой сред природата.",
  url: "https://www.aunaturetroyanhotel.com",
  telephone: "+359877133188",
  email: "szp@abv.bg",
  image: [
    "https://www.aunaturetroyanhotel.com/kushtata.jpg",
    "https://www.aunaturetroyanhotel.com/troyanhotel2.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "с. Голяма Желязна",
    addressLocality: "Троян",
    addressRegion: "Ловеч",
    addressCountry: "BG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.8833,
    longitude: 24.7167,
  },
  priceRange: "$$",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Безплатен паркинг",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Градина",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Басейн",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Барбекю",
      value: true,
    },
  ],
  checkinTime: "14:00",
  checkoutTime: "12:00",
  petsAllowed: true,
  sameAs: ["https://www.booking.com/hotel/bg/au-nature.html"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8A3E36" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingJsonLd),
          }}
        />
      </head>

      <GoogleAnalytics gaId="G-MTJHY7TBD8" />

      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      <LanguageProvider>
    <Suspense fallback={null}>{children}</Suspense>

    <ScrollReveal />
    <Analytics />
    </LanguageProvider>

     <GoogleAnalytics gaId="G-MTJHY7TBD8" />
     </body>
    </html>
  )
}
