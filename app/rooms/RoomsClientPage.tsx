"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { BookingModal } from "@/components/booking-modal"
import { SiteHeader } from "@/components/site-header"

type Room = {
  title: string
  image: string
  alt: string
  subtitle: string
  description: string
}

type PriceCard = {
  title: string
  priceBgn: string
  priceEur: string
  note: string
  featured?: boolean
}

const rooms: Room[] = [
  {
    title: "Цветна пролет",
    image: "/cvetnaprolet.jpg",
    alt: "Апартамент Цветна пролет в къща за гости Au Nature",
    subtitle: "Удобство, поднесено в цветна красота.",
    description:
      "Апартамент в лилави тонове, с много цветя и цветни хербарии. Разполага с функционален разтегателен диван, холна маса, телевизор, хладилник, отделна спалня и голяма тераса.",
  },
  {
    title: "Летни емоции",
    image: "/letniemociiapartament2.jpg",
    alt: "Апартамент Летни емоции в къща за гости Au Nature",
    subtitle: "Енергията на слънцето и лятото.",
    description:
      "Апартамент в топли жълти тонове, създаващ усещане за уют и светлина. Разполага с функционален разтегателен диван, холна маса, телевизор, хладилник, отделна спалня и голяма тераса.",
  },
  {
    title: "Ароматна есен",
    image: "/aromatnaesen_1.jpg",
    alt: "Стая Ароматна есен в къща за гости Au Nature",
    subtitle: "Есенният сезон в най-красиво измерение.",
    description:
      "Стая с есенна атмосфера, вдъхновена от цветовете на Стара планина. В декорацията са използвани есенни листа, клонки и природни елементи, създадени ръчно.",
  },
  {
    title: "Морски тайни",
    image: "/morsktaini1_1.jpg",
    alt: "Стая Морски тайни в къща за гости Au Nature",
    subtitle: "Невероятна хармония в синьо-бялата гама.",
    description:
      "Стая, вдъхновена от морето, корабните въжета, мидите, пясъка и морските тоналности. Интериорът създава усещане за спокойствие, лекота и свежест.",
  },
  {
    title: "Зимно предизвикателство",
    image: "/zimnopredizvikatelstvostaq5.jpeg",
    alt: "Стая Зимно предизвикателство в къща за гости Au Nature",
    subtitle: "Декорите в стаята Ви въвеждат в красива зимна приказка.",
    description:
      "Стая в бели тонове, вдъхновена от зимата, снежинките и заскрежените дървета. Подходяща е за гости, които харесват спокойна и приказна атмосфера.",
  },
  {
    title: "Планински романс",
    image: "/planinskiromans_1.jpg",
    alt: "Стая Планински романс в къща за гости Au Nature",
    subtitle: "Досег до непокътнатата природа.",
    description:
      "Стая, вдъхновена от планината и природата. В декорацията присъстват дървесни елементи, клонки и кафяви тонове, които създават усещане за топлина и близост до Балкана.",
  },
  {
    title: "Речни брегове",
    image: "/rechnibregovestaq7.jpg",
    alt: "Стая Речни брегове в къща за гости Au Nature",
    subtitle: "Приключения край реката.",
    description:
      "Стая в сивата гама, декорирана с речни камъни и природни елементи. Интериорът е вдъхновен от реките, бреговете и усещането за движение и спокойствие.",
  },
  {
    title: "Пустинна нощ",
    image: "/pustinnanosht.jpg",
    alt: "Стая Пустинна нощ в къща за гости Au Nature",
    subtitle: "Пригответе се за загадъчен и красив свят.",
    description:
      "Стая с бежови нюанси, кактуси, пясък и сухи клони. Интериорът Ви пренася в различна атмосфера, вдъхновена от природното богатство на пустинните пейзажи.",
  },
]

const housePrices: PriceCard[] = [
  {
    title: "При повече нощувки",
    priceBgn: "879.90",
    priceEur: "450.00",
    note: "на вечер",
  },
  {
    title: "При една нощувка",
    priceBgn: "1300.00",
    priceEur: "650.00",
    note: "на вечер",
    featured: true,
  },
]

const singlePrices: PriceCard[] = [
  {
    title: "Стая",
    priceBgn: "97.80",
    priceEur: "50.00",
    note: "на нощувка",
  },
  {
    title: "Апартамент",
    priceBgn: "136.90",
    priceEur: "70.00",
    note: "на нощувка",
    featured: true,
  },
]

