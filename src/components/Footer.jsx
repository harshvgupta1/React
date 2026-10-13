import { CheckCircle2, Bike, Clock, MapPin, Sparkles } from 'lucide-react';

export function OrderSuccessModal({ isOpen, onClose, totalAmount, location }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="success-modal" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon-wrap">
          <CheckCircle2 size={44} />
        </div>

        <h2 className="success-title">Order Placed Successfully!</h2>
        <p className="success-sub">
          Your order worth <strong>₹{totalAmount}</strong> has been received by the restaurant.
        </p>

        {/* Live Delivery Tracker Timeline */}
        <div className="order-timeline">
          <div className="timeline-step done">
            <div className="timeline-dot">✓</div>
            <span className="timeline-label">Confirmed</span>
          </div>
          <div className="timeline-step active">
            <div className="timeline-dot">👨‍🍳</div>
            <span className="timeline-label">Cooking</span>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">🛵</div>
            <span className="timeline-label">On Way</span>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">📍</div>
            <span className="timeline-label">Delivered</span>
          </div>
        </div>

        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'left',
            marginBottom: '24px',
            fontSize: '13px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#15803d', fontWeight: 700 }}>
            <Clock size={16} /> Estimated Delivery: 26 - 32 mins
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#686b78' }}>
            <MapPin size={16} /> Delivering to: {location.area}, {location.city}
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            background: '#fc8019',
            color: '#ffffff',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 800
          }}
        >
          ORDER MORE FOOD
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="swiggy-footer">
      <div className="container">
        {/* App download banner */}
        <div className="footer-app-banner">
          <div className="app-banner-text">
            <h3>For better experience, download the Swiggy app now</h3>
            <p>Get exclusive coupons, live order tracking, and lightning fast delivery</p>
          </div>
          <div className="app-badges">
            <div className="app-badge-btn">
              <span>🍏 App Store</span>
            </div>
            <div className="app-badge-btn">
              <span>🤖 Google Play</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div
                style={{
                  background: '#fc8019',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900
                }}
              >
                S
              </div>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#fc8019' }}>SWIGGY</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.6, maxWidth: '280px' }}>
              © 2026 Swiggy Technologies Pvt. Ltd.<br />
              Delivering happiness, fast food, groceries, and dining across 500+ cities in India.
            </p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Swiggy Corporate</a></li>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Team & Engineering</a></li>
              <li><a href="#!">Swiggy One</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact & Help</h4>
            <ul>
              <li><a href="#!">Help & Support</a></li>
              <li><a href="#!">Partner with us</a></li>
              <li><a href="#!">Ride with us</a></li>
              <li><a href="#!">Terms & Conditions</a></li>
              <li><a href="#!">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>We deliver to:</h4>
            <ul>
              <li><a href="#!">Noida</a></li>
              <li><a href="#!">Delhi NCR</a></li>
              <li><a href="#!">Bengaluru</a></li>
              <li><a href="#!">Mumbai</a></li>
              <li><a href="#!">Hyderabad</a></li>
              <li><a href="#!">Pune</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          Swiggy Clone · Built with modern React & Vite · Handcrafted with ❤️ by <strong>Harsh Vardhan Gupta</strong>
        </div>
      </div>
    </footer>
  );
}
