"use client";
import React, { useState, useEffect } from 'react';
import "@/styles/dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [logTime, setLogTime] = useState("");

  useEffect(() => {
    setLogTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => setLogTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Overview', icon: '◰' },
    { name: 'Portfolio', icon: '▣' },
    { name: 'Analytics', icon: '◈' },
    { name: 'Settings', icon: '⚙' }
  ];

  return (
    <div className="creatorshelf-dash-wrapper">
      
      {/* --- MOBILE HEADER --- */}
      <div className="d-lg-none position-fixed top-0 w-100 p-3 bg-black border-bottom z-3 d-flex justify-content-between" style={{borderColor: 'var(--border-bright)'}}>
        <span className="fw-black">CREATOR<span style={{color:'var(--primary)'}}>SHELF</span></span>
        <button className="btn text-white p-0" onClick={() => setSidebarOpen(!isSidebarOpen)}>☰</button>
      </div>

      {/* --- TACTICAL SIDEBAR --- */}
      <aside className={`creatorshelf-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="creatorshelf-sidebar-logo">
          <h1 className="h5 fw-black text-white m-0">CREATOR<span style={{color: 'var(--primary)'}}>SHELF</span></h1>
        </div>
        
        <nav className="creatorshelf-nav-group">
          <span className="creatorshelf-hud-meta px-4 mb-3" style={{opacity: 0.4}}>SYSTEM_NAV</span>
          {navItems.map((item) => (
            <div 
              key={item.name}
              className={`creatorshelf-nav-link ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => { setActiveTab(item.name); setSidebarOpen(false); }}
            >
              <span className="opacity-50">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </nav>

        <div className="p-4 border-top" style={{borderColor: 'var(--border-dim)'}}>
          <div className="d-flex align-items-center gap-2 mb-3">
             <div style={{width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent)'}} />
             <span className="creatorshelf-hud-meta m-0">STATUS: ONLINE</span>
          </div>
          <button className="btn btn-dark w-100 rounded-0 creatorshelf-hud-meta py-2">LOG_OUT</button>
        </div>
      </aside>

      {/* --- MAIN DECK --- */}
      <main className="creatorshelf-main-deck">
        
        {/* DECK HEADER */}
        <header className="mb-5 d-flex justify-content-between align-items-end border-bottom pb-4" style={{borderColor: 'var(--border-dim)'}}>
          <div>
            <span className="creatorshelf-hud-meta">ACTIVE_MODULE / {activeTab.toUpperCase()}</span>
            <h2 className="display-5 fw-black text-white m-0">Welcome back, <span style={{color: 'var(--primary)'}}>Alex</span></h2>
          </div>
          <div className="text-end d-none d-md-block">
            <span className="creatorshelf-hud-meta">LOCAL_TIME: {logTime}</span>
            <span className="creatorshelf-hud-meta d-block">IP: 192.168.1.04</span>
          </div>
        </header>

        <div className="row g-4">
          
          {/* COMPLETION MODULE */}
          <div className="col-lg-4">
            <div className="creatorshelf-card">
              <div className="creatorshelf-card-bracket creatorshelf-tl" />
              <span className="creatorshelf-hud-meta">MOD_01 // SYSTEM_INIT</span>
              <h3 className="creatorshelf-display-val">85%</h3>
              <div className="creatorshelf-hud-meta mt-2" style={{color: 'var(--accent)'}}>COMPLETION_STABLE</div>
              <div className="mt-4 border-top pt-3" style={{borderColor: 'var(--border-dim)'}}>
                <div className="small mb-2 text-white">✓ Identity Verified</div>
                <div className="small mb-2 text-white">✓ Platforms Synced</div>
                <div className="small text-muted">○ Custom Domain Pending</div>
              </div>
            </div>
          </div>

          {/* ANALYTICS MODULE */}
          <div className="col-lg-8">
            <div className="creatorshelf-card">
              <div className="creatorshelf-card-bracket creatorshelf-br" />
              <span className="creatorshelf-hud-meta">MOD_02 // TRAFFIC_MATRIX</span>
              <div className="row">
                <div className="col-md-4">
                  <div className="creatorshelf-display-val">12.4k</div>
                  <span className="creatorshelf-hud-meta">TOTAL_VIEWS</span>
                </div>
                <div className="col-md-8">
                  {/* Dot Matrix Visualization */}
                  <div className="creatorshelf-dot-matrix">
                    {Array.from({length: 60}).map((_, i) => (
                      <div key={i} className={`creatorshelf-dot ${i % 7 === 0 ? 'active' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="col-12">
            <span className="creatorshelf-hud-meta mb-3">MOD_03 // TACTICAL_ACTIONS</span>
            <div className="row g-3">
              {['Edit Bio', 'Add Links', 'Update Photo', 'Switch Theme'].map(action => (
                <div key={action} className="col-6 col-md-3">
                  <div className="creatorshelf-card py-4 text-center">
                    <span className="small fw-black text-uppercase">{action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONSOLE LOG */}
          <div className="col-12">
            <div className="creatorshelf-card" style={{backgroundColor: '#050505', borderStyle: 'dashed'}}>
              <span className="creatorshelf-hud-meta">MOD_04 // CONSOLE_LOG</span>
              <div className="mt-3 font-monospace" style={{fontSize: '11px', color: '#444', lineHeight: '1.8'}}>
                <div>[<span style={{color: 'var(--accent)'}}>OK</span>] Connection established with Instagram Node...</div>
                <div>[<span style={{color: 'var(--primary)'}}>WARN</span>] LinkedIn API token expiring in 48h...</div>
                <div>[INFO] New portfolio view detected from US_EAST_1...</div>
                <div>[INFO] Content sync complete. 12 assets updated.</div>
              </div>
            </div>
          </div>

        </div>

        {/* PAGE ACTIONS */}
        <div className="mt-5 d-flex gap-3">
          <button className="creatorshelf-btn-tactical">Synchronize All</button>
          <button className="btn btn-outline-secondary rounded-0 creatorshelf-hud-meta py-3 px-4">View Public Portfolio</button>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;