
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PackagePlus, Package, Clock, Bell, Printer, CreditCard, Settings, HelpCircle } from "lucide-react";

const DashboardPage = () => {
  // Simulating a logged-in user (in a real app, this would come from auth)
  const userRole = "client";
  const userName = "محمد عبدالله";
  
  // Dummy data for demonstration
  const recentOrders = [
    { id: "ORD-12345", date: "2023-04-02", status: "قيد التصنيع", product: "نموذج معماري" },
    { id: "ORD-12344", date: "2023-03-28", status: "تم الشحن", product: "قطع غيار" },
    { id: "ORD-12343", date: "2023-03-15", status: "مكتمل", product: "مجسم تعليمي" },
  ];
  
  // Dashboard stats
  const dashboardStats = [
    { label: "الطلبات النشطة", value: 2, icon: Package, color: "bg-blue-100 text-blue-600" },
    { label: "طلبات مكتملة", value: 7, icon: Clock, color: "bg-green-100 text-green-600" },
    { label: "إشعارات جديدة", value: 3, icon: Bell, color: "bg-amber-100 text-amber-600" },
  ];

  // Quick actions for the dashboard
  const quickActions = [
    { title: "طلب جديد", href: "/new-order", icon: PackagePlus, color: "tech-gradient" },
    { title: "متابعة الطلبات", href: "/orders", icon: Package, color: "bg-secondary" },
    { title: "سجل المدفوعات", href: "/payments", icon: CreditCard, color: "bg-secondary" },
    { title: "الإعدادات", href: "/settings", icon: Settings, color: "bg-secondary" },
    { title: "المواد المتاحة", href: "/materials", icon: Printer, color: "bg-secondary" },
    { title: "الدعم", href: "/support", icon: HelpCircle, color: "bg-secondary" },
  ];

  return (
    <Layout showSidebar={true} userRole={userRole}>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">مرحباً {userName}!</h1>
          <p className="text-muted-foreground">
            أهلا بك في لوحة تحكم برنت فيرس. يمكنك إدارة طلباتك ومتابعة حالتها من هنا.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className={`${stat.color} p-4 rounded-full mr-4`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold mb-4">إجراءات سريعة</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.href}
              className="hover-scale"
            >
              <Card className="card-shadow h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <div className={`${action.color} text-white p-3 rounded-full mb-3`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-center">{action.title}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">الطلبات الأخيرة</h2>
            <Link to="/orders">
              <Button variant="outline" size="sm">
                عرض الكل
              </Button>
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4">رقم الطلب</th>
                  <th className="text-right py-3 px-4">التاريخ</th>
                  <th className="text-right py-3 px-4">المنتج</th>
                  <th className="text-right py-3 px-4">الحالة</th>
                  <th className="text-right py-3 px-4">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "مكتمل"
                            ? "bg-green-100 text-green-800"
                            : order.status === "قيد التصنيع"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Link to={`/order-tracking/${order.id}`}>
                        <Button variant="ghost" size="sm">
                          تفاصيل
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
