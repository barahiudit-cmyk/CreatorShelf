"use client";
import React from 'react';
import "@/styles/dashboard.css";


const PublicPortfolio = () => {
  const creator = {
    name: "Alex Carter",
    category: "Tech Creator & Educator",
    bio: "Building products, sharing knowledge, and helping creators grow online.",
    location: "San Francisco, CA",
    stats: [
      { val: "250K", label: "Followers" },
      { val: "12M", label: "Views" },
      { val: "150", label: "Projects" },
      { val: "5Y", label: "Experience" }
    ],
    socials: ["YouTube", "Instagram", "TikTok", "X", "LinkedIn", "GitHub"]
  };

  return (
    <main className="creatorshelf-portfolio-wrapper">

      {/* SECTION 01: HERO */}
      <section className="creatorshelf-portfolio-banner">
        <div className="creatorshelf-portfolio-scanline" />
      </section>

      <div className="container">
        <div className="creatorshelf-portfolio-profile-area row align-items-end g-4">
          <div className="col-auto">
            <div className="creatorshelf-portfolio-avatar">
              <div className="creatorshelf-portfolio-bracket creatorshelf-portfolio-tl" />
              <img src="https://i.pravatar.cc/300?u=alex" alt={creator.name} className="w-100 h-100 object-fit-cover" />
            </div>
          </div>
          <div className="col">
            <span className="creatorshelf-portfolio-hud-label"> CREATOR_IDENTITY</span>
            <h1 className="display-4 fw-black m-0">{creator.name}</h1>
            <p className="creatorshelf-portfolio-hud-label" style={{ color: 'var(--text-muted)' }}>{creator.category}</p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-flex gap-2 justify-content-lg-end">
              <button className="creatorshelf-portfolio-btn">Contact</button>
              <button className="creatorshelf-portfolio-btn creatorshelf-portfolio-btn-outline">Media Kit</button>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-lg-8">
            {/* SECTION 03: ABOUT */}
            <div className="creatorshelf-portfolio-card mb-4">
              <span className="creatorshelf-portfolio-hud-label">SECTION_03 // ABOUT</span>
              <p className="lead text-secondary">{creator.bio}</p>
              <p className="text-muted small">I create educational content focused on technology, productivity, and digital entrepreneurship. My mission is to simplify complex systems for the next generation of builders.</p>
            </div>

            {/* SECTION 04: FEATURED CONTENT */}
            <span className="creatorshelf-portfolio-hud-label mt-5">SECTION_04 // FEATURED_WORK</span>
            <div className="row g-4">
              {[1, 2].map(i => (
                <div key={i} className="col-md-6">
                  <div className="creatorshelf-portfolio-card">
                    <div className="creatorshelf-portfolio-thumb" />
                    <h3 className="h5 fw-bold">Project Alpha_{i}</h3>
                    <p className="small text-muted">A deep dive into modular architecture and system design for creators.</p>
                    <button className="creatorshelf-portfolio-btn-outline btn btn-sm w-100 mt-2 text-uppercase fw-bold" style={{ fontSize: '10px' }}>View Content</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            {/* SECTION 02: STATS */}
            <div className="creatorshelf-portfolio-card mb-4">
              <span className="creatorshelf-portfolio-hud-label">SECTION_02 // METRICS</span>
              <div className="row g-4">
                {creator.stats.map((s, i) => (
                  <div key={i} className="col-6">
                    <div className="creatorshelf-portfolio-stat-val">{s.val}</div>
                    <div className="creatorshelf-portfolio-hud-label" style={{ marginBottom: 0 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 05: SOCIAL PRESENCE */}
            <div className="creatorshelf-portfolio-card">
              <span className="creatorshelf-portfolio-hud-label">SECTION_05 // CONNECTIVITY</span>
              {creator.socials.map(s => (
                <div key={s} className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary border-opacity-10">
                  <span className="small fw-bold">{s}</span>
                  <span className="creatorshelf-portfolio-hud-label m-0" style={{ color: 'var(--accent)', fontSize: '8px' }}>● ACTIVE</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 07: ACHIEVEMENTS */}
        <div className="mt-5">
          <span className="creatorshelf-portfolio-hud-label">SECTION_07 // MILESTONES</span>
          <div className="row g-3">
            {["100K Subscribers", "Verified Creator", "Top Creator 2024"].map(a => (
              <div key={a} className="col-md-4">
                <div className="creatorshelf-portfolio-card py-3 text-center border-opacity-25">
                  <div className="creatorshelf-portfolio-bracket creatorshelf-portfolio-br" />
                  <span className="small fw-black text-uppercase">{a}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 08: CONTACT */}
        <div className="mt-5 pt-5 text-center">
          <div className="creatorshelf-portfolio-card py-5">
            <span className="creatorshelf-portfolio-hud-label">SECTION_08 // INQUIRIES</span>
            <h2 className="display-5 fw-black mb-4">Lets build together.</h2>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <span className="small font-monospace">EMAIL: HELLO@ALEXCARTER.COM</span>
              <span className="small font-monospace">LOC: REMOTE // SF</span>
            </div>
            <button className="creatorshelf-portfolio-btn mt-5 px-5">Initialize Contact</button>
          </div>
        </div>

        {/* SECTION 09: FOOTER */}
        <footer className="creatorshelf-portfolio-footer">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
            <h2 className="h5 fw-black m-0">CREATOR<span style={{ color: 'var(--primary)' }}>SHELF</span></h2>
            <div className="d-flex gap-4">
              <span className="creatorshelf-portfolio-hud-label m-0" style={{ color: 'var(--accent)' }}>● PROFILE_ACTIVE</span>
              <span className="creatorshelf-portfolio-hud-label m-0" style={{ color: 'var(--text-muted)' }}>CREATORSHELF_PUBLIC_v1.0</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default PublicPortfolio;