import { Star } from 'lucide-react';

export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <article className="restaurant-card" onClick={() => onClick(restaurant)}>
      <div className="card-media">
        <img
          className="card-img"
          src={restaurant.image}
          alt={restaurant.name}
          loading="eager"
        />
        <div className="card-overlay">
          <span className="offer-badge">{restaurant.offerBadge}</span>
        </div>
        {restaurant.isPromoted && (
          <span className="promoted-badge">Promoted</span>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title" title={restaurant.name}>
          {restaurant.name}
        </h3>

        <div className="card-meta-row">
          <span className="rating-badge">
            <Star size={11} fill="#ffffff" stroke="#ffffff" />
            {restaurant.rating}
          </span>
          <span className="meta-dot">•</span>
          <span>{restaurant.deliveryTime}</span>
          <span className="meta-dot">•</span>
          <span>{restaurant.costForTwo}</span>
        </div>

        <p className="card-cuisines" title={restaurant.cuisines.join(', ')}>
          {restaurant.cuisines.join(', ')}
        </p>
        <p className="card-area">{restaurant.area}</p>
      </div>
    </article>
  );
}
