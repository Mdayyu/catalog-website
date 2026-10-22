import React from "react";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = "6287752898712"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Kak%20Nyoman,%20saya%20tertarik%20ingin%20memesan%20tanaman%20buah.`;
    const mapsUrl = "https://maps.app.goo.gl/EBbNPExX26fHtQRL7";

    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-info">
                    <h3 className="footer-brand">BibitPakNyoman</h3>
                    <p className="footer-desc">
                        Solusi beli bibit buah & kompos lengkap dengan layanan antar, tanam, dan garansi rawat sampai berbuah.
                    </p>
                    
                    {/* Bagian Alamat Lokasi */}
                    <div className="footer-address">
                        <a 
                            href={mapsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-address-link"
                        >
                            <i className="bx bx-map"></i>
                            <span>Lihat Lokasi Kebun di Google Maps</span>
                        </a>
                    </div>
                </div>

                <div className="footer-action">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-wa-btn"
                    >
                        <i className="bx bxl-whatsapp"></i> Chat WhatsApp
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} BibitPakNyoman. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;