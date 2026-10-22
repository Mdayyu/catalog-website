import { useEffect } from "react";
import { productsData } from "../data/productsData"; // Sesuaikan path file data kamu

const Products_API_Data = ({ onDataFetch }) => {
  useEffect(() => {
    // Langsung kirimkan data lokal ke parent component
    onDataFetch(productsData);
  }, [onDataFetch]);

  return null; // Tidak perlu render div kosong jika hanya tempat mengurus data
};

export default Products_API_Data;