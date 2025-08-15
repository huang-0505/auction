import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import ContactSection from "@/components/contact-section" // 修改为默认导入
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar } from "lucide-react"

export default function AuctionResultsPage() {
  const auctionResults = [
    {
      id: 1,
      title: "春季书画精品专场",
      date: "2025年7月15日",
      totalLots: 156,
      soldLots: 142,
      totalValue: "2,580万元",
      soldRate: "91%",
      topLot: {
        title: "齐白石 虾趣图",
        price: "180万元",
        estimate: "120-150万元",
      },
    },
    {
      id: 2,
      title: "夏季房产专场",
      date: "2025年7月8日",
      totalLots: 23,
      soldLots: 19,
      totalValue: "1.2亿元",
      soldRate: "83%",
      topLot: {
        title: "浦东新区精装公寓",
        price: "510万元",
        estimate: "450-500万元",
      },
    },
    {
      id: 3,
      title: "古董珍玩专场",
      date: "2025年6月28日",
      totalLots: 89,
      soldLots: 76,
      totalValue: "1,890万元",
      soldRate: "85%",
      topLot: {
        title: "清乾隆青花瓷瓶",
        price: "95万元",
        estimate: "80-100万元",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">拍卖结果</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            透明公开的成交记录，见证每一件艺术品的价值实现
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">平均成交率</div>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-primary mb-2">5.7亿</div>
            <div className="text-sm text-muted-foreground">年度成交额</div>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-sm text-muted-foreground">成交拍品</div>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-primary mb-2">24</div>
            <div className="text-sm text-muted-foreground">专场拍卖</div>
          </div>
        </div>

        {/* Recent Results */}
        <div className="space-y-6">
          {auctionResults.map((result) => (
            <div key={result.id} className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{result.date}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit">
                  成交率 {result.soldRate}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">总拍品</div>
                  <div className="text-lg font-semibold">{result.totalLots}件</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">成交拍品</div>
                  <div className="text-lg font-semibold">{result.soldLots}件</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">成交总额</div>
                  <div className="text-lg font-semibold">{result.totalValue}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">最高成交</div>
                  <div className="text-lg font-semibold">{result.topLot.price}</div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-medium">最高成交拍品</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">{result.topLot.title}</span>
                  <span className="text-muted-foreground ml-2">估价：{result.topLot.estimate}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                {/* 添加按钮 */}
                <Button variant="outline" size="sm">
                  查看详细结果
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactSection />
    </div>
  )
}
