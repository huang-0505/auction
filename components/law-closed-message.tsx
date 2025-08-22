"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Clock, Phone, Mail } from "lucide-react"
import { useMode } from "@/contexts/mode-context"

export function LawClosedMessage() {
  const { setMode } = useMode()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="shadow-xl border-0">
            <CardContent className="p-12">
              <div className="mb-8">
                <Scale className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">上海金沪律师事务所</h1>
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Clock className="h-4 w-4" />
                  暂时未开放
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-600">我们的律师事务所正在筹备中，即将为您提供专业的法律服务。</p>
                <p className="text-gray-500">
                  敬请期待我们的正式开业，届时将为您提供公司法务、刑事辩护、房地产法律事务等全方位的专业法律服务。
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">如有紧急法律咨询需求，请联系：</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>021-35070008 / 021-35303599</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>J@jhsen.com</span>
                  </div>
                </div>
              </div>

              <Button onClick={() => setMode("auction")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                返回拍卖行
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
