'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '@/lib/icons';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid 
} from 'recharts';
import { 
   Globe, Send, 
  Mail, Users, Eye, Camera, BarChart2, PlayCircle, 
  ChevronRight, Star, Clock, CheckCircle2 
} from 'lucide-react';
import '@/styles/portfolio.css';


const growthData = [
  { name: 'Apr 24', youtube: 1400, insta: 800 },
  { name: 'May 1', youtube: 1800, insta: 950 },
  { name: 'May 8', youtube: 1700, insta: 1000 },
  { name: 'May 15', youtube: 2100, insta: 1050 },
  { name: 'May 22', youtube: 2300, insta: 1100 },
];

export default function CreatorPortfolio() {
  return (
    <div className="creatorshelf-portfolio-wrapper">
      
      {/* 1. NAVIGATION */}
      <nav className="creatorshelf-portfolio-nav sticky-top py-2">
        <div className="container-xl d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
             <div className="bg-purple p-1 rounded-3" style={{background: 'var(--portfolio-purple)'}}><BarChart2 size={20}/></div>
             <span className="fw-bold fs-5">CreatorShelf</span>
          </div>
          <div className="d-flex gap-4 d-none d-md-flex">
            {['Home', 'YouTube', 'Instagram', 'About', 'Brand Deals', 'Contact'].map((item, i) => (
              <a key={i} href="#" className={`creatorshelf-portfolio-nav-link text-decoration-none ${item === 'Home' ? 'active' : ''}`}>{item}</a>
            ))}
          </div>
          <button className="creatorshelf-portfolio-btn-work py-2">Work With Me <Send size={14}/></button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="container-xl py-5 mt-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-3 text-center text-lg-start">
            <div className="creatorshelf-portfolio-hero-avatar-wrap mx-auto mx-lg-0">
               <div className="creatorshelf-portfolio-avatar-glow"></div>
               <img src="https://imgs.search.brave.com/9lTABkpy9yJrokIoUkpq3ni439N-chHTcQWyfKVbrwE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2dldGlt/Z19haV9pbWctZmJM/VUJQVWpJbnVkZ0g0/N3NFaG10LmpwZWc" className="creatorshelf-portfolio-avatar-img" alt="nicky" />
               <div className="position-absolute bottom-0 end-0 z-3 p-1 ">
                  <CheckCircle2 size={30} fill="white" className="text-primary"/>
               </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="creatorshelf-portfolio-badge-tech mb-3">
              <Star size={12} fill="var(--portfolio-purple)" className="text-purple"/> Tech Creator
            </div>
            <h1 className="display-4 fw-bold mb-1">nicky Creates</h1>
            <p className="text-purple fw-bold mb-3" style={{color: 'var(--portfolio-purple)'}}>@nickycreates</p>
            <p className="text-dim mb-4 lh-lg">I create videos about programming, web development and tools that help you build a better life as a developer.</p>
            
            <div className="d-flex flex-wrap gap-3 mb-4">
              <div className="creatorshelf-portfolio-platform-pill">
                <Icons.FaYoutube size={18} className="text-danger"/> <span className="fw-bold">YouTube</span> <span className="text-dim">125K</span>
              </div>
              <div className="creatorshelf-portfolio-platform-pill">
                <Icons.FaInstagram size={18} className="text-pink" style={{color:'#e1306c'}}/> <span className="fw-bold">Instagram</span> <span className="text-dim">48.2K</span>
              </div>
              <div className="creatorshelf-portfolio-platform-pill">
                <Globe size={18} className="text-muted"/> <span className="fw-bold">Website</span> <ChevronRight size={14}/>
              </div>
            </div>

            <div className="d-flex gap-3 text-dim">
               <Icons.FaYoutube size={20}/> <Icons.FaInstagram size={20}/> <Icons.FaTwitter size={20}/> <Icons.FaLinkedin size={20}/> <Mail size={20}/>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="creatorshelf-portfolio-panel p-4" style={{background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(0,0,0,0))'}}>
              <div className="bg-purple-glow p-2 rounded-3 mb-3 d-inline-block" style={{background: 'var(--surface-bright)'}}><BarChart2 size={24} className="text-purple"/></div>
              <h4 className="fw-bold mb-3">Lets build something amazing together!</h4>
              <p className="text-dim small mb-4">Open to brand partnerships, sponsorships and product collaborations.</p>
              <button className="creatorshelf-portfolio-btn-work w-100">Work With Me <Send size={14}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="container-xl mb-5">
        <div className="row g-3">
          {[
            { label: 'Total Subscribers', val: '125K', growth: '+12.4%', icon: <Users size={20}/>, c: '#ef4444' },
            { label: 'Total Views', val: '8.7M', growth: '+18.7%', icon: <Eye size={20}/>, c: '#a855f7' },
            { label: 'Total Posts', val: '256', growth: '+8.3%', icon: <Camera size={20}/>, c: '#f59e0b' },
            { label: 'Avg. Engagement', val: '5.2%', growth: '+9.1%', icon: <BarChart2 size={20}/>, c: '#3b82f6' },
            { label: 'Total Watch Time', val: '1.2M hrs', growth: '+15.3%', icon: <PlayCircle size={20}/>, c: '#ec4899' },
          ].map((stat, i) => (
            <div className="col-6 col-lg" key={i}>
              <div className="creatorshelf-portfolio-stat-card">
                <div className="p-2 rounded-3" style={{background: `${stat.c}20`, color: stat.c}}>{stat.icon}</div>
                <div>
                  <p className="extra-small text-dim mb-0">{stat.label}</p>
                  <h5 className="fw-bold mb-0">{stat.val}</h5>
                  <p className="extra-small text-success mb-0">{stat.growth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONTENT GRID */}
      <section className="container-xl pb-5">
        <div className="row g-4">
          
          {/* LEFT: CONTENT FEEDS */}
          <div className="col-lg-8">
            {/* YouTube Section */}
            <div className="creatorshelf-portfolio-panel mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0 d-flex align-items-center gap-2"><Icons.FaYoutube className="text-danger"/> Latest YouTube Videos</h5>
                <a href="#" className="text-danger small fw-bold text-decoration-none">View all</a>
              </div>
              <div className="row g-3">
                {[1,2,3].map(v => (
                  <div className="col-md-4 col-lg-4 col-sm-12 col-6" key={v}>
                    <div className="creatorshelf-portfolio-video-thumb mb-2">
                       <img src={`https://imgs.search.brave.com/Kdb9Ir8BLO3VtkEvKsN4ZVz8Ex2aBYDvU3vJisIbtLA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFGQU1pckNz/WDQvNC8wLzE2MDB3/LWpXNVExcHNZRWFj/LmpwZw`} className="w-100" alt="thumb" />
                       <span className="creatorshelf-portfolio-duration">18:45</span>
                    </div>
                    <h6 className="small fw-bold mb-1">Laravel 11 Full Course for Beginners (2024)</h6>
                    <p className="extra-small text-dim">12.5K views • 2 days ago</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Section */}
            <div className="creatorshelf-portfolio-panel">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0 d-flex align-items-center gap-2"><Icons.FaInstagram className="text-pink"/> Latest Instagram Posts</h5>
                <a href="#" className="text-pink small fw-bold text-decoration-none">View all</a>
              </div>
              <div className="d-flex gap-3 overflow-auto hide-scrollbar">
                {[1,2,3,4,5,6,7,8].map(p => (
                   <img key={p} src={`https://imgs.search.brave.com/iVHbrGyaSD404kHWEeOXXJ3goRUxH0sKpkmdUHmdWik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5L2Mx/L2RlLzE5YzFkZWM3/OWNiZGU0ZTE2Y2M2/YTE0YmUyZTlkOWFj/LmpwZw`} className="rounded-3" style={{width:100, height:130, flexShrink:0}} alt="ig" />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: GROWTH & TOP CONTENT */}
          <div className="col-lg-4">
            {/* Chart Panel */}
            <div className="creatorshelf-portfolio-panel mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold mb-0">Growth Overview <span className="text-dim small fw-normal">(Last 30 Days)</span></h6>
                <Icons.ChevronDown size={14} className="text-dim"/>
              </div>
              <div style={{height: 200}}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#555', fontSize: 10}} />
                    <YAxis hide />
                    <Tooltip content={<div className="creatorshelf-portfolio-tooltip">Growth detected</div>}/>
                    <Line type="monotone" dataKey="youtube" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="insta" stroke="#a855f7" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="d-flex gap-3 mt-3 extra-small fw-bold">
                 <div className="d-flex align-items-center gap-1"><div className="rounded-circle" style={{width:8, height:8, background:'#ef4444'}}></div> YouTube Subscribers</div>
                 <div className="d-flex align-items-center gap-1"><div className="rounded-circle" style={{width:8, height:8, background:'#a855f7'}}></div> Instagram Followers</div>
              </div>
            </div>

            {/* Top Content List */}
            <div className="creatorshelf-portfolio-panel">
               <h6 className="fw-bold mb-4">Top Content <span className="text-dim small fw-normal">(This Month)</span></h6>
               {[
                 { id: 1, title: 'Build a Portfolio Website with React & Tailwind CSS', views: '8.3K views' },
                 { id: 2, title: 'Laravel 11 Full Course for Beginners (2024)', views: '6.1K views' },
               ].map((item) => (
                 <div key={item.id} className="d-flex align-items-center gap-3 mb-3">
                   <div className="fw-bold text-dim">{item.id}</div>
                   <img src={`https://placehold.co/100x60/111/fff?text=Content+${item.id}`} className="rounded-2" width="70" alt="top" />
                   <div>
                     <p className="extra-small fw-bold mb-0 text-truncate" style={{maxWidth: 150}}>{item.title}</p>
                     <p className="extra-small text-dim mb-0">{item.views}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}