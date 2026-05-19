import { shadows, typography } from "@/app/shared/styles/tokens";

const fashionConfig = {
  team: "fashion",
  ownership:
    "Fashion contributors should keep styling and ranking changes inside this module.",
  stream: {
    rootGapClass: "gap-5",
    headerGapClass: "gap-3",
    headerPaddingTopClass: "pt-0",
    introMarginTopClass: "mt-2",
    sectionsGapClass: "space-y-8",
  },
  row: {
    titleClass:
      "text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1E1726] sm:text-[34px]",
    accentClass:
      "mt-4 h-[2px] w-28 rounded-full bg-gradient-to-r from-[#E7B7D1] via-[#D6B9FF] to-transparent",
  },
  explorer: {
    titleClass: typography.explorerTitle,
    shadowClass: shadows.explorer,
  },
};

export default fashionConfig;
