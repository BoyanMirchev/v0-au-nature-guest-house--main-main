"use client"

import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    title: "Тиймбилдинг",
    image: "/troyanhotelveranda.jpg",
    alt: "Просторна веранда за тиймбилдинг в къща за гости Au Nature",
    text: "Имате възможност да организирате Вашия тиймбилдинг в къщата за гости, тъй като тя е просторна и удобна за големи групи. Салонът за хранене е 100 кв.м. и разполага с 30 места, което го прави подходящ за фирмени събирания, работни срещи и неформални празненства.",
  },
  {
    title: "Сватба",
    image: "/troyanhotel1.jpeg",
    alt: "Сватбено събитие в къща за гости Au Nature",
    text: "Сватбата е едно от най-вълнуващите събития в живота на човек. За да остане този ден незабравим, можем да предложим съдействие при организирането на красиво парти и специална церемония. Църковен брак може да сключите в църквата в селото — „Св. Всях Светих“.",
    reverse: true,
  },
]

export default function EventsClientPage() {
  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/dvor.jpg"
          alt="Двор на къща за гости Au Nature"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Специални поводи
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl">
              СЪБИТИЯ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Отпразнувайте Вашия специален повод при нас!
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
            Незабравими моменти
          </p>

          <p className="text-lg leading-9 text-neutral-700">
            Къща за гости Au Nature е идеалното място за специални и неповторими
            събития.
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
