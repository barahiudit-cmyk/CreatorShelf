'use client';

import React from 'react';
// import YtStats from '@/components/ui/dashboard-ui/yt-stats';
import DateSelectorProps from '@/components/ui/dashboard-ui/DatePicker'
import { motion } from 'framer-motion';
import { fadeInDown, fadeInLeft,scaleIn } from '@/lib/animation';
import { Icons } from "@/lib/icons";


import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell,
} from 'recharts';

// --- MOCK DATA ---
const MAIN_CHART_DATA = [
  { date: 'Apr 23', total: 60000, youtube: 45000, insta: 20000 },
  { date: 'Apr 30', total: 75000, youtube: 55000, insta: 28000 },
  { date: 'May 7', total: 98600, youtube: 58100, insta: 40500 },
  { date: 'May 14', total: 110000, youtube: 68000, insta: 48000 },
  { date: 'May 21', total: 125400, youtube: 74300, insta: 51100 },
];

const AGE_DISTRIBUTION = [
  { name: '18-24', value: 46, color: '#7c3aed' },
  { name: '25-34', value: 35, color: '#ed4c37' },
  { name: '35-44', value: 12, color: '#f59e0b' },
  { name: '45+', value: 7, color: '#3b82f6' },
];


export interface PlatformTab {
  id: string;
  name: string;
  subtitle: string;
  icon?: React.ElementType;
  bg: string;
  active?: boolean;
}

export const platformTabs: PlatformTab[] = [
  {
    id: "overview",
    name: "Overview",
    subtitle: "All platforms",
    icon: Icons.BarChart2,
    bg: "var(--portfolio-purple)",
    active: true,
  },
  {
    id: "youtube",
    name: "YouTube",
    subtitle: "@alexcreates",
    icon: Icons.FaYoutube,
    bg: "#FF0000",
  },
  {
    id: "instagram",
    name: "Instagram",
    subtitle: "@alexcreates_ig",
    icon: Icons.FaInstagram,
    bg: "linear-gradient(45deg, #f09433, #bc1888)",
  },
];

const SPARKLINE_DATA = [{ v: 10 }, { v: 15 }, { v: 12 }, { v: 18 }, { v: 14 }, { v: 22 }, { v: 20 }];


