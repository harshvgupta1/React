export const CATEGORIES = [
  {
    id: 'c1',
    name: 'Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80',
    tag: 'biryani'
  },
  {
    id: 'c2',
    name: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=80',
    tag: 'pizza'
  },
  {
    id: 'c3',
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80',
    tag: 'burger'
  },
  {
    id: 'c4',
    name: 'North Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&auto=format&fit=crop&q=80',
    tag: 'north indian'
  },
  {
    id: 'c5',
    name: 'Rolls',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80',
    tag: 'rolls'
  },
  {
    id: 'c6',
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=300&auto=format&fit=crop&q=80',
    tag: 'chinese'
  },
  {
    id: 'c7',
    name: 'South Indian',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=300&auto=format&fit=crop&q=80',
    tag: 'south indian'
  },
  {
    id: 'c8',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&auto=format&fit=crop&q=80',
    tag: 'dessert'
  },
  {
    id: 'c9',
    name: 'Cakes & Bakery',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80',
    tag: 'cake'
  },
  {
    id: 'c10',
    name: 'Momos',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&auto=format&fit=crop&q=80',
    tag: 'momos'
  },
  {
    id: 'c11',
    name: 'Healthy Bowls',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
    tag: 'healthy'
  },
  {
    id: 'c12',
    name: 'Shakes & Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=80',
    tag: 'beverage'
  }
];

export const PROMO_BANNERS = [
  {
    id: 'b1',
    title: 'Gourmet Delights',
    subtitle: 'Flat 50% OFF up to ₹120',
    code: 'SWIGGY50',
    gradient: 'linear-gradient(135deg, #FF6B4A 0%, #D84315 100%)',
    bgImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b2',
    title: 'Late Night Cravings',
    subtitle: 'Delivering till 4 AM · Extra 20% OFF',
    code: 'NIGHTOWL',
    gradient: 'linear-gradient(135deg, #1E3C72 0%, #2A5298 100%)',
    bgImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b3',
    title: 'Biryani Festival',
    subtitle: 'Free Gulab Jamun on all orders > ₹299',
    code: 'BIRYANIROYAL',
    gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    bgImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80'
  }
];

export const LOCATIONS = [
  { id: 'l1', area: 'Sector 62', city: 'Noida', full: 'Sector 62, Noida, Uttar Pradesh 201309' },
  { id: 'l2', area: 'Sector 18', city: 'Noida', full: 'Atta Market, Sector 18, Noida, Uttar Pradesh' },
  { id: 'l3', area: 'Indirapuram', city: 'Ghaziabad', full: 'Vaibhav Khand, Indirapuram, Ghaziabad' },
  { id: 'l4', area: 'Connaught Place', city: 'New Delhi', full: 'Inner Circle, CP, New Delhi' },
  { id: 'l5', area: 'Cyber City', city: 'Gurugram', full: 'DLF Phase 2, Cyber Hub, Gurugram' },
  { id: 'l6', area: 'Koramangala', city: 'Bengaluru', full: '5th Block, Koramangala, Bengaluru' }
];

