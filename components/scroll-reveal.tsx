"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Global scroll-reveal controller.
 *
 * Any element given the `reveal` class (optionally with `reveal-zoom`,
 * `reveal-left`, or `reveal-right`) fades/slides into view once it enters
 * the viewport. Runs on every route change and respects reduced motion.
 */
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"),
    )

    if (elements.length === 0) return

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}
