import { useState } from 'react';
import { ArrowLeft, Star, Clock, MapPin, IndianRupee, Search, Percent } from 'lucide-react';

export default function RestaurantDetail({
  restaurant,
  onBack,
  cartItems,
  onAddToCart,
  onRemoveFromCart
}) {
  const [vegOnly, setVegOnly] = useState(false);
  const [menuSearch, setMenuSearch] = useState('');

  // Helper to get item count in cart
  const getItemQty = (itemId) => {
    const found = cartItems.find((item) => item.id === itemId);
    return found ? found.qty : 0;
  };

  return (
    <div className="container">
      <div className="detail-view">
        {/* Breadcrumb & Back */}
        <div className="breadcrumb-nav">
          <span onClick={onBack}>Home</span>
          <span>/</span>
          <span>Noida</span>
          <span>/</span>
          <strong style={{ color: '#282c3f' }}>{restaurant.name}</strong>
        </div>

        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#fc8019',
            marginBottom: '16px',
            padding: '6px 12px',
            borderRadius: '6px',
            background: '#fff5ed'
          }}
        >
          <ArrowLeft size={16} /> Back to all restaurants
        </button>

        {/* Restaurant Header Card */}
        <div className="detail-header-card">
          <div className="detail-header-top">
            <div>
              <h1 className="detail-title">{restaurant.name}</h1>
              <p className="detail-cuisines">{restaurant.cuisines.join(', ')}</p>
              <p className="detail-address">{restaurant.area} • {restaurant.distance}</p>
            </div>

            <div className="detail-rating-box">
              <div className="rating-box-score">
                <Star size={14} fill="#15803d" stroke="#15803d" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="rating-box-count">{restaurant.ratingCount}</div>
            </div>
          </div>

          <div className="detail-delivery-info">
            <div className="delivery-badge-item">
              <Clock size={16} color="#686b78" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="delivery-badge-item">
              <IndianRupee size={16} color="#686b78" />
              <span>{restaurant.costForTwo}</span>
            </div>
            <div className="delivery-badge-item" style={{ color: '#fc8019' }}>
              <Percent size={16} />
              <span>{restaurant.offerBadge}</span>
            </div>
          </div>
        </div>

        {/* Menu Controls (Veg toggle & search) */}
        <div className="menu-controls">
          <label className="veg-toggle">
            <div
              className={`switch-pill ${vegOnly ? 'active' : ''}`}
              onClick={() => setVegOnly(!vegOnly)}
            >
              <div className="switch-circle" />
            </div>
            <span>Veg Only</span>
          </label>

          <div style={{ position: 'relative', width: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#93959f' }} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={menuSearch}
              onChange={(e) => setMenuSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                border: '1px solid #e2e8f0',
                borderRadius: '50px',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Categorized Menu */}
        {restaurant.menu.map((category) => {
          // Filter items by vegOnly and menuSearch
          const filteredItems = category.items.filter((item) => {
            if (vegOnly && !item.isVeg) return false;
            if (menuSearch.trim() && !item.name.toLowerCase().includes(menuSearch.toLowerCase())) return false;
            return true;
          });

          if (filteredItems.length === 0) return null;

          return (
            <div className="menu-category-section" key={category.category}>
              <h2 className="menu-category-title">
                <span>{category.category} ({filteredItems.length})</span>
              </h2>

              <div className="menu-items-list">
                {filteredItems.map((dish) => {
                  const qty = getItemQty(dish.id);

                  return (
                    <article className="dish-card" key={dish.id}>
                      <div className="dish-info">
                        <div className={`food-icon ${dish.isVeg ? 'veg' : 'nonveg'}`}>
                          <div className={`food-dot ${dish.isVeg ? 'veg' : 'nonveg'}`} />
                        </div>

                        <h3 className="dish-name">{dish.name}</h3>
                        <div className="dish-price">₹{dish.price}</div>

                        <div className="dish-rating">
                          <Star size={11} fill="#15803d" stroke="#15803d" />
                          <span>{dish.rating} ({dish.ratingCount})</span>
                        </div>

                        <p className="dish-desc">{dish.description}</p>
                      </div>

                      <div className="dish-media-wrap">
                        <div className="dish-media">
                          <img src={dish.image} alt={dish.name} loading="eager" />
                        </div>

                        <div className="dish-btn-container">
                          {qty === 0 ? (
                            <button
                              className="add-dish-btn"
                              onClick={() =>
                                onAddToCart({
                                  ...dish,
                                  restaurantId: restaurant.id,
                                  restaurantName: restaurant.name
                                })
                              }
                            >
                              ADD
                            </button>
                          ) : (
                            <div className="stepper-btn">
                              <button onClick={() => onRemoveFromCart(dish.id)}>−</button>
                              <span>{qty}</span>
                              <button
                                onClick={() =>
                                  onAddToCart({
                                    ...dish,
                                    restaurantId: restaurant.id,
                                    restaurantName: restaurant.name
                                  })
                                }
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
