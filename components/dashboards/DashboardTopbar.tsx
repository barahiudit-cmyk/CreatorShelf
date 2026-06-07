"user clietn";

import React from 'react';
import Link from 'next/link';
import { Icons } from '@/lib/icons';
import Image from 'next/image'

interface TopbarProps {
  onMenuOpen: () => void;
  showMenuBtn: boolean;

}


export default function Topbar({ onMenuOpen, showMenuBtn }: TopbarProps) {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom creatorshelf-dashboard-head" style={{ borderColor: 'var(--border) !important', backgroundColor: 'var(--bg-color)' }}>
      <div className="d-flex align-items-center gap-3">
        {showMenuBtn && (
          <button className="btn text-white p-0" onClick={onMenuOpen}>
            <Icons.FiMenu size={24} />
          </button>
        )}
        <span className="text-light small d-none d-md-block">CreatorShelf</span>
      </div>

      <div className="d-flex align-items-center gap-3 gap-md-4">
        {/* <div className="d-flex align-items-center gap-2 px-3 py-1 border border-secondary border-opacity-50">
           <FiCalendar size={14} className="text-light" />
           <span className="small">Monthly</span>
        </div> */}
        <Link href="/dashboard/Settings" className="">
          <Icons.FiSettings size={14} className="text-light" />

        </Link>
        <div className="position-relative">
          <Icons.FiBell className="text-light" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger" style={{ fontSize: '8px' }}>5</span>
        </div>
        <div className="bg-dark rounded" style={{ width: 32, height: 32 }}>
          <Image
            src="/images/logos/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
      </div>
    </header>
  );
}