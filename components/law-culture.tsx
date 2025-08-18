"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Trophy, Handshake, Shield } from "lucide-react"

export function LawCulture() {
  const values = [
    {
      icon: Heart,
      title: "诚信",
      description:
        "诚信是为人之本，是立业之基，是金沪人共同的品质。金沪在团队建设、人才选聘、内部治理、法律服务提供与评价中均以诚信作为考量的核心指标。",
    },
    {
      icon: Trophy,
      title: "卓越",
      description:
        "卓越是金沪法律服务的终极标准，是金沪团队的永恒追求。金沪律师一直以其专业的知识技能与勤勉的工作态度，致力于为客户提供卓越的法律服务。",
    },
    {
      icon: Handshake,
      title: "合作",
      description:
        "合作是金沪信导的核心价值理念，是金沪人实现共同愿景的基石。金沪强调个人与团队、客户和合作伙伴之间的协力合作，提倡在宽容谦逊和潜力合作的基础上，创建更加牢固的关系。",
    },
    {
      icon: Shield,
      title: "责任",
      description:
        "责任是发展的源动力，是金沪对客户信赖、社会认可的最佳回馈。金沪本着对客户负责的态度统一服务标准、严格服务监管，为金沪客户提供品质卓越的法律服务。",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">金沪文化</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们秉承诚信、卓越、合作、责任的核心价值观，为客户提供专业优质的法律服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <value.icon className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle className="text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
