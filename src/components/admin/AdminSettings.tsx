
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Mail, Bell, Shield, Tablet, Globe, Save } from "lucide-react";

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">إعدادات النظام</h2>
        <Badge variant="outline">v2.5.0</Badge>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="payments">طرق الدفع</TabsTrigger>
          <TabsTrigger value="mail">البريد الإلكتروني</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
          <TabsTrigger value="security">الأمان</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>الإعدادات العامة</CardTitle>
              <CardDescription>تعديل الإعدادات الأساسية للمنصة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">اسم الموقع</Label>
                  <Input id="site-name" defaultValue="برنت فيرس" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url">رابط الموقع</Label>
                  <Input id="site-url" defaultValue="https://printverse.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">البريد الإلكتروني للمسؤول</Label>
                  <Input id="admin-email" type="email" defaultValue="admin@printverse.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tel">رقم التواصل</Label>
                  <Input id="tel" type="tel" defaultValue="+966 50 123 4567" />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-medium">واجهة المستخدم</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">الوضع الليلي الافتراضي</Label>
                    <p className="text-sm text-muted-foreground">تفعيل الوضع الليلي كافتراضي لجميع المستخدمين</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">السماح للمستخدمين بتغيير السمة</Label>
                    <p className="text-sm text-muted-foreground">تمكين المستخدمين من اختيار السمة المفضلة</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">عرض شعار التطبيق</Label>
                    <p className="text-sm text-muted-foreground">عرض شعار التطبيق في شريط التنقل</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-medium">الإعدادات المتقدمة</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">وضع الصيانة</Label>
                    <p className="text-sm text-muted-foreground">تفعيل وضع الصيانة لإغلاق الموقع مؤقتاً</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">تسجيل الأخطاء المفصل</Label>
                    <p className="text-sm text-muted-foreground">تفعيل تسجيل الأخطاء التفصيلي للنظام</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  حفظ الإعدادات
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                إعدادات الدفع
              </CardTitle>
              <CardDescription>تكوين طرق الدفع وإعدادات البوابة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">بوابات الدفع</h3>
                
                <div className="grid gap-4">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">مدى (MADA)</h4>
                          <p className="text-sm text-muted-foreground">الدفع بالبطاقة البنكية المحلية</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">فيزا / ماستركارد</h4>
                          <p className="text-sm text-muted-foreground">الدفع ببطاقات الائتمان العالمية</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">أبل باي / جوجل باي</h4>
                          <p className="text-sm text-muted-foreground">الدفع الرقمي بالمحفظة الإلكترونية</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">إعدادات الضرائب</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tax-rate">نسبة ضريبة القيمة المضافة (%)</Label>
                    <Input id="tax-rate" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-id">الرقم الضريبي</Label>
                    <Input id="tax-id" defaultValue="123456789012345" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  حفظ الإعدادات
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mail" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                إعدادات البريد الإلكتروني
              </CardTitle>
              <CardDescription>تكوين خدمة البريد الإلكتروني وقوالب الرسائل</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtp-host">خادم SMTP</Label>
                  <Input id="smtp-host" defaultValue="smtp.printverse.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">المنفذ</Label>
                  <Input id="smtp-port" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-user">اسم المستخدم</Label>
                  <Input id="smtp-user" defaultValue="no-reply@printverse.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-password">كلمة المرور</Label>
                  <Input id="smtp-password" type="password" defaultValue="********" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">قوالب البريد الإلكتروني</h3>
                <div className="grid gap-4">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">تأكيد التسجيل</h4>
                        <p className="text-sm text-muted-foreground">رسالة ترحيبية عند تسجيل المستخدم</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">تأكيد الطلب</h4>
                        <p className="text-sm text-muted-foreground">إشعار بتأكيد استلام الطلب</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">تغيير حالة الطلب</h4>
                        <p className="text-sm text-muted-foreground">إشعار بتغيير حالة الطلب</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  حفظ الإعدادات
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                إعدادات الإشعارات
              </CardTitle>
              <CardDescription>ضبط إعدادات الإشعارات داخل النظام والبريد الإلكتروني</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">إشعارات النظام</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">طلب جديد</Label>
                      <p className="text-sm text-muted-foreground">إشعار عند استلام طلب جديد</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تسجيل مستخدم جديد</Label>
                      <p className="text-sm text-muted-foreground">إشعار عند تسجيل مستخدم جديد</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">رسالة دعم جديدة</Label>
                      <p className="text-sm text-muted-foreground">إشعار عند استلام رسالة دعم</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تنبيهات المخزون</Label>
                      <p className="text-sm text-muted-foreground">إشعار عند انخفاض مستوى المخزون</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">إعدادات متقدمة</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">إرسال نسخة للبريد الإلكتروني</Label>
                      <p className="text-sm text-muted-foreground">إرسال نسخة من كل إشعار للبريد الإلكتروني</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تجميع الإشعارات اليومية</Label>
                      <p className="text-sm text-muted-foreground">إرسال ملخص يومي بدلاً من إشعارات منفصلة</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  حفظ الإعدادات
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                إعدادات الأمان
              </CardTitle>
              <CardDescription>ضبط إعدادات أمان النظام وسياسات كلمات المرور</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">سياسة كلمات المرور</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">الحد الأدنى لطول كلمة المرور</Label>
                      <p className="text-sm text-muted-foreground">عدد الأحرف الأدنى المطلوب</p>
                    </div>
                    <Input type="number" className="w-20" defaultValue="8" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تتطلب أحرف خاصة</Label>
                      <p className="text-sm text-muted-foreground">يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تتطلب أرقام</Label>
                      <p className="text-sm text-muted-foreground">يجب أن تحتوي كلمة المرور على رقم واحد على الأقل</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">مدة صلاحية كلمة المرور (بالأيام)</Label>
                      <p className="text-sm text-muted-foreground">عدد الأيام قبل طلب تغيير كلمة المرور (0 = لا تنتهي)</p>
                    </div>
                    <Input type="number" className="w-20" defaultValue="90" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">التوثيق الثنائي</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تفعيل التوثيق الثنائي</Label>
                      <p className="text-sm text-muted-foreground">طلب رمز تحقق إضافي عند تسجيل الدخول</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">إلزامي للمسؤولين</Label>
                      <p className="text-sm text-muted-foreground">جعل التوثيق الثنائي إلزامي لحسابات المسؤولين</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">إعدادات أخرى</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تسجيل محاولات تسجيل الدخول الفاشلة</Label>
                      <p className="text-sm text-muted-foreground">حفظ سجل لمحاولات تسجيل الدخول غير الناجحة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">عدد محاولات تسجيل الدخول قبل القفل</Label>
                      <p className="text-sm text-muted-foreground">عدد المحاولات الفاشلة قبل قفل الحساب مؤقتاً</p>
                    </div>
                    <Input type="number" className="w-20" defaultValue="5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  حفظ الإعدادات
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
