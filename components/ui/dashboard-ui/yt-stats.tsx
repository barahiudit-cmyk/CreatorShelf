"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
    Users, Play, Camera,
    LineChart as LineChartIcon, ArrowUp,

} from 'lucide-react';
const YtStats = () => {
    // Stats Data
    const stats = [
        { icon: <Users size={18} />, label: 'Total Subscribers', value: '12.5K', growth: '+12.4%', iconClass: 'icon-purple' },
        { icon: <Play size={18} />, label: 'Total Views', value: '1.25M', growth: '+18.7%', iconClass: 'icon-red' },
        { icon: <Camera size={18} />, label: 'Total Posts', value: '256', growth: '+8.3%', iconClass: 'icon-pink' },
       
        { icon: <LineChartIcon size={18} />, label: 'Avg. Engagement', value: '5.2%', growth: '+9.1%', iconClass: 'icon-blue' },
    ];


    return (

        <div className="row g-3">
            {stats.map((s, i) => (
                <motion.div initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="col-6 col-md-3" key={i}>
                    <div className="creatorshelf-dashboard-overview-stat-card">
                        <div className="d-flex align-items-center gap-2">
                            <div className={`creatorshelf-dashboard-overview-stat-icon ${s.iconClass}`}>{s.icon}</div>
                            <p className="creatorshelf-dashboard-overview-stat-label">{s.label}</p>
                        </div>
                        <h3 className="creatorshelf-dashboard-overview-stat-value">{s.value}</h3>
                        <span className="creatorshelf-dashboard-overview-stat-growth">
                            <ArrowUp size={12} /> {s.growth} <span className="dim">(vs 30d)</span>
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );

}
export default YtStats;