import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Clock } from "lucide-react"
import Link from "next/link"

interface ArtworkCardProps {
  id: string
  title: string
  artist: string
  year?: string
  medium: string
  dimensions: string
  estimate: string
  image: string
  status: "upcoming" | "live" | "sold" | "passed"
  timeLeft?: string
  currentBid?: string
}

export function ArtworkCard({
  id,
  title,
  artist,
  year,
  medium,
  dimensions,
  estimate,
  image,
  status,
  timeLeft,
  currentBid,
}: ArtworkCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "live":
        return <Badge className="bg-red-500 hover:bg-red-600">正在拍卖</Badge>
      case "upcoming":
        return <Badge variant="secondary">即将开始</Badge>
      case "sold":
        return <Badge className="bg-green-600 hover:bg-green-700">已成交</Badge>
      case "passed":
        return <Badge variant="outline">流拍</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-80 object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
          style={{ imageRendering: "high-quality" }}
        />
        <div className="absolute top-4 left-4">{getStatusBadge()}</div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {status === "live" && timeLeft && (
          <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {timeLeft}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight mb-1">{title}</h3>
            <p className="text-muted-foreground">
              {artist} {year && `(${year})`}
            </p>
          </div>

          <div className="text-sm text-muted-foreground space-y-1">
            <p>{medium}</p>
            <p>{dimensions}</p>
          </div>

          <div className="pt-2 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">估价</span>
              <span className="font-semibold">{estimate}</span>
            </div>
            {currentBid && (
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-muted-foreground">当前出价</span>
                <span className="font-semibold text-primary">{currentBid}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button asChild className="flex-1">
            <Link href={`/artwork/${id}`}>查看详情</Link>
          </Button>
          {status === "live" && (
            <Button variant="outline" className="flex-1 bg-transparent">
              立即出价
            </Button>
          )}
          {status === "upcoming" && (
            <Button variant="outline" className="flex-1 bg-transparent">
              设置提醒
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
