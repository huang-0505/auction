"use client"

import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedAuctions } from "@/components/featured-auctions"
import ContactSection from "@/components/contact-section"
import { useMode } from "@/contexts/mode-context"
import { LawHeroWheel } from "@/components/law-sections/law-hero-wheel"
import { LawAboutWheel } from "@/components/law-sections/law-about-wheel"
import { LawPracticeWheel } from "@/components/law-sections/law-practice-wheel"
import { LawTeamWheel } from "@/components/law-sections/law-team-wheel"
import { LawCultureWheel } from "@/components/law-sections/law-culture-wheel"
import { LawContactWheel } from "@/components/law-sections/law-contact-wheel"
import { LawClosedNotice } from "@/components/law-closed-notice"
import Link from "next/link"

export default function HomePage() {
  const { mode } = useMode()

  const lawSections = [
    {
      id: "home",
      title: "首页",
      component: <LawHeroWheel />,
    },
    {
      id: "about",
      title: "关于我们",
      component: <LawAboutWheel />,
    },
    {
      id: "practice",
      title: "专业领域",
      component: <LawPracticeWheel />,
    },
    {
      id: "team",
      title: "律师团队",
      component: <LawTeamWheel />,
    },
    {
      id: "culture",
      title: "金沪文化",
      component: <LawCultureWheel />,
    },
    {
      id: "contact",
      title: "联系我们",
      component: <LawContactWheel />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {mode === "auction" ? (
        <>
          <HeroCarousel />
          <div id="featured-auctions">
            <FeaturedAuctions />
          </div>
          <div id="contact-section">
            <ContactSection showContactInfo={false} showBusinessHours={false} />
          </div>

          {/* Footer */}
          <footer className="bg-card border-t py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="text-2xl font-bold text-primary">金沪拍卖</div>
                  </div>
                  <p className="text-muted-foreground">{"金沪拍卖为广大藏家提供专业的、高品质的拍卖服务，欢迎各大藏家光临。"}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">拍卖服务</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <Link href="/auctions" className="hover:text-foreground transition-colors">
                        当前拍卖
                      </Link>
                    </li>
                    <li>
                      <Link href="/auctions/upcoming" className="hover:text-foreground transition-colors">
                        即将开始
                      </Link>
                    </li>
                    <li>
                      <Link href="/auctions/results" className="hover:text-foreground transition-colors">
                        拍卖结果
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-foreground transition-colors">
                        委托拍卖
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">拍卖分类</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <Link href="/categories/real-estate" className="hover:text-foreground transition-colors">
                        房产
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/calligraphy-painting" className="hover:text-foreground transition-colors">
                        艺术品
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/other" className="hover:text-foreground transition-colors">
                        其他
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">联系我们</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>客服热线: 021-35303599</li>
                    <li> : 021-35070008</li>
                    <li>邮箱: J@jhsen.com</li>
                    <li>地址: 杨浦区长阳路2592号电力科技园一楼</li>
                  </ul>
                </div>
              </div>

              <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                <p>&copy; 2025 金沪拍卖. 保留所有权利.</p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <LawClosedNotice />
      )}
    </main>
  )
}
