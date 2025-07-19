import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div>Muara Travel</div>
        <div>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#layanan">Layanan</a>
        </div>
      </div>

      {/* Beranda (Hero + Zona Provinsi) */}
      <section className="hero" id="beranda">
        <h1>MUARA TRAVEL</h1>
        <p>Travel murah, harga bersahabat, dan layanan terpercaya.</p>
        <div className="button-group">
          <button className="btn-orange">Kirim Pesan</button>
          <button className="btn-purple">Pesan Armada</button>
        </div>

        {/* Zona Layanan dipindah ke sini */}
        <div className="section">
          <h2>LINTASAN MUARA TRAVEL</h2>
          <div className="grid">
            <div className="card">
              <img src="/zona-jabar.jpg" alt="Zona Jawa Barat" />
              <h3>Zona Jawa Barat</h3>
              <p>Purwakarta, Bandung, Bekasi, dll</p>
            </div>
            <div className="card">
              <img src="/zona-jateng.jpg" alt="Zona Jawa Tengah" />
              <h3>Zona Jawa Tengah</h3>
              <p>Semarang, Jogja, Solo, dll</p>
            </div>
            <div className="card">
              <img src="/zona-bali.jpg" alt="Zona Bali" />
              <h3>Zona Bali</h3>
              <p>Denpasar, Badung, Gianyar, dll</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="section" id="tentang">
        <h2>TENTANG KAMI</h2>
        <p>
          Muara Travel memiliki track record yang panjang dalam menjalankan bisnis travel. Kami siap mengantar Anda dengan armada lengkap dan layanan door to door.
        </p>
      </section>

      {/* Layanan */}
      <section className="section" id="layanan">
        <h2>LAYANAN KAMI</h2>
        <div className="grid">
          <div className="card">
            <img src="/layanan1.jpg" alt="Travel Reguler" />
            <h3>Travel Reguler</h3>
          </div>
          <div className="card">
            <img src="/layanan2.jpg" alt="Pengiriman Paket" />
            <h3>Pengiriman Paket Kilat</h3>
          </div>
          <div className="card">
            <img src="/layanan3.jpg" alt="Carter Mobil" />
            <h3>Carter Mobil</h3>
          </div>
          <div className="card">
            <img src="/layanan4.jpg" alt="Layanan Wisata" />
            <h3>Layanan Wisata</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <h3>Muara Travel</h3>
          <p>Jalan Raya Pati Tayu Kulon No. 176, Pati, Jawa Tengah</p>
        </div>
        <div>
          <p>📞 0821 4662 4432</p>
          <p>✉ info@muaratravel.com</p>
        </div>
      </footer>
    </>
  )
}

export default App
