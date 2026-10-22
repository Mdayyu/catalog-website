import React from "react";
import "boxicons/css/boxicons.min.css";

const PlantingServiceDetail = ({ onBack }) => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-3">
        {/* Tombol Kembali */}
        <button
          onClick={onBack}
          className="btn btn-outline-success rounded-pill px-4 mb-4 d-inline-flex align-items-center gap-2 fw-semibold"
        >
          <i className="bx bx-arrow-back fs-5"></i> Kembali ke Layanan
        </button>

        {/* Hero Header Detail */}
        <div className="bg-light rounded-4 p-4 p-md-5 mb-5 border-0 shadow-sm">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-success-subtle text-success fw-bold px-3 py-2 rounded-pill fs-7 mb-3">
                🌱 LAYANAN UNGGULAN
              </span>
              <h1 className="display-5 fw-extrabold text-dark mb-3">
                Layanan Penanaman Langsung & Tabulampot
              </h1>
              <p className="text-muted fs-6 mb-4">
                Nikmati kemudahan berkebun tanpa repot! Tim ahli agronom kami siap datang langsung ke lokasi Anda untuk memastikan bibit tanaman diproses dengan media tanam, nutrisi, dan teknik penanaman yang tepat.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20BibitPakNyoman,%20saya%20ingin%20memesan%20layanan%20jasa%20tanam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg rounded-pill px-4 fw-bold d-inline-flex align-items-center gap-2 shadow"
              >
                <i className="bx bxl-whatsapp fs-4"></i> Pesan Jasa Tanam Sekarang
              </a>
            </div>
            <div className="col-lg-5 text-center">
              <div
                className="bg-success text-white rounded-4 p-5 d-flex flex-column align-items-center justify-content-center shadow-sm"
                style={{ minHeight: "260px" }}
              >
                <i className="bx bx-sprout display-1 mb-2"></i>
                <h4 className="fw-bold mb-0">Free Jasa Tanam</h4>
                <p className="small text-white-50 mb-0">Khusus pemesanan bibit pilihan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tahapan Kerja & Cakupan Layanan */}
        <div className="mb-5">
          <div className="text-center max-w-700 mx-auto mb-5">
            <h2 className="fw-bold text-dark h3 mb-2">
              Apa Saja yang Akan Dilakukan Tim Kami?
            </h2>
            <p className="text-muted">
              Standard Operating Procedure (SOP) penanaman presisi agar bibit tumbuh maksimal tanpa stres.
            </p>
          </div>

          <div className="row g-4">
            {/* Langkah 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <div className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "28px" }}>
                  <i className="bx bx-map-pin"></i>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">1. Survei & Dosis Lahan</h3>
                <p className="small text-secondary mb-0">
                  Pengecekan area pencahayaan matahari, porositas tanah, dan penentuan kedalaman lubang tanam yang ideal.
                </p>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <div className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "28px" }}>
                  <i className="bx bx-layer"></i>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">2. Racikan Media Tanam</h3>
                <p className="small text-secondary mb-0">
                  Pencampuran tanah topsoil, sekam bakar, pupuk kandang matang, serta mikroorganisme lokal penyubur akar.
                </p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <div className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "28px" }}>
                  <i className="bx bx-shield-alt-2"></i>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">3. Pemberian Anti-Stres</h3>
                <p className="small text-secondary mb-0">
                  Penyiraman perdana menggunakan racikan Vitamin B1 dan hormon perangsang akar agar bibit cepat beradaptasi.
                </p>
              </div>
            </div>

            {/* Langkah 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <div className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", fontSize: "28px" }}>
                  <i className="bx bx-book-bookmark"></i>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">4. Edukasi Perawatan</h3>
                <p className="small text-secondary mb-0">
                  Tim kami memberikan instruksi langsung mengenai jadwal penyiraman dan pemupukan awal setelah penanaman.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ketentuan / FAQ Layanan Tanam */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-light rounded-4 p-4 p-md-5">
              <h3 className="fw-bold text-dark fs-5 mb-4 d-flex align-items-center gap-2">
                <i className="bx bx-info-circle text-success fs-4"></i> Syarat & Ketentuan Layanan Tanam Free
              </h3>
              <ul className="list-unstyled text-secondary d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-start gap-3">
                  <i className="bx bx-check-square text-success fs-5 mt-1"></i>
                  <span>Berlaku untuk pemesanan bibit tanaman buah minimal transaksi tertentu atau paket promo khusus.</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <i className="bx bx-check-square text-success fs-5 mt-1"></i>
                  <span>Melayani area pekarangan rumah, kebun pribadi, maupun instalasi Tabulampot (pot / planter bag).</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <i className="bx bx-check-square text-success fs-5 mt-1"></i>
                  <span>Gratis pengiriman media tanam racikan khusus untuk penanaman perdana.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantingServiceDetail;