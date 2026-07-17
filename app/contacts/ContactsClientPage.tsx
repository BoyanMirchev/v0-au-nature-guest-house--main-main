"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
  website: string
}

const distances = [
  ["гр. Троян", "30 км, по-малко от 40 минути с кола"],
  ["яз. Сопот", "3-9 км, между 5 и 15 минути с кола"],
  ["Пещера Съева дупка", "30 км, около 40 минути с кола"],
  ["Пещера Топля", "6 км, около 15 минути с кола"],
]

export default function ContactsClientPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      setSubmitStatus("success")

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className="bg-[#FFF7ED] text-[#2F2521]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/chillarka2.jpg"
          alt="Къща за гости Au Nature в Троянския Балкан"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <p className="hero-rise hero-rise-1 mb-6 text-sm uppercase tracking-[0.45em] text-white/80">
              Свържете се с нас
            </p>

            <h1 className="hero-rise hero-rise-2 mb-8 font-serif text-5xl font-light tracking-[0.22em] sm:text-7xl">
              КОНТАКТИ
            </h1>

            <p className="hero-rise hero-rise-3 mx-auto max-w-2xl text-lg leading-8 text-white/90">
              Посетете ни или се свържете с нас!
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
            Посетете ни
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
            Разстояния до нас
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-lg leading-9 text-neutral-700">
            Елате при нас и създайте история, която ще остане завинаги! Усетете
            спокойствието на природата и изживейте всичко, което Ви предлага!
          </p>

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
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-[#3A2A25] sm:text-5xl">
              Къде да ни намерите?
            </h2>

            <p className="mb-6 text-lg leading-9 text-neutral-700">
              Къща за гости Au Nature се намира в село Голяма Желязна, в сърцето
              на Троянския Балкан. Селото се намира на 25 км западно от град
              Троян, на 110 км от град София. Локацията е леснодостъпна, тъй
              като се намира на 10 км от магистрала София – Варна.
            </p>

            <p className="mb-8 text-lg leading-9 text-neutral-700">
              Стъпвайки на второстепенния път, Вие вече се намирате в свят,
              обгърнат от спокойствие и красива природа. По пътя към селото се
              открива гледка към язовир Сопот, разположен в полите на Стара
              планина. Селото се намира на 500 метра надморска височина, а
              климатът е умерен.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+359877133188"
                className="flex items-center gap-4 text-lg font-semibold text-[#8A3E36] transition hover:text-[#8A3E36]/80"
              >
                <Phone className="h-6 w-6" />
                +359 877 133 188
              </a>

              <a
                href="mailto:szp@abv.bg"
                className="flex items-center gap-4 text-lg font-semibold text-[#8A3E36] transition hover:text-[#8A3E36]/80"
              >
                <Mail className="h-6 w-6" />
                szp@abv.bg
              </a>

              <div className="flex items-center gap-4 text-lg font-medium text-[#3A2A25]">
                <MapPin className="h-6 w-6 text-[#8A3E36]" />
                с. Голяма Желязна, ул. „11-ти август“ 23
              </div>
            </div>
          </div>

          <div className="reveal reveal-right relative h-[440px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/troyanhotelparzalka.jpg"
              alt="Дворът на къща за гости Au Nature"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8A3E36]">
              Карта
            </p>

            <h2 className="font-serif text-4xl font-light text-[#3A2A25] sm:text-5xl">
              Нашето местоположение
            </h2>
          </div>

          <div className="reveal h-[600px] w-full overflow-hidden rounded-[2rem] shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=с.%20Голяма%20Желязна,%20ул.%2011-ти%20август%2023,%20Au%20Nature%20Guest%20House&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение на къща за гости Au Nature"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#8A3E36] px-6 py-24 text-white">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
            Свържете се с нас
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light sm:text-5xl">
            Пишете ни!
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-9 text-white/85">
            Посетете ни и усетете хармонията на природата! Очакваме Ви!
          </p>

          <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-6 text-left shadow-xl sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Име..."
                required
                maxLength={100}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Имейл..."
                required
                maxLength={254}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Телефон..."
                required
                maxLength={30}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Съобщение..."
                required
                rows={6}
                maxLength={2000}
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
              />

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#8A3E36] px-12 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#8A3E36]/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "ИЗПРАЩА СЕ..." : "ИЗПРАТЕТЕ"}
                </button>
              </div>

              {submitStatus === "success" && (
                <p className="text-center font-medium text-green-600">
                  Съобщението е изпратено успешно!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-center font-medium text-red-600">
                  Възникна грешка. Моля, опитайте отново.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
