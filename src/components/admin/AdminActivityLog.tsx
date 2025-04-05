
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Clock, Search, Filter, User, Package, Settings, Download, Eye } from "lucide-react";

export function AdminActivityLog() {
  // Sample activity data
  const activities = [
    { id: 1, user: "أحمد المشرف", role: "مسؤول", action: "تعديل حالة طلب", details: "تم تغيير حالة الطلب #ORD-7851 إلى قيد التنفيذ", timestamp: "05/04/2025 10:30:15", category: "طلبات" },
    { id: 2, user: "محمد علي", role: "مورد", action: "تحديث مخزون", details: "تم تحديث مخزون مادة بلاستيك PLA إلى 250 كجم", timestamp: "05/04/2025 09:45:23", category: "مخزون" },
    { id: 3, user: "سارة القحطاني", role: "مسؤول", action: "إضافة مستخدم", details: "تم إضافة مستخدم جديد: خالد العتيبي (عميل)", timestamp: "04/04/2025 16:20:40", category: "مستخدمين" },
    { id: 4, user: "فيصل الدوسري", role: "شريك", action: "تحديث إنتاج", details: "تم تحديث حالة الإنتاج للطلب #ORD-7842 إلى مكتمل", timestamp: "04/04/2025 14:15:10", category: "إنتاج" },
    { id: 5, user: "عبدالله المطيري", role: "عميل", action: "طلب جديد", details: "تم إنشاء طلب جديد #ORD-7853", timestamp: "04/04/2025 11:05:33", category: "طلبات" },
    { id: 6, user: "أحمد المشرف", role: "مسؤول", action: "تعديل إعدادات", details: "تم تعديل إعدادات الدفع", timestamp: "03/04/2025 15:30:22", category: "إعدادات" },
    { id: 7, user: "نورة القحطاني", role: "مسؤول", action: "إرسال رسالة", details: "تم إرسال إشعار جماعي للعملاء", timestamp: "03/04/2025 10:12:45", category: "رسائل" },
    { id: 8, user: "محمد الشمري", role: "مورد", action: "تأكيد طلب", details: "تم تأكيد طلب المواد #REQ-512", timestamp: "02/04/2025 14:40:18", category: "طلبات" },
  ];

  const getCategoryBadge = (category: string) => {
    switch(category) {
      case "طلبات":
        return <Badge className="bg-blue-500">{category}</Badge>;
      case "مخزون":
        return <Badge className="bg-green-500">{category}</Badge>;
      case "مستخدمين":
        return <Badge className="bg-purple-500">{category}</Badge>;
      case "إنتاج":
        return <Badge className="bg-amber-500">{category}</Badge>;
      case "إعدادات":
        return <Badge className="bg-gray-500">{category}</Badge>;
      case "رسائل":
        return <Badge className="bg-pink-500">{category}</Badge>;
      default:
        return <Badge>{category}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch(role) {
      case "مسؤول":
        return <Badge variant="outline" className="border-primary text-primary">{role}</Badge>;
      case "مورد":
        return <Badge variant="outline" className="border-amber-500 text-amber-500">{role}</Badge>;
      case "شريك":
        return <Badge variant="outline" className="border-green-500 text-green-500">{role}</Badge>;
      case "عميل":
        return <Badge variant="outline" className="border-blue-500 text-blue-500">{role}</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const getActionIcon = (category: string) => {
    switch(category) {
      case "طلبات":
        return <Package className="h-4 w-4 text-blue-500" />;
      case "مخزون":
        return <Package className="h-4 w-4 text-green-500" />;
      case "مستخدمين":
        return <User className="h-4 w-4 text-purple-500" />;
      case "إعدادات":
        return <Settings className="h-4 w-4 text-gray-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">سجل النشاطات</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث في السجل..." className="pl-8 bg-background" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            تصدير السجل
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5" />
            سجل النشاطات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[220px]">التاريخ والوقت</TableHead>
                <TableHead>المستخدم</TableHead>
                <TableHead>الإجراء</TableHead>
                <TableHead className="w-[350px]">التفاصيل</TableHead>
                <TableHead>التصنيف</TableHead>
                <TableHead className="text-right">مشاهدة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="text-muted-foreground text-sm">
                    {activity.timestamp}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{activity.user}</span>
                      <span className="mt-1">{getRoleBadge(activity.role)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    {getActionIcon(activity.category)}
                    <span>{activity.action}</span>
                  </TableCell>
                  <TableCell className="text-sm">{activity.details}</TableCell>
                  <TableCell>{getCategoryBadge(activity.category)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
