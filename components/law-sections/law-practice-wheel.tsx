"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Home, Briefcase, Heart, Car, Gavel, CreditCard } from "lucide-react"

export function LawPracticeWheel() {
  const practiceAreas = [
    {
      icon: Building2,
      title: "公司实务",
      description: "公司设立、股权转让、合同审查、法律风险防控",
      cases: "500+",
    },
    {
      icon: Shield,
      title: "刑事辩护",
      description: "刑事案件辩护、取保候审、减刑假释申请",
      cases: "200+",
    },
    {
      icon: Home,
      title: "房地产",
      description: "房产买卖、租赁纠纷、拆迁补偿、物业纠纷",
      cases: "300+",
    },
    {
      icon: Briefcase,
      title: "劳动纠纷",
      description: "劳动合同、工伤赔偿、社保争议、劳动仲裁",
      cases: "400+",
    },
    {
      icon: Heart,
      title: "婚姻继承",
      description: "离婚诉讼、财产分割、遗产继承、抚养权争议",
      cases: "250+",
    },
    {
      icon: Car,
      title: "交通事故",
      description: "交通事故赔偿、保险理赔、责任认定争议",
      cases: "180+",
    },
    {
      icon: Gavel,
      title: "医疗事故",
      description: "医疗纠纷、医疗事故鉴定、医疗损害赔偿",
      cases: "120+",
    },
    {
      icon: CreditCard,
      title: "债权债务",
      description: "债务追讨、合同纠纷、担保责任、破产清算",
      cases: "350+",
    },
  ]

  return (
    <div className="h-screen flex items-start justify-center bg-background relative overflow-y-auto pt-16">
      <div className="container mx-auto px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">专业领域</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              我们在多个法律领域拥有深厚的专业知识和丰富的实践经验， 为客户提供全方位的法律服务解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-2 pt-3 px-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <area.icon className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm">{area.title}</CardTitle>
                  <div className="text-xs text-primary font-semibold">成功案例 {area.cases}</div>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <p className="text-muted-foreground text-xs leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
