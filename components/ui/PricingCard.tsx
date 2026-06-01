"use client";

interface PricingCardProps {
    tag: string;
    name: string;
    mPrice: number;
    yPrice: number;
    cta: string;
    featured: boolean;
    features: string[];
    isYearly: boolean;
}

const PricingCard = ({ tag, name, mPrice, yPrice, cta, featured, features, isYearly, }: PricingCardProps) => {
    return (
        <div
            className={`creatorshelf-price-card ${featured ? "featured" : ""}`} >
            {/* Decorations */}
            <div className="creatorshelf-bracket creatorshelf-bracket-tl" />
            <div className="creatorshelf-bracket creatorshelf-bracket-br" />

            <div className="creatorshelf-pod-id">
                {tag}
            </div>

            {/* Header */}
            <div className="creatorshelf-plan-header">
                <h3 className="h6 fw-black text-uppercase text-secondary mb-3">
                    {name}
                </h3>

                <div className="creatorshelf-price-swap">
                    <div
                        className="creatorshelf-price-box"
                        style={{
                            transform: isYearly
                                ? "translateY(-60px)"
                                : "translateY(0)",
                        }}
                    >
                        <div className="creatorshelf-price-val h-100">
                            $
                            <span>{mPrice}</span>
                        </div>
                    </div>

                    <div
                        className="creatorshelf-price-box"
                        style={{
                            transform: isYearly
                                ? "translateY(-60px)"
                                : "translateY(0)",
                        }}
                    >
                        <div className="creatorshelf-price-val h-100">
                            $
                            <span>{yPrice}</span>
                        </div>
                    </div>
                </div>

                <div
                    className="creatorshelf-hud-status"
                    style={{ fontSize: "9px" }}
                >
                    {isYearly
                        ? "BILLED YEARLY"
                        : "BILLED MONTHLY"}
                </div>
            </div>

            {/* Features */}
            <ul className="creatorshelf-pricing-list list-unstyled">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="d-flex align-items-center mb-3 text-secondary small"
                    >
                        <div
                            style={{
                                width: "4px",
                                height: "4px",
                                background: featured
                                    ? "var(--primary)"
                                    : "#444",
                                marginRight: "15px",
                            }}
                        />

                        {feature}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button
                className={`creatorshelf-btn-notched w-100 ${!featured
                    ? "border border-secondary"
                    : ""
                    }`}
            >
                {cta}
            </button>
        </div>
    );
};

export default PricingCard;