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

  const allSections = [
    ...sections,
    {
      id: "footer",
      title: "底部信息",
      component: (
        <div className="h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">金沪律师事务所</h3>
                <p className="text-gray-600">专业的法律服务机构，为企业和个人提供全方位的法律解决方案。</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">法律服务</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>公司实务</li>
                  <li>刑事辩护</li>
                  <li>房地产</li>
                  <li>劳动纠纷</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">专业领域</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>医疗事故</li>
                  <li>交通事故</li>
                  <li>婚姻维权</li>
                  <li>债权债务</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">联系我们</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>客服热线: 021-35070008</li>
                  <li>邮箱: J@jhsen.com</li>
                  <li>地址: 杨浦区长阳路2592号电力科技园一楼</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-8 text-center text-gray-500">
              <p>&copy; 2024 上海金沪律师事务所. 保留所有权利.</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      e.preventDefault()
      setIsScrolling(true)

      if (e.deltaY > 0 && currentSection < allSections.length - 1) {
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

      if (e.key === "ArrowDown" && currentSection < allSections.length - 1) {
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
  }, [currentSection, allSections.length, isScrolling])

  const goToSection = (index: number) => {
    if (isScrolling || index === currentSection) return
    setIsScrolling(true)
    setCurrentSection(index)
    setTimeout(() => setIsScrolling(false), 1200)
  }

  return (
    <div className="relative h-screen overflow-hidden m-0 p-0 w-full">
      <Navigation />

      {/* Sections Container */}
      <div
        className="flex flex-col h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
        }}
      >
        {allSections.map((section, index) => (
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
