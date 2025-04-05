
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage = () => {
  return (
    <Layout>
      <div className="container max-w-md mx-auto py-20 px-4" dir="rtl">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="register">حساب جديد</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">تسجيل الدخول</CardTitle>
                <CardDescription>
                  أدخل بياناتك أدناه للوصول إلى حسابك
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">كلمة المرور</Label>
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                          نسيت كلمة المرور؟
                        </Link>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                    <Button className="tech-gradient w-full">
                      تسجيل الدخول
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <div className="text-sm text-muted-foreground">
                  ليس لديك حساب؟{" "}
                  <Link to="/register" className="text-primary hover:underline">
                    إنشاء حساب جديد
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">إنشاء حساب جديد</CardTitle>
                <CardDescription>
                  أدخل بياناتك أدناه لإنشاء حساب جديد
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input id="name" type="text" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="register-email">البريد الإلكتروني</Label>
                      <Input id="register-email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="register-password">كلمة المرور</Label>
                      <Input id="register-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="user-type">نوع الحساب</Label>
                      <select
                        id="user-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="client">عميل</option>
                        <option value="supplier">مورد</option>
                        <option value="partner">شريك</option>
                      </select>
                    </div>
                    <Button className="tech-gradient w-full">
                      إنشاء حساب
                    </Button>
                  </div>
                </form>
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
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LoginPage;
