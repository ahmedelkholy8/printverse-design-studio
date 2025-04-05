
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="container max-w-lg mx-auto py-20 px-4" dir="rtl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">إنشاء حساب جديد</CardTitle>
            <CardDescription>
              أدخل بياناتك أدناه للتسجيل في برنت فيرس
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="client" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="client">عميل</TabsTrigger>
                <TabsTrigger value="supplier">مورد</TabsTrigger>
                <TabsTrigger value="partner">شريك</TabsTrigger>
              </TabsList>
              
              <TabsContent value="client">
                <form>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">الاسم الأول</Label>
                        <Input id="first-name" type="text" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">الاسم الأخير</Label>
                        <Input id="last-name" type="text" />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" type="tel" placeholder="05xxxxxxxx" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="password">كلمة المرور</Label>
                      <Input id="password" type="password" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        أوافق على <Link to="/terms" className="text-primary hover:underline">شروط الاستخدام</Link> و <Link to="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link>
                      </Label>
                    </div>
                    
                    <Button className="tech-gradient w-full">
                      إنشاء حساب
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="supplier">
                <form>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="company-name">اسم الشركة</Label>
                      <Input id="company-name" type="text" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="business-email">البريد الإلكتروني للشركة</Label>
                      <Input id="business-email" type="email" placeholder="company@example.com" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="business-phone">رقم هاتف الشركة</Label>
                      <Input id="business-phone" type="tel" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="commercial-register">رقم السجل التجاري</Label>
                      <Input id="commercial-register" type="text" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="supplier-materials">المواد التي توفرها</Label>
                      <Input id="supplier-materials" type="text" placeholder="PLA, ABS, PETG, etc." />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="supplier-password">كلمة المرور</Label>
                      <Input id="supplier-password" type="password" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="supplier-terms"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="supplier-terms" className="text-sm font-normal">
                        أوافق على <Link to="/terms" className="text-primary hover:underline">شروط الاستخدام</Link> و <Link to="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link>
                      </Label>
                    </div>
                    
                    <Button className="tech-gradient w-full">
                      إنشاء حساب مورد
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="partner">
                <form>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="partner-company">اسم الشركة</Label>
                      <Input id="partner-company" type="text" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="partner-email">البريد الإلكتروني</Label>
                      <Input id="partner-email" type="email" placeholder="partner@example.com" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="partner-phone">رقم الهاتف</Label>
                      <Input id="partner-phone" type="tel" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="partnership-type">نوع الشراكة</Label>
                      <select
                        id="partnership-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="production">إنتاج</option>
                        <option value="distribution">توزيع</option>
                        <option value="logistics">خدمات لوجستية</option>
                      </select>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="partner-info">معلومات إضافية عن الشراكة</Label>
                      <textarea
                        id="partner-info"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="وصف المنشأة، مجالات التعاون، الخ"
                      ></textarea>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="partner-password">كلمة المرور</Label>
                      <Input id="partner-password" type="password" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="partner-terms"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="partner-terms" className="text-sm font-normal">
                        أوافق على <Link to="/terms" className="text-primary hover:underline">شروط الاستخدام</Link> و <Link to="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link>
                      </Label>
                    </div>
                    
                    <Button className="tech-gradient w-full">
                      إنشاء حساب شريك
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-primary hover:underline">
                تسجيل الدخول
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterPage;
