import { Navigation } from "@/components/navigation"
import ContactSection from "@/components/contact-section" // 修改为默认导入
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function UpcomingAuctionsPage() {
  const upcomingAuctions = [
    {
      id: 1,
      title: "翰墨集萃-精粹书画专场",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Kq0gH8oZD19P13XOpUYIfNpWaPP6l.png",
      previewDate: "2025年8月17-19日",
      auctionDate: "2025年8月20日 10:00",
      location: "上海市徐汇区南丹东路255号3楼303",
      lots: "Lot1-92",
      status: "预展中",
    },
    {
      id: 2,
      title: "笋学好古-古代书画专场",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcsEUJPHc3TJAVUzh0TVL13YErnLRV.png",
      previewDate: "2025年8月17-19日",
      auctionDate: "2025年8月20日 14:00",
      location: "上海市徐汇区南丹东路255号3楼303",
      lots: "Lot93-146",
      status: "即将开始",
    },
    {
      id: 3,
      title: "精品房产专场拍卖",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zJCD58mL95e3Q8Mi21kgm82oenK5xz.png",
      previewDate: "2025年8月15-17日",
      auctionDate: "2025年8月18日 10:00",
      location: "上海市杨浦区长阳路2592号",
      lots: "房产专场",
      status: "预展中",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">即将开始的拍卖</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            把握拍卖时机，参与预展活动，提前了解心仪拍品
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingAuctions.map((auction) => (
            <div key={auction.id} className="bg-card rounded-lg shadow-sm border overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className="absolute top-4 right-4"
                  variant={auction.status === "即将开始" ? "default" : "secondary"}
                >
                  {auction.status}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{auction.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>预展时间：{auction.previewDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>拍卖时间：{auction.auctionDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>地点：{auction.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{auction.lots}</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      预约预展
                    </Button>
                    <Button size="sm">查看详情</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Auction Calendar */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">拍卖日程</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">8月18日</div>
                <div className="text-sm text-muted-foreground">精品房产专场</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">8月20日</div>
                <div className="text-sm text-muted-foreground">书画艺术专场</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">8月23日</div>
                <div className="text-sm text-muted-foreground">当代艺术专场</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  )
}
