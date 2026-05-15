"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function AppShell({
  sidebar,
  children,
  rightPanel,
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasQuery = Boolean(searchParams.get("q")?.trim());
  const showRightPanel =
    (pathname === "/" && hasQuery) || pathname.startsWith("/search");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F6F7FB]">
      <aside className="hidden h-screen w-[250px] shrink-0 overflow-hidden border-r border-[#E8EBF3] bg-white/88 lg:block">
        {sidebar}
      </aside>

      <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
        <div className={`mx-auto flex w-full min-w-0 flex-col px-4 py-4 transition-all duration-300 sm:px-5 lg:px-7 ${showRightPanel ? "max-w-[1080px]" : "max-w-[980px]"}`}>
          {children}
        </div>
      </main>

      <AnimatePresence initial={false}>
        {showRightPanel ? (
          <motion.aside
            key="right-panel"
            initial={{ width: 0, opacity: 0, x: 16 }}
            animate={{ width: 296, opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="hidden h-screen shrink-0 overflow-hidden border-l border-[#E8EBF3] bg-white/86 xl:block"
          >
            <div className="h-full w-[296px] overflow-y-auto overflow-x-hidden">
              {rightPanel}
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
