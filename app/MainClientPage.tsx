"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

const experiences = [
  {
    title: "Природа",
    text: "Планински въздух, зеленина и спокойствие далеч от шума на града.",
    image: "/gledka.jpg",
  },
  {
    title: "Отдих",
    text: "Място за бавно утро, дълги вечери и истинско презареждане.",
    image: "/basein1.jpeg",
  },
  {
    title: "Уют",
    text: "Топла атмосфера, детайли и усещане за дом сред природата.",
    image: "/troyanhotel2.jpg",
  },
]

const rooms = [
  {
    title: "Уютни стаи",
    text: "Комфортно настаняване с всичко необходимо за спокойна почивка.",
    image: "/morskitaini1_2.jpg",
  },
  {
    title: "Салон за хранене",
    text: "Просторно място за споделени вечери, разговори и специални поводи.",
    image: "/salon.jpg",
  },
  {
    title: "Градина и тераса",
    text: "Външно пространство за сутрешно кафе, отдих и гледка към природата.",
    image: "/troyanhoteldvor.jpeg",
  },
]

const amenities = [
  "Паркинг",
  "Интернет",
  "Кабелна телевизия",
  "Локално парно",
  "Тераса",
  "Градина",
  "Самостоятелен санитарен възел",
  "Подходящо за събития",
]

const roomOptions = [
  {
    id: "standard",
    title: "Уютна стая",
    capacity: 2,
    pricePerNight: 120,
    totalRooms: 4,
  },
  {
    id: "family",
    title: "Семейна стая",
    capacity: 4,
    pricePerNight: 180,
    totalRooms: 2,
  },
  {
    id: "whole-house",
    title: "Цяла къща",
    capacity: 16,
    pricePerNight: 850,
    totalRooms: 1,
  },
]

const unavailablePeriods = [
  {
    roomId: "whole-house",
    from: "2026-08-01",
    to: "2026-08-04",
  },
  {
    roomId: "family",
    from: "2026-08-10",
    to: "2026-08-12",
  },
]

const galleryImages = [
  "/kushtata.jpg",
  "/troyanhotel2.jpg",
  "/basein1.jpeg",
  "/gledka.jpg",
  "/troyanhotel1.jpeg",
  "/chaduri.jpg",
  "/troyanhotelveranda.jpg",
]

function getNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0

  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diff = end.getTime() - start.getTime()

  if (diff <= 0) return 0

  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

function datesOverlap(
  checkIn: string,
  checkOut: string,
  unavailableFrom: string,
  unavailableTo: string,
) {
  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const blockedStart = new Date(unavailableFrom)
  const blockedEnd = new Date(unavailableTo)

  return start < blockedEnd && end > blockedStart
}

function getToday() {
  return new Date().toISOString().split("T")[0]
}

