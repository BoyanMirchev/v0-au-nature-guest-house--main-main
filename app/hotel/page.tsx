import type { Metadata } from "next"
import HotelClientPage from "./HotelClientPage"

export const metadata: Metadata = {
  title: "За къщата | Au Nature Guest House",
  description:
    "Научете повече за къща за гости Au Nature в село Голяма Желязна, близо до Троян. Просторна къща за до 22 души с басейн, двор, билярд, оборудвана кухня и условия за почивка в Троянския Балкан.",

  keywords: [
    "къща за гости Троян",
    "Au Nature Guest House",
    "къща за гости Голяма Желязна",
    "настаняване Троянски Балкан",
    "къща за гости с басейн",
    "къща за гости за групи",
    "къща за 22 души",
    "почивка Троян",
    "язовир Сопот",
    "Троянски Балкан",
    "guest house Troyan",
    "villa Troyan Bulgaria",
    "group accommodation Troyan",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/hotel",
  },

  openGraph: {
    title: "За къщата | Au Nature Guest House",
    description:
      "Просторна къща за гости в Троянския Балкан, подходяща за семейна почивка, групи и събития.",
    url: "https://www.aunaturetroyanhotel.com/hotel",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/troyanhotel2.jpg",
        width: 1200,
        height: 630,
        alt: "Au Nature Guest House в Троянския Балкан",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "За къщата | Au Nature Guest House",
    description:
      "Къща за гости в село Голяма Желязна, близо до Троян, подходяща за почивка и групово настаняване.",
    images: ["https://www.aunaturetroyanhotel.com/troyanhotel2.jpg"],
  },
}

export default function HotelPage() {
  return <HotelClientPage />
}