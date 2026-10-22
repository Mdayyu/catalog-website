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

                    {/* =============== Konten Teks =============== */}
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Hadirkan Kesegaran
                            <span className="gradient-text"> Alam di Rumah kamu</span>
                        </h1>
                        <p className="hero-description">
                           Spill koleksi tanaman buah terbaik buat vibe rumah makin estetik. Tinggal pilih, kita bisa antar, tanamkan, dan rawat bareng sampai subur dan siap panen sesuai dengan pilihan kamu!
                        </p>

                        {/* =============== Aksi / Tombol =============== */}
                        <div className="hero-actions">
                            <button
                                className="btn-hero-primary"
                                onClick={handleExploreClick}
                            >
                                Jelajahi Tanaman
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

                    {/* =============== Kartu Melayang (Visual) =============== */}
                    <div className="hero-visual">
                        <div className="hero-image-container">
                            {/* Tanaman Indoor */}
                            <div className="floating-card card-1">
                                <div className="card-content">
                                    <div className="card-icon">🥭</div>
                                    <div className="card-text">
                                        <h4>Lokal Pride</h4>
                                        <p>Mangga Harum Manis, Berbagai Jenis Jambu, Durian Lokal, Kelengkeng, Manggis dan lainnya</p>
                                    </div>
                                </div>
                            </div>

                            {/* Perlengkapan Berkebun */}
                            <div className="floating-card card-3">
                                <div className="card-content">
                                    <div className="card-icon">🌱</div>
                                    <div className="card-text">
                                        <h4>Varian Impor Pilihan</h4>
                                        <p>Anggur Pohon, Mangga keojay, Leci dan masih banyak lainnya</p>
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