"use client";

import { useState, useEffect } from "react";
import DashboardSidebar from "@/components/dashboards/DashboardSidebar";
import DashboardTopbar from "@/components/dashboards/DashboardTopbar";
import "./dashboard.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const mobile = window.innerWidth < 1000;
      setIsMobile(mobile);
      if (mobile) setIsOpen(false);
      else setIsOpen(true);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className="creatorshelf-dashboard-wrapper">
      {isMobile && isOpen && (
        <div className="creatorshelf-dashboard-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <DashboardSidebar
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
        isMobile={isMobile}
      />

      {/* main content render */}
      <main className={`creatorshelf-dashboard-main ${!isOpen || isMobile ? 'full-width' : ''}`}>
        <DashboardTopbar
          onMenuOpen={() => setIsOpen(true)}
          showMenuBtn={!isOpen || isMobile}
        />

        {/*  */}
        <div className="creatorshelf-dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
}