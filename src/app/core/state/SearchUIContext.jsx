"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const SearchUIContext = createContext(null);

export function SearchUIProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [isRightPanelExpanded, setIsRightPanelExpanded] = useState(false);
  const [activeExplorer, setActiveExplorer] = useState(null);
  const [activeCategory, setActiveCategory] = useState("generic");

  const openRightPanel = useCallback((product) => {
    setSelectedProduct(product);
    setIsRightPanelOpen(true);
    setIsRightPanelExpanded(false);
  }, []);

  const closeRightPanel = useCallback(() => {
    setSelectedProduct(null);
    setIsRightPanelOpen(false);
    setIsRightPanelExpanded(false);
  }, []);

  const resetRightPanel = useCallback(() => {
    setSelectedProduct(null);
    setIsRightPanelOpen(false);
    setIsRightPanelExpanded(false);
    setActiveExplorer(null);
  }, []);

  const openExplorer = useCallback((type, payload) => {
    setActiveExplorer({ type, payload });
    setSelectedProduct(null);
    setIsRightPanelOpen(false);
    setIsRightPanelExpanded(false);
  }, []);

  const closeExplorer = useCallback(() => {
    setActiveExplorer(null);
  }, []);

  const toggleRightPanelExpanded = useCallback(() => {
    setIsRightPanelExpanded((value) => !value);
  }, []);

  const value = useMemo(
    () => ({
      selectedProduct,
      isRightPanelOpen,
      isRightPanelExpanded,
      activeExplorer,
      activeCategory,
      openRightPanel,
      closeRightPanel,
      openExplorer,
      closeExplorer,
      toggleRightPanelExpanded,
      setActiveCategory,
      resetRightPanel,
    }),
    [
      selectedProduct,
      isRightPanelOpen,
      isRightPanelExpanded,
      activeExplorer,
      activeCategory,
      openRightPanel,
      closeRightPanel,
      openExplorer,
      closeExplorer,
      toggleRightPanelExpanded,
      setActiveCategory,
      resetRightPanel,
    ]
  );

  return (
    <SearchUIContext.Provider value={value}>
      {children}
    </SearchUIContext.Provider>
  );
}

export function useSearchUI() {
  const context = useContext(SearchUIContext);

  if (!context) {
    throw new Error("useSearchUI must be used within SearchUIProvider");
  }

  return context;
}
