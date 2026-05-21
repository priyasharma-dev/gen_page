import assert from "node:assert/strict";

import insuranceData from "../src/app/modules/insurance/data/insuranceData.js";
import {
  getInitialInsuranceFlowState,
  getInsuranceComparisonUrl,
  getInsuranceDetailUrl,
  isInsuranceProviderSelected,
  resolveInsuranceVariation,
  shouldShowInsuranceWebsitesPanel,
} from "../src/app/modules/insurance/routing/variation.js";

const flowState = getInitialInsuranceFlowState();
assert.equal(flowState.selectedProvider, null, "Expected selectedProvider to start as null.");
assert.equal(
  shouldShowInsuranceWebsitesPanel(flowState.selectedProvider),
  true,
  "Expected Top Websites panel to show when selectedProvider is null."
);

const comparisonContent = insuranceData.getSearchExperienceContent(
  "best cheap auto insurance in USA",
  {
    entities: { productType: "auto insurance", location: "USA" },
    intent: { type: "compare" },
  }
);

assert.equal(
  comparisonContent.websitePanelTitle,
  "Top Websites to Buy Auto Insurance",
  "Expected default insurance sidebar title."
);

assert.equal(
  comparisonContent.topWebsites.length,
  7,
  "Expected seven website/source links in the default websites panel."
);

assert.deepEqual(
  comparisonContent.topWebsites.map((site) => site.name),
  [
    "NerdWallet",
    "The Zebra",
    "Liberty Mutual",
    "FARMERS",
    "Nationwide",
    "TRAVELERS",
    "Esurance",
  ],
  "Expected the ranked insurance source list to match the product spec."
);

assert.equal(
  resolveInsuranceVariation("best cheap auto insurance in USA"),
  "comparison",
  "Expected default auto-insurance prompt to use comparison variation."
);

assert.equal(
  resolveInsuranceVariation("trusted reliable auto insurance"),
  "trust",
  "Expected trusted/reliable prompt to use trust variation."
);

assert.equal(
  resolveInsuranceVariation("best insurance for new drivers"),
  "preference",
  "Expected personalized new-driver prompt to use preference variation."
);

assert.equal(
  getInsuranceComparisonUrl("best cheap auto insurance in USA"),
  "/insurance/comparison?q=best%20cheap%20auto%20insurance%20in%20USA",
  "Expected Quick Comparison redirect URL."
);

assert.equal(
  getInsuranceDetailUrl("best cheap auto insurance in USA", "insurance-geico"),
  "/insurance/providers/insurance-geico?q=best%20cheap%20auto%20insurance%20in%20USA",
  "Expected provider detail redirect URL."
);

assert.equal(
  isInsuranceProviderSelected("insurance-geico", "insurance-geico"),
  true,
  "Expected matching provider selection to be active."
);

assert.equal(
  isInsuranceProviderSelected("insurance-geico", "insurance-state-farm"),
  false,
  "Expected only the selected provider to receive the active state."
);

console.log("Insurance variation tests passed.");
