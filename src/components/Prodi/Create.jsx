import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Digunakan untuk mengarahkan ke halaman lain setelah berhasil menambah data

export default function Create() {
    // State untuk menyimpan nilai input
    const [namaProdi, setNamaProdi] = useState("");
    const [kaprodi, setKaprodi] = useState("");
    const [singkatan, setSingkatan] = useState("");
    const [fakultas, setFakultas] = useState("");
    const [error, setError] = useState(""); // Untuk menampilkan pesan error
    const [success, setSuccess] = useState(""); // Untuk menampilkan pesan sukses
    const navigate = useNavigate(); // Hook untuk menavigasi setelah berhasil

    // Fungsi untuk mengirim data ke API
    const handleSubmit = async (e) => {
        e.preventDefault(); // Menghindari reload halaman
        setError(""); // Reset pesan error
        setSuccess(""); // Reset pesan sukses

        // Validasi input
        if (!namaProdi || !kaprodi || !singkatan || !fakultas) {
            setError("Semua field harus diisi!");
            return;
        }

        try {
            // Kirim request POST ke API untuk menambah prodi
            const response = await axios.post("https://academic-mi5a.vercel.app/api/api/prodi", {
                nama: namaProdi,
                kaprodi: kaprodi,
                singkatan: singkatan,
                fakultas: fakultas,
            });

            if (response.status === 201) {
                setSuccess("Prodi berhasil dibuat!");
                // Arahkan ke halaman list setelah sukses
                setTimeout(() => {
                    navigate("/prodi"); // Navigasi kembali ke halaman List
                }, 2000);
            } else {
                setError("Gagal membuat Prodi!");
            }
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat membuat Prodi.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create Prodi</h2>
            {/* Menampilkan pesan error */}
            {error && <div className="alert alert-danger">{error}</div>}
            {/* Menampilkan pesan sukses */}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nama Prodi</label>
                    <input
                        type="text"
                        className="form-control"
                        value={namaProdi}
                        onChange={(e) => setNamaProdi(e.target.value)}
                        placeholder="Masukkan Nama Prodi"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Kaprodi</label>
                    <input
                        type="text"
                        className="form-control"
                        value={kaprodi}
                        onChange={(e) => setKaprodi(e.target.value)}
                        placeholder="Masukkan Nama Kaprodi"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Singkatan</label>
                    <input
                        type="text"
                        className="form-control"
                        value={singkatan}
                        onChange={(e) => setSingkatan(e.target.value)}
                        placeholder="Masukkan Singkatan Prodi"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fakultas</label>
                    <input
                        type="text"
                        className="form-control"
                        value={fakultas}
                        onChange={(e) => setFakultas(e.target.value)}
                        placeholder="Masukkan Fakultas"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create Prodi
                </button>
            </form>
        </div>
    );
}