export const adhdiyData = {
  theme: {
    primary: "bg-orange-600", // Laranja queimado, cor da marca
    primaryText: "text-orange-600",
    bgBody: "bg-stone-100", // Fundo creme/papel do cardápio
    textBody: "text-stone-800",
    cardBg: "bg-white",
    buttonHover: "hover:bg-orange-700",
    font: "font-serif" // Fonte mais rústica/artesanal
  },
  business: {
    name: "ADHDIY Craft Cafe",
    phone: "+1 913-217-7802",
    // O link principal leva para reservas, pois é assim que eles operam
    orderLink: "https://www.adhdiycraftcafe.com/reservations", 
    address: "1501 W 12th St, Kansas City, MO",
    hours: "Thu: 11am-10pm | Fri-Sat: 11am-10pm | Sun: 11am-6pm"
  },
  hero: {
    title: "Restaurant Style Crafting™",
    subtitle: "Welcome to Cal's Craft Cafe! Pick a project from our menu, order a snack, and unleash your creativity. No experience needed.",
    ctaPrimary: "Book Your Table",
    ctaSecondary: "View Craft Menu",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=1920" // Foto de ambiente criativo
  },
  menu: [
    // ---- CATEGORIA 1: O MENU DE ARTESANATO (O carro-chefe) ----
    {
      category: "Craft Menu (The Main Event)",
      items: [
        { 
          id: 1, 
          name: "Carve A Stamp", 
          price: 25.00, 
          desc: "Design and carve your own rubber stamp. Includes all tools and ink pad to test your creation.", 
          img: "https://images.unsplash.com/photo-1518012648873-e380e227a69c?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 2, 
          name: "Macramé A Keychain", 
          price: 25.00, 
          desc: "Create your own spiral knot macramé keychain. Comes with pre-cut cord, tools, and charms.", 
          img: "https://images.unsplash.com/photo-1517482599742-97b7b25bf354?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 3, 
          name: "Paint A Pot", 
          price: 25.00, // Preço base do cardápio
          desc: "Paint your own terracotta pot! Comes with a pot and a plant of your choice (4\" or 6\").", 
          img: "https://images.unsplash.com/photo-1463936575829-251c47968286?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 4, 
          name: "Junk Journal", 
          price: 25.00, 
          desc: "Start your very own junk journal! Creative flow with no right or wrong way.", 
          img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400" 
        }
      ]
    },
    // ---- CATEGORIA 2: LANCHES E BEBIDAS (Para acompanhar) ----
    {
      category: "Snacks & Sips",
      items: [
        { 
          id: 5, 
          name: "Pop Daddy Pretzels", 
          price: 8.00, 
          desc: "Flavors: Cinnamon Sugar, Yellow Mustard, Honey Curry, Smoked Gouda, Mexican Street Corn.", 
          img: "https://images.unsplash.com/photo-1586738708929-a6391c978300?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 6, 
          name: "Bea's Squeeze Lemonade", 
          price: 5.00, 
          desc: "Classic, Hibiscus, or Lavender lemonade.", 
          img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 7, 
          name: "Curious Elixirs (Mocktail)", 
          price: 8.00, 
          desc: "Alcohol-free craft cocktails. Pomegranate, Spicy Pineapple Margarita, or Juniper Cucumber.", 
          img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 8, 
          name: "Evie's Pecans", 
          price: 8.00, 
          desc: "Banana Bread, Brown Butter Rum, Cinnamon Churro, Sweet & Salty.", 
          img: "https://images.unsplash.com/photo-1621801306666-4122d1645e3e?auto=format&fit=crop&q=80&w=400" // Foto de snack genérica
        }
      ]
    }
  ]
};