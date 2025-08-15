import { Navigation } from "@/components/navigation"
import { ArtworkCard } from "@/components/artwork-card"

export default function CalligraphyPaintingPage() {
  const calligraphyAuctions = [
    {
      id: 1,
      title: "笋学好古-古代书画专场",
      artist: "上海金沪拍卖",
      startingPrice: "5,000",
      currentBid: "8,500",
      timeLeft: "2天 14小时",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcsEUJPHc3TJAVUzh0TVL13YErnLRV.png",
      status: "active" as const,
      endTime: "2025-08-21T15:00:00Z",
    },
    {
      id: 2,
      title: "翰墨集萃-精粹书画专场",
      artist: "上海金沪拍卖",
      startingPrice: "3,000",
      currentBid: "6,200",
      timeLeft: "4天 10小时",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Kq0gH8oZD19P13XOpUYIfNpWaPP6l.png",
      status: "active" as const,
      endTime: "2025-08-23T16:00:00Z",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">书画拍卖</h1>
          <p className="text-muted-foreground">传承中华文化，汇聚名家书画作品，为收藏家提供优质的艺术品拍卖服务</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calligraphyAuctions.map((auction) => (
            <ArtworkCard key={auction.id} {...auction} />
          ))}
        </div>
      </main>
    </div>
  )
}
