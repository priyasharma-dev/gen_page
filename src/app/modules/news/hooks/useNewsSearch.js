"use client";

import { useMemo } from "react";

import newsConfig from "../config/newsConfig";
import newsData from "../data/newsData";

export default function useNewsSearch() {
  return useMemo(
    () => ({
      config: newsConfig,
      data: newsData,
    }),
    []
  );
}
