export const links = {
  instagram: "https://www.instagram.com/dayskitchenca/",
  instagramDm: "https://ig.me/m/dayskitchenca",
  facebook: "https://www.facebook.com/DayskitchenCA/",
  linktree: "https://linktr.ee/dayskitchenca",
  uberEats:
    "https://www.ubereats.com/ca/store/days-kitchen-%7C-filipino-cuisine-%2526-cafe/Qn-qt_nTQ9y4HW9EqCzQUA",
  eventPackage:
    "https://ugc.production.linktr.ee/17e7a25f-83f0-4ee4-923b-9080ec3e51da_PRIVATE-EVENT-PACKAGE.pdf",
  claudaura: "https://www.claudaura.ca",
};

export const dmMessage =
  "Hi Day's Kitchen! I would love to visit or ask about catering. Tara, kain tayo!";

export const phones = [
  { label: "437-261-4298", href: "tel:+14372614298" },
  { label: "416-282-5031", href: "tel:+14162825031" },
  { label: "437-261-4291", href: "tel:+14372614291" },
];

export const locations = [
  {
    id: "brimley",
    name: "Brimley",
    googleName: "Day's Kitchen 2",
    addressLines: ["2101 Brimley Rd #108", "Scarborough, ON M1S 2B4"],
    landmark: "In front of Farm Fresh",
    hours: "Open daily, 9 AM to 9 PM",
    hoursNote: "Instagram, and Google Maps for Tuesday",
    rating: "3.7",
    ratingSource: "Google Maps",
    mapQuery: "2101 Brimley Rd #108, Scarborough, ON M1S 2B4",
    phone: phones[2],
  },
  {
    id: "tapscott",
    name: "FreshLand",
    googleName: "Day's Kitchen",
    addressLines: ["31 Tapscott Rd", "Scarborough, ON M1B 4Y7"],
    landmark: "Inside Freshland Supermarket, Malvern Town Centre",
    hours: "Open daily, 9 AM to 8:30 PM",
    hoursNote: "Instagram post and Google Maps for Tuesday",
    rating: "4.1",
    ratingSource: "Google Maps",
    mapQuery: "31 Tapscott Rd, Scarborough, ON M1B 4Y7",
    phone: phones[2],
  },
] as const;

export const dishes = [
  {
    src: "/media/palabok.webp",
    alt: "Bowl of palabok with shrimp, egg wedges, and crushed chicharon",
    title: "Our famous palabok",
    line: "Generous toppings, house made sauce, cooked to order.",
    width: 1080,
    height: 1080,
  },
  {
    src: "/media/halo-bowl.webp",
    alt: "Ube halo halo in a glass bowl with leche flan, ice cream, and pinipig",
    title: "Creamy ube halo halo",
    line: "Leche flan, ice cream, pinipig, sago, kamote, banana, gulaman, macapuno, and ube.",
    price: "$16.99",
    width: 1080,
    height: 1080,
  },
  {
    src: "/media/lumpia.webp",
    alt: "Stack of golden lumpiang Shanghai on a wooden board",
    title: "Lumpiang Shanghai",
    line: "Crispy and savoury, from their weekly highlights.",
    width: 1080,
    height: 1080,
  },
  {
    src: "/media/isaw.webp",
    alt: "Grilled isaw skewers with a lime wedge",
    title: "Isaw",
    line: "Grilled Filipino street food favourite.",
    width: 1000,
    height: 1000,
  },
  {
    src: "/media/champorado.webp",
    alt: "Bowl of champorado, chocolate rice porridge, with milk on the side",
    title: "Champorado",
    line: "Chocolate rice porridge, warm and sweet.",
    width: 1000,
    height: 1000,
  },
  {
    src: "/media/congee.webp",
    alt: "Bowl of lugaw congee topped with egg, green onion, and fried garlic",
    title: "Congee / lugaw overload",
    line: "Beef shank, bone marrow, tripe, pork, tofu, chicken skin, and egg.",
    price: "$23.99",
    width: 1080,
    height: 1080,
  },
] as const;

