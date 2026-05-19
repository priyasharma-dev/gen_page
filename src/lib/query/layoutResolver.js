import DefaultLayout from "@/app/core/layout/DefaultLayout";
import { CATEGORY_REGISTRY } from "@/app/modules/categoryRegistry";
import NewsLayout from "@/app/modules/news/layouts/NewsLayout";

export const layouts = {
  DefaultLayout,
  NewsLayout,
  ...Object.values(CATEGORY_REGISTRY).reduce((accumulator, categoryModule) => {
    if (categoryModule.Layout) {
      accumulator[categoryModule.Layout.name] = categoryModule.Layout;
    }

    return accumulator;
  }, {}),
};

export function getLayoutComponent(layoutName) {
  const layout = layouts[layoutName];

  if (!layout && typeof window !== "undefined") {
    console.warn(
      `[ANSI] Missing layout "${layoutName}". Falling back to DefaultLayout.`
    );
  }

  return layout || DefaultLayout;
}
