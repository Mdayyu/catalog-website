import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import "./LandingPage.css";
import Footer from "../Footer";

const LandingPage = ({ onExploreProducts }) => {
	const handleExploreClick = () => {
		if (onExploreProducts) {
			onExploreProducts();
		}
	};

	return (
		<div className="landing-page">
			<Header onExploreProducts={handleExploreClick} />
			<Hero onExploreProducts={handleExploreClick} />
			<Features onExploreProducts={handleExploreClick} />
			<Testimonials />
			<CTA onExploreProducts={handleExploreClick} />
			<Footer />
		</div>
	);
};

export default LandingPage;
