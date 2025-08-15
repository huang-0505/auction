"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"

export function AuctionFilters() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="搜索艺术家、作品名称或关键词..." className="pl-10 h-12 text-base" />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">拍卖作品</h2>
        <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          筛选条件
          {isFilterOpen && <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Filters Panel */}
      {isFilterOpen && (
        <Card>
          <CardHeader>
            <CardTitle>筛选条件</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category */}
              <div className="space-y-2">
                <Label>艺术品分类</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paintings">绘画作品</SelectItem>
                    <SelectItem value="sculpture">雕塑艺术</SelectItem>
                    <SelectItem value="antiques">古董收藏</SelectItem>
                    <SelectItem value="jewelry">珠宝首饰</SelectItem>
                    <SelectItem value="ceramics">陶瓷艺术</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <Label>价格范围</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="选择价格范围" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">¥0 - ¥50,000</SelectItem>
                    <SelectItem value="50000-200000">¥50,000 - ¥200,000</SelectItem>
                    <SelectItem value="200000-500000">¥200,000 - ¥500,000</SelectItem>
                    <SelectItem value="500000-1000000">¥500,000 - ¥1,000,000</SelectItem>
                    <SelectItem value="1000000+">¥1,000,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label>拍卖状态</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="选择状态" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部</SelectItem>
                    <SelectItem value="live">正在拍卖</SelectItem>
                    <SelectItem value="upcoming">即将开始</SelectItem>
                    <SelectItem value="ended">已结束</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div className="space-y-2">
                <Label>排序方式</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="选择排序" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">最新上架</SelectItem>
                    <SelectItem value="ending-soon">即将结束</SelectItem>
                    <SelectItem value="price-low">价格从低到高</SelectItem>
                    <SelectItem value="price-high">价格从高到低</SelectItem>
                    <SelectItem value="popular">最受关注</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Filters */}
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label className="text-base font-medium">艺术家时期</Label>
                  <div className="space-y-2">
                    {["现代艺术", "当代艺术", "古典艺术", "印象派"].map((period) => (
                      <div key={period} className="flex items-center space-x-2">
                        <Checkbox id={period} />
                        <Label htmlFor={period} className="text-sm font-normal">
                          {period}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">作品尺寸</Label>
                  <div className="space-y-2">
                    {["小型 (<50cm)", "中型 (50-100cm)", "大型 (>100cm)"].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox id={size} />
                        <Label htmlFor={size} className="text-sm font-normal">
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">特殊标签</Label>
                  <div className="space-y-2">
                    {["无底价", "名家作品", "稀有珍品", "投资级"].map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox id={tag} />
                        <Label htmlFor={tag} className="text-sm font-normal">
                          {tag}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t">
              <Button className="flex-1">应用筛选</Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                重置筛选
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
