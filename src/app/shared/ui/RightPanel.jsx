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
    isRightPanelExpanded,
    closeRightPanel,
    openExplorer,
    openRightPanel,
    toggleRightPanelExpanded,
  } = useSearchUI();
  const query = searchParams.get("q") || searchParams.get("query") || "";
  const resolvedQuery = useMemo(() => {
    if (!query.trim()) {
      return null;
    }

    return resolveQuery(query);
  }, [query]);
  const category = resolvedQuery?.category || "generic";
  const categoryModule = useCategoryModule(category);
  const hasDefaultPanelCategory = category === "insurance" || category === "movie";
  const content = useMemo(
    () => categoryModule.getSearchExperienceContent(query, resolvedQuery),
    [categoryModule, query, resolvedQuery]
  );
  const SidebarComponent = categoryModule.RightSidebar || RightSidebar;
  const handleClose = () => {
    if (hasDefaultPanelCategory && selectedProduct) {
      openRightPanel(null);
      return;
    }

    closeRightPanel();
  };

  return (
    <SidebarComponent
      isOpen={isRightPanelOpen}
      isExpanded={isRightPanelExpanded}
      onClose={handleClose}
      onOpenExplorer={openExplorer}
      onToggleExpand={toggleRightPanelExpanded}
      selectedProduct={selectedProduct}
      topRatedProducts={content.topRatedProducts}
      topWebsites={content.topWebsites}
      recentQueries={content.recentQueries}
      relatedSearches={content.relatedSearches}
      collections={content.collections}
      websitePanelTitle={content.websitePanelTitle}
      query={query}
      content={content}
    />
  );
}
