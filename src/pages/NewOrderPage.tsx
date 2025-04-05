
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUpload, Printer3d, InfoIcon, PackageCheck, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewOrderPage = () => {
  const navigate = useNavigate();
  const userRole = "client";
  const [currentStep, setCurrentStep] = useState(1);
  
  // Available materials data
  const materials = [
    { id: 1, name: "PLA", description: "مناسب للنماذج العامة والديكورات", price: 120 },
    { id: 2, name: "ABS", description: "متين ومقاوم للحرارة", price: 150 },
    { id: 3, name: "PETG", description: "مرن ومقاوم للماء", price: 180 },
    { id: 4, name: "TPU", description: "مطاطي ومرن للأجزاء المتحركة", price: 200 },
    { id: 5, name: "Nylon", description: "قوي جداً للقطع الهندسية", price: 250 },
  ];
  
  // Available colors
  const colors = [
    { id: 1, name: "أبيض", hex: "#FFFFFF" },
    { id: 2, name: "أسود", hex: "#000000" },
    { id: 3, name: "أحمر", hex: "#FF0000" },
    { id: 4, name: "أزرق", hex: "#0000FF" },
    { id: 5, name: "أخضر", hex: "#00FF00" },
    { id: 6, name: "رمادي", hex: "#808080" },
  ];
  
  // Available finishes
  const finishes = [
    { id: 1, name: "عادي", description: "تشطيب أساسي بدون معالجة إضافية", price: 0 },
    { id: 2, name: "صنفرة", description: "إزالة الخطوط والحواف الخشنة", price: 30 },
    { id: 3, name: "طلاء", description: "طبقة طلاء نهائية لمظهر أفضل", price: 50 },
    { id: 4, name: "مصقول", description: "تشطيب عالي اللمعان", price: 80 },
  ];
  
  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the order and redirect to payment page
      navigate("/payment");
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Layout showSidebar={true} userRole={userRole}>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">طلب جديد</h1>
          <p className="text-muted-foreground">
            قم بإنشاء طلب طباعة ثلاثية الأبعاد جديد. اتبع الخطوات أدناه لإكمال طلبك.
          </p>
        </div>

        {/* Progress steps */}
        <div className="mb-8">
          <div className="flex items-center max-w-3xl mx-auto">
            <div className={`flex items-center relative w-full mx-8 ${currentStep >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${currentStep >= 1 ? "border-primary bg-primary text-white" : "border-muted-foreground"} flex items-center justify-center`}>
                <FileUpload size={18} />
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium">
                <div className="font-semibold">رفع النموذج</div>
                <div className={`text-xs ${currentStep >= 1 ? "text-muted-foreground" : "text-muted"}`}>رفع ملف التصميم</div>
              </div>
            </div>
            
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${currentStep >= 2 ? "border-primary" : "border-muted"}`}></div>
            
            <div className={`flex items-center relative w-full mx-8 ${currentStep >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${currentStep >= 2 ? "border-primary bg-primary text-white" : "border-muted-foreground"} flex items-center justify-center`}>
                <Printer3d size={18} />
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium">
                <div className="font-semibold">المواصفات</div>
                <div className={`text-xs ${currentStep >= 2 ? "text-muted-foreground" : "text-muted"}`}>اختيار المواد والألوان</div>
              </div>
            </div>
            
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${currentStep >= 3 ? "border-primary" : "border-muted"}`}></div>
            
            <div className={`flex items-center relative w-full mx-8 ${currentStep >= 3 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${currentStep >= 3 ? "border-primary bg-primary text-white" : "border-muted-foreground"} flex items-center justify-center`}>
                <PackageCheck size={18} />
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium">
                <div className="font-semibold">التسليم</div>
                <div className={`text-xs ${currentStep >= 3 ? "text-muted-foreground" : "text-muted"}`}>بيانات التوصيل</div>
              </div>
            </div>
          </div>
        </div>

        {/* Step content */}
        <div className="max-w-3xl mx-auto">
          {currentStep === 1 && (
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2">رفع نموذج ثلاثي الأبعاد</h2>
                  <p className="text-muted-foreground mb-4">
                    قم برفع ملف التصميم الثلاثي الأبعاد. نحن ندعم صيغ STL, OBJ, 3MF.
                  </p>
                  
                  <div className="border-2 border-dashed border-muted rounded-lg p-10 mb-6 text-center">
                    <FileUpload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <div className="mb-4">
                      <h3 className="text-lg font-medium mb-1">اسحب الملف هنا أو</h3>
                      <p className="text-sm text-muted-foreground">يجب أن لا يتجاوز حجم الملف 50MB</p>
                    </div>
                    <Button>تصفح الملفات</Button>
                  </div>
                  
                  <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start">
                    <InfoIcon className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">نصائح لرفع النماذج:</p>
                      <ul className="text-sm list-disc list-inside mt-1">
                        <li>تأكد من أن النموذج مغلق ولا يوجد به ثقوب</li>
                        <li>تجنب الجدران الرقيقة جداً (أقل من 1.5 مم)</li>
                        <li>تحقق من حجم النموذج ومقياسه</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button onClick={handleContinue} className="tech-gradient">
                    متابعة
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {currentStep === 2 && (
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2">اختيار المواصفات</h2>
                  <p className="text-muted-foreground mb-4">
                    حدد المواد والألوان ودرجة التشطيب المطلوبة
                  </p>
                  
                  <div className="mb-6">
                    <Label className="text-md font-medium mb-2 block">المادة</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {materials.map((material) => (
                        <div key={material.id} className="border rounded-lg p-3 hover:border-primary cursor-pointer transition-colors">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium">{material.name}</div>
                              <div className="text-sm text-muted-foreground">{material.description}</div>
                            </div>
                            <div className="font-medium">{material.price} ريال</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="text-md font-medium mb-2 block">اللون</Label>
                    <div className="flex flex-wrap gap-3">
                      {colors.map((color) => (
                        <div
                          key={color.id}
                          className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer border hover:border-primary transition-colors"
                          style={{ backgroundColor: color.hex, border: color.hex === "#FFFFFF" ? "1px solid #e2e8f0" : "none" }}
                          title={color.name}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="text-md font-medium mb-2 block">التشطيب</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {finishes.map((finish) => (
                        <div key={finish.id} className="border rounded-lg p-3 hover:border-primary cursor-pointer transition-colors">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium">{finish.name}</div>
                              <div className="text-sm text-muted-foreground">{finish.description}</div>
                            </div>
                            <div className="font-medium">{finish.price > 0 ? `${finish.price} ريال` : "مجاناً"}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="text-md font-medium mb-2 block">الكمية</Label>
                    <div className="w-24">
                      <Input type="number" min="1" defaultValue="1" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="text-md font-medium mb-2 block">ملاحظات إضافية</Label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="أي تفاصيل إضافية تريد إضافتها لطلبك"
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    رجوع
                  </Button>
                  <Button onClick={handleContinue} className="tech-gradient">
                    متابعة
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {currentStep === 3 && (
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2">بيانات التسليم</h2>
                  <p className="text-muted-foreground mb-4">
                    أدخل تفاصيل الشحن والتوصيل
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="fullName">الاسم الكامل</Label>
                      <Input id="fullName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="address">العنوان</Label>
                    <Input id="address" className="mt-1" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="city">المدينة</Label>
                      <Input id="city" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="region">المنطقة</Label>
                      <Input id="region" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">الرمز البريدي</Label>
                      <Input id="postalCode" className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="deliveryMethod">طريقة التوصيل</Label>
                    <select
                      id="deliveryMethod"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="standard">توصيل عادي (3-5 أيام)</option>
                      <option value="express">توصيل سريع (1-2 يوم)</option>
                      <option value="pickup">استلام من المتجر</option>
                    </select>
                  </div>
                  
                  <div className="bg-amber-50 text-amber-800 p-4 rounded-lg flex items-start mb-4">
                    <AlertTriangle className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      سيتم احتساب رسوم الشحن بناءً على الموقع وحجم ووزن المنتج. يمكن مراجعة التكلفة النهائية في صفحة الدفع.
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    رجوع
                  </Button>
                  <Button onClick={handleContinue} className="tech-gradient">
                    الانتقال للدفع
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NewOrderPage;
