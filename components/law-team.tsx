"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LawTeam() {
  const lawyers = [
    {
      name: "史雪珍",
      title: "专职律师",
      description:
        "华东政法大学知识产权硕士，中国民主建国会会员，担任律师，国家注册拍卖师，国家注册清算师，上海金沪律师事务所主任，沪上知名法律、拍卖专家，专注从事法律、拍卖工作20年有余。",
      specialties: ["知识产权", "拍卖法律", "公司法务"],
    },
    {
      name: "陈健",
      title: "专职律师",
      description:
        "擅长处理：经济类纠纷、刑事案件代理、婚姻继承纠纷、劳动争议、公司法（股权转让、内外资公司设立等）业务，交通事故、医疗事故等人身损害赔偿、非讼调查等。",
      specialties: ["经济纠纷", "刑事辩护", "婚姻继承", "劳动争议"],
    },
    {
      name: "陈劲",
      title: "专职律师",
      description:
        "上海华东政法大学毕业，曾经在法院从事过民事和刑事审判工作，2004年专职律师至今。本人擅长刑事辩护、婚姻、房产、经济纠纷诉讼。",
      specialties: ["刑事辩护", "婚姻家庭", "房产纠纷", "经济诉讼"],
    },
    {
      name: "赵开富",
      title: "专职律师",
      description:
        "中国政法大学国际经济法硕士研究生，金沪律师事务所合伙人，沪上资深律师，1994年通过司法考试取得律师资格，并执业至今。",
      specialties: ["国际经济法", "公司法务", "合同纠纷"],
    },
    {
      name: "刘德平",
      title: "专职律师",
      description:
        "华东政法大学毕业，通过全国司法考试取得法律职业资格资格，2011年起于上海金沪律师事务所执业，至今具有十多年的法律知识和多年的办案经验。",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">律师团队</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们拥有一支专业、敬业的律师团队，为客户提供优质的法律服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                <p className="text-muted-foreground">{lawyer.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{lawyer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {lawyer.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-800">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
