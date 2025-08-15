import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedAuctions } from "@/components/featured-auctions"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
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
              <p className="text-muted-foreground">专业的艺术品拍卖平台，致力于为收藏家提供高品质的拍卖服务。</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">拍卖服务</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>当前拍卖</li>
                <li>即将开始</li>
                <li>拍卖结果</li>
                <li>委托拍卖</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">艺术品分类</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>房地产</li>
                <li>书画</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>客服热线: 021-35303599</li>
                <li>QQ: 2398966718</li>
                <li>地址: 杨浦区长阳路2592号一楼A-02</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 金沪拍卖. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
