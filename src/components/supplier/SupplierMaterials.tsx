
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, Filter, Package, PlusCircle, Edit, Trash,
  AlertTriangle, ArrowUpDown
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SupplierMaterials() {
  // Sample materials data
  const materials = [
    { id: 1, name: "بلاستيك PLA", category: "بلاستيك", stock: 250, minStock: 50, unit: "كجم", lastUpdate: "2025-04-01", status: "متوفر" },
    { id: 2, name: "بلاستيك ABS", category: "بلاستيك", stock: 180, minStock: 50, unit: "كجم", lastUpdate: "2025-03-28", status: "متوفر" },
    { id: 3, name: "راتنج بوليمر", category: "راتنج", stock: 30, minStock: 40, unit: "لتر", lastUpdate: "2025-03-30", status: "منخفض" },
    { id: 4, name: "نايلون", category: "نايلون", stock: 100, minStock: 60, unit: "كجم", lastUpdate: "2025-03-25", status: "متوفر" },
    { id: 5, name: "معدن تيتانيوم", category: "معدن", stock: 15, minStock: 20, unit: "كجم", lastUpdate: "2025-03-27", status: "منخفض" },
    { id: 6, name: "بلاستيك TPU", category: "بلاستيك", stock: 0, minStock: 30, unit: "كجم", lastUpdate: "2025-03-20", status: "غير متوفر" },
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
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الكمية الحالية</label>
                    <Input type="number" placeholder="أدخل الكمية" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">وحدة القياس</label>
                    <Input placeholder="مثال: كجم" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الحد الأدنى للمخزون</label>
                    <Input type="number" placeholder="أدخل الحد الأدنى" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">سعر الوحدة</label>
                    <Input type="number" placeholder="أدخل السعر" />
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
                <TableHead>المخزون الحالي</TableHead>
                <TableHead>آخر تحديث</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.name}</TableCell>
                  <TableCell>{material.category}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{material.stock} {material.unit}</span>
                        <span className="text-xs text-muted-foreground">
                          الحد الأدنى: {material.minStock} {material.unit}
                        </span>
                      </div>
                      <Progress 
                        value={material.stock === 0 ? 0 : (material.stock / material.minStock) * 50} 
                        className={`h-2 ${material.stock < material.minStock ? (material.stock === 0 ? 'bg-red-200' : 'bg-amber-200') : 'bg-green-200'}`}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{material.lastUpdate}</TableCell>
                  <TableCell>{getStatusBadge(material.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowUpDown className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>تعديل المخزون - {material.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">المخزون الحالي</label>
                              <div className="flex items-center gap-2">
                                <Input value={material.stock.toString()} readOnly className="bg-muted" />
                                <span>{material.unit}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">إضافة إلى المخزون</label>
                              <div className="flex items-center gap-2">
                                <Input type="number" placeholder="أدخل الكمية المضافة" />
                                <span>{material.unit}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">سحب من المخزون</label>
                              <div className="flex items-center gap-2">
                                <Input type="number" placeholder="أدخل الكمية المسحوبة" />
                                <span>{material.unit}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">ملاحظات</label>
                              <Input placeholder="أدخل سبب التعديل" />
                            </div>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">إلغاء</Button>
                            <Button>تحديث المخزون</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
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
            تنبيهات المخزون
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-amber-700 text-sm font-medium">هناك 3 مواد بحاجة إلى إعادة تعبئة المخزون:</p>
            {materials.filter(m => m.status === "منخفض" || m.status === "غير متوفر").map((material) => (
              <div key={`alert-${material.id}`} className="flex items-center justify-between border-b border-amber-200 pb-2 last:border-0 last:pb-0">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${material.status === "غير متوفر" ? "bg-red-500" : "bg-amber-500"}`}></div>
                  <span className="font-medium">{material.name}</span>
                  <span className="text-sm text-amber-700">
                    ({material.stock} / {material.minStock} {material.unit})
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 border-amber-500 text-amber-700 hover:bg-amber-100">
                      طلب المادة
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>طلب مادة - {material.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">الكمية المطلوبة</label>
                        <Input type="number" defaultValue={(material.minStock * 2).toString()} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">المورد</label>
                        <Input defaultValue="المورد الافتراضي" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">الأولوية</label>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">عادية</Button>
                          <Button variant="outline" className="flex-1 bg-amber-50 border-amber-500 text-amber-700">عالية</Button>
                          <Button variant="outline" className="flex-1 bg-red-50 border-red-500 text-red-700">طارئة</Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">ملاحظات</label>
                        <Input placeholder="أدخل أي ملاحظات إضافية" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">إلغاء</Button>
                      <Button>تأكيد الطلب</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
