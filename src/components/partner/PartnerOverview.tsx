
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, CheckCircle, Star, Clock, TrendingUp,
  AlertTriangle
} from "lucide-react";
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, 
  BarChart, Bar
} from "recharts";

const orderStatusData = [
  { name: "جديدة", value: 12 },
  { name: "قيد التنفيذ", value: 25 },
  { name: "مكتملة", value: 18 },
];

const COLORS = ['#0088FE', '#FFBB28', '#00C49F'];

const productionTimeData = [
  { name: "الأحد", time: 5.2 },
  { name: "الاثنين", time: 4.8 },
  { name: "الثلاثاء", time: 5.5 },
  { name: "الأربعاء", time: 4.9 },
  { name: "الخميس", time: 6.1 },
  { name: "الجمعة", time: 5.3 },
  { name: "السبت", time: 4.7 },
];

const ratingData = [
  { name: "5 نجوم", count: 45 },
  { name: "4 نجوم", count: 28 },
  { name: "3 نجوم", count: 15 },
  { name: "2 نجوم", count: 8 },
  { name: "1 نجمة", count: 4 },
];

export function PartnerOverview() {
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
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" /> 
              زيادة بنسبة 8% عن الأسبوع الماضي
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الطلبات قيد التنفيذ</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <div className="flex items-center gap-1 mt-1">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <p className="text-xs text-yellow-500">
                3 طلبات متأخرة
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الطلبات المكتملة</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">184</div>
            <p className="text-xs text-muted-foreground">
              هذا الشهر
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">تقييم الأداء</CardTitle>
            <Star className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6/5</div>
            <p className="text-xs text-muted-foreground">
              من 100 تقييم
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>حالة الطلبات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {orderStatusData.map((entry, index) => (
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
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>متوسط وقت الإنتاج (بالساعات)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productionTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="time" 
                    name="متوسط الوقت (ساعات)" 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Rating Chart */}
      <Card>
        <CardHeader>
          <CardTitle>تقييمات العملاء</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={ratingData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="عدد التقييمات" fill="#ffc107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
