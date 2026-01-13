import React, { useState, useMemo } from 'react';
import { Menu, X, Phone, MapPin, Clock, ShoppingCart, Trash2, Plus, Instagram, Facebook, Utensils, ChevronRight } from 'lucide-react';

import { burgerData } from './clients/burger';
import { sushiData } from './clients/sushi';
import { pizzaData } from './clients/pizza';
import { jarochoData } from './clients/jarocho';
import { adhdiyData } from './clients/adhdiy';

const clientsMap = {
  burger: burgerData,
  sushi: sushiData,
  pizza: pizzaData,
  jarocho: jarochoData,
  adhdiy: adhdiyData
};

// SELECIONA O CLIENTE COM BASE NA VARIÁVEL DE AMBIENTE
const clientKey = import.meta.env.VITE_CLIENT || 'burger';
const DATA = clientsMap[clientKey];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- LÓGICA DO CARRINHO (Mantida para clientes que usam WhatsApp) ---
  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartOpen(true);
  };
  const removeFromCart = (idxToRemove) => setCart(cart.filter((_, idx) => idx !== idxToRemove));
  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price, 0), [cart]);
  
  const handleCheckout = () => {
    if (!DATA.business.whatsappRaw) return; // Se não tiver zap, não faz nada (usa link externo)
    let message = `*Order from Website - ${DATA.business.name}*\n\n`;
    cart.forEach(item => message += `• ${item.name} - $${item.price.toFixed(2)}\n`);
    message += `\n*Total: $${total.toFixed(2)}*`;
    const url = `https://wa.me/${DATA.business.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Define se usamos Link Externo (Clover/Reserva) ou Carrinho Interno
  const isExternalOrder = !!DATA.business.orderLink;

  return (
    <div className={`min-h-screen ${DATA.theme.bgBody} ${DATA.theme.textBody} ${DATA.theme.font || 'font-sans'}`}>
      
      {/* --- 1. PREMIUM NAVBAR (Estilo Spokes) --- */}
      <nav className={`${DATA.theme.navBg || 'bg-white'} sticky top-0 z-50 py-4 shadow-sm border-b border-black/5`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Nome */}
          <div className="flex items-center gap-2">
            <h1 className={`text-2xl md:text-3xl font-bold tracking-widest uppercase ${DATA.theme.primaryText}`}>
              {DATA.business.name}
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest text-gray-600">
            <a href="#menu" className="hover:text-black transition">MENU</a>
            <a href="#about" className="hover:text-black transition">ABOUT</a>
            <a href="#contact" className="hover:text-black transition">LOCATIONS</a>
            
            {/* Botão de Ação: Carrinho ou Link Externo */}
            {isExternalOrder ? (
              <a href={DATA.business.orderLink} target="_blank" className={`${DATA.theme.primary} text-white px-6 py-2 rounded-full hover:brightness-110 transition`}>
                ORDER ONLINE
              </a>
            ) : (
              <button onClick={() => setIsCartOpen(true)} className={`relative ${DATA.theme.primary} text-white p-3 rounded-full hover:brightness-110 transition flex gap-2 items-center`}>
                <ShoppingCart size={18} />
                <span>{cart.length}</span>
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {!isExternalOrder && (
               <button onClick={() => setIsCartOpen(true)} className="relative text-gray-800">
                 <ShoppingCart size={24} />
                 {cart.length > 0 && <span className={`absolute -top-2 -right-2 ${DATA.theme.primary} text-white text-xs w-5 h-5 flex items-center justify-center rounded-full`}>{cart.length}</span>}
               </button>
            )}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu className="text-gray-800" /></button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 text-center absolute w-full shadow-xl">
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block font-bold">MENU</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block">LOCATIONS</a>
            {isExternalOrder && (
              <a href={DATA.business.orderLink} className={`block ${DATA.theme.primary} text-white py-2 rounded-lg font-bold`}>ORDER ONLINE</a>
            )}
          </div>
        )}
      </nav>

      {/* --- CARRINHO MODAL (Só aparece se não for link externo) --- */}
      {isCartOpen && !isExternalOrder && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-black/60 backdrop-blur-sm">
           <div className={`w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right`}>
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold">Your Order</h2>
               <button onClick={() => setIsCartOpen(false)}><X /></button>
             </div>
             <div className="flex-1 overflow-y-auto space-y-3">
               {cart.length === 0 ? <p className="opacity-50 text-center mt-10">Cart is empty</p> : cart.map((item, idx) => (
                 <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                   <div><p className="font-bold">{item.name}</p><p className="text-sm text-gray-500">${item.price.toFixed(2)}</p></div>
                   <button onClick={() => removeFromCart(idx)} className="text-red-500"><Trash2 size={16}/></button>
                 </div>
               ))}
             </div>
             <div className="pt-4 border-t">
               <div className="flex justify-between text-xl font-bold mb-4"><span>Total:</span><span>${total.toFixed(2)}</span></div>
               <button onClick={handleCheckout} className={`w-full ${DATA.theme.primary} text-white py-3 rounded-lg font-bold`}>Checkout via WhatsApp</button>
             </div>
           </div>
        </div>
      )}

      {/* --- 2. HERO SECTION (Universal) --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img src={DATA.hero.image} alt="Hero" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${DATA.hero.overlay ? 'bg-black/40' : 'bg-black/50'}`}></div>
        </div>
        <div className="relative z-10 text-white max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider shadow-black drop-shadow-lg">{DATA.hero.title}</h2>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">{DATA.hero.subtitle}</p>
          <a href={DATA.business.orderLink || "#menu"} className={`${DATA.theme.primary} px-10 py-4 font-bold text-white uppercase tracking-widest hover:brightness-110 transition shadow-xl rounded-sm`}>
            {DATA.hero.ctaPrimary || "View Menu"}
          </a>
        </div>
      </section>

      {/* --- 3. INTRO SECTION (Se existir) --- */}
      {DATA.intro && (
        <section id="about" className="py-20 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${DATA.theme.primaryText} uppercase tracking-widest`}>
              {DATA.intro.heading}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-light">{DATA.intro.text}</p>
          </div>
        </section>
      )}

      {/* --- 4. FEATURES GRID (Se existir - O Grande Diferencial Visual) --- */}
      {DATA.features && (
        <section className="py-10 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {DATA.features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="overflow-hidden w-full h-64 mb-6 rounded-sm">
                  <img src={feature.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-black uppercase mb-3 tracking-wide">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 px-4">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- 5. MENU SECTION (O Padrão Antigo Integrado) --- */}
      {DATA.menu && (
        <section id="menu" className={`py-20 px-4 ${DATA.theme.bgBody}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-sm font-bold tracking-widest uppercase ${DATA.theme.primaryText} mb-2`}>OUR SELECTION</h2>
              <p className={`text-4xl font-bold ${DATA.theme.textBody === 'text-gray-100' ? 'text-white' : 'text-gray-900'}`}>Menu</p>
            </div>
            <div className="space-y-16">
              {DATA.menu.map((category, idx) => (
                <div key={idx}>
                  <h3 className={`text-3xl font-bold mb-8 border-l-4 ${DATA.theme.textBody === 'text-gray-100' ? 'border-white text-white' : 'border-gray-800 text-gray-800'} pl-4`}>{category.category}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.items.map((item) => (
                      <div key={item.id} className={`${DATA.theme.cardBg} rounded-xl p-4 flex gap-4 hover:shadow-xl transition group border border-black/5`}>
                        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-lg overflow-hidden">
                          <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="text-800">
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-lg">{item.name}</h4>
                              <span className={`${DATA.theme.primaryText} font-bold`}>${item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-sm opacity-70 mt-1 line-clamp-2">{item.desc}</p>
                          </div>
                          {!isExternalOrder && (
                            <button onClick={() => addToCart(item)} className={`mt-4 self-start flex items-center gap-2 text-sm font-bold ${DATA.theme.primaryText} hover:opacity-80`}>
                              <Plus size={16} /> ADD TO CART
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- 6. EVENTS SECTION (Se existir) --- */}
      {DATA.events && (
        <section className="relative py-32 text-center text-white">
          <div className="absolute inset-0">
            <img src={DATA.events.image} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h3 className="text-4xl font-bold mb-6 uppercase tracking-widest">{DATA.events.title}</h3>
            <p className="text-xl font-light mb-10 leading-relaxed opacity-90">{DATA.events.text}</p>
          </div>
        </section>
      )}

      {/* --- 7. FOOTER UNIVERSAL (Suporta 1 ou + Endereços) --- */}
      <footer id="contact" className="bg-stone-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-3xl font-bold mb-12 uppercase tracking-widest border-b border-gray-800 pb-4 inline-block">VISIT US</h4>
          
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            {/* Lógica: Se tiver array 'locations', usa ele. Se não, usa o 'business' simples */}
            {DATA.locations ? DATA.locations.map((loc, idx) => (
              <div key={idx} className="space-y-3">
                <h5 className="text-xl font-bold uppercase text-gray-200">{loc.name}</h5>
                <div className="flex items-start gap-2 text-gray-400"><MapPin size={16} className="mt-1 shrink-0" /> <span>{loc.address}<br/>{loc.city}</span></div>
                <div className="flex items-start gap-2 text-gray-400"><Clock size={16} className="mt-1 shrink-0" /> <span>{loc.hours}</span></div>
              </div>
            )) : (
              // Fallback para cliente simples (Burger/Pizza)
              <div className="space-y-3">
                <h5 className="text-xl font-bold uppercase text-gray-200">Main Location</h5>
                <div className="flex items-start gap-2 text-gray-400"><MapPin size={16} className="mt-1 shrink-0" /> <span>{DATA.business.address}</span></div>
                <div className="flex items-start gap-2 text-gray-400"><Clock size={16} className="mt-1 shrink-0" /> <span>{DATA.business.hours}</span></div>
                <div className="flex items-start gap-2 text-gray-400"><Phone size={16} className="mt-1 shrink-0" /> <span>{DATA.business.phone}</span></div>
              </div>
            )}
            
            {/* Coluna Social / Sobre */}
            <div className="md:col-start-3">
               <h5 className="text-xl font-bold uppercase text-gray-200 mb-4">CONNECT</h5>
               <div className="flex gap-4 text-gray-400">
                  <Instagram className="hover:text-white cursor-pointer transition" />
                  <Facebook className="hover:text-white cursor-pointer transition" />
               </div>
               <p className="mt-6 text-gray-600 text-xs">
                 © {new Date().getFullYear()} {DATA.business.name}. <br/>Designed by Premium Agency.
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
