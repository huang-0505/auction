import { Navigation } from "@/components/navigation"
import { ArtworkCard } from "@/components/artwork-card"

export default function RealEstatePage() {
  const realEstateAuctions = [
    {
      id: 1,
      title: "【一拍】上海市金山区山阳镇海美路228弄321号1-3层",
      artist: "上海市金山区人民法院",
      startingPrice: "510.00万",
      currentBid: "510.00万",
      timeLeft: "3天 12小时",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zJCD58mL95e3Q8Mi21kgm82oenK5xz.png",
      status: "active" as const,
      endTime: "2025-08-22T10:00:00Z",
    },
    {
      id: 2,
      title: "【二拍】上海市浦东新区高科东路777弄10号134室",
      artist: "上海市浦东新区人民法院",
      startingPrice: "151.00万",
      currentBid: "151.00万",
      timeLeft: "5天 8小时",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gutva7a08zZhS9EPly3uc77JiTSZxO.png",
      status: "active" as const,
      endTime: "2025-08-24T14:00:00Z",
    },
    {
      id: 3,
      title: "【二拍】上海市静安区七浦路179号3731室（带租约）",
      artist: "上海市静安区人民法院",
      startingPrice: "66.64万",
      currentBid: "66.64万",
      timeLeft: "1天 16小时",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tMcdCjwJYbYFF4MSNcZvsMOhVwrIo.png",
      status: "active" as const,
      endTime: "2025-08-20T18:00:00Z",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">房地产拍卖</h1>
          <p className="text-muted-foreground">专业的房地产拍卖服务，涵盖住宅、商业地产等各类物业</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realEstateAuctions.map((auction) => (
            <ArtworkCard key={auction.id} {...auction} />
          ))}
        </div>
      </main>
    </div>
  )
}
