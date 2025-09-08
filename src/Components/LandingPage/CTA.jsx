import React from "react";
import "./CTA.css";

const CTA = ({ onExploreProducts }) => {
	const handleExploreClick = () => {
		if (onExploreProducts) {
			onExploreProducts();
		}
	};

	return (
		<section id="cta" className="cta-section">
			<div className="cta-container">
				<div className="cta-content">
					<h2 className="cta-title">
						Ready to Discover Amazing Products?
					</h2>
					<p className="cta-description">
						Join thousands of users who are already finding their
						perfect products with our advanced discovery platform.
						Start exploring today!
					</p>
					<div className="cta-actions">
						<button
							className="btn-cta-primary"
							onClick={handleExploreClick}
						>
							Start Shopping Now
							<svg
								className="btn-icon"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</button>
						<button className="btn-cta-secondary">
							<svg
								className="btn-icon"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
							Learn More
						</button>
					</div>
					<div className="cta-features">
						<div className="cta-feature">
							<svg
								className="feature-icon"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>Free to use</span>
						</div>
						<div className="cta-feature">
							<svg
								className="feature-icon"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>No registration required</span>
						</div>
						<div className="cta-feature">
							<svg
								className="feature-icon"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>Instant access</span>
						</div>
					</div>
				</div>
				<div className="cta-visual">
					<div className="cta-graphic">
						<div className="graphic-circle circle-1"></div>
						<div className="graphic-circle circle-2"></div>
						<div className="graphic-circle circle-3"></div>
						<div className="graphic-center">
							<svg
								className="center-icon"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
