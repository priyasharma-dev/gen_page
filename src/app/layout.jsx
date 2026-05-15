import "./globals.css";
import AppShell from "@/app/components/layouts/AppShell";
import { SearchUIProvider } from "@/app/components/search/SearchUIContext";
import Sidebar from "@/app/components/ui/Sidebar";
import InsightSidebar from "@/app/components/search/InsightSidebar";

export const metadata = {
  title: "ANSI",
  description: "Dynamic AI-powered search interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden bg-[#FAFAFC] text-gray-900 antialiased">
        <SearchUIProvider>
          <AppShell
            sidebar={<Sidebar />}
            rightPanel={<InsightSidebar />}
          >
            {children}
          </AppShell>
        </SearchUIProvider>
      </body>
    </html>
  );
}
