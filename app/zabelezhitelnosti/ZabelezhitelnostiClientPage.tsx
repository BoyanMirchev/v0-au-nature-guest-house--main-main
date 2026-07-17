"use client"

import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const attractions = [
  {
    name: "Троянски манастир „Успение Богородично“",
    distance: "около 35 км",
    image: "/svobodnovrememanastir.jpg",
    alt: "Троянски манастир край Троян",
    text: "Третият по големина манастир в България, основан през XVII век и прочут със стенописите на Захари Зограф. Духовно и културно средище, което пази чудотворната икона на Света Богородица Троеручица. Задължителна спирка за всеки, който посещава Троянския край.",
  },
  {
    name: "Язовир Сопот",
    distance: "около 1,5–9 км",
    image: "/yazovir-sopot.png",
    alt: "Дървена сърцевидна арка с гледка към язовир Сопот",
    text: "Живописен планински язовир в полите на Стара планина, само на крачка от къщата за гости. Идеален за риболов, водни колелета и спокойни разходки край водата, с прекрасни гледки към околните върхове.",
  },
  {
    name: "Пещера Съева дупка",
    distance: "около 30 км",
    image: "/peshtera-saeva-dupka.png",
    alt: "Осветена зала със сталактити в пещера Съева дупка",
    text: "Една от най-красивите и достъпни пещери в България с пет зали, впечатляващи сталактити и сталагмити и уникална акустика. Обособените пътеки и осветлението правят посещението подходящо за цялото семейство.",
  },
  {
    name: "Пещера Топля",
    distance: "около 6 км",
    image: "/peshtera-toplya.png",
    alt: "Входът на пещера Топля с водно огледало сред скалите",
    text: "Разположена съвсем близо до селото, пещерата е свързана с горска екопътека и извора на река Топля. Спокойно място сред природата, подходящо за кратък преход и досег с недокоснатата планина.",
  },
  {
    name: "Национално изложение на художествените занаяти, Орешак",
    distance: "около 33 км",
    image: "/oreshak-izlozhenie.png",
    alt: "Изложбена зала с художествени занаяти в Орешак",
    text: "Най-голямото занаятчийско изложение в страната, разположено до Троянския манастир. Тук се събират майстори грънчари, дърворезбари и тъкачи, а посетителите могат да наблюдават демонстрации и да закупят автентични изделия.",
  },
  {
    name: "Музей на занаятите, Троян",
    distance: "около 30 км",
    image: "/muzej-zanayati-troyan.png",
    alt: "Паметник на Иван Хаджийски пред Музея на занаятите в Троян",
    text: "Единственият по рода си музей в България, посветен на традиционните занаяти. Богата колекция от троянска керамика, дърворезба и медникарство, която разказва историята на прочутите местни майстори.",
  },
  {
    name: "Природонаучен музей, Черни Осъм",
    distance: "около 40 км",
    image: "/prirodonauchen-muzej.jpg",
    alt: "Сградата на Природонаучния музей в Черни Осъм",
    text: "Един от най-добрите природонаучни музеи в страната с реалистични диорами, звуци от дивата природа и богата колекция от животински видове от Балкана. Любимо място за семейства с деца.",
  },
  {
    name: "Крушунски водопади",
    distance: "около 70 км",
    image: "/krushunski-vodopadi.png",
    alt: "Бирюзов вир под каскадата на Крушунските водопади",
    text: "Каскада от бирюзови водопади сред буйна растителност — една от най-впечатляващите природни забележителности в Централна България. Дървените пътеки водят покрай водата към върха на каскадата.",
  },
  {
    name: "Връх Ботев и природен парк „Централен Балкан“",
    distance: "около 45 км",
    image: "/vrah-botev.png",
    alt: "Връх Ботев с метеорологичната кула в Централен Балкан",
    text: "Най-високият връх на Стара планина и сърцето на защитения парк с вековни гори, водопади и богато биоразнообразие. Рай за планинарите и любителите на дивата природа.",
  },
  {
    name: "Град Троян и старинните занаятчийски улици",
    distance: "около 30 км",
    image: "/grad-troyan.png",
    alt: "Общината на Троян с надпис ТРОЯН и цветни лехи отпред",
    text: "Уютен балкански град, известен със сливовата ракия, керамиката и топлото гостоприемство. Разходете се по старинните улици, опитайте местната кухня и се потопете в автентичната атмосфера на Троянския край.",
  },
]

export default function ZabelezhitelnostiClientPage() {
  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/svobodnovremetroyan.jpg"
          alt="Забележителности около Троян"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Троянски Балкан
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl">
              ЗАБЕЛЕЖИТЕЛНОСТИ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Топ 10 места, които задължително да откриете по време на своята
              почивка около Троян.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
            Какво да разгледате
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
            Най-доброто около Троян
          </h2>

          <p className="text-lg leading-9 text-neutral-700">
            Троянският край е съкровищница от природни чудеса, духовни средища и
            вековни занаяти. Отсядайки в къща за гости Au Nature, ще бъдете на
            минути от едни от най-красивите места в Централна България. Ето нашата
            селекция от десетте най-впечатляващи забележителности, които да
            включите в своя маршрут.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-20 pt-4">
          {attractions.map((item, index) => {
            const reverse = index % 2 === 1

            return (
              <div
                key={item.name}
                className="grid items-center gap-14 lg:grid-cols-2"
              >
                <div
                  className={`reveal ${
                    reverse ? "reveal-right" : "reveal-left"
                  } relative h-[420px] overflow-hidden rounded-[2rem] shadow-xl ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#8A3E36] font-serif text-2xl text-white shadow-lg">
                    {index + 1}
                  </span>
                </div>

                <div
                  className={`reveal ${
                    reverse ? "reveal-left" : "reveal-right"
                  } ${reverse ? "lg:order-1" : ""}`}
                >
                  <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#8A3E36]">
                    <MapPin className="h-4 w-4" />
                    {item.distance} от къщата
                  </div>

                  <h3 className="mb-5 font-serif text-3xl font-light leading-tight text-[#3A2A25] sm:text-4xl">
                    {item.name}
                  </h3>

                  <p className="text-lg leading-9 text-neutral-700">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#8A3E36] px-6 py-24 text-white">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
            Планирайте своето приключение
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light sm:text-5xl">
            Отседнете в сърцето на Балкана
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-9 text-white/85">
            Всички тези забележителности са на удобно разстояние от къща за гости
            Au Nature. Резервирайте своя престой и открийте магията на Троянския
            край.
          </p>

          <a
            href="tel:+359877133188"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36] transition hover:bg-white/90"
          >
            <Phone className="h-4 w-4" />
            +359 877 133 188
          </a>
        </div>
      </section>
    </main>
  )
}
