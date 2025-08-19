export function LawFixedFooter() {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">金沪律师事务所</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              专业的法律服务机构，为企业和个人提供全方位的法律解决方案。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">法律服务</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>公司实务</li>
              <li>刑事辩护</li>
              <li>房地产</li>
              <li>劳动纠纷</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">专业领域</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>医疗事故</li>
              <li>交通事故</li>
              <li>婚姻维权</li>
              <li>债权债务</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>客服热线: 021-35303599</li>
              <li>客服热线: 021-35070008</li>
              <li>邮箱: J@jhsen.com</li>
              <li>地址: 杨浦区长阳路2592号电力科技园一楼</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 上海金沪律师事务所. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
