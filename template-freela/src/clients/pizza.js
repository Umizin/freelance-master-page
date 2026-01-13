export const pizzaData = {
    theme: {
      primary: "bg-green-600",
      primaryText: "text-green-600",
      bgBody: "bg-orange-50", 
      textBody: "text-gray-900",
      cardBg: "bg-white",
      buttonHover: "hover:bg-green-700",
      font: "font-serif"
    },
    business: {
      name: "Nonno's Pizza",
      phone: "+55 21 99996-8243",
      whatsappRaw: "55219999682430",
      address: "Via Roma, 88 - Centro",
      hours: "Daily: 17h - 23h"
    },
    hero: {
      title: "Pizza Napoletana Verdadeira",
      subtitle: "Forno a lenha, farinha importada e fermentação natural de 48 horas.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1920"
    },
    menu: [
      {
        category: "Clássicas",
        items: [
          { id: 20, name: "Margherita DOP", price: 14.00, desc: "Molho San Marzano, Mozzarella de Búfala e Basílico.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400" },
          { id: 21, name: "Calabresa Especial", price: 16.00, desc: "Linguiça artesanal, cebola roxa e orégano fresco.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400" }
        ]
      },
      {
        category: "Gourmet",
        items: [
          { id: 22, name: "Parma & Rúcula", price: 19.00, desc: "Presunto de Parma, rúcula selvagem e lascas de parmesão.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" },
          { id: 23, name: "Trufa Negra", price: 22.00, desc: "Creme de trufas, cogumelos e azeite trufado.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" }
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