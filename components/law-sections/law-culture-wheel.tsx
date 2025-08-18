"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Target, Users, Heart } from "lucide-react"

export function LawCultureWheel() {
  const cultureValues = [
    {
      icon: Target,
      title: "专业精神",
      description: "以专业的法律知识和丰富的实践经验，为客户提供高质量的法律服务",
    },
    {
      icon: Heart,
      title: "诚信服务",
      description: "秉承诚信为本的原则，建立与客户之间的信任关系，维护客户合法权益",
    },
    {
      icon: Users,
      title: "团队协作",
      description: "发挥团队优势，集思广益，为客户提供全方位、多层次的法律解决方案",
    },
    {
      icon: Award,
      title: "追求卓越",
      description: "不断学习进步，追求卓越品质，致力于成为客户最信赖的法律服务伙伴",
    },
  ]

  return (
    <section className="h-screen flex items-start justify-center bg-background pt-16 py-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">金沪文化</h2>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-3">
            上海金沪律师事务所秉承"法律在您眼前，金沪在您身边"的服务理念，
            以专业、诚信、高效的服务赢得客户信赖，致力于为社会提供优质的法律服务。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {cultureValues.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 pt-3 px-3">
                <value.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-base">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-3 pb-3">
                <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3">我们的使命</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  为企业和个人提供专业、高效、优质的法律服务，维护客户合法权益， 促进社会公平正义，推动法治社会建设。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">20+</div>
                    <div className="text-xs text-muted-foreground">年执业经验</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">2000+</div>
                    <div className="text-xs text-muted-foreground">成功案例</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">98%</div>
                    <div className="text-xs text-muted-foreground">客户满意度</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
