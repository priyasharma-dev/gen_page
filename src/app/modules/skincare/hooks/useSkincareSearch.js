"use client";

import { useMemo } from "react";

import skincareConfig from "../config/skincareConfig";
import skincareData from "../data/skincareData";

export default function useSkincareSearch() {
  return useMemo(
    () => ({
      config: skincareConfig,
      data: skincareData,
    }),
    []
  );
}
