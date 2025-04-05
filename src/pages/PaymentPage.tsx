import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Wallet, Building, Package, Info, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const userRole = "client";
  
  // Mock order summary data
  const orderSummary = {
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
    subtotal: 350,
    shipping: 40,
    tax: 19.50,
    total: 409.50,
  };
  
  const handleCompletePayment = () => {
    // In a real app, process payment here
    navigate("/order-confirmation");
  };

  return (
    <Layout showSidebar={true} userRole={userRole}>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">إتمام الدفع</h1>
          <p className="text-muted-foreground">
            اختر طريقة الدفع لإكمال طلبك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="card">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>بطاقة ائتمانية</span>
                    </TabsTrigger>
                    <TabsTrigger value="wallet" className="flex items-center gap-2">
                      <Wallet className="h-4 w-4" />
                      <span>محفظة إلكترونية</span>
                    </TabsTrigger>
                    <TabsTrigger value="bank" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>تحويل بنكي</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">الاسم على البطاقة</Label>
                        <Input id="cardName" placeholder="الاسم الكامل كما هو على البطاقة" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">رقم البطاقة</Label>
                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">تاريخ الانتهاء</Label>
                          <Input id="expiryDate" placeholder="MM/YY" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">رمز الأمان (CVV)</Label>
                          <Input id="cvv" placeholder="123" className="mt-1" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-4">
                        <input
                          type="checkbox"
                          id="saveCard"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label htmlFor="saveCard" className="text-sm font-normal">
                          حفظ بيانات البطاقة للمعاملات المستقبلية
                        </Label>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mt-4">
                        <Shield className="h-4 w-4 mr-2" />
                        <span>جميع المعاملات مشفرة وآمنة</span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="wallet">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border rounded-lg p-4 hover:border-primary cursor-pointer flex justify-center items-center">
                          <img src="https://placehold.co/80x40/0891B2/FFFFFF?text=Apple+Pay&font=Poppins" alt="Apple Pay" className="h-8" />
                        </div>
                        <div className="border rounded-lg p-4 hover:border-primary cursor-pointer flex justify-center items-center">
                          <img src="https://placehold.co/80x40/0891B2/FFFFFF?text=PayPal&font=Poppins" alt="PayPal" className="h-8" />
                        </div>
                        <div className="border rounded-lg p-4 hover:border-primary cursor-pointer flex justify-center items-center">
                          <img src="https://placehold.co/80x40/0891B2/FFFFFF?text=Google+Pay&font=Poppins" alt="Google Pay" className="h-8" />
                        </div>
                        <div className="border rounded-lg p-4 hover:border-primary cursor-pointer flex justify-center items-center">
                          <img src="https://placehold.co/80x40/0891B2/FFFFFF?text=STC+Pay&font=Poppins" alt="STC Pay" className="h-8" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="walletEmail">البريد الإلكتروني المرتبط بالمحفظة</Label>
                        <Input id="walletEmail" type="email" placeholder="your@email.com" className="mt-1" />
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mt-4">
                        <Info className="h-4 w-4 mr-2" />
                        <span>سيتم تحويلك إلى صفحة المحفظة الإلكترونية لإتمام عملية الدفع</span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bank">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-muted/20">
                        <p className="font-medium mb-2">تفاصيل الحساب البنكي:</p>
                        <p>بنك الرياض</p>
                        <p>اسم الحساب: شركة برنت فيرس</p>
                        <p>رقم الحساب: SA123456789012345678</p>
                        <p>IBAN: SA0123456789012345678901</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="transferConfirmation">رقم العملية أو صورة التحويل</Label>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 mt-1 text-center cursor-pointer">
                          <div className="mb-2">
                            <p className="text-sm">اسحب صورة إيصال التحويل هنا أو انقر للتحميل</p>
                          </div>
                          <Button variant="outline" size="sm">تحميل صورة</Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-amber-600 mt-4">
                        <Info className="h-4 w-4 mr-2" />
                        <span>سيتم تأكيد طلبك بعد التحقق من عملية التحويل. قد يستغرق ذلك 1-2 يوم عمل.</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-end mt-6">
                  <Button onClick={handleCompletePayment} className="tech-gradient">
                    إتمام الدفع
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
                
                {orderSummary.items.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <div className="font-medium">{item.name}</div>
                      <div className="font-medium">{item.price} ريال</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
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
                    <span>{orderSummary.subtotal} ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الشحن</span>
                    <span>{orderSummary.shipping} ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الضريبة (5%)</span>
                    <span>{orderSummary.tax} ريال</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between font-bold">
                    <span>الإجمالي</span>
                    <span>{orderSummary.total} ريال</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Package className="h-4 w-4 mr-2" />
                  <span>الشحن المتوقع: 3-5 أيام عمل</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
