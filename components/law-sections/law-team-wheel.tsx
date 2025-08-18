"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LawTeamWheel() {
  const lawyers = [
    {
      name: "史雪珍",
      title: "专职律师",
      description: "华东政法大学知识产权硕士，上海金沪律师事务所主任，国家注册拍卖师，专注法律、拍卖工作20年有余。",
      specialties: ["知识产权", "拍卖法律", "公司法务"],
    },
    {
      name: "陈健",
      title: "专职律师",
      description: "擅长经济类纠纷、刑事案件代理、婚姻继承纠纷、劳动争议、公司法务、交通事故等人身损害赔偿。",
      specialties: ["经济纠纷", "刑事辩护", "婚姻继承", "劳动争议"],
    },
    {
      name: "陈劲",
      title: "专职律师",
      description:
        "华东政法大学毕业，曾在法院从事民事和刑事审判工作，2004年专职律师至今，擅长刑事辩护、婚姻、房产纠纷。",
      specialties: ["刑事辩护", "婚姻家庭", "房产纠纷", "经济诉讼"],
    },
    {
      name: "赵开富",
      title: "专职律师",
      description: "中国政法大学国际经济法硕士，金沪律师事务所合伙人，1994年通过司法考试，执业至今。",
      specialties: ["国际经济法", "公司法务", "合同纠纷"],
    },
    {
      name: "刘德平",
      title: "专职律师",
      description: "华东政法大学毕业，2011年起于上海金沪律师事务所执业，具有十多年法律知识和办案经验。",
      specialties: ["民商事诉讼", "合同纠纷", "公司法务"],
    },
    {
      name: "纪树君",
      title: "专职律师",
      description: "毕业于黑龙江大学法律系，法学理论底蕴深厚，具有强烈职业责任感和服务当事人的使命感。",
      specialties: ["民事诉讼", "合同法", "侵权责任"],
    },
  ]

  return (
    <div className="h-screen flex items-start justify-center bg-muted/10 relative overflow-y-auto pt-16">
      <div className="container mx-auto px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">律师团队</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              我们拥有一支经验丰富、专业过硬的律师团队， 每位律师都在各自的专业领域有着深厚的造诣和丰富的实践经验。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {lawyers.map((lawyer, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-2 pt-3 px-3">
                  <CardTitle className="text-base">{lawyer.name}</CardTitle>
                  <p className="text-primary font-medium text-xs">{lawyer.title}</p>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{lawyer.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {lawyer.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs px-1 py-0">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
