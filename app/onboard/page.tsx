"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/styles/onboard.css";

type FormData = {
    category: string;
    username: string;
    platforms: string[];
    displayName: string;
    bio: string;
};

const OnboardingPage = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState<FormData>({
        category: "",
        username: "",
        platforms: [],
        displayName: "",
        bio: "",
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const updateForm = <K extends keyof FormData>(
        key: K,
        value: FormData[K]
    ) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <main className="creatorshelf-onboarding-page">
            {/* Progress HUD */}
            <div className="creatorshelf-onboarding-progress">
                {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className={`creatorshelf-progress-step ${step >= s ? 'active' : ''}`} />
                ))}
            </div>

            <div className="creatorshelf-step-container">
                {step === 1 && (
                    <div className="creatorshelf-step-content">
                        <h2 className="creatorshelf-onboarding-title">What kind of creator are you?</h2>
                        <p className="creatorshelf-onboarding-desc">Choose the category that best describes your work.</p>
                        <div className="creatorshelf-category-grid">
                            {["YouTuber", "Streamer", "Designer", "Developer", "Writer", "Photographer", "Artist", "Musician", "Other"].map(cat => (
                                <div
                                    key={cat}
                                    className={`creatorshelf-category-card ${formData.category === cat ? 'selected' : ''}`}
                                    onClick={() => updateForm('category', cat)}
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="creatorshelf-step-content">
                        <h2 className="creatorshelf-onboarding-title">Choose your username</h2>
                        <p className="creatorshelf-onboarding-desc">This will become your public portfolio URL.</p>
                        <div className="creatorshelf-username-wrapper">
                            <span className="creatorshelf-username-prefix">creatorshelf.com/@</span>
                            <input
                                type="text"
                                className="creatorshelf-username-input"
                                placeholder="username"
                                value={formData.username}
                                onChange={(e) => updateForm('username', e.target.value)}
                            />
                        </div>
                        <div className="text-center mt-3 small text-success">
                            {formData.username.length > 2 && "✓ Username available"}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="creatorshelf-step-content">
                        <h2 className="creatorshelf-onboarding-title">Connect your platforms</h2>
                        <p className="creatorshelf-onboarding-desc">Import your creator presence into one place.</p>
                        <div className="row g-3">
                            {["YouTube", "Instagram", "TikTok", "X", "LinkedIn", "GitHub", "Twitch", "Behance", "Dribbble"].map(p => (
                                <div key={p} className="col-md-4">
                                    <div className={`creatorshelf-platform-pill ${formData.platforms.includes(p) ? 'connected' : ''}`}
                                        onClick={() => {
                                            const next = formData.platforms.includes(p)
                                                ? formData.platforms.filter(x => x !== p)
                                                : [...formData.platforms, p];
                                            updateForm('platforms', next);
                                        }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: formData.platforms.includes(p) ? 'var(--primary)' : '#333' }} />
                                        <span>{p}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="creatorshelf-step-content">
                        <h2 className="creatorshelf-onboarding-title">Tell people about yourself</h2>
                        <p className="creatorshelf-onboarding-desc">Create a strong first impression for visitors and brands.</p>
                        <div className="creatorshelf-form-field">
                            <label className="creatorshelf-form-label">Display Name</label>
                            <input className="creatorshelf-form-input" placeholder="e.g. Jane Doe" onChange={e => updateForm('displayName', e.target.value)} />
                        </div>
                        <div className="creatorshelf-form-field">
                            <label className="creatorshelf-form-label">Creator Bio</label>
                            <textarea className="creatorshelf-form-input" rows={4} placeholder="Tell your story..." onChange={e => updateForm('bio', e.target.value)} />
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="creatorshelf-step-content">
                        <h2 className="creatorshelf-onboarding-title">Your CreatorShelf is ready</h2>
                        <p className="creatorshelf-onboarding-desc">You now have a professional creator presence.</p>
                        <div className="creatorshelf-success-card">
                            <div className="creatorshelf-summary-item">
                                <small className="creatorshelf-form-label">IDENTITY</small>
                                <div className="fw-bold">{formData.category}</div>
                            </div>
                            <div className="creatorshelf-summary-item">
                                <small className="creatorshelf-form-label">URL</small>
                                <div className="fw-bold">creatorshelf.com/@{formData.username}</div>
                            </div>
                            <div className="creatorshelf-summary-item">
                                <small className="creatorshelf-form-label">CONNECTED</small>
                                <div className="fw-bold">{formData.platforms.length} Platforms</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <div className="creatorshelf-nav-actions">
                    {step > 1 && step < 5 && (
                        <button className="creatorshelf-btn-skip" onClick={prevStep}>Back</button>
                    )}
                    {step < 5 ? (
                        <button className="creatorshelf-btn-next" onClick={nextStep}>
                            Continue
                        </button>
                    ) : (
                        <div className="d-flex flex-column gap-3 w-100 align-items-center">
                            <Link href="/dashboard" className="creatorshelf-btn-next w-100 text-decoration-none">Go To Dashboard</Link>
                            <button className="creatorshelf-btn-skip">View My Portfolio</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Info */}
            <div className="mt-auto pt-5 opacity-25 creatorshelf-form-label">
                System: CS_ONBOARD // SECURE_CHANNEL
            </div>
        </main>
    );
};

export default OnboardingPage;