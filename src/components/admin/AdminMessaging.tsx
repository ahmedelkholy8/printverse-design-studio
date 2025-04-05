
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Filter, AlertCircle } from "lucide-react";

export function AdminMessaging() {
  const messages = [
    { id: 1, sender: "محمد أحمد", role: "عميل", subject: "استفسار عن حالة الطلب", date: "اليوم، 10:30 ص", unread: true },
    { id: 2, sender: "فيصل العتيبي", role: "مورد", subject: "نقص في المواد الخام", date: "اليوم، 09:15 ص", unread: true },
    { id: 3, sender: "نورة الغامدي", role: "عميل", subject: "مشكلة في الدفع", date: "أمس، 03:45 م", unread: false },
    { id: 4, sender: "سارة القحطاني", role: "شريك", subject: "تأخر في التسليم", date: "2025/04/02، 11:20 ص", unread: false },
    { id: 5, sender: "خالد البلوي", role: "عميل", subject: "استفسار حول العرض الخاص", date: "2025/04/01، 02:10 م", unread: false },
    { id: 6, sender: "أحمد الشمري", role: "شريك", subject: "مشكلة في الطباعة", date: "2025/03/28، 09:45 ص", unread: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">مركز الرسائل</h2>
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
          <TabsTrigger value="inbox">صندوق الوارد</TabsTrigger>
          <TabsTrigger value="sent">الرسائل المرسلة</TabsTrigger>
          <TabsTrigger value="notifications">إشعارات النظام</TabsTrigger>
          <TabsTrigger value="compose">إنشاء رسالة</TabsTrigger>
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
                    <CardTitle className="mb-1">استفسار عن حالة الطلب</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>من: محمد أحمد</span>
                      <span>•</span>
                      <span>اليوم، 10:30 ص</span>
                    </div>
                  </div>
                  <Button>رد</Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  <p>السلام عليكم ورحمة الله وبركاته،</p>
                  <p>أرجو التكرم بإعلامي عن حالة طلبي رقم ORD-7851، حيث مر أكثر من أسبوع على تاريخ التسليم المتوقع ولم يصلني أي تحديث.</p>
                  <p>هل هناك أي مشكلة في الإنتاج أو التوصيل؟</p>
                  <p>شكراً لكم،<br />محمد أحمد</p>
                </div>
              </CardContent>
              <div className="p-4 border-t mt-auto">
                <div className="flex gap-2 items-end">
                  <Textarea placeholder="اكتب ردك هنا..." className="min-h-24" />
                  <Button className="flex-shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
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

          <TabsContent value="notifications" className="mt-0 lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">إشعارات النظام</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-700">تنبيه: 3 طلبات متأخرة</p>
                      <p className="text-sm text-yellow-600">هناك 3 طلبات تجاوزت موعد التسليم المتوقع. يرجى مراجعتها.</p>
                      <p className="text-xs text-yellow-500 mt-1">اليوم، 08:30 ص</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-700">تحديث النظام</p>
                      <p className="text-sm text-blue-600">تم تحديث النظام إلى الإصدار 2.5.0. اطلع على التغييرات.</p>
                      <p className="text-xs text-blue-500 mt-1">أمس، 10:15 ص</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compose" className="mt-0 lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">إنشاء رسالة جديدة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">إلى:</label>
                    <Input placeholder="اختر مستلم..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium">الموضوع:</label>
                    <Input placeholder="أدخل موضوع الرسالة..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium">الرسالة:</label>
                    <Textarea placeholder="اكتب رسالتك هنا..." className="min-h-[200px]" />
                  </div>
                  <div className="flex justify-end">
                    <Button>إرسال</Button>
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
