
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Search, Filter, Eye, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PartnerOrders() {
  // Sample order data
  const newOrders = [
    { id: "ORD-7851", customer: "أحمد محمد", date: "2025-04-04", deadline: "2025-04-10", productType: "قطعة ميكانيكية", price: 750 },
    { id: "ORD-7855", customer: "عمر محمود", date: "2025-04-03", deadline: "2025-04-12", productType: "نموذج معماري", price: 850 },
    { id: "ORD-7860", customer: "ليلى عبدالله", date: "2025-04-03", deadline: "2025-04-15", productType: "قطعة فنية", price: 550 },
  ];
  
  const activeOrders = [
    { id: "ORD-7842", customer: "منى الشمري", date: "2025-03-30", deadline: "2025-04-08", productType: "قطعة طبية", price: 950, status: "في مرحلة الطباعة" },
    { id: "ORD-7848", customer: "فهد العتيبي", date: "2025-04-01", deadline: "2025-04-09", productType: "قطعة صناعية", price: 1200, status: "في مرحلة المعالجة" },
    { id: "ORD-7849", customer: "سارة الحربي", date: "2025-04-02", deadline: "2025-04-11", productType: "نموذج أولي", price: 650, status: "في مرحلة الإعداد" },
  ];
  
  const completedOrders = [
    { id: "ORD-7830", customer: "خالد المطيري", date: "2025-03-25", completionDate: "2025-03-28", productType: "قطعة ميكانيكية", price: 450 },
    { id: "ORD-7831", customer: "عبير القحطاني", date: "2025-03-25", completionDate: "2025-03-29", productType: "قطعة فنية", price: 350 },
    { id: "ORD-7835", customer: "عبدالله الدوسري", date: "2025-03-26", completionDate: "2025-03-30", productType: "نموذج معماري", price: 780 },
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
        <h2 className="text-2xl font-bold">إدارة الطلبات</h2>
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
          <TabsTrigger value="active" className="gap-2">
            قيد التنفيذ
            <Badge variant="secondary" className="h-5 min-w-[20px]">{activeOrders.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">مكتملة</TabsTrigger>
        </TabsList>
      
        <TabsContent value="new" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Package className="h-5 w-5" />
                الطلبات الجديدة - بانتظار البدء
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>العميل</TableHead>
                    <TableHead>تاريخ الطلب</TableHead>
                    <TableHead>موعد التسليم</TableHead>
                    <TableHead>نوع المنتج</TableHead>
                    <TableHead>السعر</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.deadline}</TableCell>
                      <TableCell>{order.productType}</TableCell>
                      <TableCell>{order.price} ريال</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ArrowRight className="h-3 w-3" />
                            بدء العمل
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
        
        <TabsContent value="active" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Package className="h-5 w-5" />
                طلبات قيد التنفيذ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>العميل</TableHead>
                    <TableHead>موعد التسليم</TableHead>
                    <TableHead>نوع المنتج</TableHead>
                    <TableHead>السعر</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.deadline}</TableCell>
                      <TableCell>{order.productType}</TableCell>
                      <TableCell>{order.price} ريال</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            تحديث
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
        
        <TabsContent value="completed" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Package className="h-5 w-5" />
                الطلبات المكتملة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>العميل</TableHead>
                    <TableHead>تاريخ الطلب</TableHead>
                    <TableHead>تاريخ الإكمال</TableHead>
                    <TableHead>نوع المنتج</TableHead>
                    <TableHead>السعر</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.completionDate}</TableCell>
                      <TableCell>{order.productType}</TableCell>
                      <TableCell>{order.price} ريال</TableCell>
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
