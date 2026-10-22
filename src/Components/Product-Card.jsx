import React, { useState } from "react";
import "./Products.css";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./Popup";

const Product_Card = ({
    data = {},
    classFlex,
}) => {
    // State untuk mengontrol tampil/tidaknya popup detail produk
    const [showPopup, setShowPopup] = useState(false);

    // Ambil data dengan aman (menggunakan images sebagai array)
    const { name, price, description, category, images, image } = data;
    
    // Fallback jika data lama masih menggunakan 'image' tunggal
    const productImages = images || (image ? [image] : []);
    const mainImage = productImages[0] || "https://via.placeholder.com/200?text=Bibit+Tanaman";

    return (
        <article
            className={`product-card card ${classFlex} position-relative shadow-sm`}
            style={{ width: "260px", minHeight: "410px", overflow: "hidden" }}
            role="article"
        >
            {/* Foto Produk Utama di Card */}
            <figure className="mb-2 text-center m-0" style={{ height: "240px", overflow: "hidden" }}>
                <img
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src={mainImage}
                    alt={`Gambar produk: ${name}`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/200?text=Bibit+Tanaman";
                    }}
                    loading="lazy"
                />
            </figure>

            {/* Informasi Utama */}
            <div className="card-body d-flex flex-column justify-content-between p-3">
                <div className="mb-3">
                    <h3 className="card-title title-over fs-6 fw-bold mb-2 text-dark text-capitalize text-truncate">
                        {name}
                    </h3>
                </div>

                {/* Tombol Aksi */}
                <div className="pt-2">
                    <button
                        type="button"
                        className="btn btn-outline-success rounded-pill py-2 px-3 d-flex align-items-center gap-2 justify-content-center w-100 fw-semibold"
                        onClick={() => setShowPopup(true)}
                        aria-label={`Lihat detail untuk ${name}`}
                    >
                        Lihat Detail{" "}
                        <i className="bx bxs-show fs-5" aria-hidden="true"></i>
                    </button>

                    {/* Popup Modal Detail Produk */}
                    {showPopup && (
                        <Popup
                            data={{
                                title: name,
                                price,
                                description,
                                category,
                                images: productImages, // Kirim array images ke popup
                            }}
                            onClose={() => setShowPopup(false)}
                        />
                    )}
                </div>
            </div>
        </article>
    );
};

export default Product_Card;