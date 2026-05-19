"use client";

import { useMemo } from "react";

import fashionConfig from "../config/fashionConfig";
import fashionData from "../data/fashionData";

export default function useFashionSearch() {
  return useMemo(
    () => ({
      config: fashionConfig,
      data: fashionData,
    }),
    []
  );
}