// --- SUB-COMPONENTS ---
const CustomChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="creatorshelf-dashboard-analytics-tooltip">
        <p className="extra-small fw-bold text-white mb-2">{label}, 2024</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="d-flex align-items-center gap-3 mb-1">
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: entry.color }} />
            <span className="extra-small text-muted" style={{ minWidth: '60px' }}>{entry.name}:</span>
            <span className="extra-small fw-bold text-white ms-auto">{(entry.value / 1000).toFixed(1)}K</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  return (
    <div className="creatorshelf-dashboard-analytics-wrapper ">

      {/* 1. HEADER */}
      <motion.div {...fadeInDown} className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h1 className="creatorshelf-dashboard-overview-title">Analytics</h1>
          <p className="creatorshelf-dashboard-overview-subtitle">Track your growth and performance across all platforms.</p>
        </div>
        <div className="d-flex gap-3">

          {/* date picker */}
          <DateSelectorProps />

          <button className="creatorshelf-dashboard-analytics-btn-control border-0 bg-surface-bright">
            <Icons.Download size={16} /> Export Report
          </button>
        </div>
      </motion.div>

      {/* 2. PLATFORM TABS */}
      <div className="d-flex gap-3 mb-4 overflow-auto pb-2 ">
        {platformTabs.map((tab, index) => {
          const Icon = tab.icon;

          return (
            <motion.div {...scaleIn}
              transition={{ delay: index * 0.1 }}
              key={tab.id}
              className={`creatorshelf-dashboard-analytics-tab ${tab.active ? "active" : ""}`}>
              <div
                className="creatorshelf-dashboard-analytics-tab-icon"
                style={{ background: tab.bg }} >
                {Icon && <Icon size={18} />}
              </div>

              <div>
                <p className="extra-small fw-bold mb-0">
                  {tab.name}
                </p>

                <p className="extra-small text-dim mb-0 creatorshelf-dashboard-overview-subtitle">
                  {tab.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          {...fadeInLeft}
          className="creatorshelf-dashboard-analytics-tab border-dashed bg-transparent"
        >
          <Icons.Plus size={18} className="text-dim" />
          <span className="extra-small text-dim fw-bold">
            Add Platform
          </span>
        </motion.div>
      </div>

      <hr style={{ color: 'dim' }}></hr>

      {/* 3. STAT CARDS */}
      <div className="row g-3 mb-4">
        {[
          { label: 'Total Followers', val: '125.4K', growth: '+12.4%', icon: <Icons.Users size={18} />, color: '#7c3aed' },
          { label: 'Total Views', val: '8.7M', growth: '+18.7%', icon: <Icons.Eye size={18} />, color: '#3b82f6' },
          { label: 'Total Engagement', val: '432.6K', growth: '+9.3%', icon: <Icons.Heart size={18} />, color: '#ed4c37' },
          { label: 'Profile Visits', val: '24.6K', growth: '+15.8%', icon: <Icons.Monitor size={18} />, color: '#f59e0b' },
          { label: 'Engagement Rate', val: '5.2%', growth: '+1.1%', icon: <Icons.BarChart2 size={18} />, color: '#22c55e' },
        ].map((stat, i) => (
          <motion.div initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }} className="col-6 col-md-4 col-lg" key={i}>
            <div className="creatorshelf-dashboard-analytics-stat-card">
              <div className="d-flex align-items-center gap-2 text-dim extra-small creatorshelf-dashboard-overview-stat-label ">
                <span style={{ color: stat.color }}>{stat.icon}</span> {stat.label}
              </div>
              <h3 className="creatorshelf-dashboard-analytics-stat-value ">{stat.val}</h3>
              <p className="extra-small mb-0 creatorshelf-dashboard-overview-stat-growth">
                <span className="text-success-custom fw-bold ">{stat.growth}</span> <span className="creatorshelf-dashboard-overview-subtitle ms-1">vs last week</span>
              </p>
            </div>
          </motion.div>
        ))}
        {/* <YtStats /> */}
      </div>

      {/* 4. MAIN CHARTS ROW */}
      <div className="row g-4 mb-4">
        <div className="col-lg-8">
          <div className="creatorshelf-dashboard-analytics-panel">
            <div className="creatorshelf-dashboard-analytics-panel-header">
              <h5 className="fw-bold mb-0">Follower Growth</h5>
              <div className="creatorshelf-dashboard-analytics-btn-control py-1 px-2">Last 30 Days <Icons.ChevronDown size={14} /></div>
            </div>
            <div style={{ height: '322px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={MAIN_CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#555', fontSize: 11 }} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#555', fontSize: 11 }} tickFormatter={(v) => `${v / 1000}K`} />
                  <Tooltip content={<CustomChartTooltip />} />
                  <Line type="monotone" name="Total" dataKey="total" stroke="#7c3aed" strokeWidth={3} dot={{ r: 4, fill: '#7c3aed', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="YouTube" dataKey="youtube" stroke="#ed4c37" strokeWidth={3} dot={{ r: 4, fill: '#ed4c37', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="Instagram" dataKey="insta" stroke="#bc1888" strokeWidth={3} dot={{ r: 4, fill: '#bc1888', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="creatorshelf-dashboard-analytics-panel">
            <h5 className="fw-bold mb-4">Growth Summary</h5>
            <div className="d-flex flex-column gap-4">
              {[
                { label: 'YouTube Subscribers', val: '+2.3K', growth: '+12.4%', color: '#ed4c37' },
                { label: 'Instagram Followers', val: '+1.1K', growth: '+8.7%', color: '#bc1888' },
                { label: 'Total Engagement', val: '+36.8K', growth: '+9.3%', color: '#7c3aed' },
              ].map((sum, i) => (
                <div key={i} className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="extra-small text-dim mb-1">{sum.label}</p>
                    <h6 className="creatorshelf-dashboard-overview-subtitle mb-0">{sum.val} <span className="text-success-custom ms-1 small">{sum.growth}</span></h6>
                  </div>
                  <div style={{ width: '70px', height: '35px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={SPARKLINE_DATA}>
                        <Area type="monotone" dataKey="v" stroke={sum.color} fill={sum.color} fillOpacity={0.1} strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
              <a href="#" className="text-purple extra-small fw-bold mt-2 text-decoration-none">View detailed breakdown →</a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM ROW: CONTENT & DEMOGRAPHICS */}
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="creatorshelf-dashboard-analytics-panel">
            <div className="creatorshelf-dashboard-analytics-panel-header">
              <h5 className="fw-bold mb-0">Top Performing Content</h5>
              <div className="creatorshelf-dashboard-analytics-btn-control py-1 px-2">By Engagement <Icons.ChevronDown size={14} /></div>
            </div>

            <div className="mt-2 creatorshelf-dashboard-analytics-container">
              {[
                { title: 'Laravel 11 Full Course (2024)', date: 'May 18, 2024', views: '24.5K', eng: '3.2K', rate: '13.1%' },
                { title: 'Sunset views from the mountains ⛰️', date: 'May 16, 2024', views: '12.3K', eng: '1.8K', rate: '14.6%' },
                { title: 'JavaScript Tutorial (2024)', date: 'May 10, 2024', views: '18.7K', eng: '2.1K', rate: '11.2%' },
              ].map((post, i) => (
                <motion.div {...fadeInDown} transition={{ delay: i * 0.1 }} key={i} className="creatorshelf-dashboard-analytics-content-row">
                  <img src={`https://placehold.co/100x70/0a0a0a/7c3aed?text=Vid+${i + 1}`} className="creatorshelf-dashboard-analytics-thumb-img" alt="thumb" />
                  <div className="flex-grow-1 px-3">
                    <p className="extra-small fw-bold mb-0 text-truncate" >{post.title}</p>
                    <p className="extra-small creatorshelf-dashboard-overview-subtitle mb-0">{post.date}</p>
                  </div>
                  <div className="px-3 text-center d-none d-md-block">
                    <p className="extra-small text-dim mb-0">Views</p>
                    <p className="extra-small creatorshelf-dashboard-overview-subtitle mb-0">{post.views}</p>
                  </div>
                  <div className="px-3 text-center">
                    <p className="extra-small text-dim mb-0">Engagement</p>
                    <p className="extra-small creatorshelf-dashboard-overview-subtitle fw-bold mb-0">{post.eng}</p>
                  </div>
                  <div className="ps-3 text-end">
                    <p className="extra-small text-dim mb-0">Rate</p>
                    <p className="extra-small fw-bold text-success-custom creatorshelf-dashboard-overview-subtitle mb-0">{post.rate}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a href="#" className="text-purple extra-small fw-bold mt-4 d-inline-block text-decoration-none">View all content →</a>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="creatorshelf-dashboard-analytics-panel">
            <div className="creatorshelf-dashboard-analytics-panel-header">
              <h5 className="fw-bold mb-0">Audience Demographics</h5>
              <div className="creatorshelf-dashboard-analytics-btn-control py-1 px-2">All Platforms <Icons.ChevronDown size={14} /></div>
            </div>

            <div className="row">
              <div className="col-6 pe-4">
                <p className="extra-small fw-bold text-dim mb-3">Top Countries</p>
                {[
                  { name: 'India', val: '38.6%' },
                  { name: 'United States', val: '24.7%' },
                  { name: 'Indonesia', val: '8.9%' },
                  { name: 'Brazil', val: '6.4%' },
                ].map((country, i) => (
                  <div key={i} className="mb-3">
                    <div className="d-flex justify-content-between extra-small fw-bold mb-1 creatorshelf-dashboard-overview-subtitle">
                      <span>{country.name}</span> <span>{country.val}</span>
                    </div>
                    <div className="creatorshelf-dashboard-analytics-progress-track">
                      <div className="creatorshelf-dashboard-analytics-progress-bar" style={{ width: country.val }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-6 border-start border-secondary border-opacity-10">
                <p className="extra-small fw-bold text-dim mb-2">Age Range</p>
                <div style={{ height: '140px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={AGE_DISTRIBUTION} innerRadius={40} outerRadius={60} paddingAngle={4} dataKey="value" stroke="none">
                        {AGE_DISTRIBUTION.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2">
                  {AGE_DISTRIBUTION.map((d, i) => (
                    <div key={i} className="d-flex align-items-center gap-2 extra-small mb-1 creatorshelf-dashboard-overview-subtitle">
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: d.color }} />
                      <span className="text-dim">{d.name}</span> <span className="ms-auto fw-bold">{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="text-purple extra-small fw-bold mt-4 d-inline-block text-decoration-none">View full demographics →</a>
          </div>
        </div>
      </div>

    </div>
  );
}