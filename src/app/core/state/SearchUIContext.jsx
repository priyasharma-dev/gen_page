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
  const [activeExplorer, setActiveExplorer] = useState(null);

  const openRightPanel = useCallback((product) => {
    setSelectedProduct(product);
    setIsRightPanelOpen(true);
  }, []);

  const closeRightPanel = useCallback(() => {
    setSelectedProduct(null);
    setIsRightPanelOpen(false);
  }, []);

  const resetRightPanel = useCallback(() => {
    setSelectedProduct(null);
    setIsRightPanelOpen(false);
    setActiveExplorer(null);
  }, []);

  const openExplorer = useCallback((type, payload) => {
    setActiveExplorer({ type, payload });
    setSelectedProduct(null);
    setIsRightPanelOpen(false);
  }, []);

  const closeExplorer = useCallback(() => {
    setActiveExplorer(null);
  }, []);

  const value = useMemo(
    () => ({
      selectedProduct,
      isRightPanelOpen,
      activeExplorer,
      openRightPanel,
      closeRightPanel,
      openExplorer,
      closeExplorer,
      resetRightPanel,
    }),
    [
      selectedProduct,
      isRightPanelOpen,
      activeExplorer,
      openRightPanel,
      closeRightPanel,
      openExplorer,
      closeExplorer,
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
