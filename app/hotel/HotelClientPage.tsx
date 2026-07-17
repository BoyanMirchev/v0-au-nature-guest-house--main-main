"use client"

import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    title: "Името",
    image: "/troyanhoteldvor.jpeg",
    alt: "Дворът на къща за гости Au Nature",
    text: "Всичко започва от името, което е свързано с природата. „Nature“ означава природен и натурален — точно такова е и мястото, на което ще попаднете. Къщата за гости е сред природата, откъсната от забързаното ежедневие. Nature, Natur, Au Nature, Natura и Натура носят едно общо усещане — природа, чистота и спокойствие.",
  },
  {
    title: "Бягство от забързаното ежедневие",
    image: "/troyanhotel3.jpg",
    alt: "Място за отдих в къща за гости Au Nature",
    text: "Сред ридовете на Стара планина, в красивия Троянски Балкан, Ви очаква място за релакс, тишина и презареждане. Асфалтов път води до къща за гости Au Nature, сгушена в полите на Балкана. След нея остава само вълшебството на природата и красотата на планината. Изберете ни, за да прекарате една зареждаща почивка сред спокойствие и чист въздух.",
    reverse: true,
  },
  {
    title: "Капацитет",
    image: "/troyanhotelbillard.jpeg",
    alt: "Билярд зона в къща за гости Au Nature",
    text: "Къщата побира до 22 души, като има възможност за допълнителни легла в някои стаи след предварителна уговорка. Сградата е на три етажа, посреща първите си гости в началото на 2013 година и оттогава функционира като туристически обект. Всяка стая има отделен санитарен възел, тераса, хладилник, кабелна телевизия, интернет и индивидуален декор. Леглата са с хотелски матраци.",
  },
  {
    title: "Хранене",
    image: "/navun.jpg",
    alt: "Външна зона на къща за гости Au Nature",
    text: "Имате свободата сами да приготвите храната си в напълно оборудвана кухня. На разположение са готварска печка, хладилник, кафе машина, миялна машина, пералня, тостер, микровълнова фурна, електрическа кана, парти грил и всичко необходимо за едно домакинство. Работим и с ресторант, от който може да бъде доставена прясна и топла храна при поръчка.",
    reverse: true,
  },
  {
    title: "Условия",
    image: "/basein1.jpeg",
    alt: "Басейн в къща за гости Au Nature",
    text: "Настаняването в къщата е след 15:00 часа, а освобождаването е до 11:00 часа. Всеки следващ час след часа за освобождаване се заплаща допълнително. При настаняване се заплаща сумата по резервацията и се оставя депозит от 200 лв, който се възстановява след оглед при освобождаване. Счупени или повредени вещи се заплащат и могат да бъдат удържани от депозита. Къщата трябва да бъде оставена в приличен вид, с измита посуда и изхвърлен боклук. В противен случай се удържат 30 лв за допълнително почистване. В стаите пушенето е забранено.",
  },
]

export default function HotelClientPage() {
  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/kushtata.jpg"
          alt="Къща за гости Au Nature"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Къща за гости
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl">
              УСЛОВИЯ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              За ценители на една различна, вдъхновяваща почивка сред красотата
              на Троянския Балкан.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
            Au Nature Experience
          </p>

          <p className="text-lg leading-9 text-neutral-700">
            Природата и красотата на Троянския Балкан са навсякъде около Вас.
            Докосвате се до тях, седейки на терасата, съзерцавайки
            величествената гледка и отпивайки глътка сутрешно кафе. Тук Ви
            очакват свеж планински въздух, тишина и спокойствие.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-24 pt-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid items-center gap-14 lg:grid-cols-2"
            >
              <div
                className={`reveal ${
                  section.reverse ? "reveal-right" : "reveal-left"
                } relative h-[440px] overflow-hidden rounded-[2rem] shadow-xl ${
                  section.reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div
                className={`reveal ${
                  section.reverse ? "reveal-left" : "reveal-right"
                } ${section.reverse ? "lg:order-1" : ""}`}
              >
                <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-[#3A2A25] sm:text-5xl">
                  {section.title}
                </h2>

                <p className="text-lg leading-9 text-neutral-700">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
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
    </main>
  )
}
