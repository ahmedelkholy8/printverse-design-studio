
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto flex items-center justify-center min-h-[60vh] px-4 py-16" dir="rtl">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <FileQuestion className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="tech-gradient w-full md:w-auto">
                <Home className="mr-2 h-4 w-4" />
                العودة للصفحة الرئيسية
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="w-full md:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              العودة للصفحة السابقة
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
