"use client"

interface ContactSectionProps {
  showContactInfo?: boolean
  showBusinessHours?: boolean
}

export default function ContactSection({ showContactInfo = true, showBusinessHours = true }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            专业的拍卖服务，诚信的交易平台。如有任何疑问，欢迎随时与我们联系。
          </p>
        </div>

        <div
          className={`grid grid-cols-1 ${showContactInfo && showBusinessHours ? "lg:grid-cols-3" : showContactInfo || showBusinessHours ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-8`}
        >
          {showContactInfo && (
            <div className="space-y-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">联系信息</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="font-medium flex-shrink-0">客服热线：</span>
                  <div className="ml-2">
                    <div>021-35303599</div>
                    <div style={{ marginLeft: "0px" }}>021-35070008</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-20 flex-shrink-0">地址：</span>
                  <span>上海市杨浦区长阳路2592号一楼A-02</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">位置地图</h4>
              <div className="bg-white p-4 rounded-lg border">
                <iframe
                  src="https://map.baidu.com/search/上海市杨浦区长阳路2592号/@13515139.17,3661463.67,19z?querytype=s&da_src=shareurl&wd=上海市杨浦区长阳路2592号&c=289&src=0&pn=0&sug=0&l=12&b=(13514139,3660463;13516139,3662463)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <p className="text-xs text-gray-500 mt-2 text-center">点击地图可查看详细位置信息和导航路线</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-xl">乘车路线</h4>
                <div className="text-sm text-gray-600 space-y-3 bg-white p-6 rounded-lg border h-full">
                  <p>
                    <span className="font-medium">1、</span>地铁12号线隆昌路站2号出口即到。
                  </p>
                  <p>
                    <span className="font-medium">2、</span>
                    乘8号线至古村路站，同站换乘13或537或268路，10分钟车程到长阳路隆昌路站，下车即到。
                  </p>
                  <p>
                    <span className="font-medium">3、</span>
                    乘4号线到大连路站，同站换乘22、或934路，10分钟车程到隆昌路长阳路站，下车即到。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-xl">关注微信</h4>
                <div className="bg-white p-6 rounded-lg border text-center h-full flex flex-col justify-center">
                  <div className="mb-3">
                    <div className="flex items-center justify-center mb-1">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuEvuU5S9fWob7YgZS4JJzm5DdNOWb.png"
                        alt="微信图标"
                        className="w-5 h-5 mr-2"
                      />
                      <p className="text-sm font-medium text-gray-800">金沪拍卖微信公众号</p>
                    </div>
                    <p className="text-xs text-gray-600">扫描下方二维码关注我们的微信公众号</p>
                  </div>
                  <img
                    src="/wechat-qr-latest.jpeg"
                    alt="微信公众号二维码"
                    className="w-32 h-32 mx-auto mb-4 rounded-lg"
                  />
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 font-medium">扫描添加微信</p>
                    <p className="text-xs text-gray-500">获取最新拍卖信息</p>
                    <p className="text-xs text-gray-500">了解艺术品动态与市场资讯</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showBusinessHours && (
            <div className="space-y-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">营业时间</h4>
              <div className="text-gray-700 space-y-2">
                <p>周一至周五：9:00 - 18:00</p>
                <p>周六至周日：9:00 - 17:00</p>
                <p className="text-sm text-gray-600 mt-4">节假日营业时间可能有所调整，请提前致电咨询</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
