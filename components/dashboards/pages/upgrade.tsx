'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Zap, Palette, Headphones, CheckCircle2, XCircle, 
  Crown, ShieldCheck, Lock, Star, ChevronRight 
} from 'lucide-react';


export default function UpgradePage() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    { name: "Free", price: "0", desc: "Perfect for getting started.", btn: "Current Plan", pro: false },
    { name: "Pro", price: isYearly ? "7.20" : "9.00", desc: "Everything you need to grow.", btn: "Upgrade to Pro", pro: true },
    { name: "Business", price: isYearly ? "24.00" : "29.00", desc: "For teams and advanced creators.", btn: "Upgrade to Business", pro: false }
  ];

  return (
    <div className="creatorshelf-dashboard-upgrade-wrapper">
      
      {/* HEADER SECTION */}
      <div className="position-relative">
        <div className="creatorshelf-dashboard-upgrade-illustration-bg">
            {/* <Crown size={220} color="var(--portfolio-purple)" strokeWidth={0.5} style={{filter: 'blur(1px)'}} /> */}
            <Image src="/images/upgrade.png" alt="Upgrade Illustration" className="creatorshelf-dashboard-upgrade-illustration" width={400}  height={260}/>
        </div>
        
        <h1 className="fw-bold display-5 mb-2 creatorshelf-dashboard-overview-title">Upgrade <span style={{color:'var(--portfolio-purple)'}}>Your Plan</span></h1>
        <p className="creatorshelf-dashboard-overview-subtitle">Choose the perfect plan to grow your brand and unlock premium features.</p>

        {/* Header Features Scrollable on Mobile */}
        <div className="creatorshelf-dashboard-upgrade-head-scroll">
          <div className="creatorshelf-dashboard-upgrade-head-feature">
            <div className="creatorshelf-dashboard-upgrade-mini-icon p-2 bg-surface-glass border border-glass  " style={{color:'var(--portfolio-purple)'}}><Zap size={20} fill="currentColor"/></div>
            <div><h6 className="mb-0 fw-bold small">More Power</h6><p className="extra-small  mb-0" style={{color:'var(--text-dim)', fontSize: '13px'}}>Advanced tools to grow faster</p></div>
          </div>
          <div className="creatorshelf-dashboard-upgrade-head-feature">
            <div className="creatorshelf-dashboard-upgrade-mini-icon p-2 bg-surface-glass border border-glass  " style={{color:'var(--portfolio-purple)'}}><Palette size={20}/></div>
            <div><h6 className="mb-0 fw-bold small">More Customization</h6><p className="extra-small  mb-0" style={{color:'var(--text-dim)', fontSize: '13px'}}>Unique portfolio design</p></div>
          </div>
          <div className="creatorshelf-dashboard-upgrade-head-feature">
            <div className="creatorshelf-dashboard-upgrade-mini-icon p-2 bg-surface-glass border border-glass  " style={{color:'var(--portfolio-purple)'}}><Headphones size={20}/></div>
            <div><h6 className="mb-0 fw-bold small">Priority Support</h6><p className="extra-small  mb-0" style={{color:'var(--text-dim)', fontSize: '13px'}}>Help when you need it</p></div>
          </div>
        </div>
      </div>

      {/* TOGGLE */}
      <div className="text-center mt-5 mb-2">
        <div className="creatorshelf-dashboard-upgrade-toggle-container py-2 px-4 bg-surface-glass border border-glass d-inline-flex align-items-center gap-3">
          <span className={!isYearly ? 'text-white small fw-bold' : 'text-dim small'}>Monthly</span>
          <div className={`creatorshelf-dashboard-upgrade-switch ${isYearly ? 'yearly' : ''}`} onClick={() => setIsYearly(!isYearly)}>
            <motion.div animate={{ x: isYearly ? 22 : 2 }} className="bg-white rounded-circle shadow-sm" style={{width: '16px', height: '16px', marginTop: '2px'}} />
          </div>
          <span className={isYearly ? 'text-white small fw-bold' : 'text-dim small'}>Yearly</span>
          <span className="badge bg-success bg-opacity-10 text-success  px-2 py-1" style={{fontSize: '0.65rem'}}>Save 20%</span>
        </div>
      </div>

      {/* MID PLANS (CENTERED & SCROLLABLE ON MOBILE) */}
      <div className="creatorshelf-dashboard-upgrade-plans-wrapper">
        {plans.map((p, i) => (
          <div className={`creatorshelf-dashboard-upgrade-card ${p.pro ? 'pro' : ''}`} key={i}>
            {p.pro && <div className="creatorshelf-dashboard-upgrade-popular-tag">Most Popular</div>}
            <h3 className="fw-bold mb-1">{p.name}</h3>
            <p className="extra-small mb-3" style={{color:'var(--text-dim )'}}>{p.desc}</p>
            <div className="d-flex align-items-baseline mb-1">
                <span className="display-6 fw-bold">${p.price}</span>
                <span className="text-dim small ms-1">/month</span>
            </div>
            <p className="extra-small  mb-4"  style={{color:'var(--text-dim )'}}>Billed {isYearly ? 'annually' : 'monthly'}</p>
            <button className={p.pro ? 'btn btn-primary w-100 py-2 fw-bold border-0' : 'btn btn-outline-secondary w-100 py-2 text-dim border-secondary border-opacity-25'} style={{backgroundColor: p.pro ? 'var(--portfolio-purple)' : 'transparent', borderRadius: 'var(--creatorshelf-notch)'}}>
                {p.btn}
            </button>
            <ul className="list-unstyled mt-4 mb-0">
                {["Connect unlimited platforms", "All premium themes", "Advanced analytics", "Remove branding", "Custom domain"].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2 mb-3 extra-small">
                        <CheckCircle2 size={14} className="creatorshelf-dashboard-upgrade-tick" /> {item}
                    </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* THIRD SECTION: COMPARE FEATURES */}
      <div className="row g-4">
        <div className="col-lg-8">
            <div className="creatorshelf-dashboard-upgrade-compare-panel h-100">
                <h5 className="fw-bold mb-4">Compare Features</h5>
                <div className="table-responsive">
                    <table className="creatorshelf-dashboard-upgrade-table">
                        <thead>
                            <tr className="text-muted">
                                <th>Feature</th>
                                <th className="text-center">Free</th>
                                <th className="text-center">Pro</th>
                                <th className="text-center">Bus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["Connect Platforms", "Portfolio Themes", "Advanced Analytics", "Custom Domain", "Remove Branding"].map((feat, idx) => (
                                <tr key={idx}>
                                    <td className="text-dim">{feat}</td>
                                    <td className="text-center">{idx < 1 ? '2' : <XCircle size={14} className="creatorshelf-dashboard-upgrade-cross"/>}</td>
                                    <td className="text-center"><CheckCircle2 size={14} className="creatorshelf-dashboard-upgrade-tick" /></td>
                                    <td className="text-center"><CheckCircle2 size={14} className="creatorshelf-dashboard-upgrade-tick" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* TESTIMONIAL MINI CARD */}
        <div className="col-lg-4">
            <div className="creatorshelf-dashboard-upgrade-compare-panel h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                    <img src="https://i.pravatar.cc/150?u=priya" width="40" className="rounded-circle border border-glass" alt="user" />
                    <div className="d-flex text-warning gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                </div>
                <p className="small text-white opacity-75 mb-4 italic">CreatorShelf Pro completely transformed how brands see my work. It's the most powerful tool in my creator arsenal. Worth every penny!</p>
                <div className="pt-3 border-top border-glass">
                    <p className="mb-0 fw-bold small">Priya Sharma</p>
                    <p className="extra-small text-dim mb-0">Lifestyle Creator</p>
                </div>
            </div>
        </div>
      </div>

      {/* LAST CARD: TRUST BAR */}
      <div className="creatorshelf-dashboard-upgrade-trust-bar">
        <div className="d-flex align-items-center gap-3">
            <ShieldCheck size={20} className="text-muted" />
            <div>
                <p className="mb-0 small fw-bold">7-day money-back guarantee</p>
                <p className="mb-0 extra-small text-dim">Not satisfied? Get a full refund within 7 days.</p>
            </div>
        </div>
        <div className="d-flex align-items-center gap-3">
            <Lock size={18} className="text-muted" />
            <div>
                <p className="mb-0 small fw-bold">Secure Checkout</p>
                <p className="mb-0 extra-small text-dim">Your payment information is 100% secure.</p>
            </div>
        </div>
      </div>

    </div>
  );
}