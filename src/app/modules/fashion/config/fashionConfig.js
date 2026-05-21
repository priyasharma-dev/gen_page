import { shadows, typography } from "@/app/shared/styles/tokens";

const fashionConfig = {
  team: "fashion",
  ownership:
    "Fashion contributors should keep styling and ranking changes inside this module.",
  container: {
    closedMaxClass: "max-w-[1020px]",
    openMaxClass: "max-w-[1020px]",
    paddingClass: "px-4 sm:px-6 lg:px-8",
  },
  workspace: {
    threadContainerClass: "pt-6 sm:pt-8 lg:pt-14 pb-[110px] lg:pb-[130px]",
  },
  conversation: {
    wrapperClass: "gap-6",
    assistantStackClass: "gap-4",
    assistantRowClass: "gap-3.5",
    assistantIconClass: "mt-0.5 flex h-9 w-9",
  },
  stream: {
    rootGapClass: "gap-5",
    headerGapClass: "gap-3",
    headerPaddingTopClass: "pt-0.5",
    introMarginTopClass: "mt-2",
    sectionsGapClass: "space-y-10",
    sectionDividerClass: "my-10 h-px w-full max-w-[1020px] bg-[#E2E8F0]",
  },
  row: {
    trackClass: "gap-4 lg:gap-5",
  },
  explorer: {
    titleClass: typography.explorerTitle,
    shadowClass: shadows.explorer,
  },
  rightPanel: {
    desktopWidth: 420,
    desktopInnerWidthClass: "w-[420px]",
    expandedDesktopWidth: 520,
    expandedDesktopInnerWidthClass: "w-[520px]",
    mobilePanelClass:
      "fixed inset-x-0 bottom-0 top-12 z-50 overflow-hidden rounded-t-[30px] border-t border-[#E6ECF5] bg-white shadow-[0_-24px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:hidden",
    desktopPanelClass:
      "hidden h-screen shrink-0 overflow-hidden border-l border-[#E6ECF5] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.12)] lg:flex",
  },
};

export default fashionConfig;
