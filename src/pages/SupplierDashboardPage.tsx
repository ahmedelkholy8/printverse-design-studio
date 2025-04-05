
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SupplierOverview } from "@/components/supplier/SupplierOverview";
import { SupplierMaterials } from "@/components/supplier/SupplierMaterials";
import { SupplierIncomingOrders } from "@/components/supplier/SupplierIncomingOrders";
import { SupplierOrderStatus } from "@/components/supplier/SupplierOrderStatus";
import { SupplierReports } from "@/components/supplier/SupplierReports";
import { SupplierCommunication } from "@/components/supplier/SupplierCommunication";

export default function SupplierDashboardPage() {
  return (
    <Layout showSidebar userRole="supplier">
      <div className="container p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">لوحة تحكم المورد</h1>
        
        <Tabs defaultValue="overview" className="w-full" dir="rtl">
          <TabsList className="mb-4 w-full justify-start flex-wrap">
            <TabsTrigger value="overview">الرئيسية</TabsTrigger>
            <TabsTrigger value="materials">إدارة المواد</TabsTrigger>
            <TabsTrigger value="orders">الطلبات الواردة</TabsTrigger>
            <TabsTrigger value="status">تحديث حالة الطلب</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
            <TabsTrigger value="communication">مركز التواصل</TabsTrigger>
          </TabsList>
          
          <div className="p-4 border rounded-lg bg-card">
            <TabsContent value="overview" className="mt-0">
              <SupplierOverview />
            </TabsContent>
            
            <TabsContent value="materials" className="mt-0">
              <SupplierMaterials />
            </TabsContent>
            
            <TabsContent value="orders" className="mt-0">
              <SupplierIncomingOrders />
            </TabsContent>
            
            <TabsContent value="status" className="mt-0">
              <SupplierOrderStatus />
            </TabsContent>
            
            <TabsContent value="reports" className="mt-0">
              <SupplierReports />
            </TabsContent>
            
            <TabsContent value="communication" className="mt-0">
              <SupplierCommunication />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
