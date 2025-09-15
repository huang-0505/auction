"use client"

import { Navigation } from "@/components/navigation"
import { LawAboutWheel } from "@/components/law-sections/law-about-wheel"
import { useMode } from "@/contexts/mode-context"
import Link from "next/link"

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
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12">关于金沪拍卖</h1>

              <div className="mb-16">
                <h2 className="text-3xl font-semibold text-center mb-8">资质证书</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                    <img
                      src="/cultural-relics-permit.png"
                      alt="文物拍卖许可证"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2">文物拍卖许可证</h3>
                    <p className="text-muted-foreground text-sm">中华人民共和国</p>
                    <p className="text-muted-foreground text-sm">沪文物拍字（2016）第13044号</p>
                    <p className="text-muted-foreground text-sm">有效期至：2026-07-31</p>
                  </div>

                  <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                    <img src="/trademark-certificate.png" alt="商标注册证" className="w-full h-auto rounded-lg mb-4" />
                    <h3 className="font-semibold mb-2">商标注册证</h3>
                    <p className="text-muted-foreground text-sm">金沪 JINHU</p>
                    <p className="text-muted-foreground text-sm">第159438866号</p>
                    <p className="text-muted-foreground text-sm">注册人：上海金沪拍卖有限公司</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Link
                    href="/about/certificates"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    查看更多资质与荣誉
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-3xl font-semibold">公司简介</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      上海金沪拍卖有限公司成立于2024年，是经国家文物局批准，具有文物拍卖资质的专业拍卖机构。公司注册资本1000万元人民币，总部位于上海市杨浦区长阳路2592号电力科技园。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      公司秉承"诚信为本、专业至上"的经营理念，致力于为广大收藏家、投资者和艺术爱好者提供高品质、多元化的拍卖服务。我们的业务范围涵盖房地产拍卖、艺术品拍卖、古董文物拍卖等多个领域。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      金沪拍卖拥有一支由资深拍卖师、艺术品鉴定专家、法律顾问组成的专业团队，确保每一场拍卖会的专业性和权威性。我们严格遵循国家相关法律法规，建立了完善的拍品征集、鉴定、展示、拍卖流程。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-semibold">企业文化</h2>
                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold mb-2 text-primary">企业使命</h3>
                      <p className="text-muted-foreground">
                        传承文化精髓，搭建收藏桥梁，让每一件艺术珍品都能找到最合适的归宿。
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold mb-2 text-primary">企业愿景</h3>
                      <p className="text-muted-foreground">
                        成为中国领先的综合性拍卖服务平台，推动艺术品市场健康发展。
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold mb-2 text-primary">核心价值观</h3>
                      <p className="text-muted-foreground">诚信、专业、创新、共赢</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">核心优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">专业团队</h3>
                    <p className="text-muted-foreground text-sm">资深拍卖师和权威鉴定专家团队</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">严格鉴定</h3>
                    <p className="text-muted-foreground text-sm">多重鉴定程序确保拍品真实性</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">透明交易</h3>
                    <p className="text-muted-foreground text-sm">公开公正的拍卖流程和定价机制</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">贴心服务</h3>
                    <p className="text-muted-foreground text-sm">全程专业咨询和售后保障服务</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-card border rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">联系我们</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">客服热线</h4>
                    <p className="text-muted-foreground">021-35303599</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">传真号码</h4>
                    <p className="text-muted-foreground">021-35070008</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">电子邮箱</h4>
                    <p className="text-muted-foreground">J@jhsen.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">公司地址</h4>
                    <p className="text-muted-foreground">杨浦区长阳路2592号电力科技园一楼</p>
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
                <li>传真号码: 021-35070008</li>
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
