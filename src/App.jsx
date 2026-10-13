import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import { PromoBanners, CategoriesCarousel } from './components/CategoriesCarousel';
import FilterBar from './components/FilterBar';
import RestaurantCard from './components/RestaurantCard';
import RestaurantDetail from './components/RestaurantDetail';
import CartDrawer from './components/CartDrawer';
import { OrderSuccessModal, Footer } from './components/Footer';
import { RESTAURANTS, LOCATIONS } from './data/mockData';
import './styles/swiggy.css';

export default function App() {
  // Navigation & Location
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Cart state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState('');
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  // Filtering states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);
  const [rating4PlusOnly, setRating4PlusOnly] = useState(false);
  const [pureVegOnly, setPureVegOnly] = useState(false);
  const [offersOnly, setOffersOnly] = useState(false);
  const [sortByPrice, setSortByPrice] = useState('none'); // 'none' | 'asc' | 'desc'

  // Cart operations
  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (dishId) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dishId);
      if (!existing) return prev;
      if (existing.qty === 1) {
        return prev.filter((item) => item.id !== dishId);
      }
      return prev.map((item) =>
        item.id === dishId ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    setAppliedPromo('');
  };

  const handleCheckout = (total) => {
    setLastOrderTotal(total);
    setIsCartOpen(false);
    setCartItems([]);
    setAppliedPromo('');
    setIsOrderSuccessOpen(true);
  };

  const handleResetView = () => {
    setSelectedRestaurant(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAllFilters = () => {
    setSearchQuery('');
    setActiveCategory(null);
    setFastDeliveryOnly(false);
    setRating4PlusOnly(false);
    setPureVegOnly(false);
    setOffersOnly(false);
    setSortByPrice('none');
  };

  const toggleSortByPrice = () => {
    setSortByPrice((prev) => {
      if (prev === 'none') return 'asc';
      if (prev === 'asc') return 'desc';
      return 'none';
    });
  };

  // Filter & sort restaurants
  const filteredRestaurants = useMemo(() => {
    let result = [...RESTAURANTS];

    // Search query filter (restaurant name, cuisines, or menu dish names)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisines.some((c) => c.toLowerCase().includes(q)) ||
          r.area.toLowerCase().includes(q) ||
          r.menu.some((cat) =>
            cat.items.some((item) => item.name.toLowerCase().includes(q))
          )
      );
    }

    // Category filter
    if (activeCategory) {
      const catLower = activeCategory.toLowerCase();
      result = result.filter(
        (r) =>
          r.cuisines.some((c) => c.toLowerCase().includes(catLower)) ||
          r.menu.some((cat) =>
            cat.items.some(
              (item) =>
                item.name.toLowerCase().includes(catLower) ||
                item.description.toLowerCase().includes(catLower)
            )
          )
      );
    }

    // Fast delivery
    if (fastDeliveryOnly) {
      result = result.filter((r) => r.fastDelivery);
    }

    // Rating 4.0+
    if (rating4PlusOnly) {
      result = result.filter((r) => r.rating >= 4.3);
    }

    // Pure veg
    if (pureVegOnly) {
      result = result.filter((r) => r.isVeg);
    }

    // Offers only
    if (offersOnly) {
      result = result.filter((r) => Boolean(r.offerBadge));
    }

    // Sorting
    if (sortByPrice === 'asc') {
      result.sort((a, b) => a.costNumber - b.costNumber);
    } else if (sortByPrice === 'desc') {
      result.sort((a, b) => b.costNumber - a.costNumber);
    }

    return result;
  }, [
    searchQuery,
    activeCategory,
    fastDeliveryOnly,
    rating4PlusOnly,
    pureVegOnly,
    offersOnly,
    sortByPrice
  ]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="swiggy-app">
      {/* Top Navigation */}
      <Navbar
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onResetView={handleResetView}
        onApplyPromo={(code) => {
          setAppliedPromo(code);
          setIsCartOpen(true);
        }}
      />

      {/* Main Content: Restaurant Details vs Home Grid */}
      {selectedRestaurant ? (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onBack={() => setSelectedRestaurant(null)}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      ) : (
        <main>
          {/* Promotional Deals */}
          <PromoBanners
            onSelectPromo={(code) => {
              setAppliedPromo(code);
              setIsCartOpen(true);
            }}
          />

          {/* "What's on your mind?" Category Carousel */}
          <CategoriesCarousel
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Search & Filter Bar */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            fastDeliveryOnly={fastDeliveryOnly}
            onToggleFastDelivery={() => setFastDeliveryOnly(!fastDeliveryOnly)}
            rating4PlusOnly={rating4PlusOnly}
            onToggleRating4Plus={() => setRating4PlusOnly(!rating4PlusOnly)}
            pureVegOnly={pureVegOnly}
            onTogglePureVeg={() => setPureVegOnly(!pureVegOnly)}
            offersOnly={offersOnly}
            onToggleOffers={() => setOffersOnly(!offersOnly)}
            sortByPrice={sortByPrice}
            onToggleSortByPrice={toggleSortByPrice}
            activeCategory={activeCategory}
            onClearCategory={() => setActiveCategory(null)}
            totalCount={filteredRestaurants.length}
            onResetAllFilters={handleResetAllFilters}
          />

          {/* Restaurants Grid Section */}
          <section className="restaurants-section">
            <div className="container">
              <div className="section-header" style={{ marginBottom: '24px' }}>
                <h2 className="section-title">
                  Restaurants with online food delivery in {selectedLocation.area}
                </h2>
              </div>

              {filteredRestaurants.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#686b78' }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>🍽️</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#282c3f', marginBottom: '8px' }}>
                    No matching restaurants found
                  </h3>
                  <p style={{ fontSize: '14px', marginBottom: '18px' }}>
                    Try adjusting your search or filters to see more results.
                  </p>
                  <button
                    onClick={handleResetAllFilters}
                    style={{
                      background: '#fc8019',
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '14px'
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="restaurants-grid">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      onClick={(rest) => {
                        setSelectedRestaurant(rest);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      )}

      {/* Cart Drawer Slide-over */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
        appliedPromo={appliedPromo}
        onApplyPromo={setAppliedPromo}
        selectedLocation={selectedLocation}
      />

      {/* Order Success Celebratory Modal */}
      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        onClose={() => setIsOrderSuccessOpen(false)}
        totalAmount={lastOrderTotal}
        location={selectedLocation}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
