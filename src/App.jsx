import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes dan Route
import LandingPage from "./Components/LandingPage/LandingPage";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import ToastWrapper from "./common/ToastWrapper";
import CartContextProvider from "./utils/context/CartContext";
import ServisAndWarranty from "./Components/ServicesAndWarranty";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timerId);
    }, []);

    const handleExploreProducts = () => {
        const productsElement = document.getElementById("products");
        if (productsElement) {
            productsElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="App">
            <CartContextProvider>
                <ToastWrapper>
                    {/* =============== Loader =============== */}
                    {isLoading && (
                        <div
                            className="app-loader-overlay"
                            role="status"
                            aria-live="polite"
                        >
                            <div className="app-spinner" aria-hidden="true"></div>
                            <span className="app-loader-text">
                                Loading BibitPakNyoman…
                            </span>
                        </div>
                    )}

                    {/* =============== PENGATUR HALAMAN (ROUTER) =============== */}
                    <Routes>
                        {/* Halaman Utama (Home) */}
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <LandingPage onExploreProducts={handleExploreProducts} />
                                    <Products />
                                    <Footer />
                                </>
                            } 
                        />

                        {/* Halaman Terpisah: Layanan & Garansi */}
                        <Route 
                            path="/layanan" 
                            element={
                                <>
                                    <ServisAndWarranty />
                                    <Footer />
                                </>
                            } 
                        />
                    </Routes>

                    {/* Tombol WhatsApp Melayang (Tampil di semua halaman) */}
                    <FloatingWhatsApp />

                </ToastWrapper>
            </CartContextProvider>
        </div>
    );
}

export default App;