
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, Filter, Package, PlusCircle, Edit, Trash, 
  AlertTriangle, Check, X
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

export function AdminMaterials() {
  // Sample materials data
  const materials = [
    { id: 1, name: "بلاستيك PLA", category: "بلاستيك", supplier: "شركة المواد التقنية", stock: 250, unit: "كجم", status: "متوفر" },
    { id: 2, name: "بلاستيك ABS", category: "بلاستيك", supplier: "مصنع البلاستيك", stock: 180, unit: "كجم", status: "متوفر" },
    { id: 3, name: "راتنج بوليمر", category: "راتنج", supplier: "شركة المواد الصناعية", stock: 30, unit: "لتر", status: "منخفض" },
    { id: 4, name: "نايلون", category: "نايلون", supplier: "مصنع المواد المتقدمة", stock: 100, unit: "كجم", status: "متوفر" },
    { id: 5, name: "معدن تيتانيوم", category: "معدن", supplier: "شركة المعادن المتطورة", stock: 15, unit: "كجم", status: "منخفض" },
    { id: 6, name: "بلاستيك TPU", category: "بلاستيك", supplier: "شركة المواد التقنية", stock: 0, unit: "كجم", status: "غير متوفر" },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "متوفر":
        return <Badge className="bg-green-500">متوفر</Badge>;
      case "منخفض":
        return <Badge className="bg-amber-500">منخفض</Badge>;
      case "غير متوفر":
        return <Badge className="bg-red-500">غير متوفر</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">إدارة المواد</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث عن مادة..." className="pl-8 bg-background" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                إضافة مادة
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>إضافة مادة جديدة</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">اسم المادة</label>
                  <Input placeholder="أدخل اسم المادة" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">الفئة</label>
                  <Input placeholder="أدخل فئة المادة" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">المورد</label>
                  <Input placeholder="أدخل اسم المورد" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الكمية</label>
                    <Input type="number" placeholder="أدخل الكمية" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">وحدة القياس</label>
                    <Input placeholder="مثال: كجم" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">إلغاء</Button>
                <Button>إضافة</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Package className="h-5 w-5" />
            المواد المتوفرة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم المادة</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>المورد</TableHead>
                <TableHead>المخزون</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.name}</TableCell>
                  <TableCell>{material.category}</TableCell>
                  <TableCell>{material.supplier}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{material.stock} {material.unit}</span>
                        <span className="text-xs text-muted-foreground">
                          {material.status === "متوفر" ? "مستوى جيد" : material.status === "منخفض" ? "يحتاج للطلب" : "نفد المخزون"}
                        </span>
                      </div>
                      <Progress 
                        value={material.stock === 0 ? 0 : material.stock < 50 ? 25 : material.stock < 100 ? 50 : 100} 
                        className={`h-2 ${material.stock === 0 ? 'bg-red-200' : material.stock < 50 ? 'bg-amber-200' : 'bg-green-200'}`}
                      />
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(material.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
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
            مواد بحاجة للطلب
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {materials.filter(m => m.status === "منخفض" || m.status === "غير متوفر").map((material) => (
              <div key={`alert-${material.id}`} className="flex items-center justify-between border-b border-amber-200 pb-2 last:border-0 last:pb-0">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${material.status === "غير متوفر" ? "bg-red-500" : "bg-amber-500"}`}></div>
                  <span className="font-medium">{material.name}</span>
                  <span className="text-sm text-amber-700">({material.stock} {material.unit})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" className="h-8 gap-1 border-amber-500 text-amber-700 hover:bg-amber-100">
                    <Check className="h-3 w-3" />
                    طلب
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-amber-700">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
