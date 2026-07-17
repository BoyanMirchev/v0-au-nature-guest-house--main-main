import type { Metadata } from "next"
import FreetimeClientPage from "./FreetimeClientPage"

export const metadata: Metadata = {
  title: "Свободно време и туризъм | Au Nature Guest House",
  description:
    "Открийте идеи за свободно време около къща за гости Au Nature — язовир Сопот, Троянски манастир, пещери, еко пътеки, риболов и разходки в Троянския Балкан.",

  keywords: [
    "свободно време Троян",
    "туризъм Троян",
    "Троянски Балкан",
    "язовир Сопот",
    "Троянски манастир",
    "пещера Съева дупка",
    "пещера Топля",
    "еко пътеки Троян",
    "риболов язовир Сопот",
    "почивка сред природата",
    "къща за гости Троян",
    "Au Nature Guest House",
    "село Голяма Желязна",
    "troyan tourism",
    "sopot dam",
    "troyan monastery",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/freetime",
  },

  openGraph: {
    title: "Свободно време и туризъм | Au Nature Guest House",
    description:
      "Идеи за туризъм и активности около Au Nature — язовир Сопот, Троянски манастир, пещери, еко пътеки и природа.",
    url: "https://www.aunaturetroyanhotel.com/freetime",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/svobodnovremegledka.jpg",
        width: 1200,
        height: 630,
        alt: "Гледка към Троянския Балкан близо до Au Nature Guest House",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Свободно време | Au Nature Guest House",
    description:
      "Туризъм и активности в Троянския Балкан — язовир Сопот, пещери, еко пътеки и разходки сред природата.",
    images: [
      "https://www.aunaturetroyanhotel.com/svobodnovremegledka.jpg",
    ],
  },
}

export default function FreetimePage() {
  return <FreetimeClientPage />
}