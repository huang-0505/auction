"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
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
                {mode === "auction" ? (
                  <NavigationMenuTrigger className="h-10 px-4 py-2" style={{ minWidth: "80px" }}>
                    拍卖会
                  </NavigationMenuTrigger>
                ) : (
                  <NavigationMenuTrigger className="h-10 px-4 py-2" style={{ minWidth: "80px" }}>
                    专业领域
                  </NavigationMenuTrigger>
                )}
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    {mode === "auction" ? (
                      <>
                        <NavigationMenuLink asChild></NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/auctions/featured"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">精选拍卖会</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              查看当前精选拍卖项目
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/auctions/upcoming"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">即将开始</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              预展和即将开始的拍卖
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => {
                              const practiceSection = document.querySelector('[data-section="practice"]')
                              if (practiceSection) {
                                practiceSection.scrollIntoView({ behavior: "smooth" })
                              }
                            }}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">公司法务</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              企业设立、合规、并购重组
                            </p>
                          </button>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => {
                              const practiceSection = document.querySelector('[data-section="practice"]')
                              if (practiceSection) {
                                practiceSection.scrollIntoView({ behavior: "smooth" })
                              }
                            }}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">诉讼仲裁</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              民商事诉讼、仲裁代理
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {mode === "auction" ? (
                  <NavigationMenuTrigger className="h-10 px-4 py-2" style={{ minWidth: "90px" }}>
                    拍卖品分类
                  </NavigationMenuTrigger>
                ) : (
                  <button
                    onClick={() => {
                      const teamSection = document.querySelector('[data-section="team"]')
                      if (teamSection) {
                        teamSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    style={{ minWidth: "90px" }}
                  >
                    律师团队
                  </button>
                )}
                {mode === "auction" && (
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/categories/real-estate"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">房地产</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">住宅、商业地产拍卖</p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/categories/calligraphy-painting"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">书画</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">中国书法、绘画作品</p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>

              {mode === "law" && (
                <NavigationMenuItem>
                  <button
                    onClick={() => {
                      const cultureSection = document.querySelector('[data-section="culture"]')
                      if (cultureSection) {
                        cultureSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    style={{ minWidth: "80px" }}
                  >
                    新闻动态
                  </button>
                </NavigationMenuItem>
              )}

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
