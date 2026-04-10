import { Navigation } from "@/components/navigation"

export default function OtherAuctionsPage() {
  const otherAuctions = [
    {
      id: 1,
      title: "机动车拍卖专场",
      artist: "上海金沪拍卖",
      startingPrice: "8.5万",
      currentBid: "8.5万",
      timeLeft: "6天 10小时",
      image: "/placeholder.svg?height=400&width=600",
      status: "upcoming" as const,
      endTime: "2025-08-25T10:00:00Z",
    },
    {
      id: 2,
      title: "珠宝首饰专场",
      artist: "上海金沪拍卖",
      startingPrice: "2.8万",
      currentBid: "3.5万",
      timeLeft: "3天 8小时",
      image: "/placeholder.svg?height=400&width=600",
      status: "active" as const,
      endTime: "2025-08-22T14:00:00Z",
    },
    {
      id: 3,
      title: "古董家具专场",
      artist: "上海金沪拍卖",
      startingPrice: "5.2万",
      currentBid: "6.8万",
      timeLeft: "4天 16小时",
      image: "/placeholder.svg?height=400&width=600",
      status: "active" as const,
      endTime: "2025-08-23T18:00:00Z",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">其他委托拍卖</h1>
          <p className="text-muted-foreground">
            不属于房产和艺术品类的其他拍卖品，包括机动车、珠宝首饰、古董家具、股权资产等各类委托拍卖
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-center space-y-4">
            <div className="text-6xl text-muted-foreground/30">🚧</div>
            <h2 className="text-2xl font-semibold text-muted-foreground">暂未开放</h2>
            <p className="text-muted-foreground/80">该分类正在筹备中，敬请期待</p>
          </div>
        </div>

        {/* Removed the grid for artwork cards as the "Not yet open" message is added */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAuctions.map((auction) => (
            <ArtworkCard key={auction.id} {...auction} />
          ))}
        </div> */}
      </main>
    </div>
  )
}