export default function MainClientPage() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [selectedRoomId, setSelectedRoomId] = useState("standard")
  const [availabilityChecked, setAvailabilityChecked] = useState(false)

  const [today, setToday] = useState("")

  useEffect(() => {
    setToday(getToday())
  }, [])

  const selectedRoom = roomOptions.find((room) => room.id === selectedRoomId)
  const nights = getNights(checkIn, checkOut)
  const guestCount = Number(guests)

  const hasValidDates = Boolean(checkIn && checkOut && nights > 0)

  const isBlocked = unavailablePeriods.some(
    (period) =>
      period.roomId === selectedRoomId &&
      checkIn &&
      checkOut &&
      datesOverlap(checkIn, checkOut, period.from, period.to),
  )

  const isOverCapacity = selectedRoom ? guestCount > selectedRoom.capacity : false
  const isAvailable = hasValidDates && !isBlocked && !isOverCapacity

  const estimatedTotal =
    selectedRoom && hasValidDates ? selectedRoom.pricePerNight * nights : 0

  // Official fixed conversion rate: 1 EUR = 1.95583 BGN
  const estimatedTotalEur = estimatedTotal
    ? Math.round(estimatedTotal / 1.95583)
    : 0

  const inquiryBody = useMemo(() => {
    return encodeURIComponent(`Здравейте,

Искам да направя запитване за резервация в Au Nature Guest House.

Дата на настаняване: ${checkIn || "-"}
Дата на напускане: ${checkOut || "-"}
Брой гости: ${guests}
Тип настаняване: ${selectedRoom?.title || "-"}
Брой нощувки: ${nights || "-"}
Ориентировъчна цена: ${estimatedTotalEur || "-"} €

Моля, потвърдете дали има свободни места.

Поздрави!`)
  }, [checkIn, checkOut, guests, selectedRoom?.title, nights, estimatedTotal])

  function handleCheckAvailability() {
    setAvailabilityChecked(true)
  }

  function resetAvailability() {
    setAvailabilityChecked(false)
  }

  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/kushtata.jpg"
          alt="Au Nature Guest House"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Boutique Guest House
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl lg:text-8xl">
              AU NATURE
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/90">
              Планинско убежище за спокойствие, уют и незабравими моменти
              в сърцето на Троянския Балкан.
            </p>

            <a
              href="#booking"
              className="hero-rise hero-rise-4 inline-flex rounded-full bg-white px-9 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#3A2A25] transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl"
            >
              Провери свободни дати
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Au Nature Experience
            </p>

            <h2 className="mb-8 font-serif text-4xl font-light leading-tight text-[#3A2A25] sm:text-5xl">
              Вдъхновено от природата, създадено за спокойствие.
            </h2>

            <p className="text-lg leading-9 text-neutral-700">
              Au Nature е къща за гости в Троянския Балкан, създадена за хора,
              които търсят уют, чист въздух и истинска почивка сред природата.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              Тук времето се движи по-бавно — с утринно кафе, тиха гледка,
              споделени вечери и усещане за дом далеч от града.
            </p>
          </div>

          <div className="reveal reveal-right relative h-[620px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/troyanhotel2.jpg"
              alt="Къща за гости Au Nature"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Преживяване
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Създадено за пълноценна почивка
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {experiences.map((item, index) => (
              <article
                key={item.title}
                className="reveal reveal-zoom group relative h-[480px] overflow-hidden rounded-[2rem]"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/50" />

                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h3 className="mb-4 font-serif text-3xl font-light tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/85">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="accommodation" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
                Настаняване
              </p>

              <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
                Пространства за уют и спокойствие
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-neutral-600">
              Всяко пространство е създадено с внимание към уюта, спокойствието
              и усещането за близост с природата.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {rooms.map((room, index) => (
              <article
                key={room.title}
                className="reveal group overflow-hidden rounded-[2rem] bg-white shadow-sm"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="mb-4 font-serif text-2xl font-light text-[#3A2A25]">
                    {room.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-neutral-600">
                    {room.text}
                  </p>

                  <a
                    href="#booking"
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36]"
                  >
                    Запитване →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3A2A25] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50">
              Удобства
            </p>

            <h2 className="font-serif text-4xl font-light sm:text-5xl">
              Всичко необходимо за спокоен престой
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item, index) => (
              <div
                key={item}
                className="reveal bg-[#3A2A25] p-8 text-center"
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <p className="font-serif text-xl font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F1EA] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Галерия
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Моменти от Au Nature
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="reveal reveal-zoom relative h-[520px] overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2">
              <Image
                src={galleryImages[0]}
                alt="Au Nature галерия"
                fill
                className="object-cover"
              />
            </div>

            {galleryImages.slice(1).map((image, index) => (
              <div
                key={image}
                className="reveal reveal-zoom relative h-[250px] overflow-hidden rounded-[2rem]"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <Image
                  src={image}
                  alt={`Au Nature галерия ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#8A3E36] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
              Контакти
            </p>

            <h2 className="mb-8 font-serif text-4xl font-light sm:text-5xl">
              Посетете ни!
            </h2>

            <p className="max-w-xl text-lg leading-9 text-white/85">
              Намираме се в село Голяма Желязна, в сърцето на Троянския Балкан —
              спокойно място за почивка, събития и срещи с близки хора.
            </p>

            <a
              href="tel:+359877133188"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A3E36] transition hover:bg-white/90"
            >
              Обадете се
            </a>
          </div>

          <div className="reveal reveal-right rounded-[2rem] bg-white/10 p-8 backdrop-blur">
            <p className="mb-3 text-white/60">Телефон</p>
            <p className="mb-8 text-2xl font-semibold">+359 877 133 188</p>

            <p className="mb-3 text-white/60">Локация</p>
            <p className="mb-8 text-lg leading-8">
              с. Голяма Желязна, Троянски Балкан
            </p>

            <p className="mb-3 text-white/60">Запитвания</p>
            <p className="text-lg leading-8">
              Свържете се с нас за свободни дати, събития и резервации.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
