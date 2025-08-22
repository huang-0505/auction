"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Phone, Mail, MapPin } from "lucide-react"

export function LawClosedNotice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-12 h-12 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">上海金沪律师事务所</h1>
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-lg font-medium mb-6">
              暂未开放
            </div>
          </div>

          <div className="space-y-4 text-slate-600 mb-8">
            <p className="text-lg">我们正在为您准备更优质的法律服务</p>
            <p>律师事务所业务正在筹备中，敬请期待我们的正式开放</p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-slate-800 mb-4">紧急法律咨询</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>咨询热线: 021-35303599</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>邮箱: J@jhsen.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>地址: 杨浦区长阳路2592号电力科技园一楼</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500">感谢您的关注与支持，我们将尽快为您提供专业的法律服务</p>
        </CardContent>
      </Card>
    </div>
  )
}
