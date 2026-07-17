import type { Metadata } from "next"
import KashtaZaGostiTroyanClientPage from "./KashtaZaGostiTroyanClientPage"

export const metadata: Metadata = {
  title: "Къща за гости Троян",
  description:
    "Къща за гости край Троян за до 22 души с басейн, двор и оборудвана кухня в село Голяма Желязна. Разберете защо да отседнете при нас, какво да разгледате около Троян, разстояния до забележителности, снимки, карта и често задавани въпроси.",

  keywords: [
    "къща за гости Троян",
    "къща за гости край Троян",
    "къща за гости Голяма Желязна",
    "настаняване Троян",
    "къща за гости с басейн Троян",
    "къща за гости за групи Троян",
    "почивка Троянски Балкан",
    "къща за 22 души",
    "Au Nature Guest House",
    "яз. Сопот",
    "забележителности Троян",
    "guest house Troyan Bulgaria",
  ],

  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com/kashta-za-gosti-troyan",
  },

  openGraph: {
    title: "Къща за гости Троян | Au Nature Guest House",
    description:
      "Просторна къща за гости край Троян с басейн, двор и условия за групи до 22 души в Троянския Балкан.",
    url: "https://www.aunaturetroyanhotel.com/kashta-za-gosti-troyan",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/kushtata.jpg",
        width: 1200,
        height: 630,
        alt: "Къща за гости Троян — Au Nature Guest House",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Къща за гости Троян | Au Nature Guest House",
    description:
      "Къща за гости край Троян с басейн и двор, подходяща за семейства и групи до 22 души.",
    images: ["https://www.aunaturetroyanhotel.com/kushtata.jpg"],
  },
}

export default function KashtaZaGostiTroyanPage() {
  return <KashtaZaGostiTroyanClientPage />
}
