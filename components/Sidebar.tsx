"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home",   href: "/",       icon: "🏠" },
  { label: "Produk", href: "/produk", icon: "🛍️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative shrink-0 border-r transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        border-(--border) bg-[var(--sidebar-bg)] shadow-sm
        ${collapsed ? "w-14" : "w-44"}`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed((v) => !v)}
        aria-label={collapsed ? "Buka menu" : "Tutup menu"}
        className="absolute -right-3 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs text-green-600 shadow transition hover:bg-green-50 dark:hover:bg-green-900"
      >
        {collapsed ? "›" : "‹"}
      </button>

      <div className="px-2 py-5">
        {!collapsed && (
          <p className="font-heading mb-3 px-2 text-sm font-black uppercase tracking-widest text-green-400 dark:text-green-600">
            Menu
          </p>
        )}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`flex items-center rounded-xl px-2 py-2.5 text-sm font-semibold transition-all duration-200
                  ${collapsed ? "justify-center" : "gap-2"}
                  ${isActive
                    ? "bg-green-500 text-white shadow-md"
                    : "text-[var(--fg-muted)] hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-900"
                  }`}
              >
                <span className="text-base">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
