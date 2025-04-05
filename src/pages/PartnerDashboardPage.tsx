
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PartnerOverview } from "@/components/partner/PartnerOverview";
import { PartnerOrders } from "@/components/partner/PartnerOrders";
import { PartnerProductionStatus } from "@/components/partner/PartnerProductionStatus";
import { PartnerReports } from "@/components/partner/PartnerReports";
import { PartnerCommunication } from "@/components/partner/PartnerCommunication";

export default function PartnerDashboardPage() {
  return (
    <Layout showSidebar userRole="partner">
      <div className="container p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-6">لوحة تحكم الشريك</h1>
        
        <Tabs defaultValue="overview" className="w-full" dir="rtl">
          <TabsList className="mb-4 w-full justify-start flex-wrap">
            <TabsTrigger value="overview">الرئيسية</TabsTrigger>
            <TabsTrigger value="orders">إدارة الطلبات</TabsTrigger>
            <TabsTrigger value="production">تحديث مراحل الإنتاج</TabsTrigger>
            <TabsTrigger value="reports">تقارير الأداء</TabsTrigger>
            <TabsTrigger value="communication">التواصل والدعم</TabsTrigger>
          </TabsList>
          
          <div className="p-4 border rounded-lg bg-card">
            <TabsContent value="overview" className="mt-0">
              <PartnerOverview />
            </TabsContent>
            
            <TabsContent value="orders" className="mt-0">
              <PartnerOrders />
            </TabsContent>
            
            <TabsContent value="production" className="mt-0">
              <PartnerProductionStatus />
            </TabsContent>
            
            <TabsContent value="reports" className="mt-0">
              <PartnerReports />
            </TabsContent>
            
            <TabsContent value="communication" className="mt-0">
              <PartnerCommunication />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
