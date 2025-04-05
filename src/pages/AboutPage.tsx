
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "المؤسس والرئيس التنفيذي",
      image: "https://placehold.co/300x300/0891B2/FFFFFF?text=Ahmed&font=Poppins",
      bio: "خبرة أكثر من 10 سنوات في مجال التصنيع الرقمي والطباعة ثلاثية الأبعاد"
    },
    {
      name: "سارة العلي",
      role: "مدير التكنولوجيا",
      image: "https://placehold.co/300x300/0891B2/FFFFFF?text=Sarah&font=Poppins",
      bio: "متخصصة في تطوير أنظمة الطباعة ثلاثية الأبعاد وتحسين جودة المنتجات"
    },
    {
      name: "خالد السعيد",
      role: "مدير العمليات",
      image: "https://placehold.co/300x300/0891B2/FFFFFF?text=Khalid&font=Poppins",
      bio: "خبير في إدارة سلاسل التوريد وتحسين كفاءة الإنتاج والعمليات التشغيلية"
    },
    {
      name: "نورة الشمري",
      role: "مدير خدمة العملاء",
      image: "https://placehold.co/300x300/0891B2/FFFFFF?text=Noura&font=Poppins",
      bio: "متخصصة في تجربة العملاء وضمان تقديم أعلى مستويات الخدمة والدعم"
    }
  ];
  
  // Milestones data
  const milestones = [
    { year: "2018", title: "تأسيس الشركة", description: "بدأت شركة برنت فيرس كفكرة طموحة لتقديم خدمات الطباعة ثلاثية الأبعاد في المملكة العربية السعودية" },
    { year: "2019", title: "افتتاح أول مركز إنتاج", description: "افتتاح أول مركز إنتاج متكامل في الرياض مع أحدث تقنيات الطباعة ثلاثية الأبعاد" },
    { year: "2020", title: "توسيع الخدمات", description: "إضافة خدمات التصميم والنمذجة الرقمية لتقديم حلول متكاملة لعملائنا" },
    { year: "2021", title: "الشراكات الاستراتيجية", description: "تكوين شراكات استراتيجية مع كبرى الشركات المحلية والعالمية في مجال الطباعة ثلاثية الأبعاد" },
    { year: "2022", title: "التوسع الإقليمي", description: "افتتاح فروع جديدة في جدة والدمام لتغطية جميع مناطق المملكة" },
    { year: "2023", title: "إطلاق المنصة الرقمية", description: "إطلاق منصة برنت فيرس الرقمية لتسهيل طلب وتتبع خدمات الطباعة ثلاثية الأبعاد" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-printtech-blue/10 to-printtech-green/10 rounded-2xl -z-10"></div>
          <div className="max-w-4xl mx-auto text-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              برنت فيرس هي شركة رائدة في مجال الطباعة ثلاثية الأبعاد في المملكة العربية السعودية.
              نسعى لتقديم حلول مبتكرة وعالية الجودة لتحويل أفكار عملائنا إلى منتجات حقيقية باستخدام أحدث تقنيات الطباعة ثلاثية الأبعاد.
            </p>
          </div>
        </div>

        {/* About Tabs */}
        <Tabs defaultValue="company" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>الشركة</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>فريق العمل</span>
            </TabsTrigger>
            <TabsTrigger value="policies" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>السياسات</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="company">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">قصتنا</h2>
                    <p className="text-muted-foreground mb-4">
                      بدأت برنت فيرس في عام 2018 كشركة ناشئة تهدف إلى تقديم خدمات الطباعة ثلاثية الأبعاد الاحترافية في المملكة العربية السعودية. 
                      في ذلك الوقت، كانت تقنية الطباعة ثلاثية الأبعاد في بداياتها في المنطقة، وكانت رؤيتنا هي جعل هذه التقنية المتطورة متاحة للجميع.
                    </p>
                    <p className="text-muted-foreground">
                      مع مرور السنوات، توسعنا من مكتب صغير في الرياض إلى شركة رائدة في المجال مع مراكز إنتاج متعددة في أنحاء المملكة. 
                      اليوم، نفتخر بخدمة آلاف العملاء من الأفراد والشركات والمؤسسات التعليمية.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">رؤيتنا ورسالتنا</h2>
                    <div className="border rounded-lg p-4 mb-4">
                      <h3 className="font-bold mb-2">رؤيتنا</h3>
                      <p className="text-muted-foreground">
                        أن نصبح الشريك المفضل في المملكة العربية السعودية والمنطقة لخدمات الطباعة ثلاثية الأبعاد والتصنيع الرقمي، ودعم رؤية المملكة 2030 في التحول التقني والصناعي.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">رسالتنا</h3>
                      <p className="text-muted-foreground">
                        تقديم حلول مبتكرة وعالية الجودة في مجال الطباعة ثلاثية الأبعاد، وتمكين عملائنا من تحويل أفكارهم إلى منتجات واقعية بسهولة وكفاءة وبأسعار تنافسية.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">قيمنا</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="border rounded-lg p-4 hover:border-primary transition-colors card-shadow">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">الجودة</h3>
                    <p className="text-sm text-muted-foreground">
                      نلتزم بتقديم منتجات وخدمات بأعلى معايير الجودة باستخدام أحدث التقنيات والمواد.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 hover:border-primary transition-colors card-shadow">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">الابتكار</h3>
                    <p className="text-sm text-muted-foreground">
                      نسعى دائمًا لتطوير حلول مبتكرة ومواكبة أحدث التطورات في مجال الطباعة ثلاثية الأبعاد.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 hover:border-primary transition-colors card-shadow">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">التميز في الخدمة</h3>
                    <p className="text-sm text-muted-foreground">
                      نركز على تقديم تجربة عملاء استثنائية من خلال خدمة عملاء متميزة ودعم فني احترافي.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">تاريخنا ومراحل التطور</h2>
                <div className="relative border-r-2 border-primary/30 pr-8 mb-10">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute right-[-33px] top-0 w-6 h-6 rounded-full bg-primary"></div>
                      <div className="mb-2">
                        <span className="text-lg font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted/30 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">انضم إلى رحلتنا</h3>
                    <p className="text-muted-foreground max-w-lg">
                      نحن في برنت فيرس نؤمن بأن الطباعة ثلاثية الأبعاد هي مستقبل التصنيع. انضم إلينا لتكون جزءًا من هذا المستقبل.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link to="/register">
                      <Button className="tech-gradient">
                        ابدأ الآن
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">فريق العمل</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl">
                  يتكون فريق برنت فيرس من خبراء متخصصين في مجال الطباعة ثلاثية الأبعاد والتصنيع الرقمي. 
                  نجمع بين الخبرة التقنية والإبداع لتقديم أفضل الخدمات لعملائنا.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden hover-scale card-shadow">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-primary text-sm mb-2">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-10" />
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">انضم إلى فريقنا</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    نحن دائماً نبحث عن المواهب المتميزة للانضمام إلى فريقنا. إذا كنت شغوفاً بالتكنولوجيا والابتكار، فنحن نرحب بك.
                  </p>
                  <Button className="tech-gradient">اطلع على الوظائف المتاحة</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="policies">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">سياساتنا</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl">
                  في برنت فيرس، نلتزم بتطبيق سياسات واضحة وشفافة تضمن حقوق جميع الأطراف. 
                  يرجى الاطلاع على السياسات التالية للتعرف على شروط استخدام خدماتنا.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">شروط الاستخدام</h3>
                    <div className="border rounded-lg p-4">
                      <p className="text-muted-foreground mb-4">
                        هذه الشروط ("الشروط") تحكم استخدامك لخدمات برنت فيرس للطباعة ثلاثية الأبعاد، بما في ذلك الموقع الإلكتروني والمنصة والخدمات المقدمة.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط. يرجى قراءتها بعناية.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">1. استخدام الخدمات</h4>
                        <p className="text-sm text-muted-foreground">
                          يجب عليك استخدام خدماتنا وفقًا للقوانين واللوائح المعمول بها. لا يجوز استخدام خدماتنا لأغراض غير قانونية أو محظورة بموجب هذه الشروط.
                        </p>
                        
                        <h4 className="font-medium">2. حقوق الملكية الفكرية</h4>
                        <p className="text-sm text-muted-foreground">
                          أنت تحتفظ بجميع حقوق الملكية الفكرية للنماذج والتصاميم التي تقوم بتحميلها على منصتنا. ومع ذلك، فإنك تمنحنا ترخيصًا لاستخدام هذه النماذج لغرض تقديم خدماتنا لك.
                        </p>
                        
                        <h4 className="font-medium">3. المسؤولية والتعويض</h4>
                        <p className="text-sm text-muted-foreground">
                          أنت مسؤول عن التأكد من أن النماذج والتصاميم التي تقوم بتحميلها لا تنتهك حقوق الملكية الفكرية للآخرين. وتوافق على تعويضنا ضد أي مطالبات تنشأ عن انتهاك حقوق الآخرين.
                        </p>
                      </div>
                      <Button variant="link" className="text-primary p-0 h-auto mt-2">
                        قراءة شروط الاستخدام كاملة
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">سياسة الخصوصية</h3>
                    <div className="border rounded-lg p-4">
                      <p className="text-muted-foreground mb-4">
                        نحن نأخذ خصوصية معلوماتك على محمل الجد. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام خدماتنا.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">1. المعلومات التي نجمعها</h4>
                        <p className="text-sm text-muted-foreground">
                          نجمع معلومات شخصية مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف وعنوان الشحن عند تسجيل حساب أو تقديم طلب.
                        </p>
                        
                        <h4 className="font-medium">2. كيفية استخدام المعلومات</h4>
                        <p className="text-sm text-muted-foreground">
                          نستخدم معلوماتك لتقديم خدماتنا، ومعالجة الطلبات، والتواصل معك، وتحسين خدماتنا. لن نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة.
                        </p>
                        
                        <h4 className="font-medium">3. حماية المعلومات</h4>
                        <p className="text-sm text-muted-foreground">
                          نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول أو الكشف أو التعديل غير المصرح به.
                        </p>
                      </div>
                      <Button variant="link" className="text-primary p-0 h-auto mt-2">
                        قراءة سياسة الخصوصية كاملة
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">سياسة الاسترجاع والإلغاء</h3>
                    <div className="border rounded-lg p-4">
                      <p className="text-muted-foreground mb-4">
                        نحن نسعى لضمان رضاك التام عن خدماتنا. توضح سياسة الاسترجاع والإلغاء هذه الشروط والظروف التي يمكنك فيها إلغاء طلبك أو طلب استرداد المبلغ المدفوع.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">1. إلغاء الطلب</h4>
                        <p className="text-sm text-muted-foreground">
                          يمكنك إلغاء طلبك في أي وقت قبل بدء التصنيع. بمجرد بدء التصنيع، لا يمكن إلغاء الطلب.
                        </p>
                        
                        <h4 className="font-medium">2. استرداد المبلغ</h4>
                        <p className="text-sm text-muted-foreground">
                          إذا كان المنتج المستلم يحتوي على عيوب في التصنيع، يمكنك طلب استرداد المبلغ أو إعادة الطباعة في غضون 14 يومًا من استلام المنتج.
                        </p>
                        
                        <h4 className="font-medium">3. الحالات غير المؤهلة للاسترداد</h4>
                        <p className="text-sm text-muted-foreground">
                          لا يمكن استرداد المبلغ إذا كان المنتج مطابقًا للتصميم المقدم، أو إذا كانت المشكلة ناتجة عن خطأ في التصميم الأصلي.
                        </p>
                      </div>
                      <Button variant="link" className="text-primary p-0 h-auto mt-2">
                        قراءة سياسة الاسترجاع كاملة
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AboutPage;
