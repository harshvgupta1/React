import { useState } from 'react';
import { MapPin, Search, Percent, User, ShoppingBag, ChevronDown, Check } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';

export default function Navbar({
  selectedLocation,
  onSelectLocation,
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onResetView,
  onApplyPromo,
  isLiveAPI
}) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <div className="nav-left">
            {/* Swiggy Logo */}
            <div className="nav-logo" onClick={onResetView}>
              <div className="logo-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white" stroke="white" />
                  <circle cx="12" cy="9" r="2.5" fill="#fc8019" />
                </svg>
              </div>
              <span className="logo-text">SWIGGY</span>
            </div>

            {/* Location Selector */}
            <div
              className="nav-location"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              title="Change Delivery Location"
            >
              <MapPin size={18} color="#fc8019" />
              <span className="location-area">{selectedLocation.area}</span>
              <span className="location-city">{selectedLocation.city}</span>
              <ChevronDown size={15} color="#fc8019" />
            </div>

            {/* Live API Badge */}
            <div
              className={`api-status-badge ${isLiveAPI ? 'live' : ''}`}
              title={isLiveAPI ? "Connected to Live Swiggy API" : "Using Instant Offline Cache"}
            >
              <span>{isLiveAPI ? '🟢 Live Swiggy API' : '⚡ Instant Cache'}</span>
            </div>
          </div>

          <div className="nav-right">
            {/* Quick Search */}
            <div className="nav-link" onClick={() => document.getElementById('search-restaurants')?.focus()}>
              <Search size={19} />
              <span>Search</span>
            </div>

            {/* Offers */}
            <div
              className="nav-link"
              onClick={() => {
                onApplyPromo('SWIGGY50');
                onOpenCart();
              }}
            >
              <Percent size={19} color="#fc8019" />
              <span>Offers <sup style={{ color: '#fc8019', fontWeight: 800 }}>NEW</sup></span>
            </div>

            {/* Sign In / Profile */}
            <div className="nav-link" onClick={() => setShowUserModal(true)}>
              <User size={19} />
              <span>Sign In</span>
            </div>

            {/* Cart Pill */}
            <button className="cart-pill" onClick={onOpenCart} aria-label="Open Cart">
              <ShoppingBag size={18} />
              <span>Cart</span>
              {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Location Dropdown Modal */}
      {showLocationDropdown && (
        <div className="modal-overlay" onClick={() => setShowLocationDropdown(false)}>
          <div className="success-modal" style={{ maxWidth: '420px', textAlign: 'left' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Choose Delivery Location</h3>
              <button onClick={() => setShowLocationDropdown(false)} style={{ fontSize: '18px', fontWeight: 700 }}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {LOCATIONS.map((loc) => {
                const isSelected = loc.id === selectedLocation.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => {
                      onSelectLocation(loc);
                      setShowLocationDropdown(false);
                    }}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: isSelected ? '1.5px solid #fc8019' : '1px solid #e2e8f0',
                      background: isSelected ? '#fff5ed' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>{loc.area}, {loc.city}</div>
                      <div style={{ fontSize: '12px', color: '#686b78', marginTop: '2px' }}>{loc.full}</div>
                    </div>
                    {isSelected && <Check size={18} color="#fc8019" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showUserModal && (
        <div className="modal-overlay" onClick={() => setShowUserModal(false)}>
          <div className="success-modal" style={{ maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Welcome to Swiggy</h3>
              <button onClick={() => setShowUserModal(false)} style={{ fontSize: '18px', fontWeight: 700 }}>✕</button>
            </div>
            <p style={{ color: '#686b78', fontSize: '13px', marginBottom: '20px' }}>
              Log in to track orders, manage saved addresses, and claim exclusive vouchers!
            </p>
            <input
              type="tel"
              placeholder="Enter phone number"
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1.5px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                marginBottom: '16px'
              }}
            />
            <button
              onClick={() => {
                alert('Logged in successfully!');
                setShowUserModal(false);
              }}
              style={{
                width: '100%',
                background: '#fc8019',
                color: '#fff',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 800
              }}
            >
              LOGIN / CONTINUE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
