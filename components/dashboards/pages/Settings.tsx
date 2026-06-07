'use client';

import React, { useState } from 'react';
import { Icons } from '@/lib/icons';

// Import our sub-components
// import { ProfileSection } from '../../../app/dashboard/Settings/profile';
import ProfileSection from '@/app/dashboard/Settings/profile';
import AccountSection from '@/app/dashboard/Settings/Account';
import NotificationSection from '@/app/dashboard/Settings/Notification';
import BillingSection from '@/app/dashboard/Settings/Billing';
import DangerZoneSection from '@/app/dashboard/Settings/Danger';
// import { text } from 'stream/consumers';


export default function SettingsPage() {
    const [activeSection, setActiveSection] = useState('profile');

    const menuItems = [
        { id: 'profile', icon: <Icons.User size={20} />, title: 'Profile', sub: 'Personal information' },
        { id: 'account', icon: <Icons.Lock size={20} />, title: 'Account', sub: 'Email and security' },
        { id: 'notifications', icon: <Icons.Bell size={20} />, title: 'Notifications', sub: 'Alerts preferences' },
        { id: 'billing', icon: <Icons.CreditCard size={20} />, title: 'Billing', sub: 'Subscriptions', pro: true },
        { id: 'danger', icon: <Icons.AlertTriangle size={20} />, title: 'Danger Zone', sub: 'Irreversible actions' },
    ];

    return (
        <div className="creatorshelf-dashboard-settings-wrapper">
            {/* Header */}
            <header className="d-flex justify-content-between align-items-center mb-4 ">
                 <div>
                    <h1 className="creatorshelf-dashboard-overview-title">
                       Settings <span className="creatorshelf-dashboard-overview-wave">👋</span>
                    </h1>
                    <p className="creatorshelf-dashboard-overview-subtitle">
                      Manage account preferences.
                    </p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <button className="creatorshelf-dashboard-overview-viewbtn">
                        View My Page <Icons.ExternalLink size={15} />
                    </button>
                 
                </div>
            </header>

            <div className="row g-4">
                {/* Sidebar */}
                <aside className="col-lg-3 col-md-3 col-12">
                    <div className="creatorshelf-dashboard-settings-nav ">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`creatorshelf-dashboard-settings-nav-item ${activeSection === item.id ? 'active' : ''}`}
                            >
                                <div className="icon-box">{item.icon}</div>
                                <div className="flex-grow-1">
                                    <p className="label-title">{item.title}</p>
                                    <p className="label-sub">{item.sub}</p>
                                </div>
                                {item.pro && <span className="creatorshelf-dashboard-settings-pro-badge">Pro</span>}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Switchable Section Panels */}
                <main className="col-lg-9 col-md-9 col-12">
                    {activeSection === 'profile' && <ProfileSection />}
                    {activeSection === 'account' && <AccountSection />}

                    {activeSection === 'notifications' &&
                        (NotificationSection ? (

                            <NotificationSection />
                        ) : (
                            <div className="creatorshelf-dashboard-settings-panel text-center py-5">
                                <Icons.CreditCard size={48} className="text-muted mb-3" />
                                <h3>Notifications</h3>
                                <p className="text-muted">
                                    Pro notification management is coming soon.
                                </p>
                            </div>
                        ))}


                    {activeSection === "billing" &&
                        (BillingSection ? (
                            <BillingSection />
                        ) : (
                            <div className="creatorshelf-dashboard-settings-panel text-center py-5">
                                <Icons.CreditCard size={48} className="text-muted mb-3" />
                                <h3>Billing & Plans</h3>
                                <p className="text-muted">
                                    Pro billing management is coming soon.
                                </p>
                            </div>
                        ))}

                    {activeSection === "danger" &&
                        (DangerZoneSection ? (
                            <DangerZoneSection />
                        ) : (
                            <div className="creatorshelf-dashboard-settings-panel text-center py-5">
                                <Icons.AlertTriangle size={48} className="text-muted mb-3" />
                                <h3>Danger Zone</h3>
                                <p className="text-muted">
                                    Pro danger zone management is coming soon.
                                </p>
                            </div>
                        ))}
                </main>

            </div>
        </div>
    );
}

