"use client";
import Cybereye from "../ui/Cyber-eyes-svg";


const ProblemSection = () => {


    const data = [
        {
            id: "001",
            tag: "Scattered Presence",
            title: "Your audience is scattered.",
            desc: "Followers discover you on different platforms, but your work and content remain spread across the internet."
        },
        {
            id: "002",
            tag: "Outdated Portfolios",
            title: "Portfolios go stale.",
            desc: "Updating projects, links, and content manually takes time, so most portfolios quickly become outdated."
        },
        {
            id: "003",
            tag: "Missed Opportunities",
            title: "Brands miss your value.",
            desc: "Potential clients struggle to see your reach, content, and achievements across multiple platforms."
        },
        {
            id: "004",
            tag: "Too Many Links",
            title: "Too many links.",
            desc: "Your audience has to jump between platforms to find everything you create."
        }
    ];
    return (
        <section className="creatorshelf-problem-section creator-section">
            <div className="container-fluid container creatorshelf-warraper px-0">

                {/* Top Header */}
                <div className=" creatorshelf-problem-head">
                    <div className="creatorshelf-label-box">
                        <span>✕</span>Creator Problem
                    </div>
                    <h2 className="creatorshelf-problem-title text-center">

                        Your creator presence is broken.
                    </h2>
                </div>

                {/* The Grid */}
                <div className="row g-0 creatorshelf-problem-grid">

                    {/* Left: Interactive Eye */}
                    <Cybereye />


                    {/* Right: Problem Blocks */}
                    <div className="col-lg-8">
                        <div className="row g-0">
                            {data.map((item) => (
                                <div key={item.id} className="col-md-6 creatorshelf-grid-item">
                                    <div className="d-flex justify-content-between">
                                        <span className="creatorshelf-tag">{item.tag}</span>
                                        <span className="creatorshelf-num">{item.id}
                                        </span>

                                    </div>

                                    <h3 className="creatorshelf-block-title">{item.title}</h3>
                                    <p className="creatorshelf-block-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ProblemSection;