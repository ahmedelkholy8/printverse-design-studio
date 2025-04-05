
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye, Check, X, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SupplierIncomingOrders() {
  // Sample order data
  const newOrders = [
    { id: "REQ-501", material: "بلاستيك PLA", quantity: 200, unit: "كجم", requester: "فريق الإنتاج", date: "2025-04-04", deadline: "2025-04-10", priority: "عادية" },
    { id: "REQ-502", material: "راتنج بوليمر", quantity: 50, unit: "لتر", requester: "قسم النماذج", date: "2025-04-03", deadline: "2025-04-08", priority: "عالية" },
    { id: "REQ-503", material: "معدن تيتانيوم", quantity: 30, unit: "كجم", requester: "قسم القطع الطبية", date: "2025-04-03", deadline: "2025-04-12", priority: "عاجلة" },
  ];
  
  const processedOrders = [
    { id: "REQ-498", material: "بلاستيك ABS", quantity: 150, unit: "كجم", requester: "فريق الإنتاج", date: "2025-04-01", deadline: "2025-04-06", status: "قيد التوصيل" },
    { id: "REQ-499", material: "نايلون", quantity: 80, unit: "كجم", requester: "قسم الصناعي", date: "2025-04-02", deadline: "2025-04-07", status: "تم التأكيد" },
    { id: "REQ-500", material: "بلاستيك TPU", quantity: 60, unit: "كجم", requester: "فريق النماذج الأولية", date: "2025-04-02", deadline: "2025-04-09", status: "قيد الإعداد" },
  ];
  
  const completedOrders = [
    { id: "REQ-495", material: "بلاستيك PLA", quantity: 150, unit: "كجم", requester: "فريق الإنتاج", date: "2025-03-25", completionDate: "2025-03-28" },
    { id: "REQ-496", material: "راتنج بوليمر", quantity: 40, unit: "لتر", requester: "قسم النماذج", date: "2025-03-25", completionDate: "2025-03-29" },
    { id: "REQ-497", material: "نايلون", quantity: 70, unit: "كجم", requester: "قسم الصناعي", date: "2025-03-26", completionDate: "2025-03-30" },
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">الطلبات الواردة</h2>
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
      
      <Tabs defaultValue="new" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="new" className="gap-2">
            طلبات جديدة
            <Badge variant="secondary" className="h-5 min-w-[20px]">{newOrders.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="processing" className="gap-2">
            قيد المعالجة
            <Badge variant="secondary" className="h-5 min-w-[20px]">{processedOrders.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">مكتملة</TabsTrigger>
        </TabsList>
      
        <TabsContent value="new" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                طلبات تحتاج الموافقة
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
                    <TableHead>تاريخ الطلب</TableHead>
                    <TableHead>التسليم المطلوب</TableHead>
                    <TableHead>الأولوية</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.material}</TableCell>
                      <TableCell>{order.quantity} {order.unit}</TableCell>
                      <TableCell>{order.requester}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.deadline}</TableCell>
                      <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8 text-green-600 hover:bg-green-50">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8 text-red-600 hover:bg-red-50">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="processing" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">طلبات قيد المعالجة</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>المادة</TableHead>
                    <TableHead>الكمية</TableHead>
                    <TableHead>الجهة الطالبة</TableHead>
                    <TableHead>التسليم المطلوب</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.material}</TableCell>
                      <TableCell>{order.quantity} {order.unit}</TableCell>
                      <TableCell>{order.requester}</TableCell>
                      <TableCell>{order.deadline}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">تحديث</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">الطلبات المكتملة</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>المادة</TableHead>
                    <TableHead>الكمية</TableHead>
                    <TableHead>الجهة الطالبة</TableHead>
                    <TableHead>تاريخ الطلب</TableHead>
                    <TableHead>تاريخ الإكمال</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.material}</TableCell>
                      <TableCell>{order.quantity} {order.unit}</TableCell>
                      <TableCell>{order.requester}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.completionDate}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
