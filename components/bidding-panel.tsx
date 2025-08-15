"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Gavel, TrendingUp, Users, Heart, Bell } from "lucide-react"

interface BiddingPanelProps {
  status: "upcoming" | "live" | "sold" | "passed"
  estimate: string
  currentBid?: string
  nextBid?: string
  timeLeft?: string
  bidCount?: number
  watchers?: number
}

export function BiddingPanel({
  status,
  estimate,
  currentBid,
  nextBid,
  timeLeft,
  bidCount = 0,
  watchers = 0,
}: BiddingPanelProps) {
  const [bidAmount, setBidAmount] = useState(nextBid || "")

  const getStatusInfo = () => {
    switch (status) {
      case "live":
        return {
          badge: <Badge className="bg-red-500 hover:bg-red-600">正在拍卖</Badge>,
          title: "实时竞拍",
          color: "text-red-600",
        }
      case "upcoming":
        return {
          badge: <Badge variant="secondary">即将开始</Badge>,
          title: "即将开拍",
          color: "text-blue-600",
        }
      case "sold":
        return {
          badge: <Badge className="bg-green-600 hover:bg-green-700">已成交</Badge>,
          title: "拍卖结束",
          color: "text-green-600",
        }
      case "passed":
        return {
          badge: <Badge variant="outline">流拍</Badge>,
          title: "拍卖结束",
          color: "text-gray-600",
        }
      default:
        return {
          badge: <Badge variant="outline">未知状态</Badge>,
          title: "状态未知",
          color: "text-gray-600",
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Gavel className="h-5 w-5" />
            {statusInfo.title}
          </CardTitle>
          {statusInfo.badge}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Time Left */}
        {status === "live" && timeLeft && (
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
              <Clock className="h-4 w-4" />
              <span className="font-medium">拍卖倒计时</span>
            </div>
            <div className="text-2xl font-bold text-red-600">{timeLeft}</div>
          </div>
        )}

        {/* Current Bid */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">估价范围</span>
            <span className="font-semibold">{estimate}</span>
          </div>

          {currentBid && (
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">当前出价</span>
              <span className={`text-xl font-bold ${statusInfo.color}`}>{currentBid}</span>
            </div>
          )}

          <Separator />

          {/* Bid Statistics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">出价次数:</span>
              <span className="font-medium">{bidCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">关注人数:</span>
              <span className="font-medium">{watchers}</span>
            </div>
          </div>
        </div>

        {/* Bidding Actions */}
        {status === "live" && (
          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">您的出价</label>
              <Input
                type="text"
                placeholder={nextBid || "输入出价金额"}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="text-lg font-semibold"
              />
              {nextBid && <p className="text-sm text-muted-foreground">建议最低出价: {nextBid}</p>}
            </div>

            <Button className="w-full" size="lg">
              <Gavel className="h-4 w-4 mr-2" />
              立即出价
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                收藏
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-1" />
                提醒
              </Button>
            </div>
          </div>
        )}

        {status === "upcoming" && (
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              <Bell className="h-4 w-4 mr-2" />
              设置拍卖提醒
            </Button>
            <Button variant="outline" className="w-full bg-transparent" size="lg">
              <Heart className="h-4 w-4 mr-2" />
              添加到收藏
            </Button>
          </div>
        )}

        {status === "sold" && (
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-green-600 font-semibold mb-1">成交价格</div>
            <div className="text-2xl font-bold text-green-600">{currentBid}</div>
          </div>
        )}

        {/* Contact Information */}
        <div className="pt-4 border-t text-sm text-muted-foreground">
          <p className="mb-2">需要帮助？</p>
          <p>电话: 400-888-8888</p>
          <p>邮箱: bid@jhsen.com.cn</p>
        </div>
      </CardContent>
    </Card>
  )
}