function RoomCard({
  room,
  onBookingClick,
  index = 0,
}: {
  room: Room
  onBookingClick: () => void
  index?: number
}) {
  return (
    <article
      className="reveal group overflow-hidden rounded-[2rem] bg-white shadow-sm"
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={room.image}
          alt={room.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <h3 className="mb-3 font-serif text-2xl font-light text-[#3A2A25]">
          {room.title}
        </h3>

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[#8A3E36]">
          {room.subtitle}
        </p>

        <p className="mb-6 text-sm leading-7 text-neutral-600">
          {room.description}
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/gallery"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36] transition hover:text-[#6C141C]"
          >
            Разгледайте →
          </Link>

          <button
            type="button"
            onClick={onBookingClick}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36] transition hover:text-[#6C141C]"
          >
            Резервирайте →
          </button>
        </div>
      </div>
    </article>
  )
}

function PriceCard({ item, index = 0 }: { item: PriceCard; index?: number }) {
  const backgroundClass = item.featured ? "bg-[#8A3E36]" : "bg-[#3A2A25]"

  return (
    <article
      className="reveal overflow-hidden rounded-[2rem] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ transitionDelay: `${(index % 2) * 0.12}s` }}
    >
      <div className={`${backgroundClass} p-10 text-center text-white`}>
        <h3 className="mb-2 font-serif text-2xl font-light tracking-wide">
          {item.title}
        </h3>

        <div className="my-6 leading-tight">
          <span className="font-serif text-4xl font-light">
            {item.priceBgn}
          </span>
          <span className="ml-2 text-lg">лв</span>

          <br />

          <span className="font-serif text-4xl font-light">
            {item.priceEur}
          </span>
          <span className="ml-2 text-lg">евро</span>
        </div>

        <p className="text-sm uppercase tracking-[0.25em] text-white/70">
          {item.note}
        </p>
      </div>
    </article>
  )
}

export default function RoomsClientPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/chaduri.jpg"
          alt="Настаняване в къща за гости Au Nature"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Настаняване
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl">
              СТАИ И АПАРТАМЕНТИ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Стил и комфорт в оригинален интериор, допълващ природната тематика.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
            Настаняване
          </p>

          <p className="text-lg leading-9 text-neutral-700">
            Стаите са стилно и комфортно обзаведени и декорирани. Всяка е с
            различен интериор, вдъхновен от сезоните, морето, реките, планините,
            цветята, слънцето, скалите, бреговете и природата. Атмосферата е
            създадена така, че да Ви потопи в свежа и спокойна обстановка.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 text-center">
            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Апартаменти и стаи
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <RoomCard
                key={room.title}
                room={room}
                index={index}
                onBookingClick={openBookingModal}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Цени
            </p>

            <h2 className="mb-4 font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Наемане на цялата къща
            </h2>

            <p className="text-base leading-8 text-neutral-600">
              Подходящо за групи, семейни събирания и специални събития.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {housePrices.map((item, index) => (
              <PriceCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <p className="mx-auto my-10 max-w-2xl text-center text-base leading-8 text-neutral-600">
            Ако Вашата компания е различна като брой гости, може да разгледате
            цените по-долу за отделно настаняване.
          </p>

          <div className="reveal mb-14 mt-20 text-center">
            <h2 className="mb-4 font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Цени при отделно настаняване
            </h2>

            <p className="text-base leading-8 text-neutral-600">
              В цената са включени нощувка, туристически данък, ДДС, интернет и
              паркинг.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {singlePrices.map((item, index) => (
              <PriceCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-base leading-8 text-neutral-600">
            <p>
              Резервацията се потвърждава след изпратено капаро до пет дни от
              деня на резервацията по банковата сметка на фирмата. Възрастен,
              настанен в самостоятелна стая, заплаща 70% от стойността на цялата
              стая.
            </p>

            <p>
              Домашни любимци се допускат след запитване, срещу еднократна такса
              от 40.00 лв за малка порода и 50.00 лв за средна порода, независимо
              от периода на престой.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#8A3E36] px-6 py-24 text-white">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
            Контакти
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light sm:text-5xl">
            Посетете ни!
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-9 text-white/85">
            Намираме се в село Голяма Желязна, в сърцето на Троянския Балкан.
            Селото е разположено на 30 км западно от град Троян и на 110 км от
            град София. Локацията е леснодостъпна, тъй като се намира на 10 км от
            главния път София – Варна.
          </p>

          <a
            href="tel:+359877133188"
            className="inline-flex rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36] transition hover:bg-white/90"
          >
            +359 877 133 188
          </a>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  )
}
