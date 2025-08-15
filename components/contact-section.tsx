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
          className={`grid grid-cols-1 ${showContactInfo && showBusinessHours ? "lg:grid-cols-3" : showContactInfo || showBusinessHours ? "lg:grid-cols-2" : "lg:grid-cols-2"} gap-8`}
        >
          {showContactInfo && (
            <div className="space-y-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">联系信息</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="font-medium w-12 flex-shrink-0">电话：</span>
                  <span>021-35303599 35070008</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-12 flex-shrink-0">地址：</span>
                  <span>上海市杨浦区长阳路2592号一楼A-02</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 col-span-full">
            {/* 官方微信 - 始终显示 */}
            <div className="space-y-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">官方微信</h4>
              <div className="flex flex-col items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QtAdUhyqi2l5XFC5HwTecPajLozU5h.png"
                  alt="官方微信二维码"
                  className="w-32 h-32 mb-2"
                />
                <span className="text-sm text-gray-600">扫描添加微信</span>
              </div>
            </div>

            {/* 乘车路线 - 始终显示 */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-xl">乘车路线</h4>
                <div className="text-sm text-gray-600 space-y-3 bg-white p-6 rounded-lg border">
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
                  <p>
                    <span className="font-medium">4、</span>
                    自驾车自内环高架隆昌路出口下匝道，往隆昌路方向行驶1SKM，转隆昌长阳路方向，行驶300米即到。
                  </p>
                  <p>
                    <span className="font-medium">5、</span>
                    自驾车自黄兴路出口下匝道，延黄兴路往江边方向行驶1KM，内江路左转，长阳路右转即到。
                  </p>
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
