import React from 'react';
import './App.css';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Travellynn</div>
        <ul className="nav-links">
          <li>Fitur</li>
          <li>Harga</li>
          <li>Masuk</li>
          <li><button className="cta">Daftar Gratis</button></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Perjalanan lebih mudah, setiap saat</h1>
          <p>Rencanakan, pesan, dan kelola perjalananmu dengan mudah menggunakan Travel Buddy</p>
        </div>
        <img src="/img/feature11.svg" alt="hero" />
      </section>

      <section className="features">
        <div className="feature">
          <img src="/img/feature22.svg" alt="Booking" />
          <h2>Kamu urus pemesanan,<br />kami yang lanjutkan</h2>
          <p>Dari perencanaan hingga notifikasi real-time, Travel Buddy siap bantu perjalananmu lebih lancar.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>Pelajari cara kerjanya</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature33.svg" alt="Notifikasi" />
          <h2>Pengingat dan notifikasi<br />agar kamu tidak ketinggalan</h2>
          <p>Dapatkan info soal keterlambatan, waktu naik, dan perubahan jadwal seketika.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>Selengkapnya</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature44.svg" alt="Pelacakan" />
          <h2>Selalu tahu<br />kapan dan di mana</h2>
          <p>Fitur GPS dan manajemen jadwal membantu kamu tepat waktu dan tetap update.</p>
          <a href="https://id.shp.ee/LHqRWhbs" target="_blank" rel="noopener noreferrer">
            <button>Jelajahi fitur ini</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature55.svg" alt="Sinkronisasi" />
          <h2>Sinkronkan<br />di semua perangkat</h2>
          <p>Akses itinerary dan update dari HP, tablet, atau laptop dengan mudah.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>Lihat detail</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature66.svg" alt="Saran Pintar" />
          <h2>Saran perjalanan<br />dengan AI</h2>
          <p>Dapatkan rekomendasi tempat wisata, kuliner, dan penginapan yang cerdas.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>Lihat saran</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature77.svg" alt="Riwayat" />
          <h2>Insight &<br />riwayat perjalanan</h2>
          <p>Lihat tren perjalanan dan riwayat lengkap dari petualangan sebelumnya.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>Lihat insight</button>
          </a>
        </div>
      </section>

      <section className="map-video-section">
        <div className="card location-card">
          <h2>Lokasi Kami</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0042639062362!2d109.61188957401707!3d-6.890091467421181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7027d8052d9151%3A0x826c04bb1679c581!2sWarung%20Makan%20%22mak%20Sri%22!5e0!3m2!1sid!2sid!4v1752756761697!5m2!1sid!2sid"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="card video-card">
          <h2>Tonton Promo Kami</h2>
          <iframe
            src="https://www.youtube.com/embed/qzGxK6Uiu04?si=yPE9ksg05QGCZ6sG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="cta-banner">
        <h2>Coba aplikasi travel yang cocok untukmu</h2>
        <div className="download-buttons">
          <a href="https://play.google.com/store/apps/details?id=com.traveloka.android" target="_blank" rel="noopener noreferrer">
            <button className="cta">Unduh di Play Store</button>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">Travel Buddy</div>

        <div className="footer-links">
          <div>
            <h4>PRODUK</h4>
            <p>Fitur</p>
            <p>Harga</p>
          </div>
          <div>
            <h4>TENTANG</h4>
            <p>Tentang Kami</p>
            <p>Karier</p>
          </div>
          <div>
            <h4>BANTUAN</h4>
            <p>Pusat Bantuan</p>
            <p>Kontak</p>
          </div>
        </div>

        <div className="student-info">
          <p><strong>Nama:</strong> Muhammad Laroybafih</p>
          <p><strong>NIM:</strong> 24.120.0014</p>
          <p><strong>Kelas:</strong> 2P21</p>
          <p><strong>Program Studi:</strong> Komputerisasi Akuntansi</p>
        </div>

        <div className="social-media-icons">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/fi_asahina?igsh=a2I3bnJobGZrcWZy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1ArfgwGe1f/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.tiktok.com/@fi_chee?_t=ZS-8y7Pmy1Dom1&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>

        <p className="footer-copy">&copy; 2025 Travel Buddy. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
