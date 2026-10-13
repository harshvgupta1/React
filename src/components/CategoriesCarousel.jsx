import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, PROMO_BANNERS } from '../data/mockData';

export function PromoBanners({ onSelectPromo }) {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-grid">
          {PROMO_BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="promo-card"
              style={{ background: banner.gradient }}
              onClick={() => onSelectPromo(banner.code)}
            >
              <div
                className="promo-bg"
                style={{ backgroundImage: `url(${banner.bgImage})` }}
              />
              <div className="promo-content">
                <h3 className="promo-title">{banner.title}</h3>
                <p className="promo-subtitle">{banner.subtitle}</p>
                <span className="promo-code">USE: {banner.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoriesCarousel({ activeCategory, onSelectCategory }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What’s on your mind?</h2>
          <div className="carousel-nav-btns">
            <button
              className="nav-arrow-btn"
              onClick={() => scroll('left')}
              aria-label="Scroll categories left"
            >
              <ChevronLeft size={20} color="#282c3f" />
            </button>
            <button
              className="nav-arrow-btn"
              onClick={() => scroll('right')}
              aria-label="Scroll categories right"
            >
              <ChevronRight size={20} color="#282c3f" />
            </button>
          </div>
        </div>

        <div className="categories-scroll" ref={scrollRef}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.tag;
            return (
              <div
                key={cat.id}
                className={`category-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(isActive ? null : cat.tag)}
              >
                <div className="category-img-wrap">
                  <img
                    className="category-img"
                    src={cat.image}
                    alt={cat.name}
                    loading="eager"
                  />
                </div>
                <span className="category-name">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
