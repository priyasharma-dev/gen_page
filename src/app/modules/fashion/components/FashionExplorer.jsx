"use client";

import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import FashionFilters from "./FashionFilters";

export default function FashionExplorer(props) {
  return (
    <ExpandedProductExplorer
      {...props}
      FiltersComponent={FashionFilters}
    />
  );
}
