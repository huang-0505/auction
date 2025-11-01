"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "金沪拍卖",
    subtitle: "专业诚信 服务至上",
    description: "金沪拍卖为广大藏家提供专业的、高品质的拍卖服务，欢迎各大藏家光临。",
    image: "/certificates/trademark.png",
    primaryButton: "了解我们",
    secondaryButton: "联系我们",
    primaryLink: "/about",
    secondaryLink: "/contact",
    imageSize: "contain",
    imageScale: "70%",
  },
  {
    id: 2,
    title: "金沪拍卖",
    subtitle: "专业诚信 服务至上",
    description: "金沪拍卖为广大藏家提供专业的、高品质的拍卖服务，欢迎各大藏家光临。",
    image: "/certificates/aaa-certificate.png",
    primaryButton: "了解我们",
    secondaryButton: "联系我们",
    primaryLink: "/about",
    secondaryLink: "/contact",
  },
  {
    id: 3,
    title: "金沪拍卖",
    subtitle: "专业诚信 服务至上",
    description: "金沪拍卖为广大藏家提供专业的、高品质的拍卖服务，欢迎各大藏家光临。",
    image: "/certificates/cultural-relics.png",
    primaryButton: "了解我们",
    secondaryButton: "联系我们",
    primaryLink: "/about",
    secondaryLink: "/contact",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-center"
              style={{
                imageRendering: "high-quality",
                objectFit: slide.imageSize || "cover",
                width: slide.imageScale || "100%",
                height: slide.imageScale || "100%",
                margin: "auto",
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-white/90 font-light">{slide.subtitle}</h2>
                <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed max-w-xl">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={slide.primaryLink}>
                    <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90">
                      {slide.primaryButton}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={slide.secondaryLink}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-6 bg-transparent border-white/50 text-white hover:bg-white/10"
                    >
                      {slide.secondaryButton}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
