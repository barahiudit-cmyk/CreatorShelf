'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animation';
import { Icons } from '@/lib/icons';

export default function BillingSection() {
    const statusClasses = {
        Paid: "bg-success bg-opacity-10 text-success",
        Pending: "bg-warning bg-opacity-10 text-warning",
        Failed: "bg-danger bg-opacity-10 text-danger",
    };
    const invoices = [
        { id: "#INV-8821", date: "Oct 12, 2023", amount: "$15.00", status: "Paid" },
        { id: "#INV-7712", date: "Sep 12, 2023", amount: "$15.00", status: "Pending" },
        { id: "#INV-6601", date: "Aug 12, 2023", amount: "$15.00", status: "Paid" },
    ];


    return (
        <motion.div {...fadeInUp} className="creatorshelf-dashboard-billing-wrapper">

            <div className="row g-4">
                {/* CURRENT PLAN OVERVIEW */}
                <div className="col-lg-7">
                    <section className="creatorshelf-dashboard-content-panel h-100">
                        <h2 className="creatorshelf-dashboard-billing-title">Current Plan</h2>
                        <p className="creatorshelf-dashboard-billing-sub">Manage your subscription and usage limits.</p>

                        <div className="creatorshelf-dashboard-billing-plan-card">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <span className="creatorshelf-dashboard-billing-plan-badge">Pro Plan</span>
                                    <h3 className="creatorshelf-dashboard-billing-price">$15<span>/month</span></h3>
                                </div>
                                <div className="text-end">
                                    <p className="small  mb-1" style={{ color: 'var(--text-dim)' }}>Next billing date</p>
                                    <p className="fw-bold mb-0"><Icons.Calendar size={14} className="me-1" /> Nov 12, 2023</p>
                                </div>
                            </div>

                            <ul className="creatorshelf-dashboard-billing-features">
                                <li><Icons.CheckCircle2 size={16} /> Unlimited Social Connections</li>
                                <li><Icons.CheckCircle2 size={16} /> Advanced Portfolio Customization</li>
                                <li><Icons.CheckCircle2 size={16} /> Real-time Analytics Sync</li>
                                <li><Icons.CheckCircle2 size={16} /> Priority Support</li>
                            </ul>

                            <div className="d-flex gap-2">
                                <button className="creatorshelf-dashboard-billing-btn-upgrade">Manage Subscription</button>
                                <button className="creatorshelf-dashboard-billing-btn-outline">Switch to Yearly</button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* PAYMENT METHOD */}
                <div className="col-lg-5">
                    <section className="creatorshelf-dashboard-content-panel h-100">
                        <h2 className="creatorshelf-dashboard-billing-title">Payment Method</h2>
                        <p className="creatorshelf-dashboard-billing-sub">Your primary payment source.</p>

                        <div className="creatorshelf-dashboard-billing-payment-card mb-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="p-2 bg-dark rounded">
                                    <Icons.CreditCard size={24} className="text-muted" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-bold">Visa •••• 4242</p>
                                    <p className="mb-0 text-dim small">Expires 12/26</p>
                                </div>
                            </div>
                            <button className="text-purple-400 border-0 bg-transparent small fw-bold" style={{ color: 'var(--portfolio-purple)' }}>Edit</button>
                        </div>

                        <div className="bg-black bg-opacity-20 p-3 rounded-4 border border-secondary border-opacity-10">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <Icons.Zap size={16} className="text-warning" />
                                <span className="small fw-bold">Auto-renewal is ON</span>
                            </div>
                            <p className="extra-small text-dim mb-0">Your plan will automatically renew on Nov 12, 2023 using your primary card.</p>
                        </div>
                    </section>
                </div>

                {/* BILLING HISTORY */}
                <div className="col-12">
                    <section className="creatorshelf-dashboard-content-panel">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="creatorshelf-dashboard-billing-title mb-0">Billing History</h2>
                            <button className="creatorshelf-dashboard-billing-btn-outline w-auto py-2">View All Invoices</button>
                        </div>

                        <div className="table-responsive">
                            <table className="creatorshelf-dashboard-billing-table">
                                <thead>
                                    <tr>
                                        <th className="text-start">Invoice ID</th>
                                        <th className="text-start">Date</th>
                                        <th className="text-start">Amount</th>
                                        <th className="text-start">Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((inv, i) => (
                                        <tr key={i}>
                                            <td className="fw-bold">{inv.id}</td>
                                            <td className="text-dim">{inv.date}</td>
                                            <td className="fw-bold">{inv.amount}</td>
                                            <td>
                                                <span
                                                    className={`badge ${statusClasses[inv.status as keyof typeof statusClasses] ||
                                                        "bg-secondary bg-opacity-10 text-secondary"
                                                        }`}
                                                >
                                                    {inv.status}
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-sm text-muted">
                                                    <Icons.Download size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

        </motion.div>
    );
}