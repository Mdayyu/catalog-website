import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Product Manager",
			company: "TechCorp",
			avatar: "👩‍💼",
			content:
				"ProductHub has revolutionized how we discover and evaluate products. The advanced filtering and search capabilities save us hours every week.",
			rating: 5,
		},
		{
			name: "Michael Chen",
			role: "E-commerce Director",
			company: "ShopSmart",
			avatar: "👨‍💻",
			content:
				"The user experience is absolutely phenomenal. Our team productivity increased by 40% since we started using ProductHub for product research.",
			rating: 5,
		},
		{
			name: "Emily Rodriguez",
			role: "Marketing Lead",
			company: "BrandCo",
			avatar: "👩‍🎨",
			content:
				"I love how intuitive the interface is. Even our non-technical team members can easily find exactly what they're looking for.",
			rating: 5,
		},
		{
			name: "David Thompson",
			role: "CTO",
			company: "InnovateLab",
			avatar: "👨‍🔬",
			content:
				"The performance is outstanding. Fast loading times and smooth interactions make it a pleasure to use every day.",
			rating: 5,
		},
		{
			name: "Lisa Wang",
			role: "Operations Manager",
			company: "GlobalTech",
			avatar: "👩‍💼",
			content:
				"ProductHub has become an essential tool for our operations. The smart recommendations help us discover products we never would have found otherwise.",
			rating: 5,
		},
		{
			name: "James Wilson",
			role: "Business Analyst",
			company: "DataFlow",
			avatar: "👨‍📊",
			content:
				"The analytics and insights provided are incredibly valuable. It's helped us make better purchasing decisions and optimize our product portfolio.",
			rating: 5,
		},
	];

	return (
		<section id="testimonials" className="testimonials-section">
			<div className="testimonials-container">
				<div className="testimonials-header">
					<h2 className="testimonials-title">
						What Our Customers Say
					</h2>
					<p className="testimonials-subtitle">
						Join thousands of satisfied customers who trust
						ProductHub for their product discovery needs.
					</p>
				</div>

				<div className="testimonials-grid">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="testimonial-card">
							<div className="testimonial-rating">
								{[...Array(testimonial.rating)].map((_, i) => (
									<span key={i} className="star">
										⭐
									</span>
								))}
							</div>
							<p className="testimonial-content">
								"{testimonial.content}"
							</p>
							<div className="testimonial-author">
								<div className="author-avatar">
									<span className="avatar-emoji">
										{testimonial.avatar}
									</span>
								</div>
								<div className="author-info">
									<h4 className="author-name">
										{testimonial.name}
									</h4>
									<p className="author-role">
										{testimonial.role}
									</p>
									<p className="author-company">
										{testimonial.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="testimonials-stats">
					<div className="stat-item">
						<span className="stat-number">50K+</span>
						<span className="stat-label">Happy Customers</span>
					</div>
					<div className="stat-item">
						<span className="stat-number">4.9/5</span>
						<span className="stat-label">Average Rating</span>
					</div>
					<div className="stat-item">
						<span className="stat-number">99%</span>
						<span className="stat-label">Satisfaction Rate</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
