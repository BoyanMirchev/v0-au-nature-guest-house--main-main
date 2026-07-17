"use client"

import { useEffect, useState } from "react"
import { Navigation } from "./navigation"

export function NavigationWrapper() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <Navigation isScrolled={isScrolled} />
}