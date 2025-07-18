import React from 'react';
import './App.css';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Travellynn</div>
        <ul className="nav-links">
          <li>Features</li>
          <li>Pricing</li>
          <li>Login</li>
          <li><button className="cta">Sign Up for Free</button></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>An easier trip, every time</h1>
          <p>Plan, book, and manage your travel with ease using Travel Buddy</p>
        </div>
        <img src="/img/feature11.svg" alt="hero" />
      </section>

      <section className="features">
        <div className="feature">
          <img src="/img/feature22.svg" alt="Booking" />
          <h2>You handle the booking,<br />we'll take it from there</h2>
          <p>From trip planning to real-time alerts, Travel Buddy covers everything for a smooth experience.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>Learn how it works</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature33.svg" alt="Reminders" />
          <h2>Helpful reminders/alerts<br />so you never miss a beat</h2>
          <p>Get notified on delays, boarding times, and trip changes instantly.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>More about this</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature44.svg" alt="Tracking" />
          <h2>Always know where<br />to be and when</h2>
          <p>Our GPS tracking and schedule manager helps you stay on time and informed.</p>
          <a href="https://id.shp.ee/LHqRWhbs" target="_blank" rel="noopener noreferrer">
            <button>Explore the feature</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature55.svg" alt="Multi-device Sync" />
          <h2>Sync across<br />all your devices</h2>
          <p>Access your itinerary and updates seamlessly from phone, tablet, or laptop.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>View details</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature66.svg" alt="Smart Suggestions" />
          <h2>Smart travel<br />suggestions</h2>
          <p>Get AI-powered recommendations on places to visit, eat, and stay.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>See suggestions</button>
          </a>
        </div>

        <div className="feature">
          <img src="/img/feature77.svg" alt="Travel Insights" />
          <h2>Insights and<br />trip history</h2>
          <p>Track your travel trends and view detailed history of past journeys.</p>
          <a href="https://id.shp.ee/LHqRWhb" target="_blank" rel="noopener noreferrer">
            <button>View insights</button>
          </a>
        </div>
      </section>

      <section className="map-video-section">
        <div className="card">
          <h2>Our Location</h2>
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

        <div className="card">
          <h2>Watch Our Promo</h2>
          <iframe
            src="https://www.youtube.com/embed/qzGxK6Uiu04?si=yPE9ksg05QGCZ6sG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="cta-banner">
        <h2>Try the travel app that keeps up with you</h2>
        <div className="download-buttons">
          <a href="https://play.google.com/store/apps/details?id=com.traveloka.android" target="_blank" rel="noopener noreferrer">
            <button className="cta">Download on Play Store</button>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Travel Buddy</div>

        <div className="footer-links">
          <div>
            <h4>PRODUCT</h4>
            <p>Features</p>
            <p>Pricing</p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>About Us</p>
            <p>Careers</p>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <p>Help Center</p>
            <p>Contact</p>
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

        <p className="footer-copy">&copy; 2025 Travel Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
}
