"use client";

import { useMemo } from "react";

import insuranceConfig from "../config/insuranceConfig";
import insuranceData from "../data/insuranceData";

export default function useInsuranceSearch() {
  return useMemo(
    () => ({
      config: insuranceConfig,
      data: insuranceData,
    }),
    []
  );
}
