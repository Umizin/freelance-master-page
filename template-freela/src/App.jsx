import React, { useState, useMemo } from 'react';
import { Menu, X, Phone, MapPin, Clock, ShoppingCart, Trash2, Plus, Instagram, Facebook, Utensils } from 'lucide-react';

import { burgerData } from './clients/burger';
import { sushiData } from './clients/sushi';
import { pizzaData } from './clients/pizza';

const clientsMap = {
  burger: burgerData,
  sushi: sushiData,
  pizza: pizzaData
};

// SELECIONA O CLIENTE COM BASE NA VARIÁVEL DE AMBIENTE
const clientKey = import.meta.env.VITE_CLIENT || 'burger';
const DATA = clientsMap[clientKey];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price, 0), [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    let message = `*Novo Pedido - ${DATA.business.name}* 🍴\n\n`;
    cart.forEach((item) => {
      message += `• ${item.name} - $${item.price.toFixed(2)}\n`;
    });
    message += `\n*Total: $${total.toFixed(2)}*`;
    message += `\n\nDelivery Location: `;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${DATA.business.whatsappRaw}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={`min-h-screen ${DATA.theme.bgBody} ${DATA.theme.textBody} ${DATA.theme.font} transition-colors duration-300`}>
      
      {/* Navbar */}
      <nav className={`${DATA.theme.cardBg} shadow-lg sticky top-0 z-40 border-b border-black/5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <Utensils className={`w-8 h-8 ${DATA.theme.primaryText}`} />
              <span className="font-bold text-2xl tracking-tight">{DATA.business.name}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a href="#menu" className="hover:opacity-70 transition">Menu</a>
              <a href="#about" className="hover:opacity-70 transition">Location</a>
              <button onClick={() => setIsCartOpen(true)} className={`relative ${DATA.theme.primary} text-white p-3 rounded-full hover:brightness-110 transition shadow-lg flex items-center gap-2`}>
                <ShoppingCart size={20} />
                <span className="font-bold">{cart.length}</span>
              </button>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button onClick={() => setIsCartOpen(true)} className="relative p-2">
                <ShoppingCart size={24} />
                {cart.length > 0 && <span className={`absolute top-0 right-0 ${DATA.theme.primary} text-white text-xs w-5 h-5 flex items-center justify-center rounded-full`}>{cart.length}</span>}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className={`w-full max-w-md ${DATA.theme.cardBg} h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Order</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? <p className="text-center opacity-50 mt-10">Your cart is empty.</p> : cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-black/5 p-3 rounded-lg">
                  <div><h4 className="font-bold">{item.name}</h4><p className={`text-sm ${DATA.theme.primaryText}`}>${item.price.toFixed(2)}</p></div>
                  <button onClick={() => removeFromCart(idx)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 size={18} /></button>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-4">
              <div className="flex justify-between text-xl font-bold mb-6"><span>Total:</span><span>${total.toFixed(2)}</span></div>
              <button onClick={handleCheckout} disabled={cart.length === 0} className={`w-full ${DATA.theme.primary} text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-xl`}>
                <Instagram size={20} /> Send to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={DATA.hero.image} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">{DATA.hero.title}</h1>
            <p className="text-xl text-gray-100 mb-8 font-light drop-shadow-md">{DATA.hero.subtitle}</p>
            <a href="#menu" className={`${DATA.theme.primary} text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition inline-block shadow-lg`}>Show Menu</a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-sm font-bold tracking-widest uppercase ${DATA.theme.primaryText} mb-2`}>Menu</h2>
            <p className="text-4xl font-bold">Our Specialties</p>
          </div>
          <div className="space-y-16">
            {DATA.menu.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold mb-8 border-l-4 border-current pl-4 flex items-center gap-2">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item) => (
                    <div key={item.id} className={`${DATA.theme.cardBg} rounded-2xl p-4 flex gap-4 hover:shadow-xl transition group border border-black/5`}>
                      <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden shadow-sm">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-lg md:text-xl">{item.name}</h4>
                            <span className={`${DATA.theme.primaryText} font-bold text-lg`}>${item.price.toFixed(2)}</span>
                          </div>
                          <p className="text-sm opacity-70 mt-1 line-clamp-2">{item.desc}</p>
                        </div>
                        <button onClick={() => addToCart(item)} className={`mt-4 self-start flex items-center gap-2 text-sm font-bold ${DATA.theme.primaryText} hover:opacity-80 transition`}>
                          <Plus size={16} /> ADD TO CART
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className={`${DATA.theme.cardBg} border-t border-black/5 py-12 mt-12`}>
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left grid md:grid-cols-3 gap-8 opacity-80">
          <div><h3 className="font-bold text-2xl mb-4">{DATA.business.name}</h3><p className="opacity-60">Unmatched quality and flavor.</p></div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2"><MapPin size={18} /><span>{DATA.business.address}</span></div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2"><Phone size={18} /><span>{DATA.business.phone}</span></div>
            <div className="flex items-center justify-center md:justify-start gap-3"><Clock size={18} /><span>{DATA.business.hours}</span></div>
          </div>
          <div className="flex justify-center md:justify-end gap-4"><Instagram className="cursor-pointer hover:opacity-70" /><Facebook className="cursor-pointer hover:opacity-70" /></div>
        </div>
      </footer>
    </div>
  );
}