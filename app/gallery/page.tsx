import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Галерия | Au Nature Guest House",
  description:
    "Разгледайте снимки на къща за гости Au Nature в Троянския Балкан — стаи, басейн, двор, салон, тераса и места за отдих.",

  keywords: [
    "галерия Au Nature",
    "снимки къща за гости Троян",
    "снимки Au Nature Guest House",
    "къща за гости Троян",
    "Троянски Балкан",
    "снимки стаи Троян",
    "снимки басейн Троян",
    "снимки двор къща за гости",
    "село Голяма Желязна",
    "guest house Troyan photos",
    "Au Nature Guest House gallery",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/gallery",
  },

  openGraph: {
    title: "Галерия | Au Nature Guest House",
    description:
      "Разгледайте снимки на стаите, басейна, двора и местата за отдих в Au Nature Guest House.",
    url: "https://www.aunaturetroyanhotel.com/gallery",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/galeria1.jpeg",
        width: 1200,
        height: 630,
        alt: "Галерия на Au Nature Guest House в Троянския Балкан",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Галерия | Au Nature Guest House",
    description:
      "Снимки на къща за гости Au Nature — стаи, басейн, двор и места за отдих.",
    images: ["https://www.aunaturetroyanhotel.com/galeria1.jpeg"],
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}