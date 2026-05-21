"use client";

import { AnimatePresence, motion } from "framer-motion";

import { desktopRightPanelVariants, mobileRightPanelVariants, panelBackdropVariants } from "@/app/shared/motion/slidePanel";
import { useCategoryModule } from "@/app/shared/hooks/useCategoryModule";
import { useSearchUI } from "@/app/core/state/SearchUIContext";

export default function AppShell({
  sidebar,
  children,
  rightPanel,
}) {
  const {
    activeCategory,
    isRightPanelOpen,
    isRightPanelExpanded,
    closeRightPanel,
  } = useSearchUI();
  const categoryModule = useCategoryModule(activeCategory);
  const panelConfig = categoryModule.config?.rightPanel || {};
  const desktopWidth = isRightPanelExpanded
    ? panelConfig.expandedDesktopWidth || panelConfig.desktopWidth || 390
    : panelConfig.desktopWidth || 390;
  const desktopInnerWidthClass = isRightPanelExpanded
    ? panelConfig.expandedDesktopInnerWidthClass || panelConfig.desktopInnerWidthClass || "w-[390px]"
    : panelConfig.desktopInnerWidthClass || "w-[390px]";
  const mobilePanelClass =
    panelConfig.mobilePanelClass ||
    "fixed inset-x-3 bottom-3 top-16 z-50 overflow-hidden rounded-[28px] border border-[#E6ECF5] bg-white/95 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden";
  const desktopPanelClass =
    panelConfig.desktopPanelClass ||
    "hidden sticky top-0 h-screen shrink-0 overflow-hidden border-l border-[#E6ECF5] bg-white/95 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:flex";

  return (
    <div
      data-right-panel-open={isRightPanelOpen ? "true" : "false"}
      className="flex h-screen min-h-screen w-full overflow-hidden bg-[#FAFAFC]"
      style={{
        "--shell-left-offset": "250px",
        "--shell-right-offset": isRightPanelOpen ? `${desktopWidth}px` : "0px",
        "--search-feed-max-width": "950px",
      }}
    >
      <aside className="hidden h-screen w-[250px] shrink-0 overflow-hidden border-r border-[#E8EBF3] bg-white/88 lg:block">
        {sidebar}
      </aside>

      <main className="relative h-screen flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
        <div className="flex w-full min-w-0 flex-col overflow-x-hidden transition-all duration-500 ease-out">
          {children}
        </div>
      </main>

      <AnimatePresence initial={false}>
        {isRightPanelOpen ? (
          <>
            <motion.div
              key="right-panel-mobile-backdrop"
              variants={panelBackdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed inset-0 z-40 bg-slate-950/16 backdrop-blur-md lg:hidden"
              onClick={closeRightPanel}
            />

            <motion.aside
              key="right-panel-mobile"
              variants={mobileRightPanelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.32, ease: "easeOut" }}
              className={mobilePanelClass}
            >
              <div className="h-full min-w-0 overflow-y-auto overflow-x-hidden">
                {rightPanel}
              </div>
            </motion.aside>

            <motion.aside
              key="right-panel-desktop"
              variants={desktopRightPanelVariants(desktopWidth)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={desktopPanelClass}
            >
              <div className={`h-full min-w-0 overflow-y-auto overflow-x-hidden ${desktopInnerWidthClass}`}>
                {rightPanel}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
