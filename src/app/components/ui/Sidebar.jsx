"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Plus,
  Menu,
  MoreVertical,
  Sparkles,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { navItems } from "./sidebarNav";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const recentChats = [
    { label: "Western dresses for women", meta: "Just now", path: "/chat/style-search" },
    { label: "Summer outfits under ₹1500", meta: "2h ago", path: "/chat/summer-outfits" },
    { label: "CRM dashboard", meta: "Yesterday", path: "/chat/crm-dashboard" },
    { label: "Invoice generator", meta: "2 days ago", path: "/chat/invoice-generator" },
    { label: "Marketing campaign ideas", meta: "3 days ago", path: "/chat/marketing-campaigns" },
  ];

  const resolvedNavItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        active: item.match.some((prefix) =>
          prefix === "/" ? pathname === "/" : pathname.startsWith(prefix)
        ),
      })),
    [pathname]
  );

  return (
    <aside className="flex h-screen w-full min-w-0 shrink-0 flex-col justify-between overflow-x-hidden bg-white px-5 py-4">
      <div className="flex min-w-0 flex-col gap-5">
        <div className="flex min-w-0 items-center justify-between gap-3 pb-2">
          <div className="min-w-0">
            <h1 className="break-words text-[15px] font-bold tracking-tight text-[#3267EB]">
              ANSI
            </h1>
            <p className="break-words text-[11px] uppercase tracking-[0.16em] text-gray-400">
              AI assistant by anslation
            </p>
          </div>

          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-gray-500 transition hover:bg-gray-100">
            <Menu size={18} />
          </button>
        </div>

        <button
          onClick={() => router.push("/chat/new")}
          className="group flex h-10 w-full min-w-0 items-center justify-center gap-2 rounded-[14px] bg-[#3267EB] px-4 text-sm font-medium text-white shadow-[0_10px_22px_rgba(50,103,235,0.22)] transition hover:bg-[#2558db]"
        >
          <Plus size={15} />
          New Chat
        </button>

        <div className="w-full min-w-0 space-y-1.5 pt-2">
          {resolvedNavItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`flex h-10 w-full min-w-0 items-center gap-3 rounded-xl px-3 text-left text-[15px] transition ${
                  item.active
                    ? "bg-[#F4F7FD] font-medium text-gray-900"
                    : "text-gray-500 hover:bg-[#F7F8FB] hover:text-gray-900"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-current">
                  <Icon size={16} />
                </span>
                <span className="min-w-0 break-words">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="pt-2">
          <div className="mb-3 flex min-w-0 items-center justify-between gap-2 px-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
              Recent chats
            </p>
            <Clock3 size={13} className="text-gray-400" />
          </div>

          <div className="space-y-1.5">
            {recentChats.map((chat, index) => (
              <button
                key={chat.path}
                onClick={() => router.push(chat.path)}
                className={`w-full rounded-[12px] px-3 py-2.5 text-left transition ${
                  index === 0
                    ? "bg-[#F5F8FF]"
                    : "hover:bg-[#F8F9FC]"
                }`}
              >
                <div className="flex min-w-0 items-start gap-3">
                  <div className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${index === 0 ? "bg-[#3267EB]" : "bg-gray-300"}`} />
                  <div className="min-w-0">
                    <p className={`break-words text-[14px] leading-5 ${index === 0 ? "font-medium text-[#3267EB]" : "text-gray-600"}`}>
                      {chat.label}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">{chat.meta}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button className="mt-4 inline-flex items-center gap-2 px-1 text-sm text-gray-500 transition hover:text-gray-900">
            View all chats
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className="w-full min-w-0 rounded-[18px] border border-[#ECEFF5] bg-white p-3 shadow-sm">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F68ED8] text-sm font-semibold text-white">
              P
            </div>
            <div className="min-w-0">
              <p className="break-words text-sm font-medium text-gray-900">Priya</p>
              <p className="break-words text-xs text-gray-400">priya@anslation.com</p>
            </div>
          </div>

          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
