"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 350);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <nav className="creatorshelf-navbar container-fluid d-flex justify-content-between align-items-center">
        <Link href="/" className="creatorshelf-logo">
          {/* <img src="../../public/images/logos/Creator-horizentail-logo.png" alt="logo" /> */}
          <Image
            src="/images/logos/Creator-horizentail-logo.png"
            alt="Creator Shelf Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="creatorshelf-nav-link"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="creatorshelf-btn-notched-nav text-white text-decoration-none"
          >
            Get Early Access
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger-btn d-lg-none"
          onClick={openMenu}
          aria-label="Open Menu"
        >
          <div className={`hamburger ${isOpen ? "active" : ""}`}>
            <span />
            <span />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="creatorshelf-mobile-overlay"
          onClick={closeMenu}
        >
          <div
            className={`creatorshelf-mobile-menu ${isClosing ? "closing" : ""
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="creatorshelf-menu-btn"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <span />
              <span />
            </button>

            {/* Menu Content */}
            <div className="creatorshelf-mobile-content">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="creatorshelf-mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              <button className="creatorshelf-btn-notched-nav mt-4">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;