
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Truck, CalendarClock, Download, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const OrderConfirmationPage = () => {
  const userRole = "client";
  
  // Mock order data
  const orderDetails = {
    orderId: "ORD-12346",
    date: "2023-04-05",
    estimatedDelivery: "2023-04-10",
    items: [
      {
        name: "نموذج معماري",
        material: "PLA",
        color: "أبيض",
        finish: "طلاء",
        quantity: 1,
        price: 350,
      },
    ],
    shipping: {
      method: "توصيل عادي",
      address: "شارع الملك فهد، حي الورود، الرياض، 12345",
      fee: 40,
    },
    payment: {
      method: "بطاقة ائتمانية",
      last4: "4242",
    },
    subtotal: 350,
    tax: 19.50,
    total: 409.50,
  };

  return (
    <Layout showSidebar={true} userRole={userRole}>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-4">
            <CheckCircle className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold mb-2">تم تأكيد طلبك!</h1>
          <p className="text-muted-foreground">
            سنبدأ في تجهيز طلبك على الفور. رقم الطلب:
            <span className="font-bold text-foreground mx-1">{orderDetails.orderId}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">تفاصيل الطلب</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">رقم الطلب</p>
                    <p className="font-medium">{orderDetails.orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">تاريخ الطلب</p>
                    <p className="font-medium">{orderDetails.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">طريقة الدفع</p>
                    <p className="font-medium">{orderDetails.payment.method} (****{orderDetails.payment.last4})</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">شحن إلى</p>
                    <p className="font-medium">{orderDetails.shipping.address}</p>
                  </div>
                </div>
                
                <h3 className="font-bold mb-2">العناصر المطلوبة</h3>
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="p-3 border rounded-lg mb-4">
                    <div className="flex justify-between">
                      <div className="font-medium">{item.name}</div>
                      <div className="font-medium">{item.price} ريال</div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <p>المادة: {item.material}</p>
                      <p>اللون: {item.color}</p>
                      <p>التشطيب: {item.finish}</p>
                      <p>الكمية: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">المجموع الفرعي</span>
                    <span>{orderDetails.subtotal} ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الشحن ({orderDetails.shipping.method})</span>
                    <span>{orderDetails.shipping.fee} ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الضريبة (5%)</span>
                    <span>{orderDetails.tax} ريال</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between font-bold">
                    <span>الإجمالي</span>
                    <span>{orderDetails.total} ريال</span>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3 flex-wrap">
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    تحميل الفاتورة
                  </Button>
                  <Link to={`/order-tracking/${orderDetails.orderId}`}>
                    <Button variant="outline" className="gap-2">
                      <Package className="h-4 w-4" />
                      تتبع الطلب
                    </Button>
                  </Link>
                  <Link to="/support">
                    <Button variant="outline" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      الدعم
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">وقت التسليم المتوقع</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="bg-blue-100 rounded-full p-2 h-fit">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">تجهيز الطلب</p>
                      <p className="text-sm text-muted-foreground">نعمل على طباعة نموذجك الآن</p>
                      <p className="text-sm font-medium text-primary mt-1">في التقدم</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-gray-100 rounded-full p-2 h-fit">
                      <Truck className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium">الشحن</p>
                      <p className="text-sm text-muted-foreground">سيتم شحن طلبك قريباً</p>
                      <p className="text-sm text-muted-foreground mt-1">قيد الانتظار</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-gray-100 rounded-full p-2 h-fit">
                      <CalendarClock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium">التسليم المتوقع</p>
                      <p className="text-sm text-muted-foreground">{orderDetails.estimatedDelivery}</p>
                      <p className="text-sm text-muted-foreground mt-1">3-5 أيام عمل</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="bg-blue-50 p-4 rounded-lg text-blue-800">
                  <h3 className="font-bold mb-2">ما الخطوات التالية؟</h3>
                  <ul className="text-sm space-y-2">
                    <li>ستتلقى بريداً إلكترونياً بتأكيد طلبك.</li>
                    <li>سنرسل لك إشعاراً عندما يتم شحن طلبك.</li>
                    <li>يمكنك تتبع طلبك في أي وقت من خلال حسابك.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <h2 className="text-xl font-bold mb-4">شكراً لك على طلبك!</h2>
          <p className="text-muted-foreground mb-6">
            نقدر ثقتك في برنت فيرس للطباعة ثلاثية الأبعاد. إذا كانت لديك أي أسئلة أو استفسارات، يرجى التواصل مع فريق الدعم لدينا.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="outline">العودة للوحة التحكم</Button>
            </Link>
            <Link to="/new-order">
              <Button className="tech-gradient">طلب آخر</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmationPage;
