const movieConfig = {
  team: "movie",
  ownership:
    "Movie contributors should keep recommendation cards, editorial summaries, and source/sidebar patterns inside the movie module.",
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
  },
  rightPanel: {
    desktopWidth: 360,
    desktopInnerWidthClass: "w-[360px]",
    desktopPanelClass:
      "hidden h-screen shrink-0 overflow-hidden bg-transparent lg:flex",
  },
};

export default movieConfig;
