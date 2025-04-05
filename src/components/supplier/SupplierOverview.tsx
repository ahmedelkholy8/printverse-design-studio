
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, Archive, CheckCircle, AlertTriangle, 
  TrendingUp, Clock 
} from "lucide-react";
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell 
} from "recharts";
import { Progress } from "@/components/ui/progress";

const materialStats = [
  { name: "بلاستيك PLA", available: 85, status: "high" },
  { name: "ABS", available: 45, status: "medium" },
  { name: "PETG", available: 30, status: "medium" },
  { name: "Resin", available: 15, status: "low" },
  { name: "TPU", available: 60, status: "medium" },
];

const orderData = [
  { name: "اليوم", orders: 12 },
  { name: "أمس", orders: 15 },
  { name: "قبل يومين", orders: 8 },
  { name: "قبل 3 أيام", orders: 10 },
  { name: "قبل 4 أيام", orders: 7 },
  { name: "قبل 5 أيام", orders: 9 },
  { name: "قبل 6 أيام", orders: 11 },
];

const performanceData = [
  { name: "في الوقت المحدد", value: 75 },
  { name: "متأخر", value: 25 },
];

const COLORS = ['#00C49F', '#FF8042'];

export function SupplierOverview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">نظرة عامة</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الطلبات الجديدة</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" /> 
              زيادة بنسبة 8% عن الأسبوع الماضي
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">المواد المتاحة</CardTitle>
            <Archive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              من أصل 15 مادة مختلفة
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الطلبات المكتملة</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">
              هذا الشهر
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">معدل التسليم في الوقت</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">
              تحسن بنسبة 5% عن الشهر الماضي
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Material Inventory Status */}
      <Card>
        <CardHeader>
          <CardTitle>حالة المخزون</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {materialStats.map((material) => (
              <div key={material.name}>
                <div className="flex justify-between mb-1">
                  <span>{material.name}</span>
                  <span className="font-medium">{material.available}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress 
                    value={material.available} 
                    className={
                      material.status === "high" 
                        ? "text-green-500" 
                        : material.status === "medium"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }
                  />
                  {material.status === "low" && (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>حركة الطلبات (آخر 7 أيام)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={orderData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" name="عدد الطلبات" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>أداء المورد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
