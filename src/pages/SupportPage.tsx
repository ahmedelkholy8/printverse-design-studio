
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, FileQuestion, Phone, Mail, Clock, Plus, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SupportPage = () => {
  // This page is accessible to both logged in and anonymous users
  
  // FAQ data
  const faqCategories = [
    {
      id: "general",
      name: "أسئلة عامة",
      questions: [
        {
          question: "ما هي خدمة الطباعة ثلاثية الأبعاد؟",
          answer: "الطباعة ثلاثية الأبعاد هي عملية إنشاء أجسام ثلاثية الأبعاد من نموذج رقمي. تستخدم تقنية الطباعة ثلاثية الأبعاد عملية إضافية حيث يتم إنشاء الأجسام عن طريق وضع طبقات متتالية من المواد."
        },
        {
          question: "كيف أرفع نموذج ثلاثي الأبعاد؟",
          answer: "يمكنك رفع نموذج ثلاثي الأبعاد عن طريق الذهاب إلى صفحة 'طلب جديد' والنقر على زر 'رفع ملف'. نحن ندعم صيغ الملفات STL و OBJ و 3MF وغيرها."
        },
        {
          question: "هل يمكنني تعديل النموذج بعد رفعه؟",
          answer: "نعم، يمكنك تعديل النموذج بعد رفعه طالما لم يبدأ التصنيع بعد. انتقل إلى 'طلباتي' واختر الطلب الذي تريد تعديله ثم انقر على 'تعديل'."
        }
      ]
    },
    {
      id: "orders",
      name: "الطلبات والتسليم",
      questions: [
        {
          question: "كم من الوقت يستغرق تنفيذ الطلب؟",
          answer: "يعتمد وقت التنفيذ على حجم وتعقيد النموذج والمواد المستخدمة. عادة، تستغرق العملية من 3 إلى 5 أيام عمل للطباعة والشحن."
        },
        {
          question: "هل يمكنني إلغاء طلبي؟",
          answer: "يمكنك إلغاء طلبك فقط إذا لم يبدأ التصنيع بعد. توجه إلى 'طلباتي' واختر الطلب الذي ترغب في إلغائه ثم انقر على 'إلغاء الطلب'."
        },
        {
          question: "كيف يمكنني تتبع طلبي؟",
          answer: "يمكنك تتبع حالة طلبك من خلال الدخول إلى حسابك ثم الذهاب إلى 'طلباتي' والنقر على 'تتبع' بجوار الطلب المطلوب."
        }
      ]
    },
    {
      id: "materials",
      name: "المواد والجودة",
      questions: [
        {
          question: "ما هي المواد المتاحة للطباعة؟",
          answer: "نوفر مجموعة متنوعة من المواد مثل PLA و ABS و PETG و TPU و Nylon وغيرها. كل مادة لها خصائصها ومميزاتها الخاصة."
        },
        {
          question: "ما هو الفرق بين المواد المختلفة؟",
          answer: "PLA هو الأكثر شيوعاً للاستخدامات العامة، ABS متين ومقاوم للحرارة، PETG مرن ومقاوم للماء، TPU مطاطي ومرن، Nylon قوي جداً ومناسب للقطع الهندسية."
        },
        {
          question: "هل تقدمون ضماناً على المنتجات؟",
          answer: "نعم، نقدم ضماناً لمدة 30 يوماً على جميع منتجاتنا ضد عيوب التصنيع. إذا كان هناك أي مشكلة في المنتج، يرجى التواصل مع خدمة العملاء."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">مركز الدعم والمساعدة</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            هل تحتاج إلى مساعدة؟ نحن هنا للإجابة على جميع أسئلتك ومساعدتك في كل خطوة.
          </p>
        </div>

        {/* Quick Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="ابحث عن سؤال..." 
              className="pl-4 pr-10 py-6 text-lg"
            />
          </div>
        </div>

        {/* Support Tabs */}
        <Tabs defaultValue="faq" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <FileQuestion className="h-4 w-4" />
              <span>الأسئلة الشائعة</span>
            </TabsTrigger>
            <TabsTrigger value="ticket" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>فتح تذكرة دعم</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>اتصل بنا</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-6">
                  <Tabs defaultValue={faqCategories[0].id} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      {faqCategories.map((category) => (
                        <TabsTrigger key={category.id} value={category.id}>
                          {category.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {faqCategories.map((category) => (
                      <TabsContent key={category.id} value={category.id}>
                        <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="text-right font-medium">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                
                <div className="border rounded-lg p-6 flex items-center justify-between bg-muted/30">
                  <div>
                    <h3 className="font-bold text-lg mb-1">لم تجد إجابة لسؤالك؟</h3>
                    <p className="text-muted-foreground">تواصل مع فريق الدعم لدينا للحصول على مساعدة مخصصة</p>
                  </div>
                  <Button variant="default">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    فتح تذكرة دعم
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ticket">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">فتح تذكرة دعم جديدة</h2>
                <p className="text-muted-foreground mb-6">
                  يرجى ملء النموذج أدناه بأكبر قدر ممكن من التفاصيل. سيقوم فريق الدعم لدينا بالرد عليك في أقرب وقت ممكن.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input id="name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input id="subject" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="category">الفئة</Label>
                    <select
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                    >
                      <option value="">اختر الفئة</option>
                      <option value="order">استفسار عن طلب</option>
                      <option value="technical">مشكلة تقنية</option>
                      <option value="materials">استفسار عن المواد</option>
                      <option value="pricing">استفسار عن الأسعار</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="order-id">رقم الطلب (إن وجد)</Label>
                    <Input id="order-id" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">الرسالة</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      placeholder="اشرح مشكلتك أو استفسارك بالتفصيل..."
                    ></textarea>
                  </div>
                  <div>
                    <Label htmlFor="attachment">إرفاق ملف (اختياري)</Label>
                    <div className="mt-1 border-2 border-dashed border-muted rounded-lg p-6 text-center cursor-pointer">
                      <Plus className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">اسحب الملفات هنا أو انقر للتحميل</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG، JPG، PDF حتى 10MB</p>
                    </div>
                  </div>
                  <Button className="tech-gradient w-full">
                    إرسال تذكرة الدعم
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">اتصل بنا</h2>
                <p className="text-muted-foreground mb-6">
                  هناك عدة طرق للتواصل مع فريق الدعم لدينا. اختر الطريقة التي تناسبك.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="card-shadow">
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">هاتف</h3>
                      <p className="text-muted-foreground mb-2">متاح من الأحد إلى الخميس</p>
                      <p className="font-medium">+966 55 123 4567</p>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>9 صباحًا - 5 مساءً</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-shadow">
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground mb-2">نرد خلال 24 ساعة</p>
                      <p className="font-medium">support@printverse.com</p>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>24/7</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-shadow">
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-4">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">الدردشة المباشرة</h3>
                      <p className="text-muted-foreground mb-2">تحدث مباشرة مع الدعم</p>
                      <Button className="mt-2">بدء الدردشة</Button>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>9 صباحًا - 9 مساءً</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">المكتب الرئيسي</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-2">شارع الملك فهد، حي الورود</p>
                      <p className="mb-2">الرياض، المملكة العربية السعودية</p>
                      <p className="mb-2">الرمز البريدي: 12345</p>
                    </div>
                    <div className="bg-muted h-40 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">خريطة المكتب</span>
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

export default SupportPage;
