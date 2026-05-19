"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import RightSidebar from "@/app/core/search/RightSidebar";
import { useSearchUI } from "@/app/core/state/SearchUIContext";
import { useCategoryModule } from "@/app/shared/hooks/useCategoryModule";
import { resolveQuery } from "@/lib/query/resolver";

export default function RightPanel() {
  const searchParams = useSearchParams();
  const {
    selectedProduct,
    isRightPanelOpen,
    closeRightPanel,
    openExplorer,
  } = useSearchUI();
  const query = searchParams.get("q") || searchParams.get("query") || "";
  const category = useMemo(() => {
    if (!query.trim()) {
      return "generic";
    }

    return resolveQuery(query).category;
  }, [query]);
  const categoryModule = useCategoryModule(category);
  const content = useMemo(() => categoryModule.getSearchExperienceContent(), [categoryModule]);

  return (
    <RightSidebar
      isOpen={isRightPanelOpen}
      onClose={closeRightPanel}
      onOpenExplorer={openExplorer}
      selectedProduct={selectedProduct}
      topRatedProducts={content.topRatedProducts}
      topWebsites={content.topWebsites}
      recentQueries={content.recentQueries}
    />
  );
}
