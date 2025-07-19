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
          <a href="#lokasi">Lokasi</a>
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

      {/* Lokasi */}
      <section className="section" id="lokasi">
        <h2>LOKASI KAMI</h2>

        <div className="map-container">
          <iframe
            title="Muara Travel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.187534125405!2d110.80448347423695!3d-7.223761692781735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e712c0c4c33c837%3A0x1a0b33d6a0a79eac!2sMuara%20Travel!5e0!3m2!1sen!2sid!4v1721382886535!5m2!1sen!2sid"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Video Profil</h3>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
