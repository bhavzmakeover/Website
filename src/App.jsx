import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Menu, X, Scissors, Star, Heart, Sparkles, Brush, Crown, Smile, Sun, Cloud, Feather } from 'lucide-react';

// --- CUSTOM STYLES ---
const CustomStyles = () => (
  <style>
    {`
      @keyframes write-in {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
      }
      .writing-text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(2deg); }
      }
      .animate-float { animation: float 10s ease-in-out infinite; }
      .animate-sway { animation: float 12s ease-in-out infinite reverse; }

      .hero-glow {
        text-shadow: 0 0 20px rgba(198, 168, 124, 0.3);
      }

      /* Service Card Hover Shine */
      .service-card {
        position: relative;
        overflow: hidden;
      }
      .service-card::after {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(198, 168, 124, 0.05), transparent);
        transform: rotate(45deg);
        transition: 0.7s;
        opacity: 0;
      }
      .service-card:hover::after {
        opacity: 1;
        left: 100%;
      }
    `}
  </style>
);

const IntroOverlay = ({ onComplete }) => {
  const [step, setStep] = useState(0); 
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);  // Reveal Bhavzz
    const timer2 = setTimeout(() => setStep(2), 2200); // Reveal Makeover
    const timer3 = setTimeout(() => setStep(3), 3600); // Doors Open
    const timer4 = setTimeout(onComplete, 4200);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); clearTimeout(timer4); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1000 ${step === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#FDFCF8] transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: step >= 3 ? 'translateX(-100%)' : 'translateX(0%)' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDFCF8] transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: step >= 3 ? 'translateX(100%)' : 'translateX(0%)' }} />
      
      <div className="relative z-10 text-center px-6">
        <div className="flex flex-col items-center">
          <h1 className={`text-5xl md:text-8xl font-serif text-[#5C5552] tracking-[0.4em] transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            BHAVZZ
          </h1>
          <h2 className={`text-xl md:text-3xl font-serif italic text-[#C6A87C] tracking-[0.2em] mt-4 transition-all duration-1000 transform ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Makeover
          </h2>
          <div className={`w-24 h-px bg-[#C6A87C] mt-8 transition-all duration-1000 ${step >= 2 ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "919876543210"; 
  const whatsappMsg = encodeURIComponent("Hello Bhavzz Makeover, I would like to enquire about your services.");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const categories = {
    makeup: {
      label: "Makeup Artistry",
      items: [
        { title: "Bridal Makeup", icon: Crown, desc: "Radiant, long-lasting looks for your special day." },
        { title: "Non-Bridal Makeup", icon: Smile, desc: "Perfect elegance for attendees and guests." },
        { title: "Party Makeup", icon: Sparkles, desc: "Glamorous looks for evenings and events." },
        { title: "Airbrush Makeup", icon: Cloud, desc: "Flawless, high-definition finish." },
        { title: "Waterproof Makeup", icon: Sun, desc: "Tear and sweat resistant durability." },
        { title: "Glossy Makeup", icon: Star, desc: "Dewy, glass-skin aesthetic." },
      ]
    },
    hairstyle: {
      label: "Hairstyling",
      items: [
        { title: "Open Hairstyle", icon: Sparkles, desc: "Flowing curls and straight styles." },
        { title: "Half Up Half Down", icon: Heart, desc: "The perfect balance of elegance." },
        { title: "Bun Hairstyle", icon: Crown, desc: "Classic updos and messy buns." },
        { title: "Braided Hairstyle", icon: Feather, desc: "Intricate braids and floral additions." },
      ]
    },
    saree: {
      label: "Traditional Draping",
      items: [
        { title: "Saree Draping", icon: Scissors, desc: "Professional draping for all traditional styles." }
      ]
    }
  };

  return (
    <div className="min-h-screen font-sans text-[#5C5552] bg-[#FDFCF8]">
      <CustomStyles />
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFCF8]/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span onClick={() => scrollToSection('home')} className="text-3xl font-serif font-bold tracking-widest cursor-pointer hover:scale-105 transition-transform">Bhavzz</span>
          <div className="hidden md:flex gap-12 text-xs uppercase tracking-widest font-semibold">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-[#C6A87C] transition-colors">{item}</button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#F5F0EB] px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[5%] opacity-10 animate-sway"><Brush size={120} /></div>
            <div className="absolute bottom-[10%] right-[5%] opacity-10 animate-float"><Sparkles size={100} /></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#C6A87C]"></div>
            <Star className="w-6 h-6 text-[#C6A87C] fill-[#C6A87C]" />
            <div className="h-px w-8 bg-[#C6A87C]"></div>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-bold text-[#5C5552] leading-none hero-glow mb-8">
            <span className="writing-text" style={{ animation: 'write-in 1.5s linear forwards 0.5s' }}>Bhavzz</span>
            <br />
            <span className="italic text-[#C6A87C] writing-text" style={{ animation: 'write-in 1.2s linear forwards 1.8s', fontSize: '0.85em' }}>Makeover</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#8A7968] font-light mb-12 max-w-2xl mx-auto">Luxury artistry for your unforgettable moments.</p>
          <button onClick={() => scrollToSection('contact')} className="bg-[#5C5552] text-white px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-[#C6A87C] transition-all shadow-xl">Book Appointment</button>
        </div>
      </section>

      {/* Services - Balanced Grid Alignment */}
      <section id="services" className="py-24 px-6 bg-[#FDFCF8]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h3 className="text-[#C6A87C] uppercase tracking-[0.4em] text-xs mb-4">Our Expertise</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Service Menu</h2>
            <div className="w-16 h-1 bg-[#C6A87C] mx-auto"></div>
          </div>

          {Object.entries(categories).map(([key, group]) => (
            <div key={key} className="mb-32 last:mb-0">
              <div className="flex items-center justify-center gap-6 mb-16">
                <div className="h-px flex-1 bg-[#EAE0D5] max-w-[100px]"></div>
                <h3 className="text-xl font-serif uppercase tracking-[0.3em] text-[#8A7968]">{group.label}</h3>
                <div className="h-px flex-1 bg-[#EAE0D5] max-w-[100px]"></div>
              </div>

              {/* Grid with dynamic alignment: Centered if few items, 3-column if many */}
              <div className="flex flex-wrap justify-center gap-8">
                {group.items.map((item, idx) => (
                  <div key={idx} className="service-card group bg-[#FDFCF8] p-10 border border-[#EAE0D5] hover:border-[#C6A87C] hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                    <div className="w-20 h-20 rounded-full bg-[#F5F0EB] flex items-center justify-center mb-8 group-hover:bg-[#EAD8D0] transition-all">
                      <item.icon className="text-[#8A7968]" size={32} strokeWidth={1} />
                    </div>
                    <h4 className="text-2xl font-serif text-[#5C5552] mb-4">{item.title}</h4>
                    <p className="text-[#8A7968] text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                
                {key === 'saree' && (
                  <div className="p-10 flex flex-col justify-center items-center text-center border border-dashed border-[#C6A87C] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                    <h4 className="text-2xl font-serif text-[#5C5552] mb-4">Custom Package?</h4>
                    <p className="text-[#8A7968] text-sm mb-8 font-light italic">Combine services for a complete luxury makeover experience.</p>
                    <button onClick={() => scrollToSection('contact')} className="text-[#C6A87C] text-sm font-bold uppercase tracking-widest hover:tracking-[0.2em] transition-all underline underline-offset-8">Enquire Now</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#E6D5C3]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-12">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white px-10 py-6 min-w-[300px] shadow-lg hover:-translate-y-1 transition-all">
              <div className="p-3 bg-[#25D366] text-white rounded-full"><MessageCircle size={24} fill="white" /></div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-[#8A7968]">Chat with us</p>
                <p className="text-xl font-serif">WhatsApp</p>
              </div>
            </a>
            <a href={`tel:+${phoneNumber}`} className="flex items-center gap-4 bg-[#5C5552] text-white px-10 py-6 min-w-[300px] shadow-lg hover:-translate-y-1 transition-all">
              <div className="p-3 bg-white/10 rounded-full"><Phone size={24} /></div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Call directly</p>
                <p className="text-xl font-serif">+91 98765 43210</p>
              </div>
            </a>
          </div>
          <p className="text-[#8A7968] text-xs mt-20 tracking-widest uppercase">© 2024 Bhavzz Makeover • Bengaluru</p>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <a href={`tel:+${phoneNumber}`} className="bg-[#5C5552] w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all"><Phone size={24} /></a>
        <a href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`} target="_blank" rel="noreferrer" className="bg-[#25D366] w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all"><MessageCircle size={28} fill="white" /></a>
      </div>
    </div>
  );
};

export default App;