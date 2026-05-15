import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ElectronicsLayout from "@/app/components/layouts/ElectronicsLayout";
import FashionLayout from "@/app/components/layouts/FashionLayout";
import FoodLayout from "@/app/components/layouts/FoodLayout";
import NewsLayout from "@/app/components/layouts/NewsLayout";
import SkincareLayout from "@/app/components/layouts/SkincareLayout";

export const layouts = {
  DefaultLayout,
  ElectronicsLayout,
  FashionLayout,
  FoodLayout,
  NewsLayout,
  SkincareLayout,
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
