
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Filter, Paperclip, AlertCircle } from "lucide-react";

export function SupplierCommunication() {
  const messages = [
    { id: 1, sender: "أحمد المشرف", role: "مسؤول", subject: "طلب مواد جديدة", date: "اليوم، 10:30 ص", unread: true },
    { id: 2, sender: "فيصل العتيبي", role: "شريك", subject: "استفسار عن موعد توريد المواد", date: "اليوم، 09:15 ص", unread: true },
    { id: 3, sender: "خالد القحطاني", role: "عميل", subject: "مشكلة في جودة المواد", date: "أمس، 03:45 م", unread: false },
    { id: 4, sender: "نورة المطيري", role: "زميل", subject: "تنسيق لطلبية جديدة", date: "أمس، 11:20 ص", unread: false },
    { id: 5, sender: "محمد الدوسري", role: "مسؤول", subject: "تحديث أسعار المواد", date: "2025/04/02، 02:10 م", unread: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">مركز التواصل</h2>
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
          <TabsTrigger value="admin">الإدارة</TabsTrigger>
          <TabsTrigger value="announcements">إعلانات النظام</TabsTrigger>
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
                    <CardTitle className="mb-1">طلب مواد جديدة</CardTitle>
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
                  <p>نرجو منكم توفير المواد التالية للشهر القادم:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>بلاستيك PLA - 300 كجم</li>
                    <li>راتنج بوليمر - 80 لتر</li>
                    <li>نايلون - 150 كجم</li>
                  </ul>
                  <p>كما نود الاستفسار عن توفر مادة معدن التيتانيوم، حيث نحتاج كمية إضافية للمشاريع القادمة.</p>
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

          <TabsContent value="admin" className="mt-0 lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">التواصل مع الإدارة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">عنوان الرسالة</label>
                    <Input placeholder="أدخل عنوان الرسالة..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">نوع الرسالة</label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">استفسار</Button>
                      <Button variant="outline" className="flex-1 bg-blue-50 text-blue-600 border-blue-200">
                        طلب
                      </Button>
                      <Button variant="outline" className="flex-1">مشكلة</Button>
                      <Button variant="outline" className="flex-1">اقتراح</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الرسالة</label>
                    <Textarea placeholder="اكتب رسالتك هنا..." className="min-h-[200px]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">المرفقات (اختياري)</label>
                    <Button variant="outline" className="gap-2 w-full">
                      <Paperclip className="h-4 w-4" />
                      إضافة مرفق
                    </Button>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button>إرسال إلى الإدارة</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="mt-0 lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">إعلانات النظام</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium text-blue-700">تحديث قائمة الأسعار</p>
                        <span className="text-xs text-blue-500">منذ يومين</span>
                      </div>
                      <p className="text-sm text-blue-600 mt-1">تم تحديث قائمة أسعار المواد للربع الثاني من عام 2025. يرجى مراجعة القائمة الجديدة.</p>
                      <Button variant="outline" size="sm" className="mt-2 border-blue-200 text-blue-700 hover:bg-blue-100">
                        عرض التفاصيل
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium text-green-700">توفر مواد جديدة</p>
                        <span className="text-xs text-green-500">منذ 3 أيام</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">تم إضافة 3 أنواع جديدة من مواد الطباعة ثلاثية الأبعاد. يمكنكم الاطلاع عليها في قائمة المواد.</p>
                      <Button variant="outline" size="sm" className="mt-2 border-green-200 text-green-700 hover:bg-green-100">
                        عرض المواد الجديدة
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium text-purple-700">ورشة عمل: تحسين جودة المواد</p>
                        <span className="text-xs text-purple-500">منذ أسبوع</span>
                      </div>
                      <p className="text-sm text-purple-600 mt-1">ندعوكم للمشاركة في ورشة عمل حول تحسين جودة المواد وطرق التخزين المثلى يوم 15 أبريل 2025.</p>
                      <Button variant="outline" size="sm" className="mt-2 border-purple-200 text-purple-700 hover:bg-purple-100">
                        تسجيل للمشاركة
                      </Button>
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
