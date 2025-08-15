import { Navigation } from "@/components/navigation"
import { ArtworkCard } from "@/components/artwork-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categoryData = {
  paintings: {
    title: "绘画作品",
    description: "汇集世界各地的优秀绘画作品，包括油画、水彩、版画等多种形式",
    image: "/art-gallery-exhibition.png",
  },
  sculpture: {
    title: "雕塑艺术",
    description: "从古典到现代的雕塑艺术精品，展现立体艺术的无穷魅力",
    image: "/sculpture-gallery-modern-classical.png",
  },
  antiques: {
    title: "古董收藏",
    description: "珍贵的古董文物，承载着深厚的历史文化底蕴",
    image: "/placeholder-gnj1y.png",
  },
  jewelry: {
    title: "珠宝首饰",
    description: "精美的珠宝首饰，闪耀着永恒的光芒",
    image: "/placeholder-c8wc3.png",
  },
}

// Mock artworks for each category
const categoryArtworks = [
  {
    id: "cat-1",
    title: "现代抽象画作",
    artist: "毕加索",
    year: "1960",
    medium: "油画布面",
    dimensions: "100 × 80 cm",
    estimate: "¥2,000,000 - ¥3,000,000",
    image: "/picasso-abstract.png",
    status: "upcoming" as const,
  },
  {
    id: "cat-2",
    title: "传统山水画",
    artist: "黄宾虹",
    year: "1948",
    medium: "水墨纸本",
    dimensions: "120 × 60 cm",
    estimate: "¥800,000 - ¥1,200,000",
    image: "/chinese-landscape-mountains-rivers.png",
    status: "live" as const,
    timeLeft: "5小时30分",
    currentBid: "¥950,000",
  },
  {
    id: "cat-3",
    title: "印象派风景",
    artist: "雷诺阿",
    year: "1885",
    medium: "油画布面",
    dimensions: "65 × 54 cm",
    estimate: "¥4,000,000 - ¥6,000,000",
    image: "/renoir-landscape.png",
    status: "upcoming" as const,
  },
]

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    return <div>分类不存在</div>
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Category Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={category.image || "/placeholder.svg"} alt={category.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{category.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">156</div>
            <div className="text-muted-foreground">当前拍品</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">23</div>
            <div className="text-muted-foreground">正在拍卖</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">89%</div>
            <div className="text-muted-foreground">成交率</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">¥2.8M</div>
            <div className="text-muted-foreground">平均成交价</div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="default" className="px-4 py-2">
            全部
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            正在拍卖
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            即将开始
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            高估价
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            无底价
          </Badge>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            查看更多 {category.title}
          </Button>
        </div>
      </div>
    </main>
  )
}
