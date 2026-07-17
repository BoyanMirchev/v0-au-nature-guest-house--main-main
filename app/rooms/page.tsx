import type { Metadata } from "next"
import RoomsClientPage from "./RoomsClientPage"

export const metadata: Metadata = {
  title: "Стаи и апартаменти | Au Nature Guest House",
  description:
    "Разгледайте тематичните стаи и апартаменти в къща за гости Au Nature, село Голяма Желязна, близо до Троян. Настаняване сред природата в Троянския Балкан.",

  keywords: [
    "стаи Троян",
    "апартаменти Троян",
    "настаняване Троян",
    "къща за гости Троян",
    "Au Nature Guest House",
    "тематични стаи",
    "село Голяма Желязна",
    "Троянски Балкан",
    "стая с тераса",
    "почивка Троян",
    "rooms Troyan",
    "guest house Troyan",
    "accommodation Troyan",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/rooms",
  },

  openGraph: {
    title: "Стаи и апартаменти | Au Nature Guest House",
    description:
      "Тематични стаи и апартаменти в къща за гости Au Nature, разположена в Троянския Балкан.",
    url: "https://www.aunaturetroyanhotel.com/rooms",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/cvetnaproletapartament1.jpg",
        width: 1200,
        height: 630,
        alt: "Апартамент Цветна пролет в Au Nature Guest House",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Стаи и апартаменти | Au Nature Guest House",
    description:
      "Разгледайте тематичните стаи и апартаменти в Au Nature Guest House.",
    images: [
      "https://www.aunaturetroyanhotel.com/cvetnaproletapartament1.jpg",
    ],
  },
}

export default function RoomsPage() {
  return <RoomsClientPage />
}