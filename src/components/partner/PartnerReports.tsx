
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { Download, Calendar, TrendingUp, Package, Clock, CheckCircle, AlertCircle } from "lucide-react";

export function PartnerReports() {
  // Production data
  const monthlyData = [
    { month: "يناير", orders: 15, completion: 92 },
    { month: "فبراير", orders: 18, completion: 94 },
    { month: "مارس", orders: 20, completion: 90 },
    { month: "أبريل", orders: 23, completion: 95 },
    { month: "مايو", orders: 19, completion: 93 },
    { month: "يونيو", orders: 25, completion: 91 },
    { month: "يوليو", orders: 28, completion: 89 },
    { month: "أغسطس", orders: 24, completion: 88 },
    { month: "سبتمبر", orders: 22, completion: 91 },
    { month: "أكتوبر", orders: 26, completion: 93 },
    { month: "نوفمبر", orders: 30, completion: 92 },
    { month: "ديسمبر", orders: 32, completion: 94 },
  ];

  // Types of orders data
  const typesData = [
    { name: "قطع ميكانيكية", value: 35 },
    { name: "نماذج معمارية", value: 25 },
    { name: "قطع فنية", value: 20 },
    { name: "نماذج أولية", value: 15 },
    { name: "قطع طبية", value: 5 },
  ];
  
  // Production time data
  const timeData = [
    { type: "قطع ميكانيكية", time: 6.5 },
    { type: "نماذج معمارية", time: 8.2 },
    { type: "قطع فنية", time: 4.8 },
    { type: "نماذج أولية", time: 7.1 },
    { type: "قطع طبية", time: 5.3 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">تقارير الأداء</h2>
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
            <CardTitle className="text-sm font-medium">إجمالي الطلبات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold">267</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">+8%</span> عن العام الماضي
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">معدل الإنجاز في الوقت المحدد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-500" />
              <div>
                <div className="text-2xl font-bold">93%</div>
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
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-muted-foreground mt-1">
                  بناءً على 150 تقييم
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">متوسط وقت الإنتاج</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">5.2 ساعة</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">-12%</span> تحسن في الوقت
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="monthly">تقرير شهري</TabsTrigger>
          <TabsTrigger value="types">أنواع الطلبات</TabsTrigger>
          <TabsTrigger value="time">وقت الإنتاج</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>تقرير الطلبات الشهرية ومعدل الإنجاز</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="orders" 
                      name="عدد الطلبات" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="completion" 
                      name="معدل الإنجاز %" 
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
              <CardTitle>توزيع أنواع الطلبات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={typesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {typesData.map((entry, index) => (
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
              <CardTitle>متوسط وقت الإنتاج حسب نوع المنتج (بالساعات)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="time" name="متوسط الوقت (ساعات)" fill="#8884d8" />
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
