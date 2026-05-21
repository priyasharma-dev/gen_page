// src/app/core/layout/SearchAxisContainer.jsx
"use client";

/**
 * SearchAxisContainer
 *
 * ONLY centres and caps content width.
 * Offset awareness (sidebar / right panel) lives in globals.css via
 * .floating-search-anchor (left/right CSS props) — NOT here.
 *
 * Usage:
 *   <SearchAxisContainer>…content…</SearchAxisContainer>
 */
export default function SearchAxisContainer({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full px-6 ${className}`}
      style={{ maxWidth: "var(--search-feed-max-width, 1060px)" }}
    >
      {children}
    </div>
  );
}