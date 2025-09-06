"use client"

import { Navigation } from "@/components/navigation"
import { LawAboutWheel } from "@/components/law-sections/law-about-wheel"
import { useMode } from "@/contexts/mode-context"

export default function AboutPage() {
  const { mode } = useMode()

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-8">
        {mode === "law" ? (
          <LawAboutWheel />
        ) : (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-8">关于金沪拍卖</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">公司简介</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    金沪拍卖成立于2024年，是一家专业的艺术品拍卖公司。我们致力于为收藏家、投资者和艺术爱好者提供高品质的拍卖服务。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    公司汇聚了业内资深的拍卖师和艺术品鉴定专家，确保每一件拍品的真实性和价值。我们的拍卖涵盖房地产、书画、古董等多个领域。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">我们的使命</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    传承文化，连接收藏。我们相信每一件艺术品都承载着独特的历史和文化价值，我们的使命是为这些珍贵的文化遗产找到最合适的归宿。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    通过专业的服务和透明的交易，我们致力于建立一个诚信、公正的艺术品交易平台。
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">我们的优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">专业团队</h3>
                    <p className="text-muted-foreground text-sm">资深拍卖师和鉴定专家</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">严格鉴定</h3>
                    <p className="text-muted-foreground text-sm">确保每件拍品的真实性</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">透明交易</h3>
                    <p className="text-muted-foreground text-sm">公开公正的拍卖流程</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
                <li>客服热线: 021-35303599</li>
                <li> : 021-35070008</li>
                <li>邮箱: J@jhsen.com</li>
                <li>地址: 杨浦区长阳路2592号电力科技园一楼</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 {mode === "auction" ? "金沪拍卖" : "上海金沪律师事务所"}. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
