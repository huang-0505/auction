"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"

interface Section {
  id: string
  title: string
  component: React.ReactNode
}

interface WheelNavigationProps {
  sections: Section[]
}

export function WheelNavigation({ sections }: WheelNavigationProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      e.preventDefault()
      setIsScrolling(true)

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        setCurrentSection((prev) => prev + 1)
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection((prev) => prev - 1)
      }

      setTimeout(() => setIsScrolling(false), 1200)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        setIsScrolling(true)
        setCurrentSection((prev) => prev + 1)
        setTimeout(() => setIsScrolling(false), 1200)
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setIsScrolling(true)
        setCurrentSection((prev) => prev - 1)
        setTimeout(() => setIsScrolling(false), 1200)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSection, sections.length, isScrolling])

  const goToSection = (index: number) => {
    if (isScrolling || index === currentSection) return
    setIsScrolling(true)
    setCurrentSection(index)
    setTimeout(() => setIsScrolling(false), 1200)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <Navigation />

      {/* Sections Container */}
      <div
        className="flex flex-col h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
        }}
      >
        {sections.map((section, index) => (
          <div key={section.id} className="h-screen flex-shrink-0 relative">
            {section.component}
          </div>
        ))}
      </div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => goToSection(index)}
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
              "group relative",
              currentSection === index
                ? "bg-primary border-primary"
                : "bg-transparent border-muted-foreground hover:border-primary",
            )}
            aria-label={`Go to ${section.title}`}
          >
            {/* Tooltip */}
            <span
              className={cn(
                "absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded whitespace-nowrap",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
              )}
            >
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
