'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {Icons } from '@/lib/icons';
import { fadeInUp } from '@/lib/animation';


export default function AccountSection() {
    
    const sessions = [
        { id: 1, device: "MacBook Pro • Chrome", location: "Mumbai, India", status: "Active now", isCurrent: true, icon: <Icons.Monitor size={20} /> },
        { id: 2, device: "iPhone 15 Pro • Safari", location: "Mumbai, India", status: "2 hours ago", isCurrent: false, icon: <Icons.Smartphone size={20} /> },
    ];


    return (
        <motion.div {...fadeInUp} className="creatorshelf-dashboard-account-wrapper">
            
            {/* EMAIL & SECURITY PANEL */}
            <section className="creatorshelf-dashboard-content-panel">
                <h2 className="creatorshelf-dashboard-account-title">Account Security</h2>
                <p className="creatorshelf-dashboard-account-sub">Manage your email and security preferences.</p>
                
                <div className="row g-4 mb-4">
                    <div className="col-md-7">
                        <label className="creatorshelf-dashboard-profile-label">Email Address</label>
                        <div className="position-relative">
                            <input className="creatorshelf-dashboard-account-input" defaultValue="alexcreates@gmail.com" />
                            <div className="position-absolute top-50 end-0 translate-middle-y me-3">
                                <span className="creatorshelf-dashboard-account-verified-tag">Verified</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label className="creatorshelf-dashboard-profile-label">Password</label>
                        <button className="creatorshelf-dashboard-account-btn w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                            <Icons.KeyRound size={16} /> Change Password
                        </button>
                    </div>
                </div>

                <div className="creatorshelf-dashboard-account-row">
                    <div className="d-flex align-items-center gap-3">
                        <div className="creatorshelf-dashboard-account-device-icon">
                            <Icons.Fingerprint size={20} />
                        </div>
                        <div>
                            <p className="creatorshelf-dashboard-profile-toggle-title">Two-Factor Authentication</p>
                            <p className="creatorshelf-dashboard-profile-toggle-desc">Secure your account with 2FA security.</p>
                        </div>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                    </div>
                </div>
            </section>

            {/* ACTIVE SESSIONS PANEL */}
            <section className="creatorshelf-dashboard-content-panel">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="creatorshelf-dashboard-account-title">Active Sessions</h2>
                        <p className="creatorshelf-dashboard-account-sub mb-0">Devices currently logged into your account.</p>
                    </div>
                    <button className="creatorshelf-dashboard-account-btn creatorshelf-dashboard-account-btn-danger d-flex align-items-center gap-2">
                        <Icons.LogOut size={14} /> Log out all
                    </button>
                </div>

                {sessions.map((session) => (
                    <div className="creatorshelf-dashboard-account-device-card" key={session.id}>
                        <div className="creatorshelf-dashboard-account-device-icon">
                            {session.icon}
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2">
                                <h6 className="mb-0 fw-bold">{session.device}</h6>
                                {session.isCurrent && <span className="creatorshelf-dashboard-account-verified-tag" style={{fontSize:'0.65rem'}}>Current</span>}
                            </div>
                            <p className="mb-0 text-dim small" style={{color: 'var(--text-dim)'}}>{session.location} • {session.status}</p>
                        </div>
                        {!session.isCurrent && (
                            <button className="creatorshelf-dashboard-account-btn border-0 text-danger p-0">Revoke</button>
                        )}
                    </div>
                ))}
            </section>

            {/* CONNECTED ACCOUNTS PANEL */}
            <section className="creatorshelf-dashboard-content-panel">
                <h2 className="creatorshelf-dashboard-account-title">Connected Accounts</h2>
                <p className="creatorshelf-dashboard-account-sub">Link your social accounts for easier login.</p>
                
                <div className="d-flex flex-wrap gap-3 mt-3">
                    <button className="creatorshelf-dashboard-account-btn d-flex align-items-center gap-2 px-4 py-2">
                        <Icons.Globe size={18} /> Google Connected
                    </button>
                    <button className="creatorshelf-dashboard-account-btn d-flex align-items-center gap-2 px-4 py-2 opacity-50">
                        <Icons.ShieldCheck size={18} /> Connect Github
                    </button>
                </div>
            </section>

        </motion.div>
    );
}