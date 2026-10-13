import { useState, useEffect } from 'react';
import { RESTAURANTS } from '../data/mockData';

// Fallback menu template for restaurants loaded from live API list
const DEFAULT_MENU = [
  {
    category: 'Recommended Bestsellers',
    items: [
      {
        id: 'live_m_1',
        name: 'Special Chef Deg Biryani Bowl',
        price: 349,
        rating: 4.6,
        ratingCount: 1820,
        isVeg: false,
        description: 'Slow-cooked aromatic saffron basmati rice with tender spiced meat and secret house gravy.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'live_m_2',
        name: 'Paneer Tikka Butter Masala',
        price: 289,
        rating: 4.5,
        ratingCount: 1240,
        isVeg: true,
        description: 'Charcoal grilled cottage cheese chunks cooked in rich velvety tomato cashew gravy.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'live_m_3',
        name: 'Crispy Garlic Butter Naan (2 Pcs)',
        price: 90,
        rating: 4.4,
        ratingCount: 950,
        isVeg: true,
        description: 'Traditional tandoor baked bread brushed with freshly crushed garlic and salted butter.',
        image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    category: 'Desserts & Beverages',
    items: [
      {
        id: 'live_m_4',
        name: 'Hot Gulab Jamun with Rabri',
        price: 110,
        rating: 4.8,
        ratingCount: 840,
        isVeg: true,
        description: 'Melt-in-mouth warm khoya dumplings served with slow-reduced creamy saffron rabri.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80'
      }
    ]
  }
];

export function useSwiggyAPI(location) {
  const [restaurants, setRestaurants] = useState(RESTAURANTS);
  const [loading, setLoading] = useState(false);
  const [isLiveAPI, setIsLiveAPI] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchSwiggyData() {
      setLoading(true);
      setError(null);

      const lat = location.lat || 28.6279;
      const lng = location.lng || 77.3732;
      const targetQuery = `lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      // Try 1: Local Vite dev proxy (/dapi/...)
      // Try 2: Public CORS proxy (corsproxy.io)
      const urlsToTry = [
        `/dapi/restaurants/list/v5?${targetQuery}`,
        `https://corsproxy.io/?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/list/v5?${targetQuery}`
        )}`
      ];

      let rawData = null;

      for (const url of urlsToTry) {
        try {
          const res = await fetch(url, {
            headers: {
              Accept: 'application/json'
            }
          });
          if (res.ok) {
            const json = await res.json();
            if (json?.data?.cards?.length) {
              rawData = json;
              break;
            }
          }
        } catch (err) {
          // Continue to next fallback
        }
      }

      if (rawData && isMounted) {
        try {
          const cards = rawData.data.cards;
          // Find the restaurant grid card
          let restList = null;

          for (const c of cards) {
            const grid = c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (grid && Array.isArray(grid) && grid.length > 0) {
              restList = grid;
              break;
            }
          }

          if (restList && restList.length > 0) {
            const parsed = restList.map((item, idx) => {
              const info = item.info;
              const costMatch = info.costForTwo ? parseInt(info.costForTwo.replace(/[^0-9]/g, '')) : 350;

              return {
                id: info.id || `live_${idx}`,
                name: info.name,
                rating: info.avgRating ? parseFloat(info.avgRating) : 4.2,
                ratingCount: info.totalRatingsString || '1K+ ratings',
                deliveryTime: info.sla?.slaString || '25-30 mins',
                distance: info.sla?.lastMileTravelString || '2.5 km',
                costForTwo: info.costForTwo || '₹350 for two',
                costNumber: isNaN(costMatch) ? 350 : costMatch,
                cuisines: info.cuisines || ['North Indian', 'Fast Food'],
                area: info.areaName ? `${info.areaName}, ${info.locality || ''}` : location.area,
                image: info.cloudinaryImageId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`
                  : RESTAURANTS[idx % RESTAURANTS.length].image,
                offerBadge: info.aggregatedDiscountInfoV3
                  ? `${info.aggregatedDiscountInfoV3.header || ''} ${info.aggregatedDiscountInfoV3.subHeader || ''}`.trim()
                  : RESTAURANTS[idx % RESTAURANTS.length].offerBadge,
                isVeg: Boolean(info.veg),
                isPromoted: Boolean(info.promoted),
                fastDelivery: Boolean(info.sla?.deliveryTime && info.sla.deliveryTime <= 30),
                menu: DEFAULT_MENU
              };
            });

            setRestaurants(parsed);
            setIsLiveAPI(true);
            setLoading(false);
            return;
          }
        } catch (parseErr) {
          console.warn('Error parsing live Swiggy response, using curated dataset:', parseErr);
        }
      }

      // Fallback if Swiggy blocked or offline
      if (isMounted) {
        setRestaurants(RESTAURANTS);
        setIsLiveAPI(false);
        setLoading(false);
      }
    }

    fetchSwiggyData();

    return () => {
      isMounted = false;
    };
  }, [location.lat, location.lng, location.area]);

  return { restaurants, loading, isLiveAPI, error };
}
