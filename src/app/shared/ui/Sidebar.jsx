"use client";

import { useRouter } from "next/navigation";
import {
  Menu,
  Plus,
  Sparkles,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="flex h-screen w-full min-w-0 shrink-0 flex-col items-center overflow-x-hidden bg-[#F7F8FA] px-0 py-4">
      <button
        type="button"
        onClick={() => router.push("/")}
        aria-label="Go to home"
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#3267EB] transition hover:bg-white"
      >
        <Sparkles size={18} strokeWidth={2.2} />
      </button>

      <div className="mt-8 flex flex-col items-center gap-6">
        <button
          type="button"
          aria-label="Open navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#6B7280] transition hover:bg-white hover:text-[#111827]"
        >
          <Menu size={18} />
        </button>

        <button
          type="button"
          onClick={() => router.push("/chat/new")}
          aria-label="Create new chat"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-white hover:text-[#3267EB]"
        >
          <Plus size={20} />
        </button>
      </div>
    </aside>
  );
}
