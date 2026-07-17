"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface NavigationProps {
  isScrolled: boolean
}

export function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true)
      setTimeout(() => {
        setIsMenuOpen(false)
        setIsMenuClosing(false)
      }, 600)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 lg:px-8 xl:px-12 py-8 lg:py-10 xl:py-12 flex items-center justify-between">
          {/* Left Corner - Menu Button with animated hamburger */}
          <button
            onClick={toggleMenu}
            className={`flex items-center justify-center p-2 hover:opacity-80 transition-opacity z-[70] ${isMenuOpen ? "hamburger-open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? "Затвори менюто" : "Отвори менюто"}
          >
            <div className="flex flex-col justify-center h-8 w-10 lg:w-12 relative">
              <div className={`hamburger-line hamburger-line-1 absolute top-0 w-10 lg:w-12 h-0.5 ${isScrolled && !isMenuOpen ? "bg-[#2C2C2C]" : "bg-white"}`}></div>
              <div className={`hamburger-line hamburger-line-2 absolute top-1/2 -translate-y-1/2 w-10 lg:w-12 h-0.5 ${isScrolled && !isMenuOpen ? "bg-[#2C2C2C]" : "bg-white"}`}></div>
              <div className={`hamburger-line hamburger-line-3 absolute bottom-0 w-10 lg:w-12 h-0.5 ${isScrolled && !isMenuOpen ? "bg-[#2C2C2C]" : "bg-white"}`}></div>
            </div>
          </button>

          {/* Center - Logo with decorative lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row items-center">
            {/* Left decorative line */}
            <div className={`hidden lg:block h-px w-32 xl:w-48 2xl:w-64 transition-colors duration-300 ${isScrolled ? "bg-[#2C2C2C]/40" : "bg-white/40"}`}></div>

            {/* Logo Section - Logo on left of text */}
            <Link href="/" className="flex flex-row items-center mx-6 lg:mx-10 gap-4">
              {/* Logo Image */}
              <Image
                src="/logokushta.jpg"
                alt="Au Nature Logo"
                width={60}
                height={60}
                className="rounded-full"
              />

              {/* Text */}
              <span
                className={`text-xl lg:text-2xl font-light tracking-[0.35em] whitespace-nowrap transition-colors duration-300 ${
                  isScrolled ? "text-[#2C2C2C]" : "text-white"
                }`}
              >
                AU NATURE
              </span>
            </Link>

            {/* Right decorative line */}
            <div className={`hidden lg:block h-px w-32 xl:w-48 2xl:w-64 transition-colors duration-300 ${isScrolled ? "bg-[#2C2C2C]/40" : "bg-white/40"}`}></div>
          </div>

          {/* Right Corner - Language Selector */}
          <div
            className={`text-lg font-light tracking-[0.25em] transition-colors duration-300 cursor-pointer hover:opacity-80 ${
              isScrolled ? "text-[#2C2C2C]" : "text-white"
            }`}
          >
            EN
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      {isMenuOpen && (
        <div id="main-menu" className="fixed inset-0 z-[60]">
          <div className="relative h-full flex flex-col md:flex-row">
            {/* Left section - Photo area */}
             <div className={`hidden md:block md:w-1/2 h-full bg-cover bg-center ${
              isMenuClosing ? "menu-slide-out-left" : "menu-slide-in-left"
              }`}
              style={{
               backgroundImage: `url('/chillarka2.jpg')`,
                }}
             ></div>

            {/* Right section - Menu content */}
            <div
                className={`w-full md:w-1/2 h-full bg-black/95 backdrop-blur-sm ${
               isMenuClosing ? "menu-slide-out-right" : "menu-slide-in-right"
            }`}
>
              <div className="relative z-10 h-full flex flex-col">
                {/* Header with logo */}
                <div className="flex items-center justify-center p-8 bg-background">
                  <div className="flex items-center">
                    <div className="h-px mr-4 w-3 bg-[rgba(194,194,194,1)]"></div>
                    <span className="text-sm font-light tracking-[0.3em] whitespace-nowrap text-foreground">
                      AU NATURE
                    </span>
                    <div className="h-px ml-4 w-3 bg-[rgba(194,194,194,1)]"></div>
                  </div>
                </div>

                {/* Menu items - centered */}
                <div className="flex-1 flex items-center justify-center px-7 bg-background">
                  <div className="text-left w-full">
                    <nav className="space-y-6">
                      <Link
                        href="/"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl text-foreground border-[rgba(194,194,194,1)]"
                        onClick={toggleMenu}
                      >
                        НАЧАЛО
                      </Link>
                      <Link
                        href="/hotel"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        УСЛОВИЯ
                      </Link>
                      <Link
                        href="/rooms"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        НАСТАНЯВАНЕ
                      </Link>
                      <Link
                        href="/events"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        СЪБИТИЯ
                      </Link>
                      <Link
                        href="/gallery"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        ГАЛЕРИЯ
                      </Link>
                      <Link
                        href="/freetime"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        СВОБОДНО ВРЕМЕ
                      </Link>
                      <Link
                        href="/contacts"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        КОНТАКТИ
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="p-8 flex justify-between items-end py-2.5 px-7 bg-background">
                  <div className="text-right">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-4 hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="w-6 h-6 text-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
