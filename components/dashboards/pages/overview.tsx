'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import { Icons } from '@/lib/icons';
import YtStats from '../../../components/ui/dashboard-ui/yt-stats';


export default function DashboardOverview() {
    const [activeTab, setActiveTab] = useState('YouTube');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [copied, setCopied] = useState(false);

   

    // Activity Flow Data
    const activities = [
        { id: 1, icon: <Icons.CircleCheck size={20} />, iconClass: 'act-green', title: 'YouTube stats synced successfully', desc: 'Subscribers: +120 • Views: +2.3K', time: '3 hours ago' },
        { id: 2, icon: <Icons.CircleCheck size={20} />, iconClass: 'act-purple', title: 'Instagram stats synced successfully', desc: 'Followers: +85 • Engagement: +1.2%', time: '5 hours ago' },
        { id: 3, icon: <Icons.Link2 size={20} />, iconClass: 'act-blue', title: 'You copied your portfolio link', desc: 'creatorshelf.app/alexcreates', time: '1 day ago' },
        { id: 4, icon: <Icons.Settings size={20} />, iconClass: 'act-orange', title: 'Profile updated', desc: 'You updated your bio and profile picture', time: '2 days ago' },
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText('creatorshelf.app/alexcreates');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1500);
    };

    return (
        <div className="creatorshelf-dashboard-overview-wrapper ">

            {/* ===== HEADER ===== */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4"
            >
                <div>
                    <h1 className="creatorshelf-dashboard-overview-title">
                        Welcome back, Udit! <span className="creatorshelf-dashboard-overview-wave">👋</span>
                    </h1>
                    <p className="creatorshelf-dashboard-overview-subtitle">
                        Here is what is happening with your platforms today.
                    </p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <Link href="/portfolios" className="creatorshelf-dashboard-overview-viewbtn">
                        View My Page <Icons.ExternalLink size={15} />
                    </Link>
                 
                </div>
            </motion.div>

            {/* ===== PLATFORM CARDS ROW ===== */}
            <div className="row g-4 mb-4">
                {[
                    { type: 'youtube', name: 'YouTube', handle: '@UditCreator', color: 'bg-youtube', chart: 'chart-red', icon: <Icons.Play size={22} fill="#fff" /> },
                    { type: 'instagram', name: 'Instagram', handle: '@UditCreator_ig', color: 'bg-instagram', chart: 'chart-purple', icon: <Icons.Camera size={22} /> }
                ].map((platform, idx) => (
                    <motion.div
                        key={platform.type}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="col-12 col-lg-4 col-md-6"
                    >
                        <div className="creatorshelf-dashboard-overview-platform-card">
                            <div className={`creatorshelf-dashboard-overview-platform-chart ${platform.chart}`}></div>
                            <div className="d-flex align-items-center gap-3 mb-3 position-relative">
                                <div className={`creatorshelf-dashboard-overview-platform-logo ${platform.color}`}>{platform.icon}</div>
                                <div>
                                    <h3 className="creatorshelf-dashboard-overview-platform-name">{platform.name}</h3>
                                    <span className="creatorshelf-dashboard-overview-badge"><Icons.CheckCircle2 size={13} /> Connected</span>
                                </div>
                            </div>
                            <p className="creatorshelf-dashboard-overview-platform-handle">{platform.handle}</p>
                            <div className="creatorshelf-dashboard-overview-platform-info">
                                <div className="d-flex justify-content-between"><span className="dim">Last synced</span><span>{idx + 2} hours ago</span></div>
                                <div className="d-flex justify-content-between mt-2"><span className="dim">Next refresh</span><span>in ~21 hours</span></div>
                            </div>
                            <hr className="mb-0 mt-1"></hr>
                            <button className="creatorshelf-dashboard-overview-disconnect">Disconnect</button>
                        </div>
                    </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="col-12 col-lg-4">
                    <div className="creatorshelf-dashboard-overview-connect-card">
                        <div className="creatorshelf-dashboard-overview-connect-icon"><Icons.Plus size={26} /></div>
                        <h3 className="creatorshelf-dashboard-overview-connect-title">Connect More Platforms</h3>
                        <p className="creatorshelf-dashboard-overview-connect-text">We will support more platforms soon.</p>
                    </div>
                </motion.div>
            </div>

            {/* ===== OVERVIEW + PORTFOLIO ROW ===== */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-8">
                    <div className="creatorshelf-dashboard-overview-panel h-100">
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <h2 className="creatorshelf-dashboard-overview-panel-title mb-0">Overview</h2>
                            <button
                                onClick={handleRefresh}
                                className={`creatorshelf-dashboard-overview-refresh ${isRefreshing ? 'refreshing' : ''}`}
                            >
                                <Icons.RefreshCw size={14} className={isRefreshing ? 'spin' : ''} /> {isRefreshing ? 'Refreshing...' : 'Refresh now'}
                            </button>
                        </div>
                        
                        <YtStats/>
                       
                    </div>
                </div>

                <motion.div  initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4}}   className="col-12 col-lg-4">
                    <div className="creatorshelf-dashboard-overview-portfolio h-100">
                        <h2 className="creatorshelf-dashboard-overview-portfolio-title">Your portfolio is live 🎉</h2>
                        <p className="creatorshelf-dashboard-overview-portfolio-sub">Share your link with brands and followers.</p>
                        <div className="creatorshelf-dashboard-overview-portfolio-input">
                            <span>creatorshelf.app/alexcreates</span>
                            <button onClick={handleCopy}>
                                {copied ? <Icons.Check size={16} className="text-success" /> : <Icons.Copy size={16} />}
                            </button>
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <button onClick={handleCopy} className="creatorshelf-dashboard-overview-copy-btn">
                                {copied ? 'Copied!' : 'Copy Link'}
                            </button>
                            <button className="creatorshelf-dashboard-overview-open-btn">
                                Open Page <Icons.ExternalLink size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ===== LATEST CONTENT + RECENT ACTIVITY (ANIMATED FLOW) ===== */}
            <div className="row g-4">
                <div className="col-12 col-lg-7">
                    <div className="creatorshelf-dashboard-overview-panel h-100">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="creatorshelf-dashboard-overview-panel-title mb-0">Latest Content</h2>
                            <a className="creatorshelf-dashboard-overview-viewall">View all</a>
                        </div>
                        <div className="creatorshelf-dashboard-overview-tabs mb-3">
                            {['YouTube', 'Instagram'].map(tab => (
                                <button
                                    key={tab}
                                    className={`creatorshelf-dashboard-overview-tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="row g-3">
                            {[1, 2, 3].map((_, i) => (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="col-12 col-sm-4" key={i}>
                                    <div className="creatorshelf-dashboard-overview-content-card">
                                        <div className="creatorshelf-dashboard-overview-content-thumb">
                                            <img src={`https://placehold.co/300x170/111/fff?text=${activeTab}+${i + 1}`} alt="content" />
                                            <span className="creatorshelf-dashboard-overview-content-duration">12:00</span>
                                        </div>
                                        <h4 className="creatorshelf-dashboard-overview-content-title">Creative Content Title {i + 1}</h4>
                                        <p className="creatorshelf-dashboard-overview-content-meta">2 days ago • 10K views</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RECENT ACTIVITY WITH CHAT-STYLE FLOW */}
                <div className="col-12 col-lg-5">
                    <div className="creatorshelf-dashboard-overview-panel h-100">
                        <h2 className="creatorshelf-dashboard-overview-panel-title mb-4">Recent Activity</h2>
                        <div className="creatorshelf-dashboard-overview-activity-list">
                            <AnimatePresence mode="popLayout">
                                {activities.map((a, i) => (
                                    <motion.div
                                        key={a.id}
                                        initial={{ opacity: 0, x: 30, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: i * 0.15
                                        }}
                                        className="creatorshelf-dashboard-overview-activity-item"
                                    >
                                        <div className={`creatorshelf-dashboard-overview-activity-icon ${a.iconClass}`}>{a.icon}</div>
                                        <div className="flex-grow-1">
                                            <h5 className="creatorshelf-dashboard-overview-activity-title text-truncate">{a.title}</h5>
                                            <p className="creatorshelf-dashboard-overview-activity-desc text-truncate">{a.desc}</p>
                                        </div>
                                        <span className="creatorshelf-dashboard-overview-activity-time">{a.time}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}