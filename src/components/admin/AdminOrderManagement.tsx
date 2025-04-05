
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Search, Filter, Eye, AlertTriangle } from "lucide-react";

export function AdminOrderManagement() {
  // Sample order data
  const orders = [
    { id: "ORD-7851", customer: "أحمد محمد", date: "2025-03-28", status: "قيد التنفيذ", supplier: "شركة المواد التقنية", price: 750 },
    { id: "ORD-7852", customer: "سارة علي", date: "2025-03-27", status: "بانتظار الدفع", supplier: "مصنع البلاستيك", price: 450 },
    { id: "ORD-7853", customer: "خالد عبدالله", date: "2025-03-25", status: "مكتمل", supplier: "شركة المواد الصناعية", price: 1200 },
    { id: "ORD-7854", customer: "فاطمة أحمد", date: "2025-03-24", status: "ملغي", supplier: "شركة المعادن المتطورة", price: 300 },
    { id: "ORD-7855", customer: "عمر محمود", date: "2025-03-23", status: "قيد التنفيذ", supplier: "شركة المواد التقنية", price: 850 },
    { id: "ORD-7856", customer: "نورة محمد", date: "2025-03-22", status: "مكتمل", supplier: "مصنع البلاستيك", price: 950 },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "قيد التنفيذ":
        return <Badge className="bg-amber-500">قيد التنفيذ</Badge>;
      case "بانتظار الدفع":
        return <Badge className="bg-blue-500">بانتظار الدفع</Badge>;
      case "مكتمل":
        return <Badge className="bg-green-500">مكتمل</Badge>;
      case "ملغي":
        return <Badge className="bg-red-500">ملغي</Badge>;
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
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Package className="h-5 w-5" />
            جميع الطلبات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>رقم الطلب</TableHead>
                <TableHead>العميل</TableHead>
                <TableHead>التاريخ</TableHead>
                <TableHead>المورد</TableHead>
                <TableHead>المبلغ</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.supplier}</TableCell>
                  <TableCell>{order.price} ريال</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2 text-amber-700">
            <AlertTriangle className="h-4 w-4" />
            طلبات تحتاج اهتمام
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-700 text-sm">هناك 3 طلبات متأخرة عن الموعد المحدد للتسليم. يرجى مراجعتها في أقرب وقت.</p>
        </CardContent>
      </Card>
    </div>
  );
}
