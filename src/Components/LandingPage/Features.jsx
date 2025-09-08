import React from "react";
import "./Features.css";

const Features = ({ onExploreProducts }) => {
	const handleExploreClick = () => {
		if (onExploreProducts) {
			onExploreProducts();
		}
	};

	const features = [
		{
			icon: "🔍",
			title: "Advanced Search",
			description:
				"Find products instantly with our powerful search and filtering system that understands what you're looking for.",
		},
		{
			icon: "⚡",
			title: "Lightning Fast",
			description:
				"Experience blazing fast performance with optimized loading times and smooth interactions across all devices.",
		},
		{
			icon: "📱",
			title: "Mobile First",
			description:
				"Fully responsive design that works perfectly on all devices, from mobile phones to desktop computers.",
		},
		{
			icon: "🛒",
			title: "Easy Shopping",
			description:
				"Streamlined shopping experience with one-click add to cart, secure checkout, and order tracking.",
		},
		{
			icon: "🎯",
			title: "Smart Recommendations",
			description:
				"Get personalized product recommendations based on your browsing history and preferences.",
		},
		{
			icon: "🔒",
			title: "Secure & Safe",
			description:
				"Your data and transactions are protected with enterprise-grade security and encryption.",
		},
	];

	return (
		<section id="features" className="features-section">
			<div className="features-container">
				<div className="features-header">
					<h2 className="features-title">Why Choose ProductHub?</h2>
					<p className="features-subtitle">
						We've built the most advanced product discovery platform
						with features designed to make your shopping experience
						effortless and enjoyable.
					</p>
				</div>

				<div className="features-grid">
					{features.map((feature, index) => (
						<div key={index} className="feature-card">
							<div className="feature-icon">
								<span className="icon-emoji">
									{feature.icon}
								</span>
							</div>
							<h3 className="feature-title">{feature.title}</h3>
							<p className="feature-description">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className="features-cta">
					<button
						className="btn-features"
						onClick={handleExploreClick}
					>
						Start Exploring Now
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
				</div>
			</div>
		</section>
	);
};

export default Features;
