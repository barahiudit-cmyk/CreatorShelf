"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface MenuItem {
  label: string;
  href: string;
  icon: IconType;
  exact?: boolean;
}
interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export default function MenuSection({
  title,
  items,
}: MenuSectionProps) {
  const pathname = usePathname();

  return (
    <div>
      <div
        className="px-4 py-2 text-muted small text-uppercase fw-bold"
        style={{
          fontSize: "10px",
          letterSpacing: "1.5px",
        }}
      >
        {title}
      </div>

      {items.map((item) => {
        const Icon = item.icon;

        const currentPath = pathname.replace(/\/$/, "");

        const active = item.exact
          ? currentPath === item.href
          : currentPath === item.href ||
          currentPath.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`creatorshelf-dashboard-nav-item ${active ? "active" : ""
              }`}
          >
            <Icon />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}