import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logoImg from "../../assets/image.png";
import { Link } from "react-router-dom";

const Header = ({ onExploreProducts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (e, sectionId) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);

    if (sectionId === "products" && onExploreProducts) {
      onExploreProducts();
      return;
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="landing-header">
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo & Brand Name */}
          <div
            className="nav-logo"
            onClick={(e) => handleNavClick(e, "home")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logoImg}
              alt="Logo BibitPakNyoman"
              className="logo-img"
            />
            <span className="logo-text">BibitPakNyoman</span>
          </div>

          {/* Menu Navigasi */}
          <div
            ref={menuRef}
            className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          >
            {/* <Link to="/layanan" className="nav-link">
              Layanan Tanam & Garansi
            </Link> */}

            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Kontak
            </a>
          </div>

          {/* Hamburger Menu */}
          <div
            ref={hamburgerRef}
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Buka menu navigasi"
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