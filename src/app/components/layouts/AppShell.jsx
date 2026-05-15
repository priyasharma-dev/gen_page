"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { useSearchUI } from "@/app/components/search/SearchUIContext";

export default function AppShell({
  sidebar,
  children,
  rightPanel,
}) {
  const { isRightPanelOpen, closeRightPanel } = useSearchUI();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F6F7FB]">
      <aside className="hidden h-screen w-[250px] shrink-0 overflow-hidden border-r border-[#E8EBF3] bg-white/88 lg:block">
        {sidebar}
      </aside>

      <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
        <div
          className={`mx-auto flex w-full min-w-0 flex-col px-4 py-4 transition-all duration-300 sm:px-5 lg:px-7 ${
            isRightPanelOpen ? "max-w-[1080px]" : "max-w-[980px]"
          }`}
        >
          {children}
        </div>
      </main>

      <AnimatePresence initial={false}>
        {isRightPanelOpen ? (
          <>
            <motion.div
              key="right-panel-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/20 xl:hidden"
              onClick={closeRightPanel}
            />

            <motion.aside
              key="right-panel-mobile"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 z-50 h-[72vh] rounded-t-[28px] border-t border-[#E8EBF3] bg-white/96 shadow-[0_-24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl xl:hidden"
            >
              <div className="flex h-full min-w-0 flex-col overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#EEF2F7] px-5 py-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-900">Details</p>
                    <p className="text-xs text-gray-500">Focused context for the selected result</p>
                  </div>
                  <button
                    onClick={closeRightPanel}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-gray-500"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
                  {rightPanel}
                </div>
              </div>
            </motion.aside>

            <motion.aside
              key="right-panel-desktop"
              initial={{ width: 0, opacity: 0, x: 16 }}
              animate={{ width: 320, opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: 16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="hidden h-screen shrink-0 overflow-hidden border-l border-[#E8EBF3] bg-white/86 xl:block"
            >
              <div className="flex h-full w-[320px] min-w-0 flex-col overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#EEF2F7] px-5 py-4">
                  <p className="text-sm font-semibold text-gray-900">Details</p>
                  <button
                    onClick={closeRightPanel}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-gray-500 transition hover:bg-gray-50"
                  >
                    <X size={15} />
                  </button>
                </div>
                <div className="h-full min-w-0 overflow-y-auto overflow-x-hidden">
                  {rightPanel}
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
