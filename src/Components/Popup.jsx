import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useHandleAddToCart from "../utils/custom_hooks/useHandleAddToCart";

const Popup = ({ data, onClose }) => {
    const { title, description, category, images = [] } = data;
    const { addToCart } = useHandleAddToCart();

    // Fallback jika array images kosong
    const imageList = images && images.length > 0 ? images : ["https://via.placeholder.com/400x400?text=Bibit+Tanaman"];
    const [activeImage, setActiveImage] = useState(imageList[0]);

    useEffect(() => {
        if (images && images.length > 0) {
            setActiveImage(images[0]);
        }
    }, [data, images]);

    // Lock scroll pada body saat popup terbuka
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    // KONTEN MODAL POPUP
    const modalContent = (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-card-container" onClick={(e) => e.stopPropagation()}>
                
                {/* Tombol Close (X) di Pojok Kanan Atas */}
                <button 
                    type="button" 
                    className="popup-close-btn" 
                    onClick={onClose}
                    aria-label="Tutup"
                >
                    &times;
                </button>

                {/* Kolom Kiri: Foto Utama + Thumbnail */}
                <div className="popup-left-side">
                    <div className="popup-badge-category">
                        {category}
                    </div>

                    <div className="popup-main-img-wrapper">
                        <img
                            src={activeImage}
                            alt={title}
                            className="popup-main-img"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/400x400?text=Bibit+Tanaman";
                            }}
                        />
                    </div>

                    {imageList.length > 1 && (
                        <div className="popup-thumbnails-wrapper">
                            {imageList.map((imgSrc, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setActiveImage(imgSrc)}
                                    className={`popup-thumb-btn ${activeImage === imgSrc ? "active" : ""}`}
                                >
                                    <img 
                                        src={imgSrc} 
                                        alt={`Thumbnail ${idx + 1}`} 
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/100?text=Bibit";
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Kolom Kanan: Detail & Deskripsi */}
                <div className="popup-right-side">
                    <div className="popup-content-box">
                        <span className="popup-subtitle text-uppercase text-muted fw-bold small">Detail Produk</span>
                        <h3 className="popup-title fw-bold text-dark my-2">{title}</h3>
                        
                        <div className="popup-desc-box my-3">
                            <p className="popup-desc-text text-secondary">
                                {description || "Bibit tanaman buah unggulan dengan perawatan terbaik, cepat berbuah, serta cocok untuk pekarangan rumah maupun tabulampot."}
                            </p>
                        </div>
                    </div>

                    <div className="popup-action-container mt-auto">
                        <button
                            type="button"
                            className="btn btn-success rounded-pill w-100 py-2 fw-semibold"
                            onClick={onClose}
                        >
                            Kembali
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default Popup;