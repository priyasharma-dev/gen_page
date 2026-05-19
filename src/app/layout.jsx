import "./globals.css";
import AppShell from "@/app/core/layout/AppShell";
import InsightSidebar from "@/app/core/search/InsightSidebar";
import { SearchUIProvider } from "@/app/core/state/SearchUIContext";
import Sidebar from "@/app/shared/ui/Sidebar";

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
