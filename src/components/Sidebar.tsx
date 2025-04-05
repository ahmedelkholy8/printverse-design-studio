
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, PackagePlus, Package, User, Users, Settings, HelpCircle, FileText, LogOut, BarChart2, MessageCircle, Archive, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SidebarProps = {
  userRole?: "client" | "admin" | "supplier" | "partner";
};

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  role: ("client" | "admin" | "supplier" | "partner")[];
};

const navItems: NavItem[] = [
  { title: "الرئيسية", href: "/dashboard", icon: Home, role: ["client", "admin", "supplier", "partner"] },
  { title: "طلب جديد", href: "/new-order", icon: PackagePlus, role: ["client"] },
  { title: "طلباتي", href: "/orders", icon: Package, role: ["client"] },
  { title: "حسابي", href: "/profile", icon: User, role: ["client", "admin", "supplier", "partner"] },
  
  // Admin routes
  { title: "لوحة تحكم المسؤول", href: "/admin", icon: Settings, role: ["admin"] },
  { title: "إدارة المستخدمين", href: "/admin?tab=users", icon: Users, role: ["admin"] },
  { title: "إدارة الطلبات", href: "/admin?tab=orders", icon: Package, role: ["admin"] },
  { title: "التقارير", href: "/admin?tab=reports", icon: BarChart2, role: ["admin"] },
  { title: "مركز الرسائل", href: "/admin?tab=messaging", icon: MessageCircle, role: ["admin"] },
  
  // Supplier routes
  { title: "لوحة تحكم المورد", href: "/supplier", icon: Archive, role: ["supplier"] },
  { title: "إدارة المواد", href: "/supplier?tab=materials", icon: Archive, role: ["supplier"] },
  { title: "الطلبات الواردة", href: "/supplier?tab=orders", icon: Package, role: ["supplier"] },
  { title: "تحديث حالة الطلبات", href: "/supplier?tab=status", icon: FileText, role: ["supplier"] },
  
  // Partner routes
  { title: "لوحة تحكم الشريك", href: "/partner", icon: Wrench, role: ["partner"] },
  { title: "إدارة الطلبات", href: "/partner?tab=orders", icon: Package, role: ["partner"] },
  { title: "تحديث مراحل الإنتاج", href: "/partner?tab=production", icon: Settings, role: ["partner"] },
  { title: "تقارير الأداء", href: "/partner?tab=reports", icon: BarChart2, role: ["partner"] },
  
  // Common routes
  { title: "الدعم", href: "/support", icon: HelpCircle, role: ["client", "admin", "supplier", "partner"] },
];

export function Sidebar({ userRole = "client" }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const filteredNavItems = navItems.filter(item => 
    item.role.includes(userRole)
  );

  return (
    <div
      className={cn(
        "h-screen bg-sidebar border-r border-border flex flex-col transition-all duration-300 sticky top-0 right-0 z-30 rtl",
        collapsed ? "w-16" : "w-64"
      )}
      dir="rtl"
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <span className="text-xl font-bold tech-text-gradient">
            برنت فيرس
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {filteredNavItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                <item.icon className={cn("text-sidebar-primary h-5 w-5")} />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <Link
          to="/logout"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors",
            collapsed ? "justify-center" : "justify-start"
          )}
        >
          <LogOut className="text-destructive h-5 w-5" />
          {!collapsed && <span>تسجيل الخروج</span>}
        </Link>
      </div>
    </div>
  );
}
