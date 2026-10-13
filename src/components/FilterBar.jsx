import { Search, SlidersHorizontal, Zap, Star, ShieldCheck, Tag, ArrowUpDown, X } from 'lucide-react';

export default function FilterBar({
  searchQuery,
  onSearchChange,
  fastDeliveryOnly,
  onToggleFastDelivery,
  rating4PlusOnly,
  onToggleRating4Plus,
  pureVegOnly,
  onTogglePureVeg,
  offersOnly,
  onToggleOffers,
  sortByPrice,
  onToggleSortByPrice,
  activeCategory,
  onClearCategory,
  totalCount,
  onResetAllFilters
}) {
  const hasActiveFilters =
    fastDeliveryOnly ||
    rating4PlusOnly ||
    pureVegOnly ||
    offersOnly ||
    sortByPrice !== 'none' ||
    activeCategory ||
    searchQuery.trim().length > 0;

  return (
    <section className="filters-section">
      <div className="container">
        <div className="filters-row">
          {/* Live Search */}
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              id="search-restaurants"
              type="text"
              className="search-input"
              placeholder="Search for restaurant, cuisine, or dish..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#93959f'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="filter-pills">
            <button
              className={`filter-pill ${fastDeliveryOnly ? 'active' : ''}`}
              onClick={onToggleFastDelivery}
            >
              <Zap size={14} />
              <span>Fast Delivery</span>
            </button>

            <button
              className={`filter-pill ${rating4PlusOnly ? 'active' : ''}`}
              onClick={onToggleRating4Plus}
            >
              <Star size={14} fill={rating4PlusOnly ? '#fc8019' : 'none'} />
              <span>Rating 4.0+</span>
            </button>

            <button
              className={`filter-pill ${pureVegOnly ? 'active' : ''}`}
              onClick={onTogglePureVeg}
            >
              <ShieldCheck size={14} />
              <span>Pure Veg</span>
            </button>

            <button
              className={`filter-pill ${offersOnly ? 'active' : ''}`}
              onClick={onToggleOffers}
            >
              <Tag size={14} />
              <span>Offers</span>
            </button>

            <button
              className={`filter-pill ${sortByPrice !== 'none' ? 'active' : ''}`}
              onClick={onToggleSortByPrice}
            >
              <ArrowUpDown size={14} />
              <span>
                {sortByPrice === 'asc'
                  ? 'Cost: Low to High'
                  : sortByPrice === 'desc'
                  ? 'Cost: High to Low'
                  : 'Sort by Cost'}
              </span>
            </button>

            {hasActiveFilters && (
              <button className="filter-clear-btn" onClick={onResetAllFilters}>
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Status line */}
        <div style={{ marginTop: '14px', fontSize: '13px', color: '#686b78', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Showing <strong>{totalCount}</strong> restaurants</span>
          {activeCategory && (
            <span
              style={{
                background: '#fff5ed',
                color: '#fc8019',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Category: {activeCategory}
              <X size={12} style={{ cursor: 'pointer' }} onClick={onClearCategory} />
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
