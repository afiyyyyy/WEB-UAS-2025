import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="glitch">Travelyn</div>
        <div>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#layanan">Layanan</a>
          <a href="#lokasi">Lokasi</a>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="beranda">
        <div className="hero-image">
          <img src="/image/pantai.jpg" alt="Gambar Pantai" />
          <div className="hero-overlay">
            <h1 className="text-slice" data-text="TRAVELYN">TRAVELYN</h1>
            <p className="desc-slice" data-text="Travel murah, harga bersahabat, dan layanan terpercaya.">
              Travel murah, harga bersahabat, dan layanan terpercaya.
            </p>
            <div className="button-group">
            <a href="https://wa.me/6283894737745" target="_blank" rel="noopener noreferrer" className="btn-orange">
              Kirim Pesan
            </a>
            <a href="https://www.instagram.com/fi_asahina?igsh=a2I3bnJobGZrcWZy" target="_blank" rel="noopener noreferrer" className="btn-purple">
              Pesan Armada
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* Zona Provinsi */}
      <section className="section">
        <h2>LINTASAN MUARA TRAVEL</h2>
        <div className="grid">
          <div className="card">
            <img src="/image/bandung.jpg" alt="Zona Jawa Barat" />
            <h3>Zona Jawa Barat</h3>
            <p>Purwakarta, Bandung, Bekasi, dll</p>
          </div>
          <div className="card">
            <img src="/image/prambanan.jpg" alt="Zona Jawa Tengah" />
            <h3>Zona Jawa Tengah</h3>
            <p>Semarang, Jogja, Solo, dll</p>
          </div>
          <div className="card">
            <img src="/image/bali.jpg" alt="Zona Bali" />
            <h3>Zona Bali</h3>
            <p>Denpasar, Badung, Gianyar, dll</p>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="section" id="tentang">
        <h2>TENTANG KAMI</h2>
        <div className="tentang-grid">
          <img src="/image/tentangkami.jpg" alt="Tentang Kami" className="tentang-img" />
          <div className="tentang-text">
            <p>
              Muara Travel adalah perusahaan transportasi profesional yang telah beroperasi sejak tahun 2012, 
              melayani ribuan pelanggan di berbagai kota di Indonesia. Kami berkomitmen untuk memberikan layanan perjalanan 
              yang aman, nyaman, dan tepat waktu dengan dukungan armada terbaik dan sopir-sopir berpengalaman.
            </p>
            <p>
              Layanan kami mencakup perjalanan antar kota, pengiriman paket kilat, carter kendaraan, dan juga paket wisata 
              eksklusif ke berbagai destinasi populer. Dengan sistem pemesanan yang mudah dan layanan customer support yang 
              responsif, kami siap menjadi mitra perjalanan Anda kapan pun dibutuhkan.
            </p>
            <p>
              Kami percaya bahwa perjalanan yang menyenangkan dimulai dari layanan yang berkualitas. Oleh karena itu, kami 
              selalu mengutamakan kebersihan kendaraan, keamanan perjalanan, serta kenyamanan penumpang. Terima kasih telah 
              mempercayakan perjalanan Anda bersama Muara Travel.
            </p>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="section" id="layanan">
        <h2>LAYANAN KAMI</h2>
        <div className="grid">
          <div className="card">
            <img src="/image/traveluniv.jpg" alt="Travel Reguler" />
            <h3>Travel Reguler</h3>
          </div>
          <div className="card">
            <img src="/image/gift.jpg" alt="Pengiriman Paket" />
            <h3>Pengiriman Paket Kilat</h3>
          </div>
          <div className="card">
            <img src="/image/layanan.jpg" alt="Layanan Wisata" />
            <h3>Layanan Wisata</h3>
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section className="section" id="lokasi">
        <h2>LOKASI KAMI</h2>
        <div className="lokasi-grid">
          <div className="lokasi-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63361.67460165019!2d111.0079739!3d-6.7575374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70cf3b1cdac42b%3A0x4dd54288f2e4d4f3!2sPati%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1625300523515!5m2!1sid!2sid"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Lokasi"
            ></iframe>
          </div>
          <div className="lokasi-video">
            <iframe
              width="100%" height="300"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <h3>Travelyn</h3>
          <p>Jalan Raya Pati Tayu Kulon No. 176, Pati, Jawa Tengah</p>
        </div>
        <div>
          <p>📞 0821 4662 4432</p>
          <p>✉ info@travelyn.com</p>
        </div>
      </footer>
    </>
  )
}

export default App
