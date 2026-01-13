export const burgerData = {
    theme: {
      primary: "bg-yellow-500",
      primaryText: "text-yellow-500",
      bgBody: "bg-stone-900",
      textBody: "text-gray-100",
      cardBg: "bg-stone-800",
      buttonHover: "hover:bg-yellow-400",
      font: "font-sans"
    },
    business: {
      name: "Burger Forge",
      phone: "+55 21 99996-8243",
      whatsappRaw: "55219999682430",
      address: "Rua do Fogo, 66 - Rio de Janeiro",
      hours: "Tue-Sun: 18h - 00h"
    },
    hero: {
      title: "Gourmet Burgers",
      subtitle: "A blend of fresh meat, melted cheese, and our secret sauce. No frills, just flavor.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1920"
    },
    menu: [
      {
        category: "Signature Burgers",
        items: [
          { id: 1, name: "The Boss", price: 12.00, desc: "Double smash patty, cheddar, bacon, caramelized onions.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400" },
          { id: 2, name: "Classic Cheese", price: 9.00, desc: "Single patty, american cheese, pickles, house sauce.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" }
        ]
      },
      {
        category: "Sides",
        items: [
          { id: 3, name: "Rustic Fries", price: 4.50, desc: "Hand-cut potatoes with rosemary and garlic mayo.", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=400" },
          { id: 4, name: "Onion Rings", price: 5.00, desc: "Beer battered crispy onion rings.", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=400" }
        ]
      }
  ],
  reviews: [
    {
      id: 1,
      author: "James Peterson",
      role: "Local Guide",
      text: "Hands down the best spot in the city. I was skeptical at first because I'm very picky, but the food came out perfect. The flavors are balanced and you can tell the ingredients are fresh. Definitely coming back with the whole family next weekend!",
      stars: 5
    },
    {
      id: 2,
      author: "Sarah Jenkins",
      role: "Food Blogger",
      text: "What a hidden gem! The atmosphere is super chill and the service was incredibly fast even on a busy Friday night. Everything we ordered was delicious and the presentation was on point. If you haven't tried this place yet, you are missing out.",
      stars: 5
    },
    {
      id: 3,
      author: "Michael O'Connor",
      role: "Verified Customer",
      text: "I ordered via the website for a small get-together at my place. The packaging was sturdy, keeping everything warm and intact. Usually, delivery food gets soggy, but this held up perfectly. Great value for the price.",
      stars: 5
    },
    {
      id: 4,
      author: "Emily Chen",
      role: "Regular",
      text: "We celebrated my husband's birthday here and the staff went above and beyond to make it special. It’s rare to find this level of hospitality these days. The portions are huge and the prices are very reasonable.",
      stars: 5
    },
    {
      id: 5,
      author: "David Miller",
      role: "Traveler",
      text: "I was just passing through town and found this place on Google. Glad I stopped! The food reminded me of home-cooked meals but with a gourmet twist. Highly recommend asking the server for their daily specials.",
      stars: 4
    },
    {
      id: 6,
      author: "Jessica & Tom",
      role: "Couple",
      text: "A perfect spot for date night. The lighting is cozy, the music isn't too loud, and the food is consistently amazing. We've been here three times this month and it never disappoints.",
      stars: 5
    }
  ]
};