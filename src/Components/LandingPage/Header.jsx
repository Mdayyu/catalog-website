import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = ({ onExploreProducts }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const hamburgerRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleExploreClick = () => {
		if (onExploreProducts) {
			onExploreProducts();
		}
	};

	const handleMenuLinkClick = () => {
		setIsMenuOpen(false);
	};

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				hamburgerRef.current &&
				!hamburgerRef.current.contains(event.target)
			) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<header className="landing-header">
			<nav className="navbar">
				<div className="container nav-container cursor-pointer">
					<div className="nav-logo" onClick={() => location.href = "#home"}>
						<img
							src="/src/assets/logo.png"
							alt="ProductHub"
							className="logo-img"
						/>
						<span className="logo-text">ProductHub</span>
					</div>

					<div
						ref={menuRef}
						className={`nav-menu ${isMenuOpen ? "active" : ""}`}
					>
						<a
							href="#home"
							className="nav-link"
							onClick={handleMenuLinkClick}
						>
							Home
						</a>
						<a
							href="#features"
							className="nav-link"
							onClick={handleMenuLinkClick}
						>
							Features
						</a>
						<a
							href="#products"
							className="nav-link"
							onClick={handleExploreClick}
						>
							Products
						</a>
						<a
							href="#testimonials"
							className="nav-link"
							onClick={handleMenuLinkClick}
						>
							Reviews
						</a>
						<a
							href="#contact"
							className="nav-link"
							onClick={handleMenuLinkClick}
						>
							Contact
						</a>
					</div>

					<div className="nav-actions">
						<button className="btn-secondary">Sign In</button>
						<button
							className="btn-primary"
							onClick={handleExploreClick}
						>
							Get Started
						</button>
					</div>

					<div
						ref={hamburgerRef}
						className="hamburger"
						onClick={toggleMenu}
						aria-label="Toggle navigation menu"
					>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
