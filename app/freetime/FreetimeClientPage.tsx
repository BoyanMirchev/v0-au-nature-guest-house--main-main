"use client"

import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

const activities = [
  {
    title: "Спорт и отдих",
    image: "/svobodnovreme2.jpg",
    alt: "Спорт и отдих около къща за гости Au Nature",
    text: "В Голяма Желязна Ви очакват еко-преходи, с които ще се заредите с енергията на непокътнатата природа. Върховете около селото предлагат разнообразен терен, подходящ за разходки и колоездене. През юни селото оживява със състезания по мотокрос и ATV. Местността е богата на дивеч, а язовир Сопот предлага възможности за риболов, водни колелета и спокойна почивка край водата. При допълнителна уговорка можем да съдействаме и за разходка с джип по планинските склонове.",
  },
  {
    title: "Природа в Троянския Балкан",
    image: "/svobodnovremegledka.jpg",
    alt: "Панорамна гледка към Троянския Балкан",
    text: "От къщата за гости се разкриват панорамни гледки към природата на Троянския Балкан. Само на 1500 метра се намира язовир Сопот — подходящ за риболов и водни спортове. Околностите на селото пазят следи от дълбока древност с множество могили и църква, датираща от 1857 г. Сред природните забележителности са пещерите Топля и Яловица, скалата Купена и районът около река Топля.",
    reverse: true,
  },
]

const attractions = [
  {
    name: "Пещера Съева дупка",
    text: "Една от най-красивите пещери в България, на около 30 км.",
  },
  {
    name: "Пещера Топля",
    text: "Намира се в района на селото, с горска екопътека и извор на река Топля.",
  },
  {
    name: "Троянски манастир",
    text: "Един от най-големите и прочути български манастири.",
  },
  {
    name: "Природонаучен музей, с. Черни Осъм",
    text: "Експонати, звуци от дивата природа и впечатляващи диорами.",
  },
  {
    name: "Национално изложение на художествените занаяти",
    text: "Намира се в с. Орешак.",
  },
  {
    name: "Музей на занаятите, гр. Троян",
    text: "Място, свързано с традициите на троянските майстори.",
  },
  {
    name: "Крушунски водопади",
    text: "Красива природна забележителност, подходяща за разходка.",
  },
]

const gallery = [
  {
    title: "ПРИРОДА",
    image: "/troyanhoteldvor.jpeg",
    alt: "Природа около къща за гости Au Nature",
  },
  {
    title: "ОТДИХ",
    image: "/troyanhotelmasa.jpg",
    alt: "Място за отдих в къща за гости Au Nature",
  },
  {
    title: "СВЕЖЕСТ",
    image: "/troyanhotelchillarka.jpeg",
    alt: "Свежест и спокойствие в Троянския Балкан",
  },
]

export default function FreetimeClientPage() {
  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/svobodnovremetroyan.jpg"
          alt="Троянският Балкан около къща за гости Au Nature"
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
              СВОБОДНО ВРЕМЕ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Вашият престой е съприкосновение с природата. Вие се намирате в
              сърцето на Стара планина, в Троянския Балкан!
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
            Намирате се само на 1500 метра от язовир Сопот, който е идеален за
            водни спортове и риболов, както и близо до Троян — град с богато
            културно наследство. Това е добра предпоставка за пълноценна
            планинска почивка сред свеж въздух, мек климат, красиви гледки,
            възможности за спорт, отдих и забавления.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-24 pt-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="grid items-center gap-14 lg:grid-cols-2"
            >
              <div
                className={`reveal ${
                  activity.reverse ? "reveal-right" : "reveal-left"
                } relative h-[440px] overflow-hidden rounded-[2rem] shadow-xl ${
                  activity.reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div
                className={`reveal ${
                  activity.reverse ? "reveal-left" : "reveal-right"
                } ${activity.reverse ? "lg:order-1" : ""}`}
              >
                <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-[#3A2A25] sm:text-5xl">
                  {activity.title}
                </h2>

                <p className="text-lg leading-9 text-neutral-700">
                  {activity.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Забележителности
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Туризъм в района
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {attractions.map((item, index) => (
              <div
                key={item.name}
                className="reveal rounded-[1.5rem] bg-white p-8 shadow-sm"
                style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
              >
                <h3 className="mb-2 font-serif text-2xl font-light text-[#3A2A25]">
                  {item.name}
                </h3>

                <p className="text-base leading-8 text-neutral-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((card, index) => (
              <div
                key={card.title}
                className="reveal reveal-zoom group relative h-80 overflow-hidden rounded-[2rem] shadow-lg"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-center font-serif text-2xl font-light tracking-widest text-white md:text-3xl">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
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
            Ако Ви влекат пещерните потайности, водните спортове, лов и риболов
            или просто искате отдих и почивка — не се колебайте да се отправите
            към това привлекателно място. Подарете си почивка на планина в къща
            за гости Au Nature, в Троянския Балкан.
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
