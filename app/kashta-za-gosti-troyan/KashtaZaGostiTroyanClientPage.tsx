"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Plus, Minus } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const reasons = [
  {
    title: "Простор за цялата компания",
    text: "Къщата побира до 22 гости в няколко тематични стаи и апартаменти, което я прави идеална за големи семейства, приятелски компании и фирмени събирания. Всеки има достатъчно лично пространство, а общите зони обединяват хората.",
  },
  {
    title: "Сред недокосната природа",
    text: "Разположена на 500 метра надморска височина в село Голяма Желязна, къщата е обгърната от гори, ливади и панорамни гледки към Стара планина. Въздухът е чист, климатът мек, а тишината е истинска рядкост в днешното забързано ежедневие.",
  },
  {
    title: "Условия за всеки сезон",
    text: "Басейн и просторен двор през лятото, топъл и уютен интериор през зимата, оборудвана кухня, барбекю, билярд и зони за отдих през цялата година. Каквото и време да изберете, ще намерите повод да се почувствате у дома.",
  },
]

const blocks = [
  {
    title: "Защо да изберете нас",
    image: "/troyanhotel2.jpg",
    alt: "Къща за гости Au Nature край Троян",
    paragraphs: [
      "Къща за гости Au Nature се намира в село Голяма Желязна, само на около 25–30 км от град Троян, в сърцето на Троянския Балкан. Мястото е създадено за онези, които искат да избягат от градската суета и да се потопят в спокойствието на планината, без да правят компромис с комфорта.",
      "Просторната къща разполага със стаи и апартаменти с индивидуален стил, вдъхновен от природата. Гостите имат на разположение напълно оборудвана кухня, уютна трапезария, зони за отдих на открито, барбекю, басейн и голям двор — всичко необходимо за пълноценна почивка на групи до 22 души.",
    ],
  },
  {
    title: "Дом сред Троянския Балкан",
    image: "/troyanhotelparzalka.jpg",
    alt: "Дворът и природата около къщата за гости",
    reverse: true,
    paragraphs: [
      "Локацията е леснодостъпна — селото е на около 10 км от главния път и на приблизително 110 км от София. По пътя към Голяма Желязна се разкрива красива гледка към язовир Сопот, разположен в полите на планината само на около 1,5 км от къщата.",
      "Тук всеки сезон има своя магия: цветни пролетни ливади, дълги летни дни край басейна, златна есен сред буковите гори и приказни зимни пейзажи. Независимо кога решите да ни посетите, ще откриете различно, но еднакво вдъхновяващо лице на Троянския Балкан.",
    ],
  },
]

const activities = [
  {
    title: "Планински преходи и екопътеки",
    text: "Многобройни маркирани пътеки водят през букови гори, поляни и към близките върхове. Подходящи както за спокойни разходки, така и за по-сериозни походи.",
  },
  {
    title: "Язовир Сопот",
    text: "На около 1,5 км от къщата — идеален за риболов, водни колелета и спокойни следобеди край водата.",
  },
  {
    title: "Пещери и природни феномени",
    text: "Пещерите Топля и Яловица, скалата Купена и живописният район около река Топля са само на минути от селото.",
  },
  {
    title: "Културно наследство",
    text: "Троянският манастир, музеите в Троян и Черни Осъм и занаятчийските работилници в Орешак разказват историята на региона.",
  },
  {
    title: "Местна кухня и грънчарство",
    text: "Троянският край е прочут с керамиката, сливовата ракия и традиционната балканска трапеза, които задължително трябва да опитате.",
  },
  {
    title: "Спорт и приключения",
    text: "Колоездене, мотокрос и ATV състезания през юни, лов и риболов, а при предварителна уговорка — джип турове по планинските склонове.",
  },
]

const distances = [
  ["гр. Троян", "около 30 км, под 40 минути с кола"],
  ["яз. Сопот", "около 1,5–9 км, 5–15 минути с кола"],
  ["Пещера Топля", "около 6 км, 15 минути с кола"],
  ["Пещера Съева дупка", "около 30 км, 40 минути с кола"],
  ["Троянски манастир", "около 35 км, 45 минути с кола"],
  ["гр. София", "около 110 км, 1 час и 40 минути с кола"],
]

const gallery = [
  { image: "/basein2.jpg", alt: "Басейнът на къща за гости Au Nature" },
  { image: "/troyanhoteldvor.jpeg", alt: "Дворът на къщата за гости" },
  { image: "/salon.jpg", alt: "Общата зона за отдих в къщата" },
  { image: "/gledka.jpg", alt: "Панорамна гледка към Троянския Балкан" },
  { image: "/troyanhotelmasa.jpg", alt: "Трапезария и барбекю зона" },
  { image: "/billardsalon.jpg", alt: "Билярд залата в къщата за гости" },
]

const faqs = [
  {
    question: "Колко души побира къщата за гости?",
    answer:
      "Къщата разполага с няколко стаи и апартамента и побира до 22 гости, което я прави подходяща за големи семейства, приятелски компании и фирмени събития.",
  },
  {
    question: "На какво разстояние сте от град Троян?",
    answer:
      "Намираме се в село Голяма Желязна, на около 25–30 км от Троян — по-малко от 40 минути път с кола по живописен планински маршрут.",
  },
  {
    question: "Има ли басейн и двор?",
    answer:
      "Да. Гостите имат на разположение открит басейн, просторен двор, барбекю зона и места за отдих на открито, идеални за летните месеци.",
  },
  {
    question: "Мога ли да готвя сам по време на престоя?",
    answer:
      "Разбира се. Къщата разполага с напълно оборудвана кухня и трапезария, така че можете да приготвяте храна за цялата компания.",
  },
  {
    question: "Подходящо ли е мястото за почивка през зимата?",
    answer:
      "Абсолютно. Къщата е топла и уютна, а зимните пейзажи на Троянския Балкан са изключително красиви. Мястото е подходящо за целогодишна почивка.",
  },
  {
    question: "Как мога да направя резервация?",
    answer:
      "Свържете се с нас по телефон на +359 877 133 188 или изпратете запитване по имейл. Ще Ви помогнем да изберете най-подходящите дати и настаняване.",
  },
]

export default function KashtaZaGostiTroyanClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/kushtata.jpg"
          alt="Къща за гости край Троян в Троянския Балкан"
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

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-4xl font-light tracking-[0.18em] sm:text-6xl lg:text-7xl">
              КЪЩА ЗА ГОСТИ ТРОЯН
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Спокойствие, простор и незабравими моменти сред природата на Стара
              планина — само на крачка от Троян.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
            Добре дошли
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
            Вашият дом в планината
          </h2>

          <p className="text-lg leading-9 text-neutral-700">
            Ако търсите къща за гости край Троян, която съчетава простор, комфорт
            и близост до природата, попаднали сте на точното място. Au Nature е
            уютно планинско убежище в село Голяма Желязна, създадено за пълноценна
            почивка на семейства, приятелски компании и групи до 22 души. Тук ще
            откриете тишината на Троянския Балкан, чистия планински въздух и
            гостоприемството, което превръща всеки престой в спомен за цял живот.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-24 pt-4">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="grid items-center gap-14 lg:grid-cols-2"
            >
              <div
                className={`reveal ${
                  block.reverse ? "reveal-right" : "reveal-left"
                } relative h-[440px] overflow-hidden rounded-[2rem] shadow-xl ${
                  block.reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div
                className={`reveal ${
                  block.reverse ? "reveal-left" : "reveal-right"
                } ${block.reverse ? "lg:order-1" : ""}`}
              >
                <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-[#3A2A25] sm:text-5xl">
                  {block.title}
                </h2>

                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mb-5 text-lg leading-9 text-neutral-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Три причини
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Защо да отседнете при нас
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="reveal rounded-[1.5rem] bg-white p-8 shadow-sm"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#8A3E36] font-serif text-lg text-white">
                  {index + 1}
                </span>

                <h3 className="mb-3 font-serif text-2xl font-light text-[#3A2A25]">
                  {reason.title}
                </h3>

                <p className="text-base leading-8 text-neutral-700">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-28 pt-4">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Какво да разгледате
            </p>

            <h2 className="mb-8 font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Забавления и природа около Троян
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-9 text-neutral-700">
              Троянският край предлага богатство от природни и културни
              преживявания. Ето само част от това, което Ви очаква на минути от
              къщата за гости.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((item, index) => (
              <div
                key={item.title}
                className="reveal rounded-[1.5rem] bg-[#FFF7ED] p-8 shadow-sm"
                style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
              >
                <h3 className="mb-2 font-serif text-2xl font-light text-[#3A2A25]">
                  {item.title}
                </h3>

                <p className="text-base leading-8 text-neutral-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Разстояния
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Колко сме близо до забележителностите
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {distances.map(([title, text], index) => (
              <div
                key={title}
                className="reveal flex items-center gap-4 rounded-[1.5rem] bg-white p-6 text-left shadow-sm"
                style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
              >
                <MapPin className="h-6 w-6 flex-shrink-0 text-[#8A3E36]" />

                <div>
                  <h4 className="font-serif text-lg font-light text-[#3A2A25]">
                    {title}
                  </h4>

                  <p className="text-sm leading-7 text-neutral-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Галерия
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Погледнете отблизо
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={item.image}
                className="reveal reveal-zoom relative h-72 overflow-hidden rounded-[2rem] shadow-lg"
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Карта
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Как да ни намерите
            </h2>
          </div>

          <div className="reveal h-[520px] w-full overflow-hidden rounded-[2rem] shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=с.%20Голяма%20Желязна,%20ул.%2011-ти%20август%2023,%20Au%20Nature%20Guest%20House&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение на къща за гости Au Nature край Троян"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Въпроси и отговори
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Често задавани въпроси
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className="reveal overflow-hidden rounded-[1.25rem] bg-[#FFF7ED] shadow-sm"
                  style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-serif text-lg font-light text-[#3A2A25] sm:text-xl">
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <Minus className="h-5 w-5 flex-shrink-0 text-[#8A3E36]" />
                    ) : (
                      <Plus className="h-5 w-5 flex-shrink-0 text-[#8A3E36]" />
                    )}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-base leading-8 text-neutral-700">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#8A3E36] px-6 py-24 text-white">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
            Резервации
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light sm:text-5xl">
            Запазете своя престой
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-9 text-white/85">
            Подарете си незабравима почивка в къща за гости Au Nature край Троян.
            Свържете се с нас за свободни дати и повече информация — с
            удоволствие ще Ви посрещнем.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+359877133188"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36] transition hover:bg-white/90"
            >
              <Phone className="h-4 w-4" />
              +359 877 133 188
            </a>

            <a
              href="mailto:szp@abv.bg"
              className="inline-flex items-center gap-3 rounded-full border border-white/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#8A3E36]"
            >
              <Mail className="h-4 w-4" />
              szp@abv.bg
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
