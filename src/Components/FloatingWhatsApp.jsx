import React from "react";
import "boxicons/css/boxicons.min.css";

const FloatingWhatsApp = () => {
    // Ganti nomor WhatsApp dengan nomor Anda (awali dengan kode negara, contoh: 628xxxxxxxxxx)
    const phoneNumber = "6287752898712"; 
    const message = "Halo BibitPakNyoman, saya ingin bertanya seputar produk tanaman.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa-btn"
            aria-label="Chat WhatsApp"
            title="Hubungi Kami via WhatsApp"
        >
            <i className="bx bxl-whatsapp"></i>
        </a>
    );
};

export default FloatingWhatsApp;