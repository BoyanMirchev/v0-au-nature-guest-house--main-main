"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, 2500)

    // Complete and remove splash after 3.5 seconds
    const completeTimer = setTimeout(() => {
      setIsAnimating(false)
      onComplete()
    }, 3500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  if (!isAnimating) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#2d4a3e" }}
    >
      <div className="flex flex-col items-center">
        {/* Top decorative line */}
        <div className="flex items-center gap-2 mb-6 animate-[expandWidth_1s_ease-out_forwards]">
          <div 
            className="h-[1px] bg-[#c9a86c] animate-[lineGrow_0.8s_ease-out_0.3s_forwards]" 
            style={{ width: 0 }}
          />
          <div className="w-2 h-2 border border-[#c9a86c] rotate-45 animate-[fadeIn_0.5s_ease-out_0.5s_forwards] opacity-0" />
          <div 
            className="h-[1px] bg-[#c9a86c] animate-[lineGrow_0.8s_ease-out_0.3s_forwards]" 
            style={{ width: 0 }}
          />
        </div>

        {/* Logo */}
        <div className="animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0">
          <Image
            src="/logokushta.jpg"
            alt="Au Nature Guest House"
            width={200}
            height={200}
            className="rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* Text */}
        <h1 
          className="mt-6 text-3xl md:text-4xl font-serif tracking-[0.3em] text-[#c9a86c] animate-[fadeInUp_1s_ease-out_0.5s_forwards] opacity-0"
          style={{ fontFamily: "Georgia, serif" }}
        >
          AU NATURE
        </h1>
        
        <p 
          className="mt-2 text-sm md:text-base tracking-[0.2em] text-[#c9a86c]/80 animate-[fadeInUp_1s_ease-out_0.7s_forwards] opacity-0"
        >
          GUEST HOUSE
        </p>

        {/* Bottom decorative line */}
        <div className="flex items-center gap-2 mt-6 animate-[expandWidth_1s_ease-out_forwards]">
          <div 
            className="h-[1px] bg-[#c9a86c] animate-[lineGrow_0.8s_ease-out_0.3s_forwards]" 
            style={{ width: 0 }}
          />
          <div className="w-2 h-2 border border-[#c9a86c] rotate-45 animate-[fadeIn_0.5s_ease-out_0.5s_forwards] opacity-0" />
          <div 
            className="h-[1px] bg-[#c9a86c] animate-[lineGrow_0.8s_ease-out_0.3s_forwards]" 
            style={{ width: 0 }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes lineGrow {
          from {
            width: 0;
          }
          to {
            width: 60px;
          }
        }
        
        @keyframes expandWidth {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
