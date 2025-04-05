import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Upload, Settings, CreditCard, Truck, CheckCircle, Clock, Shield, PenTool } from "lucide-react";
import { InteractiveCube } from "@/components/3D/InteractiveCube";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-gradient-to-r from-printtech-blue/10 to-printtech-green/10 -z-10"></div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="tech-text-gradient">الطباعة ثلاثية الأبعاد</span>
              <br />
              بكل سهولة وإحترافية
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              حول أفكارك إلى منتجات حقيقية مع منصة برنت فيرس للطباعة ثلاثية الأبعاد.
              خدماتنا مصممة لتلبية احتياجاتك بجودة عالية وأسعار تنافسية.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register">
                <Button size="lg" className="tech-gradient text-white">
                  ابدأ الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  تعرف على خدماتنا
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <InteractiveCube />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/50" dir="rtl">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">كيف يعمل <span className="tech-text-gradient">برنت فيرس</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              خطوات بسيطة للحصول على منتجك ثلاثي الأبعاد بأعلى جودة وبأسرع وقت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card hover:shadow-md transition-shadow card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">ارفع التصميم الخاص بك</h3>
                <p className="text-muted-foreground text-center">
                  قم بتحميل نموذجك ثلاثي الأبعاد بصيغة STL أو OBJ أو غيرها
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-md transition-shadow card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">حدد المواصفات</h3>
                <p className="text-muted-foreground text-center">
                  اختر المواد والألوان والمواصفات المناسبة لمشروعك
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-md transition-shadow card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">إتمام الدفع</h3>
                <p className="text-muted-foreground text-center">
                  اختر طريقة الدفع المناسبة وأكمل عملية الشراء بسهولة
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-md transition-shadow card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">استلام المنتج</h3>
                <p className="text-muted-foreground text-center">
                  نقوم بطباعة وشحن منتجك بعناية لتصلك بأعلى جودة
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/new-order">
              <Button size="lg" className="tech-gradient">
                ابدأ طلبك الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" dir="rtl">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لماذا تختار <span className="tech-text-gradient">برنت فيرس</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              خدماتنا المتطورة مصممة لتوفير تجربة ممتازة وجودة لا مثيل لها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start slide-up-animation">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
                <p className="text-muted-foreground">
                  نستخدم أحدث تقنيات الطباعة ثلاثية الأبعاد لضمان أفضل جودة ممكنة للمنتج النهائي.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start slide-up-animation">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">سرعة التنفيذ</h3>
                <p className="text-muted-foreground">
                  نلتزم بجداول زمنية صارمة لضمان تسليم المنتجات في أسرع وقت ممكن.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start slide-up-animation">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ضمان الجودة</h3>
                <p className="text-muted-foreground">
                  نوفر ضمان شامل على جميع منتجاتنا ضد عيوب التصنيع لضمان رضاك التام.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start slide-up-animation">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">تصاميم مخصصة</h3>
                <p className="text-muted-foreground">
                  فريق التصميم لدينا متاح لمساعدتك في إنشاء أو تعديل التصاميم حسب احتياجاتك.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start slide-up-animation">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">تنوع المواد</h3>
                <p className="text-muted-foreground">
                  نوفر مجموعة واسعة من المواد المختلفة لتناسب متطلبات مشروعك المحددة.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start slide-up-animation">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center shrink-0">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">توصيل سريع</h3>
                <p className="text-muted-foreground">
                  خدمة توصيل سريعة وآمنة لجميع أنحاء المملكة العربية السعودية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-printtech-blue to-printtech-green text-white" dir="rtl">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لتحويل أفكارك إلى واقع؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلى الآلاف من العملاء السعداء الذين يستخدمون برنت فيرس للطباعة ثلاثية الأبعاد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="default" className="bg-white text-printtech-blue hover:bg-gray-100">
                سجل الآن
              </Button>
            </Link>
            <Link to="/support">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
