import { MessageCircle } from "lucide-react"

export function WeChatSection() {
  return (
    <section id="wechat-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">关注我们的微信</h2>
          </div>

          <p className="text-gray-600 mb-8">扫描下方二维码关注我们的微信公众号，获取最新资讯和服务信息</p>

          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <div className="w-48 h-48 mb-4 flex items-center justify-center">
              <img
                src="/wechat-qr-latest.jpeg"
                alt="金沪官方微信二维码"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 font-medium">金沪官方微信</p>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>工作时间：周一至周五 9:00-18:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}
