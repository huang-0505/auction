"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, Award, Clock } from "lucide-react"

export function LawAboutWheel() {
  const features = [
    {
      icon: Scale,
      title: "专业权威",
      description: "拥有资深律师团队，专业领域覆盖全面",
    },
    {
      icon: Users,
      title: "团队协作",
      description: "多位律师协同办案，确保案件质量",
    },
    {
      icon: Award,
      title: "成功案例",
      description: "丰富的成功案例，赢得客户信赖",
    },
    {
      icon: Clock,
      title: "高效服务",
      description: "快速响应，及时处理各类法律事务",
    },
  ]

  return (
    <div className="h-screen flex items-start justify-center bg-muted/10 relative pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我们</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              上海金沪律师事务所成立于2010年，是一家专业的综合性律师事务所。
              我们致力于为客户提供高质量、高效率的法律服务，在公司法务、刑事辩护、
              房地产法律事务等领域积累了丰富的经验。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
