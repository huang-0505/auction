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

              <div className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">公司简介</h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    上海金沪拍卖有限公司成立于2010年，由市场监督管理局批准成立，是集经营范围涵盖房地产、机动车、文物艺术品、产股权、罚没物资、金融不良资产、破产企业以及各类法人、自然人委托的有形、无形资产的拍卖业务于一体的高文化、高素质、执行力强、监管到位、生机勃勃、欣欣向荣的综合性年轻企业综合性企业，拥有固定办公场所、拍卖大厅、库房等，经营场地达1000平方米。
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    通过我司不懈的努力及全体员工的精诚合作，我司已具有中国拍卖协会的AAA资质，上海拍卖协会AAAAA资质，重合同守信用AAA企业，公务罚没资质等资质。我司主要承担各类房地产、物资、艺术品、机动车等拍卖活动。目前公司已成为上海司法拍卖、海关拍卖、上海农交所、上海国际港务（集团）股份有限公司、上海海运局等机关和国企的入围拍卖单位、以及中国工商银行股份有限公司上海市分行、中国信达资产管理股份有限公司上海市分公司、上海破产管理人协会、上汽集团等指定的拍卖单位。上海金沪律师事务所作为本公司常年的法律顾问单位，确保公司在各方面依法开展业务活动。
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    公司办公场地1000平方米，设置了五部一室，其中综合业务部下设留个部门，六个部门中的艺术品部专门根据其特殊性，设立了库房。各部门分工合作，密切配合，共同完成拍卖业务。在公司领导及公司项目部的坚强支持下，经过多年的工作实践和稳步发展，公司在资质、业务等方面都取得了较大的突破。在2011年获得合同信用A级证书，但这并不是我们的终点，公司在接下来的13年获得合同信用AA级证书，在2014年至2015年持续保持,并且获得上海市守合同重信用企业证书。2020年度以来持续获得合同信用AAA级证书，并且为守合同重信用企业。
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    同时也不断的完善提高自己，在2013年的6月向慈善基金会捐赠《山高水长》国画用于慈善事业，支持慈善事业。在2014年，公司通过认真踏实并合理的规章制度在2014加入中国拍卖行业协会会员并且在2017年的年末我司被评为"上海市拍卖企业信用资质等级"4A级拍卖企业。不仅如此，我公司荣获2015年度信息统计工作先进单位，在之后公司又被评为2015-2016年度"上海市公物罚没物资拍卖企业"。同时，我司也适应新形势，勇于开拓新的拍卖模式，互联网+的拍卖模式已在我司充分运用。
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    每场预展、拍卖会全程录像，每个拍品都有照片和文字资料，通过公司网络和二维码即可搜索、查询和咨询，并且拥有专业的拍卖易胜网、微信公众号，微博，腾讯QQ，企业邮箱，指定报刊等信息发布平台，每年荣获上海市拍卖行业协会颁发的"创新进步奖"。之后我司于2017年也加入了上海联合产权交易所拍卖会员。
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    我司紧紧围绕「金诚致远 ·
                    沪守正衡」的文化理念，用诚信、优质、高效、完善的服务，为拍卖业务的各方当事人提供专业而便捷的服务平台。在严格遵守我国《拍卖法》等法律法规的基础之上，竭诚为社会各界提供服务，上海金沪拍卖有限公司将继续为拍卖行业的规范发展做出自己的贡献，力争发展成为国内具有一定影响力的拍卖公司。
                  </p>
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
