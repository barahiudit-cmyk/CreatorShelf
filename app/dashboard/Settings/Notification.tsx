'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '@/lib/icons';


import { fadeInUp } from '@/lib/animation';

export default function NotificationSection() {
    
    const generalNotifs = [
        { id: 1, icon: <Icons.Mail size={20} />, title: "Email Notifications", desc: "Receive important account and platform updates via email.", active: true },
        { id: 2, icon: <Icons.Smartphone size={20} />, title: "Push Notifications", desc: "Get instant alerts on your mobile device and browser.", active: false },
    ];

    const platformNotifs = [
        { id: 3, icon: <Icons.ShieldAlert size={20} />, title: "Disconnection Alerts", desc: "Immediate notification if one of your social platforms loses connection.", active: true },
        { id: 4, icon: <Icons.LineChart size={20} />, title: "Weekly Summary", desc: "A comprehensive report of your growth and engagement metrics.", active: true },
        { id: 5, icon: <Icons.Zap size={20} />, title: "Real-time Milestones", desc: "Get notified as soon as you hit subscriber or view goals.", active: true },
    ];

    const marketingNotifs = [
        { id: 6, icon: <Icons.Newspaper size={20} />, title: "Newsletter & Features", desc: "Stay updated with new CreatorShelf tools and creator tips.", active: false },
    ];

    return (
        <motion.div {...fadeInUp} className="creatorshelf-dashboard-notification-wrapper">
            
            <section className="creatorshelf-dashboard-content-panel">
                <h2 className="creatorshelf-dashboard-notification-title">Notification Preferences</h2>
                <p className="creatorshelf-dashboard-notification-sub">Choose how and when you want to be notified by CreatorShelf.</p>
                
                {/* CATEGORY: GENERAL */}
                <h4 className="creatorshelf-dashboard-notification-category">Communication Channels</h4>
                {generalNotifs.map((item) => (
                    <div className="creatorshelf-dashboard-notification-row" key={item.id}>
                        <div className="d-flex align-items-center gap-4">
                            <div className="creatorshelf-dashboard-notification-icon-box">
                                {item.icon}
                            </div>
                            <div className="creatorshelf-dashboard-notification-info">
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" defaultChecked={item.active} />
                        </div>
                    </div>
                ))}

                {/* CATEGORY: PLATFORMS */}
                <h4 className="creatorshelf-dashboard-notification-category mt-5">Platform & Growth</h4>
                {platformNotifs.map((item) => (
                    <div className="creatorshelf-dashboard-notification-row" key={item.id}>
                        <div className="d-flex align-items-center gap-4">
                            <div className="creatorshelf-dashboard-notification-icon-box">
                                {item.icon}
                            </div>
                            <div className="creatorshelf-dashboard-notification-info">
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" defaultChecked={item.active} />
                        </div>
                    </div>
                ))}

                {/* CATEGORY: MARKETING */}
                <h4 className="creatorshelf-dashboard-notification-category mt-5">Community</h4>
                {marketingNotifs.map((item) => (
                    <div className="creatorshelf-dashboard-notification-row" key={item.id}>
                        <div className="d-flex align-items-center gap-4">
                            <div className="creatorshelf-dashboard-notification-icon-box">
                                {item.icon}
                            </div>
                            <div className="creatorshelf-dashboard-notification-info">
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" defaultChecked={item.active} />
                        </div>
                    </div>
                ))}
                
            </section>

        </motion.div>
    );
}