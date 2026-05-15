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
  const [selectedCard, setSelectedCard] = useState(null);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const openRightPanel = useCallback((card) => {
    setSelectedCard(card);
    setIsRightPanelOpen(true);
  }, []);

  const closeRightPanel = useCallback(() => {
    setIsRightPanelOpen(false);
  }, []);

  const resetRightPanel = useCallback(() => {
    setSelectedCard(null);
    setIsRightPanelOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      selectedCard,
      isRightPanelOpen,
      openRightPanel,
      closeRightPanel,
      resetRightPanel,
    }),
    [
      selectedCard,
      isRightPanelOpen,
      openRightPanel,
      closeRightPanel,
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
