/* eslint-disable no-unused-vars */
import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP requests

export default function CreateProdi() {
    // Inisialisasi state untuk menyimpan input form
    const [namaProdi, setNamaProdi] = useState("");
    const [namaKaprodi, setNamaKaprodi] = useState("");
    const [singkatan, setSingkatan] = useState("");
    const [namaFakultas, setNamaFakultas] = useState("");

    // State untuk menyimpan pesan error dan sukses
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Fungsi yang dijalankan saat form disubmit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah halaman reload saat form disubmit
        setError(""); // Menghapus pesan error sebelumnya
        setSuccess(""); // Menghapus pesan sukses sebelumnya

        // Validasi form
        if (namaProdi.trim() === "") {
            setError("Nama Prodi harus diisi");
            return;
        }
        if (namaKaprodi.trim() === "") {
            setError("Nama Kaprodi harus diisi");
            return;
        }
        if (singkatan.trim() === "") {
            setError("Singkatan harus diisi");
            return;
        }
        if (namaFakultas.trim() === "") {
            setError("Nama Fakultas harus diisi");
            return;
        }

        try {
            // Melakukan POST request untuk membuat Prodi baru
            const response = await axios.post(
                "https://academic-mi5a.vercel.app/api/api/fakultas", // Endpoint API
                {
                    nama: namaProdi,
                    kaprodi: namaKaprodi,
                    singkatan: singkatan,
                    Fakultas: namaFakultas,
                }
            );

            if (response.status === 201) {
                // Jika berhasil membuat Prodi
                setSuccess("Prodi berhasil dibuat!");
                // Reset form setelah berhasil
                setNamaProdi("");
                setNamaKaprodi("");
                setSingkatan("");
                setNamaFakultas("");
            } else {
                setError("Gagal membuat Prodi");
            }
        } catch (error) {
            // Menangani error jika request gagal
            setError("Terjadi kesalahan saat membuat Prodi");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Buat Prodi</h2>
            {/* Menampilkan pesan error jika ada */}
            {error && <div className="alert alert-danger">{error}</div>}
            {/* Menampilkan pesan sukses jika ada */}
            {success && <div className="alert alert-success">{success}</div>}

            {/* Form untuk memasukkan detail Prodi */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="namaProdi">
                        Nama Prodi
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="namaProdi"
                        value={namaProdi}
                        onChange={(e) => setNamaProdi(e.target.value)}
                        placeholder="Masukkan Nama Prodi"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="namaKaprodi">
                        Nama Kaprodi
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="namaKaprodi"
                        value={namaKaprodi}
                        onChange={(e) => setNamaKaprodi(e.target.value)}
                        placeholder="Masukkan Nama Kaprodi"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="singkatan">
                        Singkatan
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="singkatan"
                        value={singkatan}
                        onChange={(e) => setSingkatan(e.target.value)}
                        placeholder="Masukkan Singkatan"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="namaFakultas">
                        Nama Fakultas
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="namaFakultas"
                        value={namaFakultas}
                        onChange={(e) => setNamaFakultas(e.target.value)}
                        placeholder="Masukkan Nama Fakultas"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Buat
                </button>
            </form>
        </div>
    );
}