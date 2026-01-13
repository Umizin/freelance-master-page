export const jarochoData = {
  theme: {
    primary: "bg-sky-900", // Azul Oceano Profundo (Sofisticado)
    primaryText: "text-sky-900",
    bgBody: "bg-slate-50",
    textBody: "text-slate-800",
    cardBg: "bg-white",
    buttonHover: "hover:bg-sky-800",
    font: "font-serif" // Fonte com serifa passa autoridade/tradição
  },
  business: {
    name: "Jarocho South", // Focado na unidade South (que tem o Facebook ativo)
    phone: "+1 816-492-7118", // Do Facebook
    whatsappRaw: "18164927118",
    address: "13145 State Line Rd, Kansas City, MO",
    hours: "Tue-Thu: 4pm-9pm | Fri-Sat: 11am-10pm" // Horário Real da foto
  },
  hero: {
    title: "Authentic Mexican Seafood",
    subtitle: "Chef Carlos Falcon brings the flavor of Veracruz to Kansas City. Fresh Oysters, Ceviches, and the award-winning Paella.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1920" // Foto de Paella/Frutos do Mar rica
  },
  menu: [
    {
      category: "Ceviches & Raw Bar", // Baseado na seção "Ceviche" e "Botanas"
      items: [
        { 
          id: 1, 
          name: "Ceviche Jarocho", 
          price: 16.00, 
          desc: "Our signature: Fish, lime juice, onion, and fresh cilantro.", 
          img: "https://plus.unsplash.com/premium_photo-1714242620729-bb49aaf19337?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        },
        { 
          id: 2, 
          name: "Fresh Oysters (Half Dozen)", 
          price: 18.00, 
          desc: "Fresh daily selection on the half shell.", 
          img: "https://plus.unsplash.com/premium_photo-1708011762422-5d69d382f2c0?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        },
        { 
          id: 3, 
          name: "Fish Ceviche Leche de Tigre", 
          price: 19.00, 
          desc: "Fish, habanero purée, onion, cucumber, cilantro, ginger.", 
          img: "https://cravingsjournal.com/wp-content/uploads/2018/08/ceviche-con-leche-de-tigre-1.jpg" 
        }
      ]
    },
    {
      category: "Chef Specialties", // Seção "Specialties" da foto
      items: [
        { 
          id: 4, 
          name: "Seafood Paella", 
          price: 32.00, 
          desc: "Fish, clam, mussel, calamari, and shrimp over saffron rice.", 
          img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          id: 5, 
          name: "Whole Red Snapper (Veracruz)", 
          price: 35.00, 
          desc: "Fried whole fish topped with our signature Veracruz sauce.", 
          img: "https://www.allrecipes.com/thmb/6T3J-qAUyyB1wZ3CMb9IktvVpoU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/228046-veracruz-style-red-snapper-DDMFS-268-4x3-0ab87b7e75204702a9610022d579b3bc.jpg" 
        },
      ]
    },
    {
      category: "Botanas (Appetizers)",
      items: [
        { 
          id: 7, 
          name: "Shrimp Cucaracha", 
          price: 15.00, 
          desc: "Jumbo shrimp flash fried and tossed in spicy sauce.", 
          img: "https://www.cocinavital.mx/wp-content/uploads/2018/03/camarones-cucaracha.jpg" // Placeholder
        },
        { 
          id: 8, 
          name: "Fresh Guacamole", 
          price: 12.00, 
          desc: "Made fresh to order with avocado, lime, and pico de gallo.", 
          img: "https://images.unsplash.com/photo-1604542031650-13f6381048ba?auto=format&fit=crop&q=80&w=400" 
        }
      ]
    }
  ]
};