export const RESTAURANTS = [
  {
    id: 'r1',
    name: 'Meghana Foods',
    rating: 4.5,
    ratingCount: '15K+ ratings',
    deliveryTime: '22-28 mins',
    distance: '2.1 km',
    costForTwo: '₹400 for two',
    costNumber: 400,
    cuisines: ['Biryani', 'Andhra', 'North Indian'],
    area: 'Sector 18, Noida',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    offerBadge: '₹120 OFF ABOVE ₹199',
    isVeg: false,
    isPromoted: true,
    fastDelivery: true,
    menu: [
      {
        category: 'Recommended Bestsellers',
        items: [
          {
            id: 'm1_1',
            name: 'Meghana Special Chicken Biryani',
            price: 360,
            rating: 4.6,
            ratingCount: 3200,
            isVeg: false,
            description: 'Slow-cooked aromatic basmati rice layered with spicy boneless chicken pieces cooked in traditional Andhra spices.',
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm1_2',
            name: 'Paneer Butter Masala',
            price: 290,
            rating: 4.4,
            ratingCount: 1840,
            isVeg: true,
            description: 'Soft cottage cheese simmered in a rich tomato and cashew velvet gravy with a hint of fenugreek.',
            image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm1_3',
            name: 'Chicken 65 Starter',
            price: 280,
            rating: 4.5,
            ratingCount: 2100,
            isVeg: false,
            description: 'Crispy fried chicken tossed with curry leaves, crushed pepper, garlic, and fresh green chillies.',
            image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&auto=format&fit=crop&q=80'
          }
        ]
      },
      {
        category: 'Breads & Accompaniments',
        items: [
          {
            id: 'm1_4',
            name: 'Butter Garlic Naan',
            price: 65,
            rating: 4.3,
            ratingCount: 1200,
            isVeg: true,
            description: 'Fresh clay-oven baked flatbread brushed with crushed garlic and churned butter.',
            image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm1_5',
            name: 'Gulab Jamun (2 Pcs)',
            price: 80,
            rating: 4.7,
            ratingCount: 950,
            isVeg: true,
            description: 'Melt-in-mouth milk solids dumplings soaked in warm saffron and cardamom syrup.',
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r2',
    name: 'Pizza Hut Express',
    rating: 4.2,
    ratingCount: '8K+ ratings',
    deliveryTime: '25-30 mins',
    distance: '3.2 km',
    costForTwo: '₹350 for two',
    costNumber: 350,
    cuisines: ['Pizzas', 'Italian', 'Fast Food'],
    area: 'Sector 62, Noida',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
    offerBadge: 'FLAT 50% OFF',
    isVeg: false,
    isPromoted: false,
    fastDelivery: true,
    menu: [
      {
        category: 'Signature Pizzas',
        items: [
          {
            id: 'm2_1',
            name: 'Farmhouse Veggie Supreme Pizza',
            price: 349,
            rating: 4.3,
            ratingCount: 2400,
            isVeg: true,
            description: 'Loaded with crisp capsicum, ripe tomatoes, red onions, and grilled mushrooms on mozzarella.',
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm2_2',
            name: 'Smoked Chicken Pepperoni Pizza',
            price: 449,
            rating: 4.5,
            ratingCount: 3100,
            isVeg: false,
            description: 'Classic American pepperoni topped with double cheese and house-made herb tomato sauce.',
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm2_3',
            name: 'Garlic Breadsticks with Dip',
            price: 139,
            rating: 4.4,
            ratingCount: 1900,
            isVeg: true,
            description: 'Freshly baked buttery breadsticks infused with herbs, served with creamy cheese jalapeno dip.',
            image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r3',
    name: "Leon's Burgers & Wings",
    rating: 4.4,
    ratingCount: '10K+ ratings',
    deliveryTime: '20-25 mins',
    distance: '1.5 km',
    costForTwo: '₹300 for two',
    costNumber: 300,
    cuisines: ['Burgers', 'American', 'Fast Food'],
    area: 'Sector 50, Noida',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    offerBadge: 'ITEMS AT ₹129',
    isVeg: false,
    isPromoted: true,
    fastDelivery: true,
    menu: [
      {
        category: 'Gourmet Burgers',
        items: [
          {
            id: 'm3_1',
            name: 'Crispy Peri Peri Chicken Burger',
            price: 219,
            rating: 4.6,
            ratingCount: 4200,
            isVeg: false,
            description: 'Golden fried chicken patty dusted with hot African peri-peri spices, lettuce, and secret garlic mayo.',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm3_2',
            name: 'Double Cheese Crunch Veg Burger',
            price: 179,
            rating: 4.3,
            ratingCount: 2200,
            isVeg: true,
            description: 'Spicy potato and pea patty with molten cheese slices, pickles, and smoky burger sauce.',
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm3_3',
            name: 'Smoky BBQ Wings (6 Pcs)',
            price: 249,
            rating: 4.5,
            ratingCount: 1600,
            isVeg: false,
            description: 'Tender chicken wings glazed in a thick hickory-smoked barbecue sauce with sesame seeds.',
            image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r4',
    name: 'Haldiram’s Sweets & Snacks',
    rating: 4.3,
    ratingCount: '22K+ ratings',
    deliveryTime: '25-30 mins',
    distance: '2.8 km',
    costForTwo: '₹250 for two',
    costNumber: 250,
    cuisines: ['North Indian', 'Chaat', 'Sweets'],
    area: 'Atta Market, Noida',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80',
    offerBadge: '20% OFF UPTO ₹50',
    isVeg: true,
    isPromoted: false,
    fastDelivery: true,
    menu: [
      {
        category: 'Chaat & Street Food',
        items: [
          {
            id: 'm4_1',
            name: 'Delhi Style Chhole Bhature',
            price: 185,
            rating: 4.7,
            ratingCount: 5400,
            isVeg: true,
            description: 'Two fluffy golden bhaturas served with spicy pindi chhole, pickled chillies, and fresh onion salad.',
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm4_2',
            name: 'Raj Kachori Royale',
            price: 145,
            rating: 4.6,
            ratingCount: 3100,
            isVeg: true,
            description: 'King of chaat: giant crisp shell stuffed with lentils, boiled potato, curd, mint chutney, and sev.',
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm4_3',
            name: 'Kaju Katli Gift Box (250g)',
            price: 299,
            rating: 4.8,
            ratingCount: 1800,
            isVeg: true,
            description: 'Diamond-shaped traditional cashew fudge made with premium Goan cashews and silver vark.',
            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r5',
    name: 'Mainland China Bowl',
    rating: 4.4,
    ratingCount: '6K+ ratings',
    deliveryTime: '30-35 mins',
    distance: '4.2 km',
    costForTwo: '₹550 for two',
    costNumber: 550,
    cuisines: ['Chinese', 'Asian', 'Noodles'],
    area: 'Sector 38, Noida',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&auto=format&fit=crop&q=80',
    offerBadge: 'FLAT ₹150 OFF',
    isVeg: false,
    isPromoted: false,
    fastDelivery: false,
    menu: [
      {
        category: 'Noodles & Dimsums',
        items: [
          {
            id: 'm5_1',
            name: 'Hakka Chilli Garlic Noodles',
            price: 285,
            rating: 4.4,
            ratingCount: 1600,
            isVeg: true,
            description: 'Wok-tossed noodles with shredded vegetables, burnt garlic, and spicy red pepper sauce.',
            image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm5_2',
            name: 'Steamed Chicken Momos (8 Pcs)',
            price: 235,
            rating: 4.5,
            ratingCount: 2200,
            isVeg: false,
            description: 'Thin-skinned juicy Himalayan dumplings stuffed with minced scallion chicken, served with fiery red chutney.',
            image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r6',
    name: 'Sagar Ratna South Delicacies',
    rating: 4.6,
    ratingCount: '18K+ ratings',
    deliveryTime: '18-24 mins',
    distance: '1.2 km',
    costForTwo: '₹280 for two',
    costNumber: 280,
    cuisines: ['South Indian', 'Filter Coffee'],
    area: 'Sector 62, Noida',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=80',
    offerBadge: 'FREE DELIVERY',
    isVeg: true,
    isPromoted: true,
    fastDelivery: true,
    menu: [
      {
        category: 'Dosas & Tiffins',
        items: [
          {
            id: 'm6_1',
            name: 'Mysore Masala Dosa',
            price: 195,
            rating: 4.7,
            ratingCount: 3800,
            isVeg: true,
            description: 'Crispy fermented crepe smeared with spicy red chilli-garlic paste and filled with potato masala.',
            image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm6_2',
            name: 'Steamed Idli Sambar (2 Pcs)',
            price: 110,
            rating: 4.5,
            ratingCount: 2400,
            isVeg: true,
            description: 'Pillowy soft rice cakes served with piping hot lentil stew and fresh coconut chutney.',
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm6_3',
            name: 'Traditional Filter Kaapi',
            price: 75,
            rating: 4.8,
            ratingCount: 2100,
            isVeg: true,
            description: 'Strong chicory-infused decoction frothed with thick boiling milk in brass tumbler style.',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r7',
    name: 'Faasos Signature Wraps',
    rating: 4.2,
    ratingCount: '12K+ ratings',
    deliveryTime: '22-26 mins',
    distance: '2.4 km',
    costForTwo: '₹250 for two',
    costNumber: 250,
    cuisines: ['Rolls', 'Fast Food', 'North Indian'],
    area: 'Sector 51, Noida',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
    offerBadge: 'BUY 1 GET 1 FREE',
    isVeg: false,
    isPromoted: false,
    fastDelivery: true,
    menu: [
      {
        category: 'Signature Rolls',
        items: [
          {
            id: 'm7_1',
            name: 'Jumbo Chicken Tikka Roll',
            price: 210,
            rating: 4.4,
            ratingCount: 3100,
            isVeg: false,
            description: 'Juicy tandoori chicken tikka cubes rolled in flaky laccha paratha with mint mayonnaise.',
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm7_2',
            name: 'Cheese Melt Paneer Wrap',
            price: 180,
            rating: 4.3,
            ratingCount: 2050,
            isVeg: true,
            description: 'Soft cottage cheese chunks coated in spices and loaded with cheddar cheese spread.',
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'r8',
    name: 'The Belgian Waffle Co.',
    rating: 4.6,
    ratingCount: '9K+ ratings',
    deliveryTime: '20-25 mins',
    distance: '1.9 km',
    costForTwo: '₹220 for two',
    costNumber: 220,
    cuisines: ['Desserts', 'Waffles', 'Bakery'],
    area: 'Sector 18, Noida',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
    offerBadge: '₹100 OFF ABOVE ₹249',
    isVeg: true,
    isPromoted: false,
    fastDelivery: true,
    menu: [
      {
        category: 'Crispy Waffles',
        items: [
          {
            id: 'm8_1',
            name: 'Naked Nutella Waff-wich',
            price: 175,
            rating: 4.8,
            ratingCount: 4600,
            isVeg: true,
            description: 'Classic warm crispy waffle smothered with rich hazelnut Nutella spread.',
            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&auto=format&fit=crop&q=80'
          },
          {
            id: 'm8_2',
            name: 'Triple Chocolate Overload',
            price: 185,
            rating: 4.7,
            ratingCount: 3900,
            isVeg: true,
            description: 'Dark, milk, and white melted Belgian chocolates inside a dark chocolate waffle shell.',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80'
          }
        ]
      }
    ]
  }
];
