export function LawFooterWheel() {
  return (
    <section className="h-screen flex items-start justify-center bg-background pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* 金沪律师事务所 */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">金沪律师事务所</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              专业的法律服务机构，为企业和个人提供全方位的法律解决方案。
            </p>
          </div>

          {/* 法律服务 */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">法律服务</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>公司实务</li>
              <li>刑事辩护</li>
              <li>房地产</li>
              <li>劳动纠纷</li>
            </ul>
          </div>

          {/* 专业领域 */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">专业领域</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>医疗事故</li>
              <li>交通事故</li>
              <li>婚姻维权</li>
              <li>债权债务</li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">联系我们</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>客服热线: 021-35070008</p>
              <p>邮箱: J@jhsen.com</p>
              <p>地址: 杨浦区长阳路2592号电力科技园一楼</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 上海金沪律师事务所. 保留所有权利.</p>
        </div>
      </div>
    </section>
  )
}
