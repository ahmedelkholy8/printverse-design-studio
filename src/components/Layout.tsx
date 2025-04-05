
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

type LayoutProps = {
  children: React.ReactNode;
  showSidebar?: boolean;
  userRole?: "client" | "admin" | "supplier" | "partner";
};

export function Layout({ children, showSidebar = false, userRole }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex flex-1 pt-16">
          {showSidebar && userRole && (
            <Sidebar userRole={userRole} />
          )}
          
          <main className={`flex-1 ${showSidebar ? "mr-16 lg:mr-64" : ""}`}>
            {children}
          </main>
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
