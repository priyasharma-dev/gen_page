"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Camera,
  Gamepad2,
  Link2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useSearchUI } from "@/app/components/search/SearchUIContext";
import { getSearchExperienceContent } from "@/lib/data/mockContent";

import ScrollableRecommendationRow from "./ScrollableRecommendationRow";
import StreamingResponse from "./StreamingResponse";

const electronicsRecommendations = [
  {
    id: "phone-1",
    name: "Realme Narzo 90 5G",
    price: "Rs 19,999.00",
    rating: "4.8",
    reviews: "1.2K",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    summary:
      "Best for battery life, featuring a massive 7,000mAh battery and 60W fast charging. It includes a 120Hz display and a dual 50MP AI camera system.",
    availability:
      "Available at Amazon.in in Victory Gold, 8GB+128GB for Rs 19,999.",
  },
  {
    id: "phone-2",
    name: "iQOO Z10x 5G",
    price: "Rs 19,999.00",
    rating: "4.8",
    reviews: "1.2K",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    summary:
      "Best for gaming and smooth everyday use, with a 120Hz AMOLED screen, dependable cooling, and long battery backup for heavy sessions.",
    availability:
      "Available at Flipkart in Ultramarine Blue, 8GB+128GB for Rs 19,999.",
  },
  {
    id: "phone-3",
    name: "Realme Narzo 90 5G",
    price: "Rs 19,999.00",
    rating: "4.8",
    reviews: "1.2K",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179",
    summary:
      "A balanced pick for performance, camera quality, and battery life. The display is bright enough for outdoor use and daily media watching.",
    availability:
      "Available at Amazon.in in Prism Black, 8GB+128GB for Rs 19,999.",
  },
  {
    id: "phone-4",
    name: "Motorola G85 5G",
    price: "Rs 15,999.00",
    rating: "4.7",
    reviews: "980",
    image: "https://images.unsplash.com/photo-1649932542396-0a7838cd0596?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Known for long-term software support, a 6.7-inch Super AMOLED display, and IP54 dust and water resistance.",
    availability:
      "A practical value option at Croma with a strong display and clean software.",
  },
];

const electronicsFeatureRows = [
  ["Connectivity", "Standard 5G support across almost all models."],
  ["Display", "120Hz to 144Hz AMOLED or pOLED screens."],
  ["Battery", "Significant shift towards 6,000mAh to 7,200mAh capacities."],
  ["RAM/Storage", "Typically 8GB RAM and 128GB or 256GB storage."],
];

const electronicsFollowups = [
  { label: "Heavy Gaming", icon: Gamepad2 },
  { label: "Better camera under Rs20K", icon: Camera },
  { label: "Best Battery", icon: BatteryCharging },
  { label: "Most Discount", icon: ShieldCheck },
];

const electronicsSourceSites = [
  {
    id: "site-1",
    title: "Mobile Phones under 20000 Online from Top Brands - Flipkart",
    snippet: "Mobile Phones under 20000 Online from Top Brands. Rs24,999. Rs18,999...",
    source: "Flipkart",
  },
  {
    id: "site-2",
    title: "8 256 Mobile Phone 5g Under 20000 - Amazon.in",
    snippet: "Pova 7 Pro 5G, Neon Cyan, 8GB+256GB with No Cost...",
    source: "Amazon",
  },
  {
    id: "site-3",
    title: "Best Mobile Phone Under 20000 You'll Love May 2026",
    snippet: "5 May 2026 - List of the best mobile phone under 20000: Top picks!",
    source: "Cashify",
  },
];

function RatingStars({ rating }) {
  const filledStars = Math.round(Number(rating) || 0);

  return (
    <span className="flex items-center gap-0.5 text-[#F59E0B]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={13}
          fill={index < filledStars ? "currentColor" : "none"}
          strokeWidth={2}
        />
      ))}
    </span>
  );
}

