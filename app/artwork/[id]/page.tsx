import { Navigation } from "@/components/navigation"
import { ArtworkImageGallery } from "@/components/artwork-image-gallery"
import { BiddingPanel } from "@/components/bidding-panel"
import { ArtworkCard } from "@/components/artwork-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, FileText, Award, Shield, Eye } from "lucide-react"

interface ArtworkPageProps {
  params: {
    id: string
  }
}

// Mock data - in real app this would come from API
const artworkData = {
  id: "1",
  title: "抽象表现主义杰作",
  artist: "张大千",
  year: "1965",
  medium: "油画布面",
  dimensions: "120 × 90 cm",
  estimate: "¥800,000 - ¥1,200,000",
  currentBid: "¥950,000",
  nextBid: "¥1,000,000",
  status: "live" as const,
  timeLeft: "2小时15分",
  bidCount: 23,
  watchers: 156,
  images: ["/vibrant-abstract.png", "/artwork-detail-1.png", "/artwork-detail-2.png"],
  description: `这幅作品创作于1965年，是张大千晚期抽象表现主义时期的重要作品。画面运用了大胆的色彩对比和流动的笔触，展现了艺术家对东西方绘画技法的完美融合。

作品采用油画布面，尺寸为120×90厘米，保存状况良好。画面构图饱满，色彩层次丰富，体现了张大千深厚的艺术功底和独特的艺术视角。

此作品曾在多个重要展览中展出，具有重要的艺术价值和收藏价值。`,
  provenance: [
    "1965年 - 艺术家工作室",
    "1970年 - 私人收藏，香港",
    "1985年 - 苏富比香港拍卖",
    "1985年至今 - 私人收藏，台北",
  ],
  exhibitions: [
    "1966年 - 张大千个人画展，台北历史博物馆",
    "1983年 - 现代中国绘画展，香港艺术馆",
    "2010年 - 张大千诞辰110周年纪念展，中国美术馆",
  ],
  literature: ["《张大千画集》，台北，1970年，图版23", "《现代中国绘画大师》，香港，1985年，页156-157"],
  condition: "保存状况良好，原装框架，无明显损伤",
  auctionInfo: {
    auctionHouse: "JH Sen 拍卖行",
    saleTitle: "现代艺术精品专场",
    saleDate: "2024年1月15日",
    lotNumber: "23",
    location: "北京",
  },
}

const relatedArtworks = [
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
]

export default function ArtworkPage({ params }: ArtworkPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <span>首页</span>
          <span>/</span>
          <span>拍卖会</span>
          <span>/</span>
          <span>现代艺术精品专场</span>
          <span>/</span>
          <span className="text-foreground">拍品 {artworkData.auctionInfo.lotNumber}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-2">
            <ArtworkImageGallery images={artworkData.images} title={artworkData.title} />

            {/* Artwork Details */}
            <div className="mt-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{artworkData.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {artworkData.artist} ({artworkData.year})
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{artworkData.medium}</Badge>
                  <Badge variant="outline">{artworkData.dimensions}</Badge>
                  <Badge variant="outline">拍品 {artworkData.auctionInfo.lotNumber}</Badge>
                </div>
              </div>

              {/* Auction Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    拍卖信息
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">拍卖行:</span>
                      <span className="ml-2 font-medium">{artworkData.auctionInfo.auctionHouse}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">专场:</span>
                      <span className="ml-2 font-medium">{artworkData.auctionInfo.saleTitle}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">拍卖日期:</span>
                      <span className="ml-2 font-medium">{artworkData.auctionInfo.saleDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">地点:</span>
                      <span className="ml-1 font-medium">{artworkData.auctionInfo.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    作品描述
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    {artworkData.description.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Provenance & Exhibition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      来源
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {artworkData.provenance.map((item, index) => (
                        <li key={index} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      展览记录
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {artworkData.exhibitions.map((item, index) => (
                        <li key={index} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Literature & Condition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>文献记录</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {artworkData.literature.map((item, index) => (
                        <li key={index} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      保存状况
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{artworkData.condition}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column - Bidding Panel */}
          <div>
            <BiddingPanel
              status={artworkData.status}
              estimate={artworkData.estimate}
              currentBid={artworkData.currentBid}
              nextBid={artworkData.nextBid}
              timeLeft={artworkData.timeLeft}
              bidCount={artworkData.bidCount}
              watchers={artworkData.watchers}
            />
          </div>
        </div>

        {/* Related Artworks */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">相关推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} {...artwork} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
