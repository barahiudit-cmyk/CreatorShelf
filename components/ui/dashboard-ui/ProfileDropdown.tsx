"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/animation";
import { Icons } from "@/lib/icons";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="position-relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Profile Button */}
      <div
        className="bg-dark rounded cursor-pointer d-flex align-items-center justify-content-center"
        style={{ width: 32, height: 32 }}
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/images/logos/logo.png"
          alt="Profile"
          width={30}
          height={30}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <motion.div
          {...fadeInDown}
          className="creatorshelf-dashboard-profile-dropdown"
        >
          <div className="px-3 py-2 border-bottom small fw-semibold">
            My Account
          </div>

          <div className="creatorshelf-dashboard-profile-meuus">
            <a
              href="/dashboard/settings"
              className="d-flex align-items-center gap-2"
            >
              <Icons.User size={16} />
              <span>Profile</span>
            </a>

            <a
              href="/dashboard/settings"
              className="d-flex align-items-center gap-2"
            >
              <Icons.Settings size={16} />
              <span>Settings</span>
            </a>

            <a
              href="/logout"
              className="d-flex align-items-center gap-2 text-danger"
            >
              <Icons.LogOut size={16} />
              <span>Logout</span>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileDropdown;