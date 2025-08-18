"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Gavel, Shield, Home, FileText, Car, Heart, Users, Scale } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "公司实务",
    description: "企业设立、合规咨询、并购重组、股权投资等全方位公司法律服务",
    features: ["公司设立", "合规咨询", "并购重组", "股权投资"],
  },
  {
    icon: Home,
    title: "房地产",
    description: "房地产开发、建设工程、物业管理、拆迁补偿等专业法律服务",
    features: ["房地产开发", "建设工程", "拆迁补偿", "物业管理"],
  },
  {
    icon: Gavel,
    title: "刑事辩护",
    description: "刑事案件辩护、取保候审、减刑假释等刑事法律服务",
    features: ["刑事辩护", "取保候审", "减刑假释", "刑事咨询"],
  },
  {
    icon: Scale,
    title: "代理执行",
    description: "法院执行程序代理、财产保全、强制执行等执行法律服务",
    features: ["执行代理", "财产保全", "强制执行", "执行异议"],
  },
  {
    icon: Users,
    title: "劳动纠纷",
    description: "劳动合同纠纷、工伤赔偿、劳动仲裁等劳动法律服务",
    features: ["劳动合同", "工伤赔偿", "劳动仲裁", "社保纠纷"],
  },
  {
    icon: Heart,
    title: "医疗事故",
    description: "医疗纠纷处理、医疗损害赔偿、医疗事故鉴定等医疗法律服务",
    features: ["医疗纠纷", "损害赔偿", "事故鉴定", "医疗咨询"],
  },
  {
    icon: FileText,
    title: "债权债务",
    description: "债权债务纠纷、合同违约、追讨欠款等债权法律服务",
    features: ["债权纠纷", "合同违约", "追讨欠款", "债务重组"],
  },
  {
    icon: Car,
    title: "交通事故",
    description: "交通事故处理、人身损害赔偿、保险理赔等交通法律服务",
    features: ["事故处理", "损害赔偿", "保险理赔", "责任认定"],
  },
  {
    icon: Shield,
    title: "婚姻继承",
    description: "婚姻家庭纠纷、离婚诉讼、遗产继承等婚姻家庭法律服务",
    features: ["婚姻纠纷", "离婚诉讼", "遗产继承", "财产分割"],
  },
]

export function LawServices() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">专业法律服务</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们为企业和个人提供全方位的法律服务，涵盖各个专业领域
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="h-8 w-8" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={scrollToConsultation}>
                  了解详情
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
