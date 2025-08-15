"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "金沪拍卖",
    subtitle: "专业诚信 服务至上",
    description: "上海金沪拍卖有限公司成立于2010年，致力于为客户提供专业的拍卖服务",
    image: "/yangpu-sunrise-view.png",
    primaryButton: "了解我们",
    secondaryButton: "联系我们",
  },
  {
    id: 2,
    title: "房地产拍卖",
    subtitle: "优质资产 投资良机",
    description: "汇聚上海及周边地区优质房产资源，为投资者提供专业的房产拍卖服务",
    image: "/real-estate-auction.png",
    primaryButton: "查看房产",
    secondaryButton: "拍卖日程",
  },
  {
    id: 3,
    title: "精品书画",
    subtitle: "传世典藏 艺术珍品",
    description: "甄选名家书画作品，传承中华文化艺术，为收藏家提供顶级艺术品拍卖",
    image: "/calligraphy-painting.png",
    primaryButton: "浏览拍卖会",
    secondaryButton: "艺术鉴赏",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // 将轮播速度从5秒改为8秒，让用户有更多时间阅读内容

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
              className="w-full h-full object-cover object-center"
              style={{ imageRendering: "high-quality" }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-white/90 font-light">{slide.subtitle}</h2>
                <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed max-w-xl">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90">
                    {slide.primaryButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 bg-transparent border-white/50 text-white hover:bg-white/10"
                  >
                    {slide.secondaryButton}
                  </Button>
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
