const insuranceConfig = {
  team: "insurance",
  ownership:
    "Insurance contributors should keep provider ranking, card presentation, and details-panel logic inside this module.",
  workspace: {
    threadContainerClass: "pt-6 sm:pt-8 lg:pt-12 pb-[110px] lg:pb-[132px]",
  },
  conversation: {
    wrapperClass: "gap-6",
    assistantStackClass: "gap-4",
    assistantRowClass: "gap-3.5",
    assistantIconClass: "mt-0.5 flex h-9 w-9",
  },
  stream: {
    rootGapClass: "gap-6",
    headerGapClass: "gap-3",
    introMarginTopClass: "mt-2",
    sectionsGapClass: "space-y-8",
    sectionDividerClass:
      "my-8 h-px w-full max-w-[1020px] bg-[linear-gradient(90deg,rgba(203,213,225,0),rgba(203,213,225,0.95),rgba(203,213,225,0))]",
  },
  row: {},
  rightPanel: {
    desktopWidth: 390,
    desktopInnerWidthClass: "w-[390px]",
    mobilePanelClass:
      "fixed inset-x-2 bottom-2 top-14 z-50 overflow-hidden rounded-[28px] border border-[#DCE5F2] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:hidden",
    desktopPanelClass:
      "hidden h-screen shrink-0 overflow-hidden bg-transparent lg:flex",
  },
};

export default insuranceConfig;
