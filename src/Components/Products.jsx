import { useEffect, useState, useCallback, useRef } from "react";
import Header from "./LandingPage/Header"; 
import Products_API_Data from "./Products-API-Data";
import Product_Card from "./Product-Card";
import Filters from "./Filters";
import "../App.css";

const Products = () => {
    // State management
    const [products, setProducts] = useState([]); 
    const [searchQuery, setSearchQuery] = useState(""); // State pencarian
    const [filterCategoryValue, setFilterCategoryValue] = useState(null); // State kategori
    const [filterData, setFilterData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const productsContainerRef = useRef(null);

    // Fungsi handle explore untuk scroll ke produk
    const handleExploreClick = () => {
        if (productsContainerRef.current) {
            productsContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Handle data dari API
    const handleApiData = useCallback((jsonRes) => {
        setProducts(jsonRes);
        setFilterData(jsonRes);
        setIsLoading(false);
    }, []);

    // Handler filter kategori
    const filterByCategory = (value) => {
        setFilterCategoryValue(value === "default" ? null : value);
    };

    // Handler pencarian nama tanaman
    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };

    // Logika Gabungan Filter (Kategori + Nama Tanaman)
    useEffect(() => {
        let filteredArr = [...products];

        // 1. Filter Kategori
        if (filterCategoryValue) {
            filteredArr = filteredArr.filter(
                (el) => el.category === filterCategoryValue
            );
        }

        // 2. Filter Pencarian Nama Tanaman
        if (searchQuery.trim() !== "") {
            filteredArr = filteredArr.filter((el) =>
                el.name?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilterData(filteredArr);
    }, [filterCategoryValue, searchQuery, products]);

    // Render daftar produk
    const showProducts = () => {
        if (isLoading) {
            return (
                <div className="d-flex justify-content-center align-items-center w-100 py-5">
                    <div className="loading-state text-success fw-semibold" role="status">
                        🌱 Memuat koleksi tanaman terbaik...
                    </div>
                </div>
            );
        }

        if (filterData.length === 0) {
            return (
                <div className="empty-state text-center py-5 text-muted w-100" role="status">
                    <h5>Tanaman tidak ditemukan.</h5>
                    <p className="small">Coba ketik nama lain atau pilih kategori lainnya!</p>
                </div>
            );
        }

        return filterData.map((obj) => (
            <Product_Card key={obj.id || obj.name} data={obj} classFlex="product-flex" />
        ));
    };

    return (
        <div id="products" className="products bg-gray sec-height py-4" role="main">
            
            {/* Render komponen Hero / Banner */}
            {/* <Header onExploreProducts={handleExploreClick} /> */}

            <div className="container mt-4">
                {/* Komponen Filter & Pencarian */}
                <Filters
                    data={products}
                    filterByCategory={filterByCategory}
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                />
            </div>

            <Products_API_Data onDataFetch={handleApiData} />

            <section aria-label="Products grid">
                <div 
                    ref={productsContainerRef}
                    className="container py-2 d-flex flex-wrap product-parent-flex justify-content-center gap-4"
                >
                    {showProducts()}
                </div>
            </section>
        </div>
    );
};

export default Products;