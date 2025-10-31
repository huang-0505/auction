"use client"

import { Navigation } from "@/components/navigation"
import ContactSection from "@/components/contact-section"
import { LawContactWheel } from "@/components/law-sections/law-contact-wheel"
import { useMode } from "@/contexts/mode-context"

export default function ContactPage() {
  const { mode } = useMode()

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-8">{mode === "law" ? <LawContactWheel /> : <ContactSection />}</div>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-primary">
                  {mode === "auction" ? "金沪拍卖" : "上海金沪律师事务所"}
                </div>
              </div>
              <p className="text-muted-foreground">
                {mode === "auction"
                  ? "专业的艺术品拍卖平台，致力于为收藏家提供高品质的拍卖服务。"
                  : "专业的法律服务机构，为客户提供全方位的法律解决方案。"}
              </p>
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
                <li>
                  客服热线:{" "}
                  <a href="tel:021-35303599" className="hover:text-primary transition-colors">
                    021-35303599
                  </a>
                </li>
                <li>
                  传真号码:{" "}
                  <a href="tel:021-35070008" className="hover:text-primary transition-colors">
                    021-35070008
                  </a>
                </li>
                <li>
                  邮箱:{" "}
                  <a href="mailto:J@jhsen.com" className="hover:text-primary transition-colors">
                    J@jhsen.com
                  </a>
                </li>
                <li>地址: 杨浦区长阳路2592号电力科技园一楼</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 {mode === "auction" ? "金沪拍卖" : "上海金沪律师事务所"}. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
