"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "НАЧАЛО" },
  { href: "/kashta-za-gosti-troyan", label: "КЪЩА ЗА ГОСТИ ТРОЯН" },
  { href: "/hotel", label: "УСЛОВИЯ" },
  { href: "/rooms", label: "НАСТАНЯВАНЕ" },
  { href: "/events", label: "СЪБИТИЯ" },
  { href: "/gallery", label: "ГАЛЕРИЯ" },
  { href: "/freetime", label: "СВОБОДНО ВРЕМЕ" },
  { href: "/zabelezhitelnosti", label: "ЗАБЕЛЕЖИТЕЛНОСТИ" },
  { href: "/contacts", label: "КОНТАКТИ" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full px-6 py-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left - Hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Отвори менюто"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            className="flex flex-col justify-center gap-[7px] p-2 transition hover:opacity-70"
          >
            <span className="block h-0.5 w-8 bg-current" />
            <span className="block h-0.5 w-8 bg-current" />
            <span className="block h-0.5 w-8 bg-current" />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-[0.25em]"
          >
            AU NATURE
          </Link>

          <a
            href="tel:+359877133188"
            className="hidden rounded-full border border-white/60 px-5 py-3 text-xs uppercase tracking-widest transition hover:bg-white hover:text-[#3A2A25] md:inline-flex"
          >
            Обади се
          </a>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        id="main-menu"
        className={`fixed inset-0 z-[60] bg-[#2F2521] text-white transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <span className="font-serif text-2xl tracking-[0.25em]">AU NATURE</span>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Затвори менюто"
              className="p-2 text-3xl leading-none transition hover:opacity-70"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-center font-serif text-3xl font-light uppercase tracking-[0.25em] transition hover:text-white/60 sm:text-4xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+359877133188"
            onClick={() => setMenuOpen(false)}
            className="mx-auto rounded-full border border-white/60 px-7 py-4 text-xs uppercase tracking-widest transition hover:bg-white hover:text-[#2F2521]"
          >
            Обади се
          </a>
        </div>
      </div>
    </>
  )
}
