
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  MoreHorizontal, UserPlus, Search, Edit, Trash, Ban, 
  ShieldCheck, UserCheck 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const userTypes = [
  { value: "all", label: "الكل" },
  { value: "client", label: "عميل" },
  { value: "supplier", label: "مورد" },
  { value: "partner", label: "شريك" },
  { value: "admin", label: "مسؤول" },
];

const mockUsers = [
  { id: 1, name: "محمد أحمد", email: "mohammed@example.com", role: "client", status: "active", joinDate: "2024-01-15" },
  { id: 2, name: "سارة خالد", email: "sarah@example.com", role: "client", status: "active", joinDate: "2024-02-03" },
  { id: 3, name: "أحمد علي", email: "ahmed@supplier.com", role: "supplier", status: "active", joinDate: "2023-11-20" },
  { id: 4, name: "نور محمد", email: "noor@partner.com", role: "partner", status: "active", joinDate: "2023-12-05" },
  { id: 5, name: "خالد سامي", email: "khaled@example.com", role: "client", status: "suspended", joinDate: "2024-01-25" },
  { id: 6, name: "فاطمة عمر", email: "fatima@admin.com", role: "admin", status: "active", joinDate: "2023-10-10" },
  { id: 7, name: "عمر ياسر", email: "omar@supplier.com", role: "supplier", status: "active", joinDate: "2023-09-22" },
  { id: 8, name: "لينا سعيد", email: "lina@partner.com", role: "partner", status: "suspended", joinDate: "2024-02-15" },
];

export function AdminUserManagement() {
  const [userFilter, setUserFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const filteredUsers = mockUsers.filter(user => {
    // Filter by role
    if (userFilter !== "all" && user.role !== userFilter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        user.name.toLowerCase().includes(query) || 
        user.email.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-purple-500">مسؤول</Badge>;
      case "supplier":
        return <Badge className="bg-blue-500">مورد</Badge>;
      case "partner":
        return <Badge className="bg-green-500">شريك</Badge>;
      default:
        return <Badge className="bg-gray-500">عميل</Badge>;
    }
  };
  
  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-500">نشط</Badge>
    ) : (
      <Badge className="bg-red-500">موقوف</Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">إدارة المستخدمين</h2>
        
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              إضافة مستخدم
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>إضافة مستخدم جديد</DialogTitle>
              <DialogDescription>أدخل معلومات المستخدم الجديد.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">الاسم</Label>
                <Input id="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input id="password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">نوع المستخدم</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="اختر نوع المستخدم" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">عميل</SelectItem>
                    <SelectItem value="supplier">مورد</SelectItem>
                    <SelectItem value="partner">شريك</SelectItem>
                    <SelectItem value="admin">مسؤول</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={() => setIsAddUserOpen(false)}>إضافة</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="البحث عن مستخدم..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={userFilter} onValueChange={setUserFilter}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="نوع المستخدم" />
          </SelectTrigger>
          <SelectContent>
            {userTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Users Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">الرقم</TableHead>
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>نوع المستخدم</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>تاريخ الانضمام</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{new Date(user.joinDate).toLocaleDateString('ar-EG')}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">القائمة</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" /> تعديل
                      </DropdownMenuItem>
                      {user.status === "active" ? (
                        <DropdownMenuItem className="gap-2">
                          <Ban className="h-4 w-4" /> إيقاف
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="gap-2">
                          <UserCheck className="h-4 w-4" /> تنشيط
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="gap-2">
                        <ShieldCheck className="h-4 w-4" /> تعديل الصلاحيات
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-red-500">
                        <Trash className="h-4 w-4" /> حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
