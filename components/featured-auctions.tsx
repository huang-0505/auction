import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Eye } from "lucide-react"

const featuredAuctions = [
  {
    id: 1,
    title: "【一拍】上海市金山区山阳镇海美路228弄321号1-3层",
    date: "2025年8月5日",
    time: "10:00",
    status: "进行中",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zJCD58mL95e3Q8Mi21kgm82oenK5xz.png",
    startPrice: "510.00万",
    location: "上海市金山区人民法院",
    platform: "淘宝网",
  },
  {
    id: 2,
    title: "翰墨集萃-精粹书画专场 Lot1-92",
    date: "2025年8月20日",
    time: "10:00",
    status: "预展中",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Kq0gH8oZD19P13XOpUYIfNpWaPP6l.png",
    startPrice: "91件拍品",
    location: "上海市徐汇区南丹东路255号3楼303",
    platform: "上海金沪小程序",
  },
  {
    id: 3,
    title: "笋学好古-古代书画专场 Lot93-146",
    date: "2025年8月20日",
    time: "时间顺延",
    status: "预展中",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcsEUJPHc3TJAVUzh0TVL13YErnLRV.png",
    startPrice: "54件拍品",
    location: "上海市徐汇区南丹东路255号3楼303",
    platform: "上海金沪小程序",
  },
  {
    id: 4,
    title: "【二拍】上海市浦东新区高科东路777弄10号134室",
    date: "2025年8月19日",
    time: "10:00",
    status: "即将开始",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gutva7a08zZhS9EPly3uc77JiTSZxO.png",
    startPrice: "151.00万",
    location: "上海市浦东新区人民法院",
    platform: "淘宝网",
  },
  {
    id: 5,
    title: "【二拍】上海市虹口区七浦路133号2层3街75室【带租约】",
    date: "2025年8月19日",
    time: "10:00",
    status: "即将开始",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m2v8emOoDW6fhOMGJhpMEM7WHqpVte.png",
    startPrice: "51.00万",
    location: "上海市静安区人民法院",
    platform: "淘宝网",
  },
  {
    id: 6,
    title: "【三拍】上海市虹口区曲阳路630弄2号1114室",
    date: "2025年8月19日",
    time: "10:00",
    status: "即将开始",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tMcdCjwJYbYFF4MSNcZvsMOhVwrIo.png",
    startPrice: "253.68万",
    location: "上海市徐汇区人民法院",
    platform: "淘宝网",
  },
]

export function FeaturedAuctions() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">精选拍卖会</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            发现即将举行的重要拍卖会，房产、艺术品等优质拍品等待您的参与
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAuctions.map((auction) => (
            <Card key={auction.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  className="w-full h-64 object-cover object-center"
                  style={{ imageRendering: "high-quality" }}
                />
                <Badge
                  className="absolute top-4 left-4"
                  variant={
                    auction.status === "即将开始"
                      ? "default"
                      : auction.status === "进行中"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {auction.status}
                </Badge>
              </div>

              <CardHeader>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{auction.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {auction.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {auction.time}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">起拍价:</span>
                    <span className="font-medium text-red-600">{auction.startPrice}</span>
                  </div>
                  <div className="flex items-start justify-between text-sm">
                    <span className="text-muted-foreground">拍卖地点:</span>
                    <span className="font-medium text-right flex-1 ml-2">{auction.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">拍卖平台:</span>
                    <span className="font-medium">{auction.platform}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  查看详情
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  立即竞拍
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            查看所有拍卖会
          </Button>
        </div>
      </div>
    </section>
  )
}
