"use client"

import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function CertificatesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-8">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href="/about" className="text-primary hover:underline">
                关于我们
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-muted-foreground">资质与荣誉</span>
            </div>

            <h1 className="text-4xl font-bold text-center mb-12">资质与荣誉</h1>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8">相关资质证书</h2>
              <div className="bg-card border rounded-lg p-8 mb-8">
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    中国拍卖协会AAA级企业
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    上海市企业信用等级AAAAA级企业
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    上海市高级人民法院指定拍卖企业
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    上海市公务罚没指定拍卖企业
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    上海市重合同守信用AAA级企业
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    上海联合产权交易所拍卖会员
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8">荣誉证书</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Contract Credit Rating Certificate */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HOqRCeq8DX3UoN0hiN58LqnO8X40pZ.png"
                    alt="合同信用等级认定证书"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">合同信用等级认定证书</h3>
                  <p className="text-muted-foreground text-sm">2022-2023年度合同信用等级为AAA级</p>
                  <p className="text-muted-foreground text-sm">证书编号：SYP2024032</p>
                </div>

                {/* China Auction Association AAA Certificate */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mL1c7ErYmw4VgeWIHADbg19fb5tw6f.png"
                    alt="中国拍卖行业AAA企业证书"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">中国拍卖行业AAA企业</h3>
                  <p className="text-muted-foreground text-sm">全国统一编号：2019-005</p>
                  <p className="text-muted-foreground text-sm">中国拍卖行业协会颁发</p>
                </div>

                {/* Latest AAA Certificate 2023 */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S05kSiWbOc3RfiJFp2PDmu04NMUKpc.png"
                    alt="中国拍卖行业AAA企业证书2023"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">中国拍卖行业AAA企业</h3>
                  <p className="text-muted-foreground text-sm">全国统一编号：2023-034</p>
                  <p className="text-muted-foreground text-sm">有效期至：2026年12月</p>
                </div>

                {/* Top 50 Transaction Volume Award */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4V6TCODAhD3j3LkRMRATi74F1O7hh7.png"
                    alt="成交额前50荣誉证书"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">成交额前50</h3>
                  <p className="text-muted-foreground text-sm">上海拍卖业2019年度</p>
                  <p className="text-muted-foreground text-sm">上海市拍卖行业协会</p>
                </div>

                {/* Excellent Case Award */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UftoTcSnAgk5ICOHFLjy2ctqGooGvo.png"
                    alt="优秀案例奖荣誉证书"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">优秀案例奖</h3>
                  <p className="text-muted-foreground text-sm">《国有资产拍卖案例研究报告》编撰</p>
                  <p className="text-muted-foreground text-sm">上海市拍卖行业协会 2019年</p>
                </div>

                {/* 5A Credit Rating Certificate */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lpou0mp7A0fT9ZO1tFxuQfEv2DmfuR.png"
                    alt="上海市拍卖企业信用资质等级5A级证书"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">上海市拍卖企业信用资质等级</h3>
                  <p className="text-muted-foreground text-sm">5A级拍卖企业</p>
                  <p className="text-muted-foreground text-sm">有效期：2022年1月至2024年12月</p>
                </div>

                {/* Public Property Auction Enterprise Certificate */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YB7eUsEkb6rRGkHqXtdPBcRquyniig.png"
                    alt="上海市公物罚没物资拍卖企业证书"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">上海市公物罚没物资拍卖企业</h3>
                  <p className="text-muted-foreground text-sm">2019-2020年度</p>
                  <p className="text-muted-foreground text-sm">上海市拍卖行业协会</p>
                </div>

                {/* Shanghai Court Announcement */}
                <div className="bg-card border rounded-lg p-6 text-center shadow-sm">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FcequKaZFXa9xNXvFm6MbZFEQrxMo9.png"
                    alt="上海法院网络司法拍卖辅助机构名单库公告"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">司法拍卖辅助机构</h3>
                  <p className="text-muted-foreground text-sm">上海法院网络司法拍卖辅助机构名单库</p>
                  <p className="text-muted-foreground text-sm">上海市高级人民法院 2017年</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                返回关于我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
