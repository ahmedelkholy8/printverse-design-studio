
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { Download, Calendar, TrendingUp } from "lucide-react";

export function AdminReports() {
  // Sales data
  const salesData = [
    { month: "يناير", مبيعات: 4000 },
    { month: "فبراير", مبيعات: 3000 },
    { month: "مارس", مبيعات: 2000 },
    { month: "أبريل", مبيعات: 2780 },
    { month: "مايو", مبيعات: 1890 },
    { month: "يونيو", مبيعات: 2390 },
    { month: "يوليو", مبيعات: 3490 },
    { month: "أغسطس", مبيعات: 3200 },
    { month: "سبتمبر", مبيعات: 2800 },
    { month: "أكتوبر", مبيعات: 4300 },
    { month: "نوفمبر", مبيعات: 4100 },
    { month: "ديسمبر", مبيعات: 5200 },
  ];

  // Materials data
  const materialsData = [
    { name: "بلاستيك PLA", amount: 120 },
    { name: "بلاستيك ABS", amount: 95 },
    { name: "راتنج", amount: 75 },
    { name: "بوليمر", amount: 85 },
    { name: "نايلون", amount: 65 },
  ];

  // Customer satisfaction
  const satisfactionData = [
    { name: "راضي جداً", value: 60 },
    { name: "راضي", value: 25 },
    { name: "محايد", value: 10 },
    { name: "غير راضي", value: 5 },
  ];

  const COLORS = ['#4CAF50', '#8BC34A', '#FFC107', '#FF5722'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">التقارير والإحصائيات</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            تغيير الفترة
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="sales">المبيعات</TabsTrigger>
          <TabsTrigger value="materials">المواد</TabsTrigger>
          <TabsTrigger value="customers">العملاء</TabsTrigger>
          <TabsTrigger value="performance">أداء النظام</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">إجمالي المبيعات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">٥٣,٦٧٠ ريال</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">+١٢٪</span> مقارنة بالشهر الماضي
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">عدد الطلبات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">٢٦٧</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">+٨٪</span> مقارنة بالشهر الماضي
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">متوسط قيمة الطلب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">٧٥٠ ريال</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">+٣٪</span> مقارنة بالشهر الماضي
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>تقرير المبيعات الشهرية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="مبيعات" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>استهلاك المواد</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={materialsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#8884d8" name="الكمية (كجم)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>رضا العملاء</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {satisfactionData.map((entry, index) => (
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
        </TabsContent>

        <TabsContent value="performance" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>أداء النظام</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">البيانات غير متوفرة حالياً</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
