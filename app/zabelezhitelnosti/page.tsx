import type { Metadata } from "next"
import ZabelezhitelnostiClientPage from "./ZabelezhitelnostiClientPage"

export const metadata: Metadata = {
  title: "Забележителности около Троян",
  description:
    "Топ 10 забележителности около Троян — Троянски манастир, язовир Сопот, пещера Съева дупка, Крушунски водопади, музеи и природни феномени. Открийте най-красивите места в Троянския Балкан по време на престоя си в Au Nature.",

  keywords: [
    "забележителности Троян",
    "забележителности около Троян",
    "какво да видим в Троян",
    "Троянски манастир",
    "яз. Сопот",
    "пещера Съева дупка",
    "Крушунски водопади",
    "туризъм Троянски Балкан",
    "природни забележителности Троян",
    "Au Nature Guest House",
    "attractions Troyan Bulgaria",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/zabelezhitelnosti",
  },

  openGraph: {
    title: "Забележителности около Троян | Au Nature Guest House",
    description:
      "Топ 10 забележителности в Троянския Балкан — манастири, пещери, водопади и музеи на удобно разстояние от къща за гости Au Nature.",
    url: "https://www.aunaturetroyanhotel.com/zabelezhitelnosti",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/svobodnovrememanastir.jpg",
        width: 1200,
        height: 630,
        alt: "Забележителности около Троян",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Забележителности около Троян | Au Nature Guest House",
    description:
      "Топ 10 места за посещение в Троянския Балкан по време на престоя Ви в Au Nature.",
    images: ["https://www.aunaturetroyanhotel.com/svobodnovrememanastir.jpg"],
  },
}

export default function ZabelezhitelnostiPage() {
  return <ZabelezhitelnostiClientPage />
}
