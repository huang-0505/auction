import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "金沪拍卖举办2025年春季拍卖师培训",
      date: "2025-03-15",
      category: "企业培训",
      excerpt: "为提升拍卖师专业素养，金沪拍卖于3月15日举办了为期三天的春季拍卖师培训课程，邀请行业资深专家授课...",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "上海拍卖行业协会年度会议圆满召开",
      date: "2025-02-28",
      category: "行业动态",
      excerpt: "2月28日，上海拍卖行业协会2025年度会议在上海国际会议中心召开，金沪拍卖作为协会理事单位参加会议...",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "金沪拍卖荣获2024年度优秀拍卖企业称号",
      date: "2025-01-20",
      category: "企业荣誉",
      excerpt: '在2024年度上海市拍卖行业表彰大会上，金沪拍卖凭借优异的业绩和良好的信誉，荣获"优秀拍卖企业"称号...',
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "艺术品鉴定专家讲座成功举办",
      date: "2025-01-10",
      category: "企业培训",
      excerpt: "1月10日，金沪拍卖邀请故宫博物院资深专家举办艺术品鉴定讲座，为员工和客户普及艺术品鉴定知识...",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "金沪拍卖与多家银行达成战略合作",
      date: "2024-12-15",
      category: "企业动态",
      excerpt: "12月15日，金沪拍卖与工商银行、建设银行等多家金融机构签署战略合作协议，共同推进不良资产处置业务...",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "2024年度拍卖行业发展趋势分析",
      date: "2024-12-01",
      category: "行业动态",
      excerpt:
        "随着数字化转型的深入，拍卖行业呈现出线上线下融合发展的新趋势，金沪拍卖积极拥抱变化，推出多项创新服务...",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">金沪动态</h1>
          <p className="text-muted-foreground">了解金沪拍卖最新动态，包括企业培训、行业资讯、公司新闻等</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{news.category}</span>
                  <span className="text-xs text-muted-foreground">{news.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">{news.title}</h2>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{news.excerpt}</p>
                <Link
                  href={`/news/${news.id}`}
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center"
                >
                  阅读更多
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
