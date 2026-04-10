"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function LawHeroWheel() {
  return (
    <div className="h-screen flex items-start justify-center pt-32 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/shanghai-sunset-legal.png')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            上海金沪
            <br />
            <span className="text-blue-200">律师事务所</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            专业的法律服务机构，为企业和个人提供全方位的法律解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-xl border-0"
              onClick={() => (window.location.href = "#contact")}
            >
              咨询
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-blue-200/50 text-white hover:bg-blue-50/20 hover:border-blue-200 shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "#about")}
            >
              了解更多
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/80" />
      </div>
    </div>
  )
}
