"user client";
import React, { useState, useEffect, useRef } from 'react';

const Cybereye = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking logic
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 15;
            const y = (e.clientY - rect.top - rect.height / 2) / 15;
            setMouse({ x, y });
        };
        window.addEventListener('mousemove', handleMove);

        // Random Blink Logic
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
        }, 4000);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            clearInterval(blinkInterval);
        };
    }, []);
    return (
        <div className="col-lg-4 creatorshelf-grid-item p-0 "  ref={containerRef}>
          
            <div className="creatorshelf-eye-container ">

                {/* The Eye SVG */}
                <svg viewBox="0 0 480 480" className="creatorshelf-eye-shape">
                    <path
                        d="M240 240 L240 30 A210 210 0 0 1 390 110 Z"
                        className="scanner-sweep"
                    />
                    {/* ALL LINEWORK */}
                    <g className="eye-linework" opacity="0.22">

                        {/* Radar Rings */}
                        {[220, 180, 140, 100, 60].map((r) => (
                            <circle
                                key={r}
                                cx="240"
                                cy="240"
                                r={r}
                                stroke="var(--eye-stroke)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                        ))}

                        {/* Cross Lines */}
                        <line x1="240" y1="0" x2="240" y2="480" stroke="var(--eye-stroke)" strokeWidth="0.3" />
                        <line x1="0" y1="240" x2="480" y2="240" stroke="var(--eye-stroke)" strokeWidth="0.3" />
                        <line x1="70" y1="70" x2="410" y2="410" stroke="var(--eye-stroke)" strokeWidth="0.3" />
                        <line x1="410" y1="70" x2="70" y2="410" stroke="var(--eye-stroke)" strokeWidth="0.3" />

                        {/* Eye Shape */}
                        <g
                            style={{
                                transform: isBlinking ? 'scaleY(0.05)' : 'scaleY(1)',
                                transformOrigin: 'center',
                                transition: '0.12s ease'
                            }}
                        >
                            <path
                                d="M120 240 C120 240 180 170 240 170 C300 170 360 240 360 240 C360 240 300 310 240 310 C180 310 120 240 120 240Z"
                                stroke="var(--eye-stroke)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <circle
                                cx="240"
                                cy="240"
                                r="35"
                                stroke="var(--eye-stroke)"
                                strokeWidth="1"
                                fill="none"
                            />
                        </g>

                        {/* Scanner Corners */}
                        <g stroke="var(--eye-stroke)" strokeWidth="0.6">
                            <polyline points="40,70 40,40 70,40" fill="none" />
                            <polyline points="410,40 440,40 440,70" fill="none" />
                            <polyline points="440,410 440,440 410,440" fill="none" />
                            <polyline points="70,440 40,440 40,410" fill="none" />
                        </g>

                        {/* Dashed Telemetry */}
                        <g
                            stroke="var(--eye-stroke)"
                            strokeWidth="0.25"
                            strokeDasharray="3,6"
                        >
                            <line x1="240" y1="205" x2="110" y2="90" />
                            <line x1="240" y1="205" x2="370" y2="90" />
                            <line x1="240" y1="275" x2="110" y2="390" />
                            <line x1="240" y1="275" x2="370" y2="390" />
                        </g>

                        {/* Dots */}
                        <g fill="var(--eye-stroke)" opacity="0.5">
                            <circle cx="110" cy="90" r="3" />
                            <circle cx="370" cy="90" r="3" />
                            <circle cx="110" cy="390" r="3" />
                            <circle cx="370" cy="390" r="3" />
                        </g>

                        {/* Sector Glow */}
                        <path
                            d="M240 240 L240 60 A180 180 0 0 1 380 145 Z"
                            fill="var(--eye-stroke)"
                            opacity="0.04"
                        />

                        {/* Text */}
                        <text
                            x="240"
                            y="478"
                            textAnchor="middle"
                            fill="var(--eye-stroke)"
                            opacity="0.6"
                            fontFamily="monospace"
                            fontSize="5"
                            letterSpacing="0.2em"
                        >
                            MONITORING ACTIVE
                        </text>
                    </g>

                    {/* MOVING PUPIL */}
                    <circle
                        cx={240 + mouse.x}
                        cy={240 + mouse.y}
                        r="14"
                        fill="var(--eye-pupil)"
                        className="creatorshelf-pupil"
                    />
                </svg>


            </div>
        </div>
    );

}

export default Cybereye;