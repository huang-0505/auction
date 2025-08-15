import { Navigation } from "@/components/navigation"
import { AuctionFilters } from "@/components/auction-filters"
import { ArtworkCard } from "@/components/artwork-card"

// Mock data for demonstration
const artworks = [
  {
    id: "1",
    title: "抽象表现主义杰作",
    artist: "张大千",
    year: "1965",
    medium: "油画布面",
    dimensions: "120 × 90 cm",
    estimate: "¥800,000 - ¥1,200,000",
    image: "/vibrant-abstract.png",
    status: "live" as const,
    timeLeft: "2小时15分",
    currentBid: "¥950,000",
  },
  {
    id: "2",
    title: "山水意境",
    artist: "齐白石",
    year: "1952",
    medium: "水墨纸本",
    dimensions: "68 × 45 cm",
    estimate: "¥1,500,000 - ¥2,500,000",
    image: "/chinese-landscape-mountains-rivers.png",
    status: "upcoming" as const,
  },
  {
    id: "3",
    title: "欧式古典家具",
    artist: "路易十六时期",
    year: "1780",
    medium: "胡桃木雕刻",
    dimensions: "180 × 120 × 85 cm",
    estimate: "¥600,000 - ¥900,000",
    image: "/ornate-european-furniture.png",
    status: "upcoming" as const,
  },
  {
    id: "4",
    title: "现代雕塑作品",
    artist: "亨利·摩尔",
    year: "1970",
    medium: "青铜雕塑",
    dimensions: "150 × 80 × 60 cm",
    estimate: "¥2,000,000 - ¥3,000,000",
    image: "/placeholder-4ure2.png",
    status: "sold" as const,
  },
  {
    id: "5",
    title: "印象派风景画",
    artist: "莫奈",
    year: "1890",
    medium: "油画布面",
    dimensions: "81 × 100 cm",
    estimate: "¥5,000,000 - ¥8,000,000",
    image: "/impressionist-landscape.png",
    status: "live" as const,
    timeLeft: "1天3小时",
    currentBid: "¥6,200,000",
  },
  {
    id: "6",
    title: "当代装置艺术",
    artist: "草间弥生",
    year: "2018",
    medium: "混合媒材",
    dimensions: "200 × 200 × 300 cm",
    estimate: "¥3,000,000 - ¥4,500,000",
    image: "/contemporary-dot-installation.png",
    status: "upcoming" as const,
  },
]

export default function AuctionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <AuctionFilters />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">
            共找到 <span className="font-semibold text-foreground">{artworks.length}</span> 件拍品
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              正在拍卖
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              即将开始
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              已成交
            </div>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            加载更多拍品
          </button>
        </div>
      </div>
    </main>
  )
}
