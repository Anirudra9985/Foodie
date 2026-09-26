export const MOCK_FOOD_REELS = [
  // --- 🍔 STREET FOOD (10 Reels) ---
  {
    _id: "food-reel-1",
    name: "Sizzling Wagyu Double Cheeseburger 🍔",
    description: "Double seared Wagyu beef patties with melted sharp cheddar, caramelized onions & secret truffle sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-101", name: "The Burger Crafters" },
    category: "🍔 Street Food",
    likeCount: 2450,
    savesCount: 680,
    comments: [
      { user: "Alex M.", text: "The patty sear is incredible! 🤤" },
      { user: "Sam K.", text: "Where is this food truck located?" }
    ]
  },
  {
    _id: "food-reel-2",
    name: "Loaded Truffle Fries & Melted Cheese 🍟",
    description: "Hand-cut golden fries tossed in parmesan truffle oil and smothered in warm gooey cheddar sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-french-fries-being-poured-into-a-bowl-41580-large.mp4",
    poster: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-102", name: "Fryology Street Eats" },
    category: "🍔 Street Food",
    likeCount: 1890,
    savesCount: 420,
    comments: [
      { user: "Jessica T.", text: "Need extra cheese sauce please!" },
      { user: "Liam P.", text: "Top tier midnight snack 🔥" }
    ]
  },
  {
    _id: "food-reel-3",
    name: "Korean Mozzarella Corn Dog Pull 🌭",
    description: "Ultra-crispy panko crusted hotdog stuffed with stretchy mozzarella cheese and drizzled with sriracha mayo.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-103", name: "K-Street Bites" },
    category: "🍔 Street Food",
    likeCount: 3820,
    savesCount: 950,
    comments: [
      { user: "Chloe W.", text: "That cheese pull is 10/10!" }
    ]
  },
  {
    _id: "food-reel-4",
    name: "Smoky Pulled Pork BBQ Sliders 🍖",
    description: "12-hour hickory smoked pulled pork piled high on toasted brioche buns with tangy purple slaw.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-gourmet-burger-41586-large.mp4",
    poster: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-104", name: "Pitmaster BBQ Shack" },
    category: "🍔 Street Food",
    likeCount: 1640,
    savesCount: 310,
    comments: [
      { user: "Marcus G.", text: "BBQ sauce recipe is legendary." }
    ]
  },
  {
    _id: "food-reel-5",
    name: "Giant Nashville Hot Chicken Sandwich 🌶️",
    description: "Extra crispy fried chicken breast dipped in cayenne oil, topped with pickles & comeback sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-105", name: "Cluck & Fire" },
    category: "🍔 Street Food",
    likeCount: 4120,
    savesCount: 1100,
    comments: [
      { user: "Dave B.", text: "Spice level is no joke! 🔥" }
    ]
  },
  {
    _id: "food-reel-6",
    name: "Gourmet Philly Cheesesteak Roll 🥖",
    description: "Thinly sliced ribeye steak sautéed with onions and bell peppers, dripping with melted provolone cheese.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-gourmet-burger-41586-large.mp4",
    poster: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-106", name: "Philly Grill Co." },
    category: "🍔 Street Food",
    likeCount: 2980,
    savesCount: 740,
    comments: [
      { user: "Anthony R.", text: "Real authentic Philly vibe!" }
    ]
  },
  {
    _id: "food-reel-7",
    name: "Crispy Grilled Cheese & Tomato Soup Dip 🧀",
    description: "Butter-crusted sourdough grilled cheese served alongside rich roasted basil tomato bisque.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-putting-pizza-into-a-wood-fired-oven-41579-large.mp4",
    poster: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-107", name: "Melt & Toast House" },
    category: "🍔 Street Food",
    likeCount: 3200,
    savesCount: 880,
    comments: [
      { user: "Elena N.", text: "Ultimate comfort food combo!" }
    ]
  },
  {
    _id: "food-reel-8",
    name: "Sizzling Bacon Wrapped Hot Dogs 🥓",
    description: "Street-style bacon wrapped frankfurter topped with grilled onions, jalapeños and mayo.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-french-fries-being-poured-into-a-bowl-41580-large.mp4",
    poster: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-108", name: "Calle Ocho Dogs" },
    category: "🍔 Street Food",
    likeCount: 1530,
    savesCount: 390,
    comments: [
      { user: "Jorge C.", text: "Reminds me of LA street dogs!" }
    ]
  },
  {
    _id: "food-reel-9",
    name: "Crispy Fried Mac & Cheese Balls 🧀",
    description: "Golden breaded three-cheese macaroni bites served with spicy marinara dipping sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-109", name: "Cheesy Kitchen" },
    category: "🍔 Street Food",
    likeCount: 2670,
    savesCount: 630,
    comments: [
      { user: "Nora V.", text: "Look at that cheesy center!" }
    ]
  },
  {
    _id: "food-reel-10",
    name: "Triple Stack Smash Burger Delight 🍔",
    description: "Three crispy-edged beef smash patties with double American cheese, pickles and spicy mayo.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-gourmet-burger-41586-large.mp4",
    poster: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-110", name: "Smash Joint" },
    category: "🍔 Street Food",
    likeCount: 4890,
    savesCount: 1350,
    comments: [
      { user: "Tyler S.", text: "Best smash burger video ever!" }
    ]
  },

  // --- 🍕 PIZZA & ITALIAN (10 Reels) ---
  {
    _id: "food-reel-11",
    name: "Wood-Fired Neapolitan Pepperoni Pizza 🍕",
    description: "Hand-stretched 48-hour fermented sourdough crust cooked at 900°F with cup & char pepperoni.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-putting-pizza-into-a-wood-fired-oven-41579-large.mp4",
    poster: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-201", name: "Bella Napoli Pizzeria" },
    category: "🍕 Pizza & Italian",
    likeCount: 3450,
    savesCount: 890,
    comments: [
      { user: "Sofia R.", text: "That leoparding on the crust! 👌" }
    ]
  },
  {
    _id: "food-reel-12",
    name: "Creamy Fettuccine Alfredo in Cheese Wheel 🍝",
    description: "Fresh egg pasta tossed inside a giant hollowed Parmigiano-Reggiano wheel with heavy cream.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-sauce-on-pasta-41587-large.mp4",
    poster: "https://images.unsplash.com/photo-1621996346565-e3d5d6281318?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-202", name: "Trattoria Da Luigi" },
    category: "🍕 Pizza & Italian",
    likeCount: 5120,
    savesCount: 1420,
    comments: [
      { user: "Marco P.", text: "Pure Italian heaven." }
    ]
  },
  {
    _id: "food-reel-13",
    name: "Cheesy Stuffed Deep Dish Chicago Pizza 🍕",
    description: "Thick buttery crust stuffed with molten mozzarella cheese and topped with chunky plum tomato sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-putting-pizza-into-a-wood-fired-oven-41579-large.mp4",
    poster: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-203", name: "Windy City Pies" },
    category: "🍕 Pizza & Italian",
    likeCount: 2890,
    savesCount: 710,
    comments: [
      { user: "Chicago Native", text: "Now THAT is deep dish!" }
    ]
  },
  {
    _id: "food-reel-14",
    name: "Authentic Spaghetti Carbonara with Guanciale 🍝",
    description: "Traditional Roman pasta made with egg yolks, Pecorino Romano cheese, black pepper & crispy guanciale.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-sauce-on-pasta-41587-large.mp4",
    poster: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-204", name: "Osteria Roma" },
    category: "🍕 Pizza & Italian",
    likeCount: 3900,
    savesCount: 980,
    comments: [
      { user: "Giulia M.", text: "No cream used, perfect traditional carbonara!" }
    ]
  },
  {
    _id: "food-reel-15",
    name: "Crispy Burrata & Prosciutto Truffle Pizza 🍕",
    description: "Thin crust pizza topped with creamy whole burrata, prosciutto di Parma and white truffle oil.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-putting-pizza-into-a-wood-fired-oven-41579-large.mp4",
    poster: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-205", name: "Pizza Artisans" },
    category: "🍕 Pizza & Italian",
    likeCount: 4230,
    savesCount: 1150,
    comments: [
      { user: "Laura B.", text: "Burrata pop is so satisfying." }
    ]
  },
  {
    _id: "food-reel-16",
    name: "Golden Fried Mozzarella Sticks Pull 🧀",
    description: "Hand-breaded jumbo mozzarella sticks served with rich garlic marinara sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-french-fries-being-poured-into-a-bowl-41580-large.mp4",
    poster: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-206", name: "Nonnas Kitchen" },
    category: "🍕 Pizza & Italian",
    likeCount: 2310,
    savesCount: 540,
    comments: [
      { user: "Kevin P.", text: "Look at that stretch!" }
    ]
  },
  {
    _id: "food-reel-17",
    name: "Baked Lasagna Bolognaise Layer Pull 🥩",
    description: "Seven layers of fresh pasta sheets, rich beef ragu, creamy béchamel and bubbly mozzarella cheese.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-sauce-on-pasta-41587-large.mp4",
    poster: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-207", name: "Ristorante Italiano" },
    category: "🍕 Pizza & Italian",
    likeCount: 3670,
    savesCount: 910,
    comments: [
      { user: "Matteo S.", text: "Just like grandma used to make." }
    ]
  },
  {
    _id: "food-reel-18",
    name: "Garlic Butter Crust Four Cheese Pizza 🧀",
    description: "Fontina, Gorgonzola, Mozzarella and Parmesan melted on a garlic butter infused crust.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-putting-pizza-into-a-wood-fired-oven-41579-large.mp4",
    poster: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-208", name: "Formaggio Pizza Bar" },
    category: "🍕 Pizza & Italian",
    likeCount: 1980,
    savesCount: 460,
    comments: [
      { user: "Hannah C.", text: "Cheese lovers dream!" }
    ]
  },
  {
    _id: "food-reel-19",
    name: "Creamy Wild Mushroom Truffle Risotto 🍲",
    description: "Arborio rice cooked slowly in vegetable stock, wild porcini mushrooms, parmesan & summer truffle.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-sauce-on-pasta-41587-large.mp4",
    poster: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-209", name: "Milano Bistro" },
    category: "🍕 Pizza & Italian",
    likeCount: 2740,
    savesCount: 680,
    comments: [
      { user: "Oliver T.", text: "So velvety smooth!" }
    ]
  },
  {
    _id: "food-reel-20",
    name: "Detroit-Style Crispy Edge Pepperoni Pizza 🍕",
    description: "Rectangular deep dish pizza with caramelized cheese crust edges and brick cheese sauce lines.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-putting-pizza-into-a-wood-fired-oven-41579-large.mp4",
    poster: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-210", name: "Motor City Pizza" },
    category: "🍕 Pizza & Italian",
    likeCount: 4560,
    savesCount: 1280,
    comments: [
      { user: "Eric D.", text: "The corner slice is elite!" }
    ]
  },

  // --- 🌮 TACOS & SPICY (10 Reels) ---
  {
    _id: "food-reel-21",
    name: "Crispy Beef Birria Tacos with Consomé Dip 🌮",
    description: "Slow-cooked guajillo beef tacos dipped in broth and seared crispy with melted cheese.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-301", name: "El Taquero Loco" },
    category: "🌮 Tacos & Spicy",
    likeCount: 5210,
    savesCount: 1540,
    comments: [
      { user: "Carlos H.", text: "That consomé dunk ratio is insane 🌮🔥" }
    ]
  },
  {
    _id: "food-reel-22",
    name: "Loaded Ultimate Sheetpan Beef Nachos 🧀",
    description: "Crispy tortilla chips layered with spicy ground beef, queso blanco, pico de gallo & guacamole.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-302", name: "Taco Cantina" },
    category: "🌮 Tacos & Spicy",
    likeCount: 3120,
    savesCount: 820,
    comments: [
      { user: "Ana G.", text: "Need this for game day!" }
    ]
  },
  {
    _id: "food-reel-23",
    name: "Sizzling Spicy Buffalo Chicken Wings 🍗",
    description: "Jumbo fried wings coated in tangy spicy buffalo sauce served with homemade ranch dip.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-303", name: "Wing Overlord" },
    category: "🌮 Tacos & Spicy",
    likeCount: 2980,
    savesCount: 650,
    comments: [
      { user: "Brandon M.", text: "Extra wet buffalo sauce please!" }
    ]
  },
  {
    _id: "food-reel-24",
    name: "Street Style Al Pastor Pork Tacos 🌮",
    description: "Marinated spit-roasted pork with fresh grilled pineapple, cilantro & chopped onions.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-304", name: "Taquería El Pastor" },
    category: "🌮 Tacos & Spicy",
    likeCount: 3840,
    savesCount: 970,
    comments: [
      { user: "Miguel V.", text: "The pineapple slice technique is clean!" }
    ]
  },
  {
    _id: "food-reel-25",
    name: "Cheesy Chipotle Beef Burrito Bowl 🌯",
    description: "Flank steak, cilantro lime rice, black beans, corn salsa and spicy chipotle crema.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-305", name: "Baja Fresh Kitchen" },
    category: "🌮 Tacos & Spicy",
    likeCount: 2190,
    savesCount: 530,
    comments: [
      { user: "Rachel E.", text: "Looks so fresh and filling." }
    ]
  },
  {
    _id: "food-reel-26",
    name: "Crispy Fish Tacos with Spicy Mango Salsa 🌮",
    description: "Baja beer-battered cod fish tacos topped with crunchy cabbage and habanero mango salsa.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-306", name: "Pacific Taco Shack" },
    category: "🌮 Tacos & Spicy",
    likeCount: 3410,
    savesCount: 880,
    comments: [
      { user: "Dustin K.", text: "Best fish tacos on the coast!" }
    ]
  },
  {
    _id: "food-reel-27",
    name: "Sizzling Steak & Peppers Fajita Skillet 🌶️",
    description: "Marinated skirt steak sizzling on a cast iron skillet with charred bell peppers and warm tortillas.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-307", name: "Fiesta Grill" },
    category: "🌮 Tacos & Spicy",
    likeCount: 2870,
    savesCount: 690,
    comments: [
      { user: "Maria F.", text: "Hear that sizzle!" }
    ]
  },
  {
    _id: "food-reel-28",
    name: "Loaded Cheesy Chicken Quesadilla 🧀",
    description: "Flour tortilla stuffed with shredded chipotle chicken, jack cheese and grilled until golden.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-tacos-in-a-food-truck-41584-large.mp4",
    poster: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-308", name: "Quesadilla Bar" },
    category: "🌮 Tacos & Spicy",
    likeCount: 3120,
    savesCount: 790,
    comments: [
      { user: "Paul H.", text: "That crusty cheese edge outside!" }
    ]
  },
  {
    _id: "food-reel-29",
    name: "Spicy Ghost Pepper Habanero Sauce Wings 🔥",
    description: "Extreme heat wings tossed in Carolina reaper and ghost pepper glaze for true spicy lovers.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-309", name: "Inferno Wings" },
    category: "🌮 Tacos & Spicy",
    likeCount: 4680,
    savesCount: 1190,
    comments: [
      { user: "Sean P.", text: "My mouth is watering and burning just watching!" }
    ]
  },
  {
    _id: "food-reel-30",
    name: "Golden Churros with Mexican Hot Chocolate Dip 🥖",
    description: "Crispy fried churros rolled in cinnamon sugar served with thick spiced dark chocolate dip.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1624371414361-e670ef488916?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-310", name: "Churro Central" },
    category: "🌮 Tacos & Spicy",
    likeCount: 3950,
    savesCount: 1020,
    comments: [
      { user: "Carmen D.", text: "Always save room for churros!" }
    ]
  },

  // --- 🍰 DESSERTS (10 Reels) ---
  {
    _id: "food-reel-31",
    name: "Japanese Jiggly Fluffy Soufflé Pancakes 🥞",
    description: "Ultra airy Japanese soufflé pancakes served with whipped butter, berries and maple syrup drip.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-401", name: "Fuwa Fuwa Sweets" },
    category: "🍰 Desserts",
    likeCount: 4980,
    savesCount: 1490,
    comments: [
      { user: "Emily C.", text: "The jiggle is mesmerizing 🥞✨" }
    ]
  },
  {
    _id: "food-reel-32",
    name: "Molten Lava Warm Chocolate Cake Pour 🍫",
    description: "Belgian dark chocolate cake with a molten river of hot chocolate sauce and vanilla bean gelato.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-402", name: "Chocolatier Atelier" },
    category: "🍰 Desserts",
    likeCount: 5410,
    savesCount: 1680,
    comments: [
      { user: "David L.", text: "I can watch this on loop forever." }
    ]
  },
  {
    _id: "food-reel-33",
    name: "Crispy Caramel Belgian Waffle Stack 🧇",
    description: "Golden Liege waffle topped with salted caramel drizzle, crushed pecans and fresh cream.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-403", name: "Waffle Wonders" },
    category: "🍰 Desserts",
    likeCount: 2890,
    savesCount: 720,
    comments: [
      { user: "Claire M.", text: "That caramel pour!" }
    ]
  },
  {
    _id: "food-reel-34",
    name: "Decadent Creamy New York Cheesecake Slice 🍰",
    description: "Rich graham cracker crust topped with vanilla cheesecake and fresh strawberry reduction.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-404", name: "Bleecker Street Bakery" },
    category: "🍰 Desserts",
    likeCount: 3760,
    savesCount: 940,
    comments: [
      { user: "Vince K.", text: "Classic NY cheesecake rules." }
    ]
  },
  {
    _id: "food-reel-35",
    name: "Artisan Matcha Green Tea Soft Serve Cone 🍦",
    description: "Uji matcha soft ice cream swirled into a black sesame waffle cone with boba pearls.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-405", name: "Matcha Parlor" },
    category: "🍰 Desserts",
    likeCount: 3120,
    savesCount: 780,
    comments: [
      { user: "Yuki S.", text: "Matcha flavor intensity looks top grade!" }
    ]
  },
  {
    _id: "food-reel-36",
    name: "Crispy French Crepe Nutella & Banana 🍌",
    description: "Paper thin warm crepe stuffed with hazelnut Nutella spread, sliced bananas and powdered sugar.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-406", name: "Crêperie de Paris" },
    category: "🍰 Desserts",
    likeCount: 4210,
    savesCount: 1110,
    comments: [
      { user: "Antoine L.", text: "Takes me right back to Paris streets." }
    ]
  },
  {
    _id: "food-reel-37",
    name: "Golden Brown Honey Butter Toast Box 🍞",
    description: "Thick Shibuya honey toast hollowed and stuffed with caramelized bread cubes & ice cream.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-407", name: "Honey Toast Bar" },
    category: "🍰 Desserts",
    likeCount: 2950,
    savesCount: 740,
    comments: [
      { user: "Hannah W.", text: "So soft and sweet!" }
    ]
  },
  {
    _id: "food-reel-38",
    name: "Italian Tiramisu Espresso Cocoa Dust ☕",
    description: "Traditional savoiardi ladyfingers soaked in espresso coffee layered with mascarpone cream.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-408", name: "Dolce Vita Pastry" },
    category: "🍰 Desserts",
    likeCount: 3890,
    savesCount: 990,
    comments: [
      { user: "Pietro R.", text: "The espresso kick is perfect." }
    ]
  },
  {
    _id: "food-reel-39",
    name: "Giant Cinnamon Roll Brown Sugar Glaze 🍥",
    description: "Oven fresh giant cinnamon bun topped with warm cream cheese frosting.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-409", name: "Cinnamon & Spice" },
    category: "🍰 Desserts",
    likeCount: 4520,
    savesCount: 1240,
    comments: [
      { user: "Bethany H.", text: "Smells amazing through the screen!" }
    ]
  },
  {
    _id: "food-reel-40",
    name: "Fudge Chocolate Sundae Marshmallow Drip 🍨",
    description: "Three scoops of gourmet ice cream topped with hot fudge, toasted marshmallow and cherry.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-a-slice-of-cake-41588-large.mp4",
    poster: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-410", name: "Scoop Shop" },
    category: "🍰 Desserts",
    likeCount: 3340,
    savesCount: 810,
    comments: [
      { user: "Greg F.", text: "Ultimate summer dessert!" }
    ]
  },

  // --- 🍜 ASIAN FUSION (10 Reels) ---
  {
    _id: "food-reel-41",
    name: "Steaming Tonkotsu Spicy Pork Ramen 🍜",
    description: "18-hour simmered creamy pork bone broth with handmade ramen noodles, tender chashu & egg.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-bowl-of-ramen-soup-41582-large.mp4",
    poster: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-501", name: "Tokyo Ramen House" },
    category: "🍜 Asian Fusion",
    likeCount: 4890,
    savesCount: 1390,
    comments: [
      { user: "Priya S.", text: "The noodle pull is magnificent 🍜🔥" }
    ]
  },
  {
    _id: "food-reel-42",
    name: "Fresh Atlantic Salmon & Tuna Sushi Platter 🍣",
    description: "Master sushi chef preparing nigiri and maki rolls with fresh wasabi and soy dip.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-sushi-chef-preparing-a-roll-41578-large.mp4",
    poster: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-502", name: "Sakura Sushi Bar" },
    category: "🍜 Asian Fusion",
    likeCount: 5120,
    savesCount: 1480,
    comments: [
      { user: "Kenji T.", text: "Knife skills are next level!" }
    ]
  },
  {
    _id: "food-reel-43",
    name: "Steamed Pork Soup Dumplings Xiao Long Bao 🥟",
    description: "Thin wrapper dumplings filled with savory minced pork and rich hot soup broth.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-bowl-of-ramen-soup-41582-large.mp4",
    poster: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-503", name: "Dim Sum Palace" },
    category: "🍜 Asian Fusion",
    likeCount: 4320,
    savesCount: 1180,
    comments: [
      { user: "Mei Ling", text: "Careful with the hot broth burst!" }
    ]
  },
  {
    _id: "food-reel-44",
    name: "Wok Hei Spicy Thai Pad Thai Noodles 🥢",
    description: "Stir-fried rice noodles with jumbo prawns, crushed peanuts, bean sprouts & tamarind sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-bowl-of-ramen-soup-41582-large.mp4",
    poster: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-504", name: "Bangkok Street Wok" },
    category: "🍜 Asian Fusion",
    likeCount: 3670,
    savesCount: 920,
    comments: [
      { user: "Somchai K.", text: "Wok hei aroma is real!" }
    ]
  },
  {
    _id: "food-reel-45",
    name: "Crispy Korean Fried Chicken Honey Soy Glaze 🍗",
    description: "Double fried extra crunchy chicken wings coated in garlic honey soy glaze and sesame seeds.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-505", name: "Seoul Fried Chicken" },
    category: "🍜 Asian Fusion",
    likeCount: 4790,
    savesCount: 1310,
    comments: [
      { user: "Min-Jun H.", text: "Crunch sound is loud!" }
    ]
  },
  {
    _id: "food-reel-46",
    name: "Sizzling Hot Stone Bowl Beef Bibimbap 🍚",
    description: "Rice topped with seasoned vegetables, sliced beef, fried egg & spicy gochujang chili paste.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-bowl-of-ramen-soup-41582-large.mp4",
    poster: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-506", name: "Bibimbap House" },
    category: "🍜 Asian Fusion",
    likeCount: 3120,
    savesCount: 790,
    comments: [
      { user: "Sun-Hee P.", text: "The crispy rice bottom is the best part!" }
    ]
  },
  {
    _id: "food-reel-47",
    name: "Japanese Wagyu Beef Skewers Yakitori 🍢",
    description: "Grilled A5 Wagyu beef skewers basted with sweet tare glaze over charcoal.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-burger-41585-large.mp4",
    poster: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-507", name: "Izakaya Grill" },
    category: "🍜 Asian Fusion",
    likeCount: 3890,
    savesCount: 980,
    comments: [
      { user: "Daiki M.", text: "Melts in your mouth!" }
    ]
  },
  {
    _id: "food-reel-48",
    name: "Creamy Coconut Thai Green Curry Chicken 🍲",
    description: "Aromatic coconut milk curry with bamboo shoots, Thai basil, chicken tenderloin & Jasmine rice.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-bowl-of-ramen-soup-41582-large.mp4",
    poster: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-508", name: "Siam Taste" },
    category: "🍜 Asian Fusion",
    likeCount: 2940,
    savesCount: 710,
    comments: [
      { user: "Katarina V.", text: "So fragrant and creamy." }
    ]
  },
  {
    _id: "food-reel-49",
    name: "Crispy Pork Belly Bao Buns 🥟",
    description: "Steamed fluffy white lotus buns filled with braised pork belly, pickled cucumber & hoisin sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-gourmet-burger-41586-large.mp4",
    poster: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-509", name: "Bao Bao Bar" },
    category: "🍜 Asian Fusion",
    likeCount: 4150,
    savesCount: 1080,
    comments: [
      { user: "Zack T.", text: "Soft bun, crispy pork combo is wild." }
    ]
  },
  {
    _id: "food-reel-50",
    name: "Sizzling Black Pepper Beef Chow Mein 🍜",
    description: "Wok fried egg noodles with tender beef slices, onions & savory crushed black pepper sauce.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-bowl-of-ramen-soup-41582-large.mp4",
    poster: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80",
    foodPartner: { _id: "partner-510", name: "Golden Wok" },
    category: "🍜 Asian Fusion",
    likeCount: 3650,
    savesCount: 920,
    comments: [
      { user: "Li Wei", text: "Smells so good through the screen!" }
    ]
  }
];
