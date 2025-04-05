
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Filter, Package, ArrowRight, Truck, CheckCircle, Calendar, Upload, Image, AlertCircle } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SupplierOrderStatus() {
  // Sample order data
  const activeOrders = [
    { 
      id: "REQ-498", 
      material: "بلاستيك ABS", 
      quantity: 150, 
      unit: "كجم", 
      requester: "فريق الإنتاج", 
      deadline: "2025-04-06",
      shipmentDate: "2025-04-05",
      status: "قيد التوصيل",
      priority: "عادية"
    },
    { 
      id: "REQ-499", 
      material: "نايلون", 
      quantity: 80, 
      unit: "كجم", 
      requester: "قسم الصناعي", 
      deadline: "2025-04-07",
      shipmentDate: null,
      status: "تم التأكيد",
      priority: "عادية"
    },
    { 
      id: "REQ-500", 
      material: "بلاستيك TPU", 
      quantity: 60, 
      unit: "كجم", 
      requester: "فريق النماذج الأولية", 
      deadline: "2025-04-09",
      shipmentDate: null,
      status: "قيد الإعداد",
      priority: "عالية"
    },
    { 
      id: "REQ-503", 
      material: "معدن تيتانيوم", 
      quantity: 30, 
      unit: "كجم", 
      requester: "قسم القطع الطبية", 
      deadline: "2025-04-12",
      shipmentDate: null,
      status: "تم التأكيد",
      priority: "عاجلة"
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case "عادية":
        return <Badge className="bg-blue-500">{priority}</Badge>;
      case "عالية":
        return <Badge className="bg-amber-500">{priority}</Badge>;
      case "عاجلة":
        return <Badge className="bg-red-500">{priority}</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "تم التأكيد":
        return <Badge className="bg-blue-500">{status}</Badge>;
      case "قيد الإعداد":
        return <Badge className="bg-purple-500">{status}</Badge>;
      case "قيد التوصيل":
        return <Badge className="bg-amber-500">{status}</Badge>;
      case "تم التسليم":
        return <Badge className="bg-green-500">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getActionButton = (order: any) => {
    switch(order.status) {
      case "تم التأكيد":
        return (
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowRight className="h-3 w-3" />
            بدء التجهيز
          </Button>
        );
      case "قيد الإعداد":
        return (
          <Button variant="outline" size="sm" className="gap-2">
            <Truck className="h-3 w-3" />
            جاهز للشحن
          </Button>
        );
      case "قيد التوصيل":
        return (
          <Button variant="outline" size="sm" className="gap-2">
            <CheckCircle className="h-3 w-3" />
            تأكيد التسليم
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">تحديث حالة الطلب</h2>
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
            <Package className="h-5 w-5" />
            الطلبات النشطة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>رقم الطلب</TableHead>
                <TableHead>المادة</TableHead>
                <TableHead>الكمية</TableHead>
                <TableHead>الجهة الطالبة</TableHead>
                <TableHead>موعد التسليم</TableHead>
                <TableHead>الأولوية</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.material}</TableCell>
                  <TableCell>{order.quantity} {order.unit}</TableCell>
                  <TableCell>{order.requester}</TableCell>
                  <TableCell>{order.deadline}</TableCell>
                  <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">تحديث الحالة</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>تحديث حالة الطلب - {order.id}</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="space-y-4 mb-6">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="font-medium">{order.material}</h3>
                                  <p className="text-sm text-muted-foreground">الكمية: {order.quantity} {order.unit}</p>
                                </div>
                                <div className="text-right">
                                  <h3 className="font-medium">موعد التسليم</h3>
                                  <p className="text-sm text-muted-foreground">{order.deadline}</p>
                                </div>
                              </div>
                              
                              <div className="space-y-2 border rounded-md p-3">
                                <label className="text-sm font-medium">الحالة الحالية</label>
                                <div className="flex items-center gap-3">
                                  {getStatusBadge(order.status)}
                                  {order.shipmentDate && (
                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      تاريخ الشحن: {order.shipmentDate}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <label className="text-sm font-medium">تحديث الحالة إلى</label>
                                <div className="flex gap-2 flex-wrap">
                                  {order.status === "تم التأكيد" && (
                                    <Button variant="outline" className="flex-1">قيد الإعداد</Button>
                                  )}
                                  {(order.status === "تم التأكيد" || order.status === "قيد الإعداد") && (
                                    <Button variant="outline" className="flex-1">قيد التوصيل</Button>
                                  )}
                                  <Button variant="outline" className="flex-1 bg-green-50 text-green-600 border-green-200">
                                    تم التسليم
                                  </Button>
                                </div>
                              </div>
                              
                              {(order.status === "قيد الإعداد" || order.status === "تم التأكيد") && (
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">تاريخ الشحن المتوقع</label>
                                  <Input type="date" />
                                </div>
                              )}
                              
                              <div className="space-y-2">
                                <label className="text-sm font-medium">ملاحظات</label>
                                <Textarea placeholder="أضف ملاحظات حول تحديث الحالة..." />
                              </div>
                              
                              <div className="space-y-2">
                                <label className="text-sm font-medium">إرفاق مستندات (اختياري)</label>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" className="gap-2">
                                    <Upload className="h-3 w-3" />
                                    صورة الطلب
                                  </Button>
                                  <Button variant="outline" size="sm" className="gap-2">
                                    <Upload className="h-3 w-3" />
                                    إيصال الشحن
                                  </Button>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex justify-end gap-2">
                              <Button variant="outline">إلغاء</Button>
                              <Button>تحديث الحالة</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      {getActionButton(order)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2 text-amber-700">
              <AlertCircle className="h-4 w-4" />
              طلبات قريبة من الموعد النهائي
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span className="font-medium">REQ-498 - بلاستيك ABS</span>
                </div>
                <span className="text-sm text-amber-700">
                  موعد التسليم: غداً
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span className="font-medium">REQ-499 - نايلون</span>
                </div>
                <span className="text-sm text-amber-700">
                  موعد التسليم: بعد 2 يوم
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إحصائيات التسليم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 rounded-md text-center">
                <div className="text-2xl font-bold text-green-600">97%</div>
                <p className="text-sm text-green-700">تسليم في الموعد</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-md text-center">
                <div className="text-2xl font-bold text-blue-600">48</div>
                <p className="text-sm text-blue-700">طلب هذا الشهر</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-md text-center">
                <div className="text-2xl font-bold text-purple-600">1.2</div>
                <p className="text-sm text-purple-700">متوسط أيام التجهيز</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
