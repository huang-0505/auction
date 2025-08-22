"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, User, Heart, Settings, LogOut, Scale, Gavel } from "lucide-react"
import { useMode } from "@/contexts/mode-context"
import { useState } from "react"

export function Navigation() {
  const { mode, setMode } = useMode()

  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])

  // Mock user state - in real app this would come from auth context
  const isLoggedIn = true
  const user = {
    name: "张先生",
    email: "zhang@example.com",
    avatar: "/user-avatar.png",
  }

  const handleAboutClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results page
      alert(`搜索: ${searchQuery}`)
      // You could implement: router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleFavoritesClick = () => {
    // In a real app, this would show favorites page or dropdown
    alert("查看收藏夹 - 您收藏了 " + favorites.length + " 件拍品")
    // You could implement: router.push('/favorites')
  }

  const handleLawFirmClick = () => {
    alert("律师事务所暂时未开放，敬请期待！")
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
              <Gavel className="h-3 w-3" />
              <span>拍卖行</span>
            </Button>

            <Button
              variant={mode === "law" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("law")}
              className="flex items-center space-x-1 h-8 px-3 text-xs"
            >
              <Scale className="h-3 w-3" />
              <span>律师事务所</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
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
                <button
                  onClick={handleAboutClick}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "80px" }}
                >
                  关于我们
                </button>
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
                    艺术品分类
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
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  style={{ minWidth: "80px" }}
                >
                  联系我们
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4 pr-16">
            {mode === "law" ? (
              <Button className="bg-black hover:bg-gray-800 text-white px-6" onClick={handleFreeConsultationClick}>
                咨询
              </Button>
            ) : (
              <>
                <form onSubmit={handleSearch} className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="搜索拍品"
                    className="w-48 pl-10 pr-4 h-9"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </form>
                <Button variant="ghost" size="icon" onClick={handleFavoritesClick} title="收藏夹">
                  <Heart className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <User className="mr-2 h-4 w-4" />
                      <span>个人中心</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>账户设置</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>退出登录</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/login">
                  <User className="h-4 w-4 mr-2" />
                  登录
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
