import React from "react";
import "./Hero.css";

const Hero = ({ onExploreProducts }) => {
	const handleExploreClick = () => {
		if (onExploreProducts) {
			onExploreProducts();
		}
	};

	return (
		<section id="home" className="hero-section">
			<div className="hero-container">
				<div className="hero-content">

					{/* =============== Text content =============== */}
					<div className="hero-text">
						<h1 className="hero-title">
							Discover Amazing Products
							<span className="gradient-text"> That Matter</span>
						</h1>
						<p className="hero-description">
							Explore our curated collection of premium products
							with advanced filtering, real-time search, and
							seamless shopping experience. Find exactly what
							you're looking for in seconds.
						</p>

						{/* =============== Actions =============== */}
						<div className="hero-actions">
							<button
								className="btn-hero-primary"
								onClick={handleExploreClick}
							>
								Explore Products
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
							<button className="btn-hero-secondary">
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
										d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Watch Demo
							</button>
						</div>

						{/* =============== Stats =============== */}
						<div className="hero-stats">
							<div className="stat-item">
								<span className="stat-number">10K+</span>
								<span className="stat-label">Products</span>
							</div>
							<div className="stat-item">
								<span className="stat-number">50K+</span>
								<span className="stat-label">
									Happy Customers
								</span>
							</div>
							<div className="stat-item">
								<span className="stat-number">99.9%</span>
								<span className="stat-label">Uptime</span>
							</div>
						</div>
					</div>

					{/* =============== Floating Cards =============== */}
					<div className="hero-visual">
						<div className="hero-image-container">
							<div className="floating-card card-1">
								<div className="card-content">
									{/* Smartphones */}
									<div className="card-icon">📱</div>
									<div className="card-text">
										<h4>Smartphones</h4>
										<p>Latest models</p>
									</div>
								</div>
							</div>

							{/* Laptop */}
							<div className="floating-card card-2">
								<div className="card-content">
									<div className="card-icon">💻</div>
									<div className="card-text">
										<h4>Laptops</h4>
										<p>High performance</p>
									</div>
								</div>
							</div>

							{/* Headphones */}
							<div className="floating-card card-3">
								<div className="card-content">
									<div className="card-icon">🎧</div>
									<div className="card-text">
										<h4>Audio</h4>
										<p>Premium sound</p>
									</div>
								</div>
							</div>
							<div className="hero-gradient"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
