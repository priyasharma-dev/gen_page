"use client";

import { useMemo } from "react";

import foodConfig from "../config/foodConfig";
import foodData from "../data/foodData";

export default function useFoodSearch() {
  return useMemo(
    () => ({
      config: foodConfig,
      data: foodData,
    }),
    []
  );
}
