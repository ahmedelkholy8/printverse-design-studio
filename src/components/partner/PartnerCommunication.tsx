
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Filter, AlertCircle, Paperclip } from "lucide-react";

export function PartnerCommunication() {
  const messages = [
    { id: 1, sender: "أحمد المشرف", role: "مسؤول", subject: "طلب تحديث لحالة الطلب #ORD-7842", date: "اليوم، 10:30 ص", unread: true },
    { id: 2, sender: "سارة القحطاني", role: "عميل", subject: "استفسار عن موعد الانتهاء من الطلب", date: "اليوم، 09:15 ص", unread: true },
    { id: 3, sender: "فيصل المطيري", role: "مورد", subject: "توفر المواد للطلب #ORD-7849", date: "أمس، 03:45 م", unread: false },
    { id: 4, sender: "محمد العتيبي", role: "زميل", subject: "مشاركة معلومات تقنية", date: "أمس، 11:20 ص", unread: false },
    { id: 5, sender: "خالد البلوي", role: "عميل", subject: "تعديل على التصميم", date: "2025/04/02، 02:10 م", unread: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">التواصل والدعم</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث في الرسائل..." className="pl-8 bg-background" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="inbox" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="inbox" className="gap-2">
            صندوق الوارد
            <Badge variant="secondary" className="h-5 min-w-[20px]">2</Badge>
          </TabsTrigger>
          <TabsTrigger value="sent">الرسائل المرسلة</TabsTrigger>
          <TabsTrigger value="team">فريق العمل</TabsTrigger>
          <TabsTrigger value="support">الدعم الفني</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الرسائل</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {messages.map((message) => (
                  <div key={message.id} className={`p-3 hover:bg-muted/30 cursor-pointer flex items-center gap-3 ${message.unread ? 'bg-muted/10' : ''}`}>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <div className="font-medium flex items-center gap-2">
                          {message.sender}
                          {message.unread && <div className="h-2 w-2 bg-blue-500 rounded-full"></div>}
                        </div>
                        <Badge variant="outline">{message.role}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{message.subject}</p>
                      <p className="text-xs text-muted-foreground">{message.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <TabsContent value="inbox" className="mt-0 lg:col-span-2 h-[600px]">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="mb-1">طلب تحديث لحالة الطلب #ORD-7842</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>من: أحمد المشرف</span>
                      <span>•</span>
                      <span>اليوم، 10:30 ص</span>
                    </div>
                  </div>
                  <Button>رد</Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  <p>السلام عليكم،</p>
                  <p>أرجو تحديث حالة الطلب رقم ORD-7842 في أقرب وقت ممكن، حيث أن العميل يستفسر عن حالة الطلب وموعد التسليم المتوقع.</p>
                  <p>الرجاء تحديث مراحل الإنتاج ورفع صور للتقدم المحرز في الطباعة ثلاثية الأبعاد.</p>
                  <p>شكراً لتعاونكم،<br />أحمد</p>
                </div>
              </CardContent>
              <div className="p-4 border-t mt-auto">
                <div className="flex gap-2 items-end">
                  <Textarea placeholder="اكتب ردك هنا..." className="min-h-24" />
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button className="h-8 w-8 p-0">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="sent" className="mt-0 lg:col-span-2">
            <Card className="h-[600px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground">اختر رسالة للعرض</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="mt-0 lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">فريق العمل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>ع ق</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">عبدالله القحطاني</h3>
                      <p className="text-sm text-muted-foreground">مدير الإنتاج</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">متصل</Badge>
                        <Button variant="outline" size="sm">دردشة</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4 flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>م س</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">محمد السهلي</h3>
                      <p className="text-sm text-muted-foreground">فني طباعة ثلاثية الأبعاد</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">متصل</Badge>
                        <Button variant="outline" size="sm">دردشة</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4 flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>ن ح</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">نورة الحربي</h3>
                      <p className="text-sm text-muted-foreground">مصممة نماذج</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">غير متصل</Badge>
                        <Button variant="outline" size="sm">دردشة</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4 flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>ع ش</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">عمر الشمري</h3>
                      <p className="text-sm text-muted-foreground">فني معالجة نهائية</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">مشغول</Badge>
                        <Button variant="outline" size="sm">دردشة</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="mt-0 lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">الدعم الفني</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-700">دعم المعدات والصيانة</p>
                      <p className="text-sm text-blue-600">للحصول على المساعدة في مشاكل المعدات أو طلب الصيانة</p>
                      <Button variant="outline" size="sm" className="mt-2 border-blue-200 text-blue-700 hover:bg-blue-100">التواصل مع الدعم</Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-purple-700">دعم البرمجيات والتصميم</p>
                      <p className="text-sm text-purple-600">للمساعدة في مشاكل برامج التصميم أو تحويل الملفات</p>
                      <Button variant="outline" size="sm" className="mt-2 border-purple-200 text-purple-700 hover:bg-purple-100">التواصل مع الدعم</Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-700">الدعم الإداري</p>
                      <p className="text-sm text-green-600">للاستفسارات المتعلقة بإدارة الطلبات والتقارير</p>
                      <Button variant="outline" size="sm" className="mt-2 border-green-200 text-green-700 hover:bg-green-100">التواصل مع الدعم</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
