import type { Metadata } from "next"
import ContactsClientPage from "./ContactsClientPage"

export const metadata: Metadata = {
  title: "Контакти и резервации | Au Nature Guest House",
  description:
    "Свържете се с къща за гости Au Nature в село Голяма Желязна, Троянски Балкан. Телефон: +359 877 133 188. Имейл: szp@abv.bg.",

  keywords: [
    "къща за гости Троян",
    "Au Nature Guest House",
    "контакти Au Nature",
    "резервации Троян",
    "село Голяма Желязна",
    "настаняване Троянски Балкан",
    "къща за гости Голяма Желязна",
    "почивка Троян",
    "вила Троян",
    "guest house Troyan",
    "contact Au Nature Guest House",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/contacts",
  },

  openGraph: {
    title: "Контакти и резервации | Au Nature Guest House",
    description:
      "Свържете се с нас и резервирайте почивка в Троянския Балкан. Телефон: +359 877 133 188.",
    url: "https://www.aunaturetroyanhotel.com/contacts",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/kushtata.jpg",
        width: 1200,
        height: 630,
        alt: "Au Nature Guest House - къща за гости в Троянския Балкан",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Контакти | Au Nature Guest House",
    description:
      "Резервирайте почивка в Троянския Балкан. Телефон: +359 877 133 188.",
    images: ["https://www.aunaturetroyanhotel.com/kushtata.jpg"],
  },
}

export default function ContactsPage() {
  return <ContactsClientPage />
}