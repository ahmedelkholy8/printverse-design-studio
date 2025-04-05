
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { Package, Truck, Calendar, CheckCircle, Download, MessageSquare, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const OrderTrackingPage = () => {
  const { id } = useParams();
  const userRole = "client";
  
  // Mock order tracking data
  const orderData = {
    id: id || "ORD-12345",
    status: "processing", // processing, shipped, delivered, canceled
    statusText: "قيد التصنيع",
    dateOrdered: "2023-04-01",
    dateShipped: null,
    dateDelivered: null,
    estimatedDelivery: "2023-04-08",
    trackingNumber: "123456789",
    carrier: "شركة أرامكس",
    product: "نموذج معماري",
    quantity: 1,
    total: 409.50,
    stages: [
      { 
        name: "تم استلام الطلب", 
        date: "2023-04-01 14:30", 
        completed: true,
        description: "تم استلام طلبك بنجاح وإرسال تأكيد البريد الإلكتروني"
      },
      { 
        name: "تم التحقق من الدفع", 
        date: "2023-04-01 15:45", 
        completed: true,
        description: "تم التحقق من عملية الدفع الخاصة بك بنجاح"
      },
      { 
        name: "قيد التصنيع", 
        date: "2023-04-02 09:15", 
        completed: true,
        description: "نعمل على طباعة وتجهيز منتجك الآن"
      },
      { 
        name: "اكتمل التصنيع", 
        date: "2023-04-05 11:30", 
        completed: false,
        description: "تم الانتهاء من طباعة وتجهيز منتجك"
      },
      { 
        name: "تم الشحن", 
        date: null, 
        completed: false,
        description: "تم شحن طلبك وهو في طريقه إليك"
      },
      { 
        name: "تم التسليم", 
        date: null, 
        completed: false,
        description: "تم تسليم طلبك بنجاح"
      },
    ]
  };
  
  // Calculate progress percentage
  const completedStages = orderData.stages.filter(stage => stage.completed).length;
  const progressPercentage = Math.round((completedStages / orderData.stages.length) * 100);

  return (
    <Layout showSidebar={true} userRole={userRole}>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                العودة
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-2">تتبع الطلب #{orderData.id}</h1>
          <p className="text-muted-foreground">
            يمكنك متابعة حالة طلبك والوقت المقدر للتسليم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">حالة الطلب</h2>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    orderData.status === "processing" ? "bg-blue-100 text-blue-800" :
                    orderData.status === "shipped" ? "bg-amber-100 text-amber-800" :
                    orderData.status === "delivered" ? "bg-green-100 text-green-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {orderData.statusText}
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                
                {/* Timeline */}
                <div className="relative">
                  {orderData.stages.map((stage, index) => (
                    <div key={index} className="mb-8 relative">
                      {/* Vertical timeline line */}
                      {index !== orderData.stages.length - 1 && (
                        <div 
                          className={`absolute top-7 right-3.5 w-0.5 h-full ${stage.completed ? "bg-primary" : "bg-gray-200"}`}
                        ></div>
                      )}
                      
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className={`flex items-center justify-center w-7 h-7 rounded-full ${
                            stage.completed ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
                          }`}>
                            {stage.completed ? <CheckCircle className="h-4 w-4" /> : index + 1}
                          </div>
                        </div>
                        <div>
                          <h3 className={`font-bold ${stage.completed ? "text-primary" : "text-muted-foreground"}`}>
                            {stage.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">{stage.description}</p>
                          {stage.date && (
                            <p className="text-xs text-muted-foreground">{stage.date}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex flex-wrap gap-3">
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    تحميل الفاتورة
                  </Button>
                  <Link to="/support">
                    <Button variant="outline" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      مساعدة
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">تفاصيل الطلب</h2>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">المنتج</p>
                    <p className="font-medium">{orderData.product}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">الكمية</p>
                    <p className="font-medium">{orderData.quantity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">تاريخ الطلب</p>
                    <p className="font-medium">{orderData.dateOrdered}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">الإجمالي</p>
                    <p className="font-medium">{orderData.total} ريال</p>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div>
                    <p className="text-sm text-muted-foreground">تاريخ التسليم المتوقع</p>
                    <p className="font-medium">{orderData.estimatedDelivery}</p>
                  </div>
                  
                  {orderData.trackingNumber && (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground">رقم التتبع</p>
                        <p className="font-medium">{orderData.trackingNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">شركة الشحن</p>
                        <p className="font-medium">{orderData.carrier}</p>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-6 bg-muted rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">هل تريد تغيير موعد التسليم؟</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        يمكنك الاتصال بخدمة العملاء لتحديد موعد تسليم مناسب لك.
                      </p>
                      <Link to="/support">
                        <Button variant="outline" size="sm" className="mt-2">
                          اتصل بالدعم
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTrackingPage;
