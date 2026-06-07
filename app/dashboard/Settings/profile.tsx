'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '@/lib/icons';

import { fadeInUp } from '@/lib/animation';


export default function ProfilePage() {
  const [bio, setBio] = useState("I create videos about programming, web development and tools that help you build a better life as a developer.");

  return (
    <div className="containe">
      <motion.div {...fadeInUp} className="creatorshelf-dashboard-profile-wrapper">
        
        {/* SECTION: PROFILE INFORMATION */}
        <div className="creatorshelf-dashboard-content-panel">
          <h2 className="creatorshelf-dashboard-content-panel-title">Profile Information</h2>
          <p className="creatorshelf-dashboard-content-panel-sub">Update your photo and personal details.</p>
          
          <div className="d-flex flex-column flex-md-row gap-5 mt-4 pt-2">
            <div className="creatorshelf-dashboard-profile-avatar-wrapper">
              <img src="https://i.pravatar.cc/150?u=alex" alt="Profile" className="creatorshelf-dashboard-profile-avatar-img" />
              <div className="creatorshelf-dashboard-profile-avatar-edit-icon">
                <Icons.Camera size={18} />
              </div>
            </div>
            
            <div className="flex-grow-1 w-100">
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="creatorshelf-dashboard-profile-label">Display Name</label>
                  <input type="text" className="creatorshelf-dashboard-profile-input" defaultValue="Alex Creates" />
                </div>
                <div className="col-md-6">
                  <label className="creatorshelf-dashboard-profile-label">Username</label>
                  <input type="text" className="creatorshelf-dashboard-profile-input" defaultValue="@alexcreates" />
                </div>
                <div className="col-12">
                  <label className="creatorshelf-dashboard-profile-label">Bio</label>
                  <textarea 
                    className="creatorshelf-dashboard-profile-textarea" 
                    rows={4} 
                    value={bio}
                    onChange={(e) => setBio(e.target.value.substring(0, 200))}
                  />
                  <div className="creatorshelf-dashboard-profile-char-count">{bio.length}/200</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="creatorshelf-dashboard-profile-btn-save">Save Changes</button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: ACCOUNT */}
        <div className="creatorshelf-dashboard-content-panel">
          <h2 className="creatorshelf-dashboard-content-panel-title">Account</h2>
          <p className="creatorshelf-dashboard-content-panel-sub">Manage your account security and login details.</p>
          
          <div className="row g-4 align-items-end mt-2">
            <div className="col-md-7">
              <label className="creatorshelf-dashboard-profile-label">Email Address</label>
              <div className="position-relative">
                <input type="email" className="creatorshelf-dashboard-profile-input" defaultValue="alexcreates@gmail.com" />
                <span className="creatorshelf-dashboard-profile-verified-badge">Verified</span>
              </div>
            </div>
            <div className="col-md-5">
              <label className="creatorshelf-dashboard-profile-label">Password</label>
              <div className="d-flex gap-2">
                <input type="password" password-mask="*" className="creatorshelf-dashboard-profile-input" defaultValue="password123" />
                <button className="creatorshelf-dashboard-profile-btn-outline text-nowrap">Change Password</button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: NOTIFICATION PREFERENCES */}
        <div className="creatorshelf-dashboard-content-panel">
          <h2 className="creatorshelf-dashboard-content-panel-title">Notification Preferences</h2>
          <p className="creatorshelf-dashboard-content-panel-sub">Choose what notifications you want to receive.</p>
          
          <div className="mt-4">
            {[
              { icon: <Icons.Mail size={20} />, title: 'Email Notifications', desc: 'Receive important updates via email.', active: true },
              { icon: <Icons.Bell size={20} />, title: 'Platform Disconnection Alerts', desc: 'Get notified when a connected platform is disconnected.', active: true },
              { icon: <Icons.LayoutDashboard size={20} />, title: 'Weekly Performance Summary', desc: 'Receive a weekly summary of your growth and analytics.', active: false },
            ].map((item, idx) => (
              <div className="creatorshelf-dashboard-profile-toggle-item" key={idx}>
                <div className="d-flex align-items-center gap-4">
                  <div className="creatorshelf-dashboard-profile-icon-box">{item.icon}</div>
                  <div>
                    <h6 className="mb-1 fw-bold">{item.title}</h6>
                    <p className="mb-0 text-dim small" style={{color: 'var(--text-dim)'}}>{item.desc}</p>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" defaultChecked={item.active} style={{width: '2.5rem', height: '1.25rem'}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: DANGER ZONE */}
        <div className="creatorshelf-dashboard-content-panel creatorshelf-dashboard-profile-danger-card">
          <h2 className="creatorshelf-dashboard-content-panel-title text-danger" style={{color: 'var(--primary)'}}>Danger Zone</h2>
          <p className="creatorshelf-dashboard-content-panel-sub">These actions are permanent and cannot be undone.</p>
          
          <div className="d-flex align-items-center justify-content-between mt-4">
            <div className="d-flex align-items-center gap-4">
              <div className="text-danger" style={{color: 'var(--primary)'}}><Icons.Trash2 size={24} /></div>
              <div>
                <h6 className="mb-1 fw-bold">Delete Account</h6>
                <p className="mb-0 text-dim small" style={{color: 'var(--text-dim)'}}>Permanently delete your account and all of your data.</p>
              </div>
            </div>
            <button className="creatorshelf-dashboard-profile-btn-danger">Delete Account</button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}