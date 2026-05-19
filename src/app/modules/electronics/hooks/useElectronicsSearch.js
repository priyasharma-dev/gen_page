"use client";

import { useMemo } from "react";

import electronicsConfig from "../config/electronicsConfig";
import electronicsData from "../data/electronicsData";

export default function useElectronicsSearch() {
  return useMemo(
    () => ({
      config: electronicsConfig,
      data: electronicsData,
    }),
    []
  );
}
