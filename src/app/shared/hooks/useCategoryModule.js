"use client";

import { useMemo } from "react";

import { getCategoryModule } from "@/app/modules/categoryRegistry";

export function useCategoryModule(category) {
  return useMemo(() => getCategoryModule(category), [category]);
}
