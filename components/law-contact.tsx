"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export function LawContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("感谢您的咨询，我们会尽快与您联系！")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">联系我们</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            欢迎随时联系我们，我们将为您提供专业的法律咨询服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <CardTitle className="text-lg">联系电话</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">021-35070008</p>
              <p className="text-muted-foreground">35303599</p>
              <p className="text-muted-foreground">13501819358</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-8 w-8 mx-auto mb-2" />
              <CardTitle className="text-lg">电子邮箱</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">J@jhsen.com</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <CardTitle className="text-lg">办公地址</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                上海市杨浦区长阳路2592号
                <br />
                电力科技园一楼
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <CardTitle className="text-lg">工作时间</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">周一至周五</p>
              <p className="text-muted-foreground">9:00 - 18:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card id="consultation">
            <CardHeader>
              <CardTitle>在线咨询</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="您的姓名"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
                <Input
                  placeholder="联系电话"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="电子邮箱"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <Textarea
                  placeholder="请描述您的法律问题..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full">
                  提交咨询
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">乘车路线</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>1.</strong> 地铁12号线隆昌路站2号出口即到。
              </p>
              <p>
                <strong>2.</strong> 乘3号线至延吉中路站，同站换113或557或28路，10分钟车程到长阳路隆昌路站，下车即到。
              </p>
              <p>
                <strong>3.</strong> 乘4号线到大连路站，同站换22、或934路，10分钟车程到长阳路隆昌路站，下车即到。
              </p>
              <p>
                <strong>4.</strong>{" "}
                自驾车自内环高架周家嘴路口下高架，往隆昌路方向行驶1.5KM，转向长阳路方向，行驶300米即到。
              </p>
              <p>
                <strong>5.</strong>{" "}
                自驾车自周家嘴路出口下高架，延周家嘴路往内江路方向行驶1KM，内江路左转，长阳路右转即到。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
