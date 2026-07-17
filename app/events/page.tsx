import type { Metadata } from "next"
import EventsClientPage from "./EventsClientPage"

export const metadata: Metadata = {
  title: "Събития в Троянския Балкан | Au Nature Guest House",
  description:
    "Организирайте сватба, тиймбилдинг, рожден ден или семейно тържество в къща за гости Au Nature в село Голяма Желязна, близо до Троян.",

  keywords: [
    "събития Троян",
    "сватби Троян",
    "тиймбилдинг Троян",
    "къща за гости за събития",
    "събития Троянски Балкан",
    "сватба в планината",
    "фирмени събития Троян",
    "семейни тържества Троян",
    "рожден ден Троян",
    "Au Nature Guest House",
    "село Голяма Желязна",
    "wedding venue Troyan",
    "team building Troyan",
    "events Troyan Balkan",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/events",
  },

  openGraph: {
    title: "Събития в Троянския Балкан | Au Nature Guest House",
    description:
      "Място за сватби, тиймбилдинг, семейни празници и фирмени събития в село Голяма Желязна, близо до Троян.",
    url: "https://www.aunaturetroyanhotel.com/events",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/salon.jpg",
        width: 1200,
        height: 630,
        alt: "Събития в Au Nature Guest House, Троянски Балкан",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Събития | Au Nature Guest House",
    description:
      "Организирайте сватба, тиймбилдинг или семеен празник в Троянския Балкан.",
    images: ["https://www.aunaturetroyanhotel.com/salon.jpg"],
  },
}

export default function EventsPage() {
  return <EventsClientPage />
}