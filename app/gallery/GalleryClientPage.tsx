"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const galleryImages = [
  { src: "/aromatnaesen_1.jpg", alt: "Стая Ароматна есен" },
  { src: "/aromatnaesenstaq3.jpeg", alt: "Стая Ароматна есен" },
  { src: "/aromatnaesenstaq3_2.jpg", alt: "Стая Ароматна есен" },
  { src: "/morskitaini1_2.jpg", alt: "Стая Морски тайни" },
  { src: "/morsktaini1_1.jpg", alt: "Стая Морски тайни" },
  { src: "/cvetnaprolet.jpg", alt: "Стая Цветна пролет" },
  { src: "/cvetnaproletapartament1.jpg", alt: "Апартамент Цветна пролет" },
  { src: "/planinskiromans_1.jpg", alt: "Стая Планински романс" },
  { src: "/pustinnanosht.jpg", alt: "Стая Пустинна нощ" },
  { src: "/basein1.jpeg", alt: "Басейн в Au Nature Guest House" },
  { src: "/basein2.jpg", alt: "Басейн в двора" },
  { src: "/basein3.jpg", alt: "Зона около басейна" },
  { src: "/basein4.jpg", alt: "Басейн и двор" },
  { src: "/basein5.jpeg", alt: "Басейн в къща за гости Au Nature" },
  { src: "/basein6.jpeg", alt: "Басейн и място за отдих" },
  { src: "/basein7.jpeg", alt: "Лятна зона с басейн" },
  { src: "/basein8.jpeg", alt: "Басейн в Троянския Балкан" },
  { src: "/salon.jpg", alt: "Салон за събирания" },
  { src: "/galeriarestorant.jpg", alt: "Салон за хранене" },
  { src: "/billardsalon.jpg", alt: "Билярд салон" },
  { src: "/galeriabiliard.jpg", alt: "Билярд зона" },
  { src: "/koridor.jpg", alt: "Коридор в къщата" },
  { src: "/galeriastulbi.jpg", alt: "Стълбище в къщата" },
  { src: "/dvor.jpg", alt: "Двор на къща за гости Au Nature" },
  { src: "/kushtata.jpg", alt: "Къща за гости Au Nature" },
  { src: "/terasa.jpg", alt: "Тераса с гледка" },
  { src: "/chillarka2.jpg", alt: "Зона за отдих" },
  { src: "/chaduri.jpg", alt: "Чадъри и място за почивка" },
  { src: "/navun.jpg", alt: "Външна част на къщата" },
  { src: "/galeria1.jpeg", alt: "Галерия на Au Nature Guest House" },
  {
    src: "/zimnopredizvikatelstvostaq5.jpeg",
    alt: "Стая Зимно предизвикателство",
  },
  { src: "/troyanhotelparzalka.jpg", alt: "Детска пързалка в двора" },
  { src: "/troyanhotelmasa.jpg", alt: "Маса за хранене и отдих" },
  { src: "/rechnibregovestaq7.jpg", alt: "Стая Речни брегове" },
  { src: "/letniemociiapartament2.jpg", alt: "Апартамент Летни емоции" },
]

export default function GalleryClientPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null)
      }
    }

    if (lightboxImage) {
      window.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [lightboxImage])

  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute right-8 top-8 z-10 text-white transition-colors hover:text-white/70"
            aria-label="Затвори снимката"
          >
            <X className="h-10 w-10" />
          </button>

          <div className="relative h-full max-h-[90vh] w-full max-w-7xl">
            <Image
              src={lightboxImage}
              alt="Уголемена снимка от галерията"
              fill
              className="object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/dvor.jpg"
          alt="Галерия на къща за гости Au Nature"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Галерия
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl">
              МОМЕНТИ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Разгледайте красотата на нашата къща за гости.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Галерия
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Моменти от Au Nature
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image.src}
                className="reveal reveal-zoom group relative h-64 cursor-pointer overflow-hidden rounded-[1.5rem]"
                style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
                onClick={() => setLightboxImage(image.src)}
                aria-label={`Отвори снимка: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
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
