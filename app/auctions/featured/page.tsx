import { Navigation } from "@/components/navigation"
import { FeaturedAuctions } from "@/components/featured-auctions"
import ContactSection from "@/components/contact-section"

export default function FeaturedAuctionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <FeaturedAuctions />

        {/* Additional featured content */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">本月重点推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">古代书画专场</h3>
              <p className="text-muted-foreground mb-4">汇集明清名家作品，传承千年文化精髓</p>
              <div className="text-sm text-muted-foreground">
                <p>预展时间：2025年8月17-19日</p>
                <p>拍卖时间：2025年8月20日</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">精品房产专场</h3>
              <p className="text-muted-foreground mb-4">优质地段房产，投资收藏双重价值</p>
              <div className="text-sm text-muted-foreground">
                <p>预展时间：2025年8月15-17日</p>
                <p>拍卖时间：2025年8月18日</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">当代艺术专场</h3>
              <p className="text-muted-foreground mb-4">新锐艺术家力作，引领艺术收藏新潮流</p>
              <div className="text-sm text-muted-foreground">
                <p>预展时间：2025年8月20-22日</p>
                <p>拍卖时间：2025年8月23日</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  )
}
