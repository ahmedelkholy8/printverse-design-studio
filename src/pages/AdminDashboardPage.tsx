
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { AdminUserManagement } from "@/components/admin/AdminUserManagement";
import { AdminOrderManagement } from "@/components/admin/AdminOrderManagement";
import { AdminReports } from "@/components/admin/AdminReports";
import { AdminMessaging } from "@/components/admin/AdminMessaging";
import { AdminSettings } from "@/components/admin/AdminSettings";
import { AdminMaterials } from "@/components/admin/AdminMaterials";
import { AdminActivityLog } from "@/components/admin/AdminActivityLog";

export default function AdminDashboardPage() {
  return (
    <Layout showSidebar userRole="admin">
      <div className="container p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">لوحة تحكم المسؤول</h1>
        
        <Tabs defaultValue="overview" className="w-full" dir="rtl">
          <TabsList className="mb-4 w-full justify-start flex-wrap">
            <TabsTrigger value="overview">الرئيسية</TabsTrigger>
            <TabsTrigger value="users">إدارة المستخدمين</TabsTrigger>
            <TabsTrigger value="orders">إدارة الطلبات</TabsTrigger>
            <TabsTrigger value="reports">التقارير والإحصائيات</TabsTrigger>
            <TabsTrigger value="messaging">مركز الرسائل</TabsTrigger>
            <TabsTrigger value="settings">إعدادات النظام</TabsTrigger>
            <TabsTrigger value="materials">إدارة المواد</TabsTrigger>
            <TabsTrigger value="activity">سجل النشاطات</TabsTrigger>
          </TabsList>
          
          <div className="p-4 border rounded-lg bg-card">
            <TabsContent value="overview" className="mt-0">
              <AdminOverview />
            </TabsContent>
            
            <TabsContent value="users" className="mt-0">
              <AdminUserManagement />
            </TabsContent>
            
            <TabsContent value="orders" className="mt-0">
              <AdminOrderManagement />
            </TabsContent>
            
            <TabsContent value="reports" className="mt-0">
              <AdminReports />
            </TabsContent>
            
            <TabsContent value="messaging" className="mt-0">
              <AdminMessaging />
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <AdminSettings />
            </TabsContent>
            
            <TabsContent value="materials" className="mt-0">
              <AdminMaterials />
            </TabsContent>
            
            <TabsContent value="activity" className="mt-0">
              <AdminActivityLog />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
