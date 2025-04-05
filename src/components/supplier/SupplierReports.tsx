
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { Download, Calendar, TrendingUp, Package, Clock, CheckCircle, AlertCircle } from "lucide-react";

export function SupplierReports() {
  // Materials data
  const monthlyData = [
    { month: "يناير", توريدات: 4000, مواد: 8 },
    { month: "فبراير", توريدات: 3000, مواد: 6 },
    { month: "مارس", توريدات: 2000, مواد: 5 },
    { month: "أبريل", توريدات: 2780, مواد: 7 },
    { month: "مايو", توريدات: 1890, مواد: 4 },
    { month: "يونيو", توريدات: 2390, مواد: 5 },
    { month: "يوليو", توريدات: 3490, مواد: 8 },
    { month: "أغسطس", توريدات: 3200, مواد: 7 },
    { month: "سبتمبر", توريدات: 2800, مواد: 6 },
    { month: "أكتوبر", توريدات: 4300, مواد: 9 },
    { month: "نوفمبر", توريدات: 4100, مواد: 8 },
    { month: "ديسمبر", توريدات: 5200, مواد: 10 },
  ];

  // Materials distribution data
  const materialsData = [
    { name: "بلاستيك PLA", value: 35 },
    { name: "بلاستيك ABS", value: 25 },
    { name: "راتنج", value: 20 },
    { name: "نايلون", value: 15 },
    { name: "معادن", value: 5 },
  ];
  
  // Delivery time data
  const timeData = [
    { material: "بلاستيك PLA", time: 1.2 },
    { material: "بلاستيك ABS", time: 1.5 },
    { material: "راتنج", time: 2.1 },
    { material: "نايلون", time: 1.8 },
    { material: "معادن", time: 3.2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">التقارير</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المواد الموردة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold">2,580 كجم</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">+12%</span> عن الشهر الماضي
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">معدل التسليم في الوقت المحدد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-500" />
              <div>
                <div className="text-2xl font-bold">97%</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">+2%</span> عن الربع السابق
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">تقييم الجودة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-2xl font-bold">4.9/5</div>
                <p className="text-xs text-muted-foreground mt-1">
                  من 48 طلب هذا الشهر
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">متوسط وقت التوريد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">1.2 يوم</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">-8%</span> تحسن في الوقت
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="monthly">التقرير الشهري</TabsTrigger>
          <TabsTrigger value="types">توزيع المواد</TabsTrigger>
          <TabsTrigger value="time">وقت التوريد</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>تقرير التوريدات الشهرية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="توريدات" 
                      name="كمية التوريد (كجم)" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="مواد" 
                      name="عدد أنواع المواد" 
                      stroke="#82ca9d" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>توزيع أنواع المواد الموردة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={materialsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {materialsData.map((entry, index) => (
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

        <TabsContent value="time" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>متوسط وقت التوريد حسب نوع المادة (بالأيام)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="material" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="time" name="متوسط الوقت (أيام)" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
