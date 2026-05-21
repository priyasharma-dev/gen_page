"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { fadeUpTransition, fadeUpVariants } from "@/app/shared/motion/fadeUp";
import { useCategoryModule } from "@/app/shared/hooks/useCategoryModule";
import { useSearchUI } from "@/app/core/state/SearchUIContext";

import ExpandedProductExplorer from "./ExpandedProductExplorer";
import ScrollableRecommendationRow from "./ScrollableRecommendationRow";
import StreamingResponse from "@/app/core/engine/StreamingResponse";

export default function SearchResultStream({
  query,
  resolvedQuery,
}) {
  // Core search rendering must stay category-agnostic and only read module contracts.
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const formattedTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setCurrentTime(formattedTime);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const category = resolvedQuery?.category || "generic";
  const categoryModule = useCategoryModule(category);
  const content = useMemo(() => categoryModule.getSearchExperienceContent(), [categoryModule]);
  const {
    activeExplorer,
    openRightPanel,
    closeExplorer,
  } = useSearchUI();
  const ExplorerComponent = categoryModule.Explorer || ExpandedProductExplorer;
  const InsightsComponent = categoryModule.Insights;
  const PostSectionsComponent = categoryModule.PostSections;
  const ResponseComponent = categoryModule.ResponseComponent;
  const streamConfig = categoryModule.config?.stream || {};

  const introText =
    content.conversationalReply?.intro ||
    `I found relevant ${category} results for "${query}".`;

  return (
    <div className={`flex w-full min-w-0 flex-col ${streamConfig.rootGapClass || "gap-6"}`}>
      <motion.div
        variants={fadeUpVariants}
        initial="initial"
        animate="animate"
        className={`flex min-w-0 items-start ${streamConfig.headerGapClass || "gap-4"}`}
      >
        <div className={`min-w-0 ${streamConfig.headerPaddingTopClass || "pt-0.5"}`}>
          <p className="text-[18px] font-medium tracking-[-0.02em] text-[#202636]">
            ANSI
          </p>

          {ResponseComponent ? (
            <ResponseComponent
              text={introText}
              currentTime={currentTime}
            />
          ) : (
            <>
              <div className={`${streamConfig.introMarginTopClass || "mt-3"} min-w-0 max-w-[980px]`}>
                <StreamingResponse
                  text={introText}
                />
              </div>

              <p className="mt-3 text-[14px] text-[#A1A9B7]">
                {currentTime}
              </p>
            </>
          )}
        </div>
      </motion.div>

      <div className="w-full min-w-0">
        {InsightsComponent ? <InsightsComponent content={content} /> : null}

        {activeExplorer ? (
          <div className="mb-8">
            <ExplorerComponent
              key={`${activeExplorer.type}-${activeExplorer.payload?.title || "explorer"}`}
              explorer={activeExplorer}
              onClose={closeExplorer}
              onSelectProduct={openRightPanel}
            />
          </div>
        ) : null}

        <div className={`w-full ${streamConfig.sectionsGapClass || "space-y-9"}`}>
          {content.sections.map((section, index) => (
            <div key={section.id} className="w-full min-w-0">
              <motion.div
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                transition={fadeUpTransition(index * 0.08)}
              >
                <ScrollableRecommendationRow
                  category={category}
                  title={section.title}
                  description={section.description}
                  products={section.products}
                  onSelectCard={openRightPanel}
                />
              </motion.div>
              {streamConfig.sectionDividerClass && index < content.sections.length - 1 ? (
                <div className={streamConfig.sectionDividerClass} />
              ) : null}
            </div>
          ))}
        </div>

        {PostSectionsComponent ? <PostSectionsComponent content={content} /> : null}
      </div>
    </div>
  );
}
