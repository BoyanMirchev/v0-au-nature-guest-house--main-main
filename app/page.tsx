import type { Metadata } from "next"
import MainClientPage from "./MainClientPage"
import Script from "next/script"

// JSON-LD Structured Data for Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://www.aunaturetroyanhotel.com/#business",
      "name": "Къща за гости в Троян",
      "alternateName": ["Къща за гости в Троян"],
      "description": "Къща за гости в Троян- най-добрата къща за гости в Троян. Луксозни вили под наем, хотели Троян, настаняване близо до Троянски манастир и язовир Сопот.",
      "url": "https://www.aunaturetroyanhotel.com",
      "telephone": "+359877133188",
      "email": "szp@abv.bg",
      "image": [
        "https://www.aunaturetroyanhotel.com/kushtata.jpg",
        "https://www.aunaturetroyanhotel.com/troyanhotel2.jpg",
        "https://www.aunaturetroyanhotel.com/basein1.jpeg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "с. Голяма Желязна",
        "addressLocality": "Троян",
        "addressRegion": "Ловешка област",
        "postalCode": "5680",
        "addressCountry": "BG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.8833,
        "longitude": 24.7167
      },
      "priceRange": "$$",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4.5"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Басейн", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Барбекю", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Билярд", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Безплатен паркинг", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Градина", "value": true }
      ],
      "checkinTime": "14:00",
      "checkoutTime": "12:00",
      "numberOfRooms": 8,
      "petsAllowed": true,
      "sameAs": [
        "https://www.facebook.com/aunatureguesthouse",
        "https://www.booking.com/hotel/bg/au-nature.html"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aunaturetroyanhotel.com/#website",
      "url": "https://www.aunaturetroyanhotel.com",
      "name": "Къща за гости в Троян",
      "description": "Къща за гости в Троян Au Nature - най-добрата къща за гости в Троян, Троянски Балкан",
      "inLanguage": ["bg", "en"],
      "publisher": {
        "@id": "https://www.aunaturetroyanhotel.com/#business"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aunaturetroyanhotel.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Начало",
          "item": "https://www.aunaturetroyanhotel.com"
        }
      ]
    }
  ]
}

export const metadata: Metadata = {
  title: "Къща за гости в Троян",
  description: "Къща за гости в Троян Au Nature - най-добрата къща за гости в Троян. Луксозна вила под наем в Троян, настаняване близо до Троянски манастир и язовир Сопот. Басейн, барбекю, билярд. Резервирайте сега!",
  keywords: [
  // Основни
  "къща за гости Троян",
  "къща за гости Троянски Балкан",
  "къща за гости Голяма Желязна",
  "Au Nature Guest House",
  "настаняване Троян",
  "нощувки Троян",
  "почивка Троян",
  "почивка в Троянския Балкан",

  // Локация
  "Голяма Желязна",
  "Троян",
  "Троянски Балкан",
  "Ловешка област",
  "Стара планина",
  "Централен Балкан",

  // Туристически обекти
  "язовир Сопот",
  "Троянски манастир",
  "пещера Съева дупка",
  "Беклемето",
  "Орешак",
  "Априлци",

  // Тип настаняване
  "вила под наем Троян",
  "къща под наем Троян",
  "семейна къща за гости",
  "луксозна къща за гости",
  "планинска къща",
  "вила с басейн",
  "къща с барбекю",
  "настаняване с басейн",

  // Видове почивка
  "семейна почивка",
  "романтична почивка",
  "уикенд в планината",
  "почивка сред природата",
  "релакс в планината",
  "еко туризъм",
  "селски туризъм",

  // Активности
  "риболов язовир Сопот",
  "планински преходи",
  "еко пътеки",
  "велосипедни маршрути",
  "джип турове",
  "лов и риболов",

  // Събития
  "сватба в планината",
  "тиймбилдинг",
  "корпоративни събития",
  "рожден ден",

  // English
  "guest house Troyan",
  "Troyan accommodation",
  "holiday house Bulgaria",
  "mountain accommodation Bulgaria",
  "guest house near Troyan Monastery",
  "Sopot Dam accommodation",
],

  openGraph: {
    title: "Къща за гости в Троян | Вила в Троянски Балкан",
    description: "Къща за гости в Троян - най-добрата къща за гости в Троян. Луксозна вила, басейн, барбекю, уникални стаи. Резервирайте сега!",
    url: "https://www.aunaturetroyanhotel.com",
    type: "website",
    images: [
      {
        url: "https://www.aunaturetroyanhotel.com/kushtata.jpg",
        width: 1200,
        height: 630,
        alt: "Къща за гости в Троян, Троянски Балкан",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Къща за гости в Троян",
    description: "Къща за гости в Троян - най-добрата къща за гости в Троян. Басейн, барбекю, билярд. Резервирайте!",
    images: ["https://www.aunaturetroyanhotel.com/kushtata.jpg"],
  },
  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com",
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainClientPage />
    </>
  )
}
