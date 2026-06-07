'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '@/lib/icons';

import { fadeInUp } from '@/lib/animation';


export default function DangerSection() {


    return (
        <motion.div {...fadeInUp} className="creatorshelf-dashboard-settings-danger-wrapper">

            <section className="creatorshelf-dashboard-settings-danger-panel">
                <div className="d-flex align-items-center gap-3 mb-2">
                    <Icons.ShieldAlert className="text-danger" size={24} style={{ color: 'var(--primary)' }} />
                    <h2 className="creatorshelf-dashboard-settings-danger-title mb-0">Danger Zone</h2>
                </div>
                <p className="creatorshelf-dashboard-settings-danger-sub">
                    The actions below are irreversible. Please proceed with extreme caution.
                </p>

                {/* ACTION 1: DEACTIVATE */}
                <div className="creatorshelf-dashboard-settings-danger-row">
                    <div className="d-flex align-items-center gap-4">
                        <div className="creatorshelf-dashboard-settings-danger-icon-box">
                            <Icons.UserX size={22} />
                        </div>
                        <div className="creatorshelf-dashboard-settings-danger-info">
                            <h6>Deactivate Account</h6>
                            <p>Temporarily hide your portfolio and stop data syncing. You can reactivate anytime by logging back in.</p>
                        </div>
                    </div>
                    <button className="creatorshelf-dashboard-settings-danger-btn-outline">Deactivate</button>
                </div>

                {/* ACTION 2: RESET DATA */}
                <div className="creatorshelf-dashboard-settings-danger-row">
                    <div className="d-flex align-items-center gap-4">
                        <div className="creatorshelf-dashboard-settings-danger-icon-box">
                            <Icons.RefreshCcw size={22} />
                        </div>
                        <div className="creatorshelf-dashboard-settings-danger-info">
                            <h6>Reset Analytics Data</h6>
                            <p>Clear all cached social media statistics and history. This will trigger a fresh sync from all platforms.</p>
                        </div>
                    </div>
                    <button className="creatorshelf-dashboard-settings-danger-btn-outline">Reset Data</button>
                </div>

                {/* ACTION 3: DELETE PERMANENT */}
                <div className="creatorshelf-dashboard-settings-danger-row mt-4" style={{ borderStyle: 'dashed', borderColor: 'var(--primary)' }}>
                    <div className="d-flex align-items-center gap-4">
                        <div className="creatorshelf-dashboard-settings-danger-icon-box" style={{ background: 'var(--primary)', color: 'white' }}>
                            <Icons.Trash2 size={22} />
                        </div>
                        <div className="creatorshelf-dashboard-settings-danger-info">
                            <h6>Delete Account Permanently</h6>
                            <p>This will immediately delete all your portfolios, data, and social connections. This action cannot be undone.</p>
                        </div>
                    </div>
                    <button className="creatorshelf-dashboard-settings-danger-btn-filled">Delete Account</button>
                </div>

                {/* DISCLAIMER */}
                <div className="d-flex align-items-start gap-2 mt-4 p-3 bg-dark bg-opacity-25 rounded-3 border border-secondary border-opacity-10">
                    <Icons.AlertTriangle size={16} className="text-warning mt-1" />
                    <p className="extra-small text-dim mb-0" style={{ fontSize: '0.75rem' }}>
                        By performing these actions, you acknowledge that some data might be lost forever. CreatorShelf is not responsible for data loss resulting from these actions.
                    </p>
                </div>
            </section>

        </motion.div>
    );
}