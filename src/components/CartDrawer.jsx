import { useState } from 'react';
import { X, ShoppingBag, ArrowRight, CheckCircle2, Tag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
  onCheckout,
  appliedPromo,
  onApplyPromo,
  selectedLocation
}) {
  const [promoInput, setPromoInput] = useState('');
  const [tip, setTip] = useState(0);
  const [instructions, setInstructions] = useState('');

  if (!isOpen) return null;

  // Calculate bill
  const itemTotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = itemTotal > 300 ? 0 : items.length > 0 ? 29 : 0;
  const platformFee = items.length > 0 ? 5 : 0;
  const taxes = Math.round(itemTotal * 0.05);

  let discount = 0;
  if (appliedPromo === 'SWIGGY50') {
    discount = Math.min(120, Math.round(itemTotal * 0.5));
  } else if (appliedPromo === 'NIGHTOWL') {
    discount = Math.round(itemTotal * 0.2);
  } else if (appliedPromo === 'BIRYANIROYAL') {
    discount = 80;
  }

  const grandTotal = Math.max(0, itemTotal + deliveryFee + platformFee + taxes + tip - discount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (promoInput.trim()) {
      onApplyPromo(promoInput.trim().toUpperCase());
      setPromoInput('');
    }
  };

  return (
    <>
      <div className="cart-overlay-backdrop" onClick={onClose} />
      <div className="cart-drawer" role="dialog" aria-modal="true">
        {/* Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="#fc8019" />
            <h2 className="cart-header-title">Your Food Cart</h2>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="cart-content-scroll">
          {items.length === 0 ? (
            <div className="cart-empty-state">
              <img
                className="empty-cart-img"
                src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=300&auto=format&fit=crop&q=80"
                alt="Empty Cart"
              />
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>Your cart is empty</h3>
              <p style={{ color: '#686b78', fontSize: '13px', marginBottom: '20px' }}>
                You can go to home page to view more restaurants and delicious food items!
              </p>
              <button
                onClick={onClose}
                style={{
                  background: '#fc8019',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '10px 24px',
                  borderRadius: '8px'
                }}
              >
                SEE RESTAURANTS NEAR YOU
              </button>
            </div>
          ) : (
            <>
              {/* Restaurant summary */}
              <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#282c3f' }}>
                  {items[0]?.restaurantName || 'Selected Restaurant'}
                </h3>
                <p style={{ fontSize: '12px', color: '#686b78', marginTop: '2px' }}>
                  Delivering to <strong>{selectedLocation.area}, {selectedLocation.city}</strong>
                </p>
              </div>

              {/* Items List */}
              <div style={{ marginBottom: '20px' }}>
                {items.map((item) => (
                  <div className="cart-item-row" key={item.id}>
                    <div className="cart-item-meta">
                      <div className={`food-icon ${item.isVeg ? 'veg' : 'nonveg'}`} style={{ marginBottom: 0 }}>
                        <div className={`food-dot ${item.isVeg ? 'veg' : 'nonveg'}`} />
                      </div>
                      <span className="cart-item-name">{item.name}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="stepper-btn" style={{ padding: '2px 8px' }}>
                        <button onClick={() => onRemoveFromCart(item.id)}>−</button>
                        <span style={{ fontSize: '13px' }}>{item.qty}</span>
                        <button onClick={() => onAddToCart(item)}>+</button>
                      </div>

                      <span className="cart-item-price">₹{item.price * item.qty}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions note */}
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="Any cooking suggestions? (e.g. less spicy, extra tissues)"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '12px',
                    outline: 'none',
                    background: '#f8fafc'
                  }}
                />
              </div>

              {/* Coupon box */}
              <form className="cart-coupon-box" onSubmit={handleApplyCoupon}>
                <Tag size={16} color="#fc8019" style={{ alignSelf: 'center' }} />
                <input
                  type="text"
                  className="coupon-input"
                  placeholder="Apply coupon (e.g. SWIGGY50)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                />
                <button type="submit" className="coupon-btn">
                  APPLY
                </button>
              </form>

              {appliedPromo && (
                <div
                  style={{
                    background: '#dcfce7',
                    color: '#15803d',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={16} /> Code '{appliedPromo}' applied! (Saved ₹{discount})
                  </span>
                  <button onClick={() => onApplyPromo('')} style={{ color: '#dc2626', fontWeight: 800 }}>✕</button>
                </div>
              )}

              {/* Delivery tip */}
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#282c3f', marginBottom: '8px' }}>
                  Tip your delivery partner (Optional)
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[20, 30, 50].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setTip(tip === amt ? 0 : amt)}
                      style={{
                        flex: 1,
                        padding: '6px',
                        borderRadius: '6px',
                        border: tip === amt ? '1.5px solid #fc8019' : '1px solid #e2e8f0',
                        background: tip === amt ? '#fff5ed' : '#ffffff',
                        color: tip === amt ? '#fc8019' : '#282c3f',
                        fontSize: '12px',
                        fontWeight: 700
                      }}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bill details */}
              <div className="bill-details">
                <h4 className="bill-title">Bill Details</h4>
                <div className="bill-row">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="bill-row">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <strong style={{ color: '#15803d' }}>FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div className="bill-row">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="bill-row">
                  <span>GST & Restaurant Charges</span>
                  <span>₹{taxes}</span>
                </div>
                {discount > 0 && (
                  <div className="bill-row" style={{ color: '#15803d', fontWeight: 700 }}>
                    <span>Coupon Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                {tip > 0 && (
                  <div className="bill-row">
                    <span>Delivery Tip</span>
                    <span>₹{tip}</span>
                  </div>
                )}
                <div className="bill-row total">
                  <span>TO PAY</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with Checkout CTA */}
        {items.length > 0 && (
          <div className="cart-footer">
            <button className="checkout-btn" onClick={() => onCheckout(grandTotal)}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.9 }}>Total to pay</div>
                <div style={{ fontSize: '17px', fontWeight: 900 }}>₹{grandTotal}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>PROCEED TO PAY</span>
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
