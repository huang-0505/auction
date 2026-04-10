"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { useMode } from "@/contexts/mode-context"

const ScaleIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
)

const GavelIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6l-3-4H6L6 2zM3 6h18M8 11v6M16 11v6" />
  </svg>
)

export function Navigation() {
  const { mode, setMode } = useMode()

  const handleAuctionsClick = () => {
    document.getElementById("featured-auctions")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleFreeConsultationClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWeChatClick = () => {
    const wechatSection = document.getElementById("wechat-qr-section")
    if (wechatSection) {
      wechatSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="border-b bg-muted/30">
        <div className="w-full flex h-10 items-center relative">
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWeChatClick}
              className="flex items-center space-x-1 h-8 px-3 text-xs mr-2 bg-transparent"
            >
              <span>关注微信</span>
            </Button>

            <Button
              variant={mode === "auction" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("auction")}
              className="flex items-center space-x-1 h-8 px-3 text-xs"
            >
              <GavelIcon />
              <span>拍卖行</span>
            </Button>

            <Button
              variant={mode === "law" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("law")}
              className="flex items-center space-x-1 h-8 px-3 text-xs"
            >
              <ScaleIcon />
              <span>律师事务所</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <div className="text-lg font-bold text-foreground">
                {mode === "auction" ? "金沪拍卖" : "上海金沪律师事务所"}
              </div>
              <div className="text-xs text-muted-foreground">
                {mode === "auction" ? "Jinhu Auction" : "Shanghai Jinhu Law Firm"}
              </div>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "60px" }}
                >
                  首页
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "80px" }}
                >
                  关于我们
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/categories/real-estate"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "80px" }}
                >
                  房产拍卖
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/categories/calligraphy-painting"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "90px" }}
                >
                  艺术品拍卖
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/categories/other"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "110px" }}
                >
                  其他委托拍卖
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/news"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "80px" }}
                >
                  金沪动态
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "80px" }}
                >
                  联系我们
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {mode === "law" && (
            <div className="flex items-center">
              <Button className="bg-black hover:bg-gray-800 text-white px-6" onClick={handleFreeConsultationClick}>
                咨询
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
