
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl tech-text-gradient">برنت فيرس</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link to="/services" className="font-medium hover:text-primary transition-colors">
              خدماتنا
            </Link>
            <Link to="/pricing" className="font-medium hover:text-primary transition-colors">
              الأسعار
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              من نحن
            </Link>
            <Link to="/support" className="font-medium hover:text-primary transition-colors">
              الدعم
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-xs flex items-center justify-center text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>إشعار جديد</DropdownMenuItem>
                <DropdownMenuItem>تحديث حالة الطلب</DropdownMenuItem>
                <DropdownMenuItem>رسالة من الدعم</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-5 w-5" />
                تسجيل الدخول
              </Button>
            </Link>

            <Link to="/register">
              <Button size="sm" className="tech-gradient">
                التسجيل
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 p-4 animate-fade-in">
          <nav className="flex flex-col gap-4 font-medium text-lg">
            <Link to="/" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </Link>
            <Link to="/services" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              خدماتنا
            </Link>
            <Link to="/pricing" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              الأسعار
            </Link>
            <Link to="/about" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              من نحن
            </Link>
            <Link to="/support" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              الدعم
            </Link>
            <div className="h-px bg-border my-2"></div>
            <div className="flex items-center justify-between">
              <Link to="/login" className="flex items-center gap-2 py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                <User className="h-5 w-5" />
                تسجيل الدخول
              </Link>
              <ThemeToggle />
            </div>
            <Button className="tech-gradient w-full mt-2" onClick={() => setIsMenuOpen(false)}>
              <Link to="/register">التسجيل</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
