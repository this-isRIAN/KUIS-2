/* eslint-disable no-unused-vars */
// src/components/Fakultas/Create.jsx
import React, { useState } from "react";
import axios from "axios";

export default function CreateMahasiswa() {
    const [npm, setNpm] = useState("");
    const [nama, setNama] = useState("");
    const [tanggal_lahir, setTanggal_lahir] = useState("");
    const [tempat_lahir, setTempat_lahir] = useState("");
    const [email, setEmail] = useState("");
    const [hp, setHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const [prodi, setProdi] = useState("");
    const [fakultas, setFakultas] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Validasi input
        if (!npm || !nama || !tanggal_lahir || !tempat_lahir || !email || !hp || !alamat || !prodi || !fakultas) {
            setError("All fields are required.");
            return;
        }

        try {
            const response = await axios.post(
                "https://academic-mi5a.vercel.app/api/api/mahasiswa", // Pastikan endpoint ini benar
                {
                    npm,
                    nama,
                    tanggal_lahir,
                    tempat_lahir,
                    email,
                    hp,
                    alamat,
                    prodi,
                    fakultas,
                }
            );

            if (response.status === 201) {
                setSuccess("Mahasiswa created successfully!");
                setNpm("");
                setNama("");
                setTanggal_lahir("");
                setTempat_lahir("");
                setEmail("");
                setHp("");
                setAlamat("");
                setProdi("");
                setFakultas("");
            } else {
                setError("Failed to create mahasiswa.");
            }
        } catch (err) {
            setError("An error occurred while creating mahasiswa.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create Mahasiswa</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">NPM</label>
                    <input
                        type="text"
                        className="form-control"
                        value={npm}
                        onChange={(e) => setNpm(e.target.value)}
                        placeholder="Enter NPM"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tanggal Lahir</label>
                    <input
                        type="date"
                        className="form-control"
                        value={tanggal_lahir}
                        onChange={(e) => setTanggal_lahir(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tempat Lahir</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tempat_lahir}
                        onChange={(e) => setTempat_lahir(e.target.value)}
                        placeholder="Enter Place of Birth"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">HP</label>
                    <input
                        type="text"
                        className="form-control"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        placeholder="Enter Phone Number"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Alamat</label>
                    <input
                        type="text"
                        className="form-control"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        placeholder="Enter Address"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Prodi</label>
                    <input
                        type="text"
                        className="form-control"
                        value={prodi}
                        onChange={(e) => setProdi(e.target.value)}
                        placeholder="Enter Program Studi"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fakultas</label>
                    <input
                        type="text"
                        className="form-control"
                        value={fakultas}
                        onChange={(e) => setFakultas(e.target.value)}
                        placeholder="Enter Fakultas"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
}