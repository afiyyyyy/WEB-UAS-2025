import React from 'react';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/img/logo.svg" alt="Logo" className="logo-img" />
          <span>Travellynn</span>
        </div>
        <ul className="nav-links">
          <li>Beranda</li>
          <li>Tentang Kami</li>
          <li>Layanan</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h5>WELCOME</h5>
          <h1>MUARA TRAVEL</h1>
          <p>
            Travel murah, harga bersahabat, dan layanan terpercaya. Pesan tiket travel muara dengan mudah,
            efisien, kapanpun dan di manapun. Melayani rute dengan berbagai jalur mulai dari wilayah Jawa, Bali, dan Sumatera.
          </p>
          <div className="hero-buttons">
            <button className="btn orange">Kirim Pesan</button>
            <button className="btn purple">Pesan Armada</button>
          </div>
        </div>
      </section>

      {/* Zona Travel */}
      <section className="zone-section">
        <h2>Lintasan Muara Travel</h2>
        <div className="zones">
          {['Jawa Barat', 'Jawa Tengah', 'Banten', 'Bali', 'Jawa Timur', 'Sumatera'].map((zone, index) => (
            <div key={index} className="zone-card">
              <img src={`/img/zone${index + 1}.jpg`} alt={`Zona ${zone}`} />
              <h3>Zona {zone}</h3>
              <p>Deskripsi daerah di {zone}...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="about-section">
        <h2>Tentang Kami</h2>
        <div className="about-content">
          <img src="/img/armada.jpg" alt="Armada" />
          <div>
            <p>
              Muara Travel memiliki track record yang panjang dalam menjalankan bisnis travel. Kami memiliki tim ramah dan profesional yang
              siap mengantarkan ke tujuan Anda. Armada lengkap, dicek rutin, aman dan nyaman.
            </p>
            <p>
              Kami juga merupakan jasa travel door to door. Perjalanan aman, tanpa khawatir. Dari pemesanan sampai layanan lapangan, semua
              kami tangani profesional.
            </p>
            <button className="btn orange">Galeri Armada</button>
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section className="service-section">
        <h2>Untuk Layanan Kami :</h2>
        <div className="services">
          {['Travel Reguler', 'Pengiriman Paket kilat', 'Carter Mobil', 'Layanan Wisata'].map((layanan, index) => (
            <div key={index} className="service-card">
              <img src={`/img/service${index + 1}.jpg`} alt={layanan} />
              <h3>{layanan}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">Muara Travel</div>
        <div className="footer-links">
          <span>Beranda</span>
          <span>Tentang Kami</span>
          <span>Layanan</span>
        </div>
        <div className="footer-contact">
          <p>Jalan Raya Pati Tayu Kulon No.176, Pati, Jawa Tengah</p>
        </div>
        <a href="https://wa.me/6281234567890" className="wa-button">
          <FaWhatsapp size={28} />
        </a>
      </footer>
    </div>
  );
}
