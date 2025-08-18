"use client"

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
import { Search, User, Heart, Settings, LogOut, MessageCircle } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useMode } from "@/contexts/mode-context"

export function Navigation() {
  const { mode } = useMode()

  // Mock user state - in real app this would come from auth context
  const isLoggedIn = true
  const user = {
    name: "张先生",
    email: "zhang@example.com",
    avatar: "/user-avatar.png",
  }

  const handleAboutClick = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleAuctionsClick = () => {
    document.getElementById("featured-auctions")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWeChatClick = () => {
    document.getElementById("wechat-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="border-b bg-muted/30">
        <div className="container mx-auto flex h-12 items-center justify-end px-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWeChatClick}
              className="flex items-center space-x-2 bg-transparent border-muted-foreground/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>关注微信</span>
            </Button>
            <ModeToggle />
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
                >
                  首页
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={handleAboutClick}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  关于我们
                </button>
              </NavigationMenuItem>

              {mode === "auction" ? (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>拍卖会</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
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
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>艺术品分类</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/categories/real-estate"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">房地产</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              住宅、商业地产拍卖
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/categories/calligraphy-painting"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">书画</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              中国书法、绘画作品
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </>
              ) : (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>专业领域</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/practice/corporate"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">公司法务</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              企业设立、合规、并购重组
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/practice/litigation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">诉讼仲裁</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              民商事诉讼、仲裁代理
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/lawyers"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      律师团队
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/news"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      新闻动态
                    </Link>
                  </NavigationMenuItem>
                </>
              )}

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  联系我们
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            {mode === "law" ? (
              <Button className="bg-black hover:bg-gray-800 text-white px-6">免费咨询</Button>
            ) : (
              <>
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="搜索拍品" className="w-48 pl-10 pr-4 h-9" />
                </div>
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </>
            )}

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