export default function SearchResultStream({
  query,
  resolvedQuery,
}) {
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

  const content = useMemo(
    () => getSearchExperienceContent(category),
    [category]
  );
  const { openRightPanel } = useSearchUI();

  const introText =
    content.conversationalReply?.intro ||
    `I found relevant ${category} results for "${query}".`;

  if (category === "electronics") {
    return (
      <div className="w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-w-0 items-start gap-3"
        >
          <div className="min-w-0">
            <p className="text-xs text-[#6B7280]">Thought for 8 seconds</p>

            <div className="mt-3 max-w-[680px] text-[15px] leading-7 text-[#202938]">
              <p>
                As of May 2026, the under Rs 20,000 smartphone segment is
                highly competitive, featuring high refresh-rate AMOLED displays,
                large 7,000mAh batteries, and 5G connectivity as standard.
              </p>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px] font-medium text-[#4B5563]">
                DailyHunt +1
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px] font-medium text-[#4B5563]">
                Flipkart +1
              </span>
            </div>

            <section className="mt-6 max-w-[760px]">
              <h2 className="flex items-center gap-2 text-[22px] font-semibold tracking-tight text-[#101828]">
                Top Recommended Mobile Phones under Rs 20,000
                <Link2 size={15} className="text-[#9CA3AF]" />
              </h2>
              <p className="mt-2 text-[14px] leading-6 text-[#6B7280]">
                Based on current expert reviews and user consensus, here are
                the top picks for different needs:
              </p>

              <div className="mt-5 divide-y divide-[#E8ECF2]">
                {electronicsRecommendations.map((phone, index) => (
                  <article
                    key={`${phone.id}-${index}`}
                    className="group grid grid-cols-[112px_1fr] gap-4 py-7 first:pt-0 sm:grid-cols-[130px_1fr] sm:gap-6"
                  >
                    <div className="relative flex h-[120px] w-[112px] items-center justify-center overflow-hidden rounded-2xl border border-[#F1F3F4] bg-[#F0F0F0] p-3 sm:w-[130px]">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="h-full w-full rounded-xl object-contain"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                        <button
                          type="button"
                          onClick={() =>
                            openRightPanel({
                              type: "electronicsProduct",
                              title: phone.name,
                              subtitle: "Mobile Phones under 20000",
                              brand: "Electronics",
                              price: phone.price,
                              rating: phone.rating,
                              reviews: phone.reviews,
                              image: phone.image,
                              description: phone.summary,
                              sources: electronicsSourceSites,
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#111827] shadow-lg transition hover:scale-105"
                        >
                          Open Product
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[16px] font-semibold text-[#111827]">
                        {phone.name}
                      </h3>
                      <p className="mt-1 text-[14px] font-semibold text-[#111827]">
                        {phone.price}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-1 text-[13px] text-[#111827]">
                        <span>{phone.rating}</span>
                        <RatingStars rating={phone.rating} />
                        <span>({phone.reviews})</span>
                      </div>

                      <p className="mt-3 text-[14px] leading-6 text-[#374151]">
                        {phone.summary}
                      </p>
                      <p className="mt-3 text-[14px] leading-6 text-[#374151]">
                        <span className="mr-2">-</span>
                        {phone.availability}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-7 max-w-[760px]">
              <h2 className="text-[18px] font-semibold text-[#101828]">
                Comparison of Key Features
              </h2>

              <div className="mt-4 overflow-hidden border-y border-[#E5E7EB]">
                {electronicsFeatureRows.map(([feature, detail]) => (
                  <div
                    key={feature}
                    className="grid grid-cols-[150px_1fr] border-b border-[#E5E7EB] py-3 last:border-b-0"
                  >
                    <p className="text-[13px] font-semibold text-[#111827]">
                      {feature}
                    </p>
                    <p className="text-[13px] leading-6 text-[#374151]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-7 max-w-[760px]">
              <p className="text-[15px] leading-6 text-[#374151]">
                Are you looking for a phone specifically for{" "}
                <span className="font-semibold text-[#111827]">
                  Heavy Gaming
                </span>{" "}
                or one with best{" "}
                <span className="font-semibold text-[#111827]">
                  camera Quality
                </span>
                ?
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {electronicsFollowups.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#1F2937] shadow-sm transition hover:border-[#C9D6F5] hover:text-[#3267EB]"
                    >
                      <Icon size={14} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 text-xs text-[#9CA3AF]">
                AI can make mistakes, so double-check responses.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-w-0 flex-col gap-7">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-w-0 items-start gap-3"
      >
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-gray-800">
            ANSI
          </p>

          <div className="mt-2 max-w-[640px] min-w-0">
            <StreamingResponse
              text={introText}
            />
          </div>

          <p className="mt-2 text-xs text-gray-400">
            {currentTime}
          </p>
        </div>
      </motion.div>

      <div className="ml-11 min-w-0">
        {category === "fashion" ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,240,245,0.78),rgba(245,247,255,0.92))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
          >
            <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A4D7A]">
                  <Sparkles size={12} />
                  Editorial fashion curation
                </div>
                <h3 className="mt-4 break-words text-[32px] font-semibold tracking-[-0.04em] text-[#1F1726] sm:text-[38px]">
                  Luxury styling directions tailored to your fashion search
                </h3>
                <p className="mt-3 max-w-2xl break-words text-[15px] leading-7 text-[#6B6174]">
                  Larger cards, softer gradients, and premium collections help the fashion journey feel more editorial and less like a standard product grid.
                </p>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3">
                {["Curated drops", "Premium edits", "Scroll to explore"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm font-medium text-[#4E4156] shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        <div className="space-y-10">
          {content.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <ScrollableRecommendationRow
                category={category}
                title={section.title}
                description={section.description}
                products={section.products}
                onSelectCard={openRightPanel}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
