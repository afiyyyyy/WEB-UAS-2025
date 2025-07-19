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
        </div>
      </div>

      {/* Beranda (Hero dengan Video + Zona Provinsi) */}
      <section className="hero" id="beranda">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/video/beranda.mp4" type="video/mp4" />
          Browsermu tidak mendukung video.
        </video>
        <div className="hero-overlay">
          <h1>TRAVELYN</h1>
          <p>Travel murah, harga bersahabat, dan layanan terpercaya.</p>
          <div className="button-group">
            <button className="btn-orange">Kirim Pesan</button>
            <button className="btn-purple">Pesan Armada</button>
          </div>
        </div>

        <div className="section">
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
            <img src="/image/travel.jpg" alt="Travel Reguler" />
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

      {/* Video & Maps Section */}
      <section className="section video-maps">
        <h2>LOKASI DAN VIDEO KAMI</h2>
        <div className="video-maps-grid">
          <div className="maps">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4686248208486!2d110.3943581!3d-7.8416592999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a7c3d58c8b%3A0x716446a47e154afe!2sJalan%20Raya%20Pati%20Tayu!5e0!3m2!1sid!2sid!4v1721400000000!5m2!1sid!2sid" 
              width="100%" 
              height="300" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Muara Travel"
            ></iframe>
          </div>
          <div className="yt-video">
            <iframe 
              width="100%" 
              height="300" 
              src="https://www.youtube.com/embed/FV2z_XbPZ5A" 
              title="YouTube video" 
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
