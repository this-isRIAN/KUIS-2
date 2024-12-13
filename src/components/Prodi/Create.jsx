/* eslint-disable no-unused-vars */
// src/components/Fakultas/Create.jsx
import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateFakultas() {
    // Inisialisasi state untuk menyimpan nama fakultas
    const [namaProdi, setNamaProdi] = useState("");
    const [kaprodi, setKaprodi] = useState("");
    const [singkatan, setSingkatan] = useState("");
    const [Fakultas, setFakultas] = useState("");

    // Inisialisasi state untuk menyimpan pesan error
    const [error, setError] = useState("");
    // Inisialisasi state untuk menyimpan pesan sukses
    const [success, setSuccess] = useState("");

    // Fungsi yang akan dijalankan saat form disubmit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah reload halaman setelah form disubmit
        setError(""); // Reset pesan error sebelum proses
        setSuccess(""); // Reset pesan sukses sebelum proses

        // Validasi input: jika namaFakultas kosong, set pesan error
        if (namaProdi.trim() === "") {
            setError("Nama Prodi is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (kaprodi.trim() === "") {
            setError("Nama kaprodi is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (singkatan.trim() === "") {
            setError("Nama singkatan is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (Fakultas.trim() === "") {
            setError("Nama Fakultas is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }

        try {
            // Melakukan HTTP POST request untuk menyimpan data fakultas
            const response = await axios.post(
                "https://academic-mi5a.vercel.app/api/api/fakultas", // Endpoint API yang dituju
                {
                    nama: namaProdi, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    kaprodi: kaprodi, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    singkatan: singkatan, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    Fakultas: Fakultas, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                }
            );

            // Jika response HTTP status 201 (Created), berarti berhasil
            if (response.status === 201) {
                // Tampilkan pesan sukses jika fakultas berhasil dibuat
                setSuccess("Prodi created successfully!");
                setNamaProdi(""); // Kosongkan input form setelah sukses submit
            } else {
                // Jika tidak berhasil, tampilkan pesan error
                setError("Failed to create fakultas");
            }
        } catch (error) {
            // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
            setError("An error occurred while creating fakultas");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create Fakultas</h2>
            {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
            {error && <div className="alert alert-danger">{error}</div>}
            {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
            {success && <div className="alert alert-success">{success}</div>}
            {/* Form untuk mengisi nama fakultas */}
            <form onSubmit={handleSubmit}>
                {/* Tangani event submit dengan handleSubmit */}
                <div className="mb-3">
                    <label className="form-label">
                        Nama Prodi
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="namaProdi"
                        value={namaProdi} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setNamaProdi(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Prodi Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Kaprodi
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="kaprodi"
                        value={kaprodi} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setKaprodi(e.target.value)} // Update state saat input berubah
                        placeholder="Enter kaprodi Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        singkatan
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="singkatan"
                        value={singkatan} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setSingkatan(e.target.value)} // Update state saat input berubah
                        placeholder="Enter singkatan Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Fakultas
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Fakultas"
                        value={Fakultas} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setFakultas(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Fakultas Name" // Placeholder teks untuk input
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
}