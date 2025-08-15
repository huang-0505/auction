import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Gavel, Heart, TrendingUp, Clock, Award, Settings, CreditCard, Bell, Eye, Calendar } from "lucide-react"

// Mock user data
const userData = {
  name: "张先生",
  email: "zhang@example.com",
  memberSince: "2020年3月",
  accountType: "高级收藏家",
  avatar: "/user-avatar.png",
  stats: {
    totalBids: 156,
    wonAuctions: 23,
    totalSpent: "¥12,500,000",
    savedItems: 89,
  },
}

const activeBids = [
  {
    id: "1",
    title: "抽象表现主义杰作",
    artist: "张大千",
    currentBid: "¥950,000",
    myBid: "¥900,000",
    timeLeft: "2小时15分",
    status: "leading",
    image: "/vibrant-abstract.png",
  },
  {
    id: "2",
    title: "印象派风景画",
    artist: "莫奈",
    currentBid: "¥6,200,000",
    myBid: "¥5,800,000",
    timeLeft: "1天3小时",
    status: "outbid",
    image: "/impressionist-landscape.png",
  },
]

const watchlist = [
  {
    id: "3",
    title: "山水意境",
    artist: "齐白石",
    estimate: "¥1,500,000 - ¥2,500,000",
    auctionDate: "2024年1月20日",
    image: "/chinese-landscape-mountains-rivers.png",
  },
  {
    id: "4",
    title: "当代装置艺术",
    artist: "草间弥生",
    estimate: "¥3,000,000 - ¥4,500,000",
    auctionDate: "2024年1月25日",
    image: "/contemporary-dot-installation.png",
  },
]

const bidHistory = [
  {
    id: "5",
    title: "现代雕塑作品",
    artist: "亨利·摩尔",
    finalBid: "¥2,800,000",
    result: "won",
    date: "2023年12月15日",
    image: "/placeholder-4ure2.png",
  },
  {
    id: "6",
    title: "欧式古典家具",
    artist: "路易十六时期",
    finalBid: "¥750,000",
    result: "lost",
    date: "2023年12月10日",
    image: "/ornate-european-furniture.png",
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">欢迎回来，{userData.name}</h1>
              <p className="text-muted-foreground">
                {userData.accountType} • 会员自 {userData.memberSince}
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            账户设置
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总出价次数</CardTitle>
              <Gavel className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.totalBids}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">成功竞拍</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.wonAuctions}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总消费金额</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.totalSpent}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">收藏关注</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.savedItems}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="active-bids" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active-bids">当前竞拍</TabsTrigger>
            <TabsTrigger value="watchlist">关注列表</TabsTrigger>
            <TabsTrigger value="history">竞拍历史</TabsTrigger>
            <TabsTrigger value="account">账户管理</TabsTrigger>
          </TabsList>

          {/* Active Bids */}
          <TabsContent value="active-bids" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  当前竞拍 ({activeBids.length})
                </CardTitle>
                <CardDescription>您正在参与的拍卖项目</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeBids.map((bid) => (
                    <div key={bid.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={bid.image || "/placeholder.svg"}
                        alt={bid.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{bid.title}</h3>
                        <p className="text-sm text-muted-foreground">{bid.artist}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span>当前出价: {bid.currentBid}</span>
                          <span>我的出价: {bid.myBid}</span>
                          <Badge variant={bid.status === "leading" ? "default" : "destructive"} className="text-xs">
                            {bid.status === "leading" ? "领先" : "被超越"}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-2">剩余时间</div>
                        <div className="font-semibold text-red-600">{bid.timeLeft}</div>
                        <Button size="sm" className="mt-2">
                          提高出价
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Watchlist */}
          <TabsContent value="watchlist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  关注列表 ({watchlist.length})
                </CardTitle>
                <CardDescription>您关注的拍卖项目</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {watchlist.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.artist}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span>估价: {item.estimate}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.auctionDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Bell className="h-4 w-4 mr-1" />
                          提醒
                        </Button>
                        <Button size="sm">查看详情</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bid History */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>竞拍历史</CardTitle>
                <CardDescription>您的历史竞拍记录</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bidHistory.map((bid) => (
                    <div key={bid.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={bid.image || "/placeholder.svg"}
                        alt={bid.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{bid.title}</h3>
                        <p className="text-sm text-muted-foreground">{bid.artist}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span>最终出价: {bid.finalBid}</span>
                          <span className="text-muted-foreground">{bid.date}</span>
                        </div>
                      </div>
                      <Badge variant={bid.result === "won" ? "default" : "secondary"}>
                        {bid.result === "won" ? "竞拍成功" : "竞拍失败"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Management */}
          <TabsContent value="account" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    支付方式
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                        VISA
                      </div>
                      <span>**** **** **** 1234</span>
                    </div>
                    <Badge variant="outline">默认</Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    添加新的支付方式
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    通知设置
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>拍卖提醒</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>出价通知</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>邮件通知</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    保存设置
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