export const menuGroups = [
  {
    title: "All day silogs",
    note: "Garlic fried rice and a sunny side up egg.",
    items: [
      {
        name: "Longsilog",
        detail: "Sweet and savoury Filipino style longganisa.",
        price: "$17.99",
      },
      {
        name: "Tapsilog",
        detail: "Marinated beef strips.",
        price: "$17.99",
      },
      {
        name: "Bangsilog",
        detail: "Crispy bangus, milkfish.",
        price: "$17.99",
      },
      {
        name: "Tosilog",
        detail: "Tender marinated pork.",
        price: "$17.99",
      },
      {
        name: "Baconsilog",
        detail: "Crispy, smoky bacon.",
        price: "$17.99",
      },
    ],
  },
  {
    title: "Plates",
    note: "Cook to order favourites from the Uber Eats menu.",
    items: [
      {
        name: "Beef pares with garlic rice",
        detail: "Braised beef shank, bone marrow, chicharon bulaklak, and fried chicken skin.",
        price: "$29.99",
      },
      {
        name: "Crispy sisig",
        detail: "Pork bits with onions and chilies.",
        price: "$27.50",
      },
      {
        name: "Crispy kare kare",
        detail: "Crispy pork belly and vegetables with peanut sauce.",
        price: "$27.50",
      },
      {
        name: "Sinigang bangus belly",
        detail: "A sour broth favourite.",
        price: "$27.50",
      },
      {
        name: "Bulalo",
        detail: "Beef shank and bone marrow in a savoury broth.",
        price: "$29.99",
      },
      {
        name: "Beef mami",
        detail: "Noodle soup with beef slices.",
        price: "$29.99",
      },
      {
        name: "Crispy bagnet with garlic rice",
        detail: "Deep fried pork belly.",
        price: "$27.50",
      },
      {
        name: "Lechon bagnet, pinakbet, and rice",
        detail: "With in house vinegar sauce.",
        price: "$21.99",
      },
      {
        name: "Beef bistek, pinakbet, garlic rice",
        detail: "A lunch plate from the Uber Eats menu.",
        price: "$21.99",
      },
      {
        name: "Pork or chicken barbecue with garlic rice",
        detail: "Choose pork or chicken.",
        price: "$15.99",
      },
      {
        name: "Half pound popping pork chicharon",
        detail: "A crisp snack.",
        price: "$19.99",
      },
      {
        name: "Crispy chicken skin",
        detail: "Seasoned and fried.",
        price: "$9.99",
      },
    ],
  },
  {
    title: "Noodles",
    note: "Pansit with bagnet toppings.",
    items: [
      {
        name: "Pancit canton with bagnet",
        detail: "Noodles and toppings.",
        price: "$29.99",
      },
      {
        name: "Pancit bihon with bagnet",
        detail: "Rice noodles and toppings.",
        price: "$29.99",
      },
      {
        name: "Batil patong",
        detail: "On the Uber Eats menu with the other pancit.",
        price: "$29.99",
      },
    ],
  },
  {
    title: "Café",
    note: "Something cold to finish.",
    items: [
      {
        name: "Creamy ube halo halo",
        detail: "The customer favourite.",
        price: "$16.99",
      },
      {
        name: "Iced coffee jelly float",
        detail: "Iced coffee, coffee jelly, and ice cream.",
        price: "$10.99",
      },
      {
        name: "Iced coffee shake float",
        detail: "Iced coffee, shake, and ice cream.",
        price: "$10.99",
      },
      {
        name: "Iced buko shake float",
        detail: "Young coconut, milk, and ice cream.",
        price: "$12.99",
      },
    ],
  },
] as const;

export const bakes = [
  "Spanish bread",
  "Ensaymada",
  "Pan de coco",
  "Bonete",
  "Kababayan",
  "Fresh cakes",
];

export const reels = [
  {
    src: "/media/reel-halo.mp4",
    poster: "/media/poster-halo.webp",
    title: "Ube halo halo",
    caption:
      "Loaded with leche flan, vanilla ice cream, caramel, pinipig, sago, kamote, banana, gulaman, macapuno, and ube.",
    href: "https://www.instagram.com/p/DcUlvONJ1bS/",
  },
  {
    src: "/media/reel-visit.mp4",
    poster: "/media/poster-visit.webp",
    title: "Tara, kain tayo",
    caption:
      "Lutong ulam and cook to order favourites at FreshLand: beef pares, all day silog, palabok, and pancit batil patong.",
    href: "https://www.instagram.com/p/DdUjB78yPXz/",
  },
  {
    src: "/media/reel-cater.mp4",
    poster: "/media/poster-cater.webp",
    title: "We cater",
    caption:
      "Your event, our passion, for all occasions. Party trays, desserts, drinks, and custom orders.",
    href: "https://www.instagram.com/p/Dc9yMQ7JO0W/",
  },
  {
    src: "/media/reel-host.mp4",
    poster: "/media/poster-host.webp",
    title: "Hosting a party",
    caption:
      "High quality Filipino classics, made fresh. Private events at the Brimley location. Please order 2 to 3 days ahead.",
    href: "https://www.instagram.com/p/DbjUQD_Sh_S/",
  },
] as const;

export const packageMains = [
  "1 whole lechon belly roll",
  "1 roast beef with cream of mushroom",
  "Cordon bleu chicken",
  "1 pasta or noodles",
  "1 chop suey",
  "1 fried rice tray",
];

export const packageAlso = [
  "Appetizer, soup, and vegetable salad are named on the package",
  "Unlimited service of 2 drink options",
  "Unlimited coffee or tea with biscuits or cookies",
  "2 dessert options. Samples named on the package: turon, buko pandan, mango tapioca, coffee jelly",
];

export const venueIncludes = [
  "4 hours of venue use",
  "Long table setup",
  "Buffet setup according to the theme decor",
  "Sound system",
  "Karaoke",
];

export const reviews = [
  {
    quote:
      "The serving was generous, and packed in an appetizing manner. The food was delicious.",
    name: "Ofelia G.",
    source: "Uber Eats",
    when: "November 2024",
  },
  {
    quote: "Good Food. it's delicious.",
    name: "joy V.",
    source: "Uber Eats",
    when: "August 2024",
  },
  {
    quote: "Delicious food!",
    name: "Nella B.",
    source: "Uber Eats",
    when: "May 2024",
  },
  {
    quote:
      "Came here for dinner and definitely enjoyed the food. The squid ball and Kwek Kwek was great and they serve massive halo halo.",
    name: "Yelp review",
    source: "Yelp",
    when: "Brimley listing",
  },
] as const;

export function getSiteUrl() {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;
  return "http://localhost:3000";
}
