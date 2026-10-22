import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import "./LandingPage.css";
import Footer from "../Footer";
import Products from "../Products";

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
			
			{/* <Footer /> */}
		</div>
	);
};

export default LandingPage;
