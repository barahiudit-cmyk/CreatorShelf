"use client";

import { FiX, FiMenu } from "react-icons/fi";

import MenuSection from "./MenuSection";
import { menuSections } from "./data/MenuData";
import Image from "next/image";
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  toggle: () => void;
}

export default function Sidebar({
  isOpen,
  toggle,
  isMobile,
}: SidebarProps) {
  return (
    <aside
      className={`creatorshelf-dashboard-sidebar ${!isOpen ? "collapsed" : ""
        }`}
    >
      <div className="px-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">

          <Link href="/" className=" d-flex flex-column" >
            <Image
              src="/images/logos/Creator-horizentail-logo.png"
              alt="CreatorShelf Logo"
              width={140}
              height={60}
              priority
            />
         </Link>
        </div>

        <button
          className="btn text-white p-0 border-0"
          onClick={toggle}
        >
          {isMobile ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <nav className="mt-3 flex-grow-1">
        {menuSections.map((section) => (
          <MenuSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </nav>

      <div className="p-4">
      <Link href="/dashboard/UpgradePlan">
        <button
          className="btn w-100 py-2 fw-bold text-white shadow-none"
          style={{ background: "var(--primary)" }}
        >
          Upgrade to Pro
        </button>
      </Link>
      </div>
    </aside>
  );
}