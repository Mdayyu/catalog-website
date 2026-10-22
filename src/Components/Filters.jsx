import React from "react";
import SelectBox from "./SelectBox/SelectBox";

const Filters = ({
    data = [],
    filterByCategory,
    onSearchChange,
    searchQuery = "",
}) => {
    if (!data) {
        return null;
    }

    // Mengambil daftar kategori unik secara dinamis dari data
    const uniqueCategories = Array.from(
        new Set(data.map((obj) => obj.category).filter(Boolean))
    );

    // Opsi pilihan kategori dalam Bahasa Indonesia
    const categoryOptions = [
        { option: "Semua Kategori", value: "default" },
        ...uniqueCategories.map((category) => ({
            option: category,
            value: category,
        })),
    ];

    return (
        <aside className="filters py-3 bg-white shadow-sm rounded-4 mb-4" role="complementary" aria-label="Filter produk">
            <div className="container d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center">
               

                <nav className="d-flex flex-column flex-sm-row gap-3 align-items-center w-100 w-md-auto" aria-label="Opsi filter">
                    
                    {/* 1. Input Pencarian Nama Tanaman */}
                    <div className="d-flex gap-2 align-items-center w-100 w-sm-auto">
                        <label htmlFor="search-input" className="fw-semibold text-secondary text-nowrap mb-0">
                            Cari Nama:
                        </label>
                        <div className="input-group input-group-sm">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="bx bx-search text-success"></i>
                            </span>
                            <input
                                id="search-input"
                                type="text"
                                className="form-control border-start-0 shadow-none"
                                placeholder="Contoh: Mangga, Jambu..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                aria-label="Cari nama tanaman"
                            />
                        </div>
                    </div>

                    {/* 2. Filter Kategori */}
                    <div className="d-flex gap-2 align-items-center w-100 w-sm-auto">
                        <label htmlFor="category-filter" className="fw-semibold text-secondary text-nowrap mb-0">
                            Kategori:
                        </label>
                        <SelectBox
                            id="category-filter"
                            options={categoryOptions}
                            onChange={(e) => filterByCategory(e.target.value)}
                            aria-label="Filter berdasarkan kategori"
                        />
                    </div>

                </nav>
            </div>
        </aside>
    );
};

export default Filters;