
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Search, Filter, Clock, Check, Package, Upload, Download, Image, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PartnerProductionStatus() {
  // Sample production data
  const productionOrders = [
    { 
      id: "ORD-7842", 
      customer: "منى الشمري", 
      productType: "قطعة طبية", 
      deadline: "2025-04-08",
      status: "في مرحلة الطباعة",
      progress: 55,
      stages: [
        { name: "استلام الملفات", completed: true, date: "2025-03-30" },
        { name: "التحقق من الملفات", completed: true, date: "2025-03-31" },
        { name: "إعداد الطابعة", completed: true, date: "2025-04-01" },
        { name: "الطباعة", completed: false, inProgress: true, date: null },
        { name: "المعالجة النهائية", completed: false, date: null },
        { name: "مراقبة الجودة", completed: false, date: null },
        { name: "جاهز للتسليم", completed: false, date: null }
      ]
    },
    { 
      id: "ORD-7848", 
      customer: "فهد العتيبي", 
      productType: "قطعة صناعية", 
      deadline: "2025-04-09",
      status: "في مرحلة المعالجة",
      progress: 75,
      stages: [
        { name: "استلام الملفات", completed: true, date: "2025-04-01" },
        { name: "التحقق من الملفات", completed: true, date: "2025-04-01" },
        { name: "إعداد الطابعة", completed: true, date: "2025-04-02" },
        { name: "الطباعة", completed: true, date: "2025-04-03" },
        { name: "المعالجة النهائية", completed: false, inProgress: true, date: null },
        { name: "مراقبة الجودة", completed: false, date: null },
        { name: "جاهز للتسليم", completed: false, date: null }
      ]
    },
    { 
      id: "ORD-7849", 
      customer: "سارة الحربي", 
      productType: "نموذج أولي", 
      deadline: "2025-04-11",
      status: "في مرحلة الإعداد",
      progress: 25,
      stages: [
        { name: "استلام الملفات", completed: true, date: "2025-04-02" },
        { name: "التحقق من الملفات", completed: true, date: "2025-04-03" },
        { name: "إعداد الطابعة", completed: false, inProgress: true, date: null },
        { name: "الطباعة", completed: false, date: null },
        { name: "المعالجة النهائية", completed: false, date: null },
        { name: "مراقبة الجودة", completed: false, date: null },
        { name: "جاهز للتسليم", completed: false, date: null }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "في مرحلة الإعداد":
        return <Badge className="bg-blue-500">{status}</Badge>;
      case "في مرحلة الطباعة":
        return <Badge className="bg-amber-500">{status}</Badge>;
      case "في مرحلة المعالجة":
        return <Badge className="bg-purple-500">{status}</Badge>;
      case "جاهز للتسليم":
        return <Badge className="bg-green-500">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">تحديث مراحل الإنتاج</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث عن طلب..." className="pl-8 bg-background" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5" />
            الطلبات قيد الإنتاج
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>رقم الطلب</TableHead>
                <TableHead>العميل</TableHead>
                <TableHead>نوع المنتج</TableHead>
                <TableHead>موعد التسليم</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>التقدم</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productionOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.productType}</TableCell>
                  <TableCell>{order.deadline}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="w-[200px]">
                    <div className="space-y-1">
                      <Progress value={order.progress} className="h-2" />
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{order.progress}%</span>
                        <span>{order.stages.filter(s => s.completed).length}/{order.stages.length} مراحل</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="h-8">تحديث</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                          <DialogHeader>
                            <DialogTitle>تحديث مراحل الإنتاج - {order.id}</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="space-y-4 mb-6">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="font-medium">العميل: {order.customer}</h3>
                                  <p className="text-sm text-muted-foreground">المنتج: {order.productType}</p>
                                </div>
                                <div className="text-right">
                                  <h3 className="font-medium">موعد التسليم</h3>
                                  <p className="text-sm text-muted-foreground">{order.deadline}</p>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                {order.stages.map((stage, index) => (
                                  <div key={index} className={`border rounded-md p-3 ${stage.completed ? 'bg-muted/30' : stage.inProgress ? 'bg-amber-50 border-amber-200' : ''}`}>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className={`h-6 w-6 rounded-full flex items-center justify-center ${stage.completed ? 'bg-green-100 text-green-600' : stage.inProgress ? 'bg-amber-100 text-amber-600' : 'bg-muted text-muted-foreground'}`}>
                                          {stage.completed ? <Check className="h-4 w-4" /> : (index + 1)}
                                        </div>
                                        <span className="font-medium">{stage.name}</span>
                                      </div>
                                      {!stage.completed && (
                                        <Button variant="outline" size="sm" className={stage.inProgress ? 'bg-amber-50 hover:bg-amber-100' : ''}>
                                          {stage.inProgress ? 'إكمال المرحلة' : 'بدء المرحلة'}
                                        </Button>
                                      )}
                                    </div>
                                    {stage.completed && (
                                      <div className="mt-2 pl-9 text-sm text-muted-foreground">
                                        تم الإنتهاء: {stage.date}
                                      </div>
                                    )}
                                    {stage.inProgress && (
                                      <div className="mt-3 pl-9">
                                        <Textarea className="h-20 text-sm" placeholder="أضف ملاحظات حول هذه المرحلة..." />
                                        <div className="flex items-center gap-2 mt-2">
                                          <Button variant="outline" size="sm" className="gap-2">
                                            <Upload className="h-3 w-3" />
                                            رفع صورة
                                          </Button>
                                          <Button variant="outline" size="sm" className="gap-2">
                                            <Image className="h-3 w-3" />
                                            التقاط صورة
                                          </Button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-end gap-2">
                              <Button variant="outline">إلغاء</Button>
                              <Button>حفظ التحديثات</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">الملفات والتصاميم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">ORD-7842 - تصميم</p>
                    <p className="text-xs text-muted-foreground">STL file • 25MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">ORD-7848 - تصميم</p>
                    <p className="text-xs text-muted-foreground">STL file • 18MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">ORD-7848 - مخططات</p>
                    <p className="text-xs text-muted-foreground">PDF file • 3MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">حالة الطابعات والمعدات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">الطابعة ثلاثية الأبعاد #01</p>
                    <Badge className="mt-1 bg-green-500">قيد التشغيل</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">ORD-7842</p>
                    <p className="text-sm">الوقت المتبقي: 3 ساعات</p>
                  </div>
                </div>
                <Progress value={58} className="h-2 mt-2" />
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">الطابعة ثلاثية الأبعاد #02</p>
                    <Badge className="mt-1 bg-amber-500">قيد الصيانة</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">غير متاحة</p>
                    <p className="text-sm">متوقع الجاهزية: 2025/04/06</p>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">جهاز المعالجة النهائية</p>
                    <Badge className="mt-1 bg-green-500">متاح</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">متاح للاستخدام</p>
                    <Button variant="outline" size="sm" className="mt-1">حجز</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
