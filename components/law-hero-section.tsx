"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, Award, Clock } from "lucide-react"

export function LawHeroSection() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            上海金沪律师事务所
            <span className="block text-muted-foreground text-2xl md:text-3xl mt-2">Shanghai Jinhu Law Firm</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            上海金沪律师事务所是一家综合性合伙制律师事务所，主要以公司实务、房地产、刑事辩护、代理执行、拆迁补偿、劳动纠纷、医疗事故、债权债务、交通事故、婚姻继承等诉讼业务。
          </p>

          <p className="text-xl font-medium text-foreground mb-8">秉承：法律在您眼前，金沪在您身边！</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8" onClick={scrollToConsultation}>
              免费咨询
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent" onClick={scrollToAbout}>
              了解更多
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-muted-foreground">专业律师</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Scale className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm text-muted-foreground">成功案例</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">15年</div>
                <div className="text-sm text-muted-foreground">执业经验</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">在线咨询</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
