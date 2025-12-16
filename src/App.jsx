import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Menu, X, Scissors, Star, Heart, Sparkles, Brush, Crown, Smile, Sun, Cloud, Feather } from 'lucide-react';

// --- IMAGE IMPORTS (This prevents the MIME type error) ---
import logoImg from './logo.png';
import whatsappImg from './whatsapp.png';

const CustomStyles = () => (
  <style>
    {`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-logo { animation: fade-in-up 1.5s ease-out forwards; }
      
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      .animate-float { animation: float 10s ease-in-out infinite; }
      .animate-sway { animation: float 15s ease-in-out infinite reverse; }

      .nav-logo-hover {
        transition: transform 0.3s ease;
        display: inline-block;
      }
      .nav-logo-hover:hover { transform: scale(1.05); }
    `}
  </style>
);

const IntroOverlay = ({ onComplete }) => {
  const [step, setStep] = useState(0); 
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1200);
    const timer2 = setTimeout(() => setStep(2), 3000);
    const timer3 = setTimeout(onComplete, 3500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1000 ${step === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#FDFCF8] transition-transform duration-[1500ms]"
        style={{ transform: step >= 1 ? 'translateX(-100%)' : 'translateX(0%)' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDFCF8] transition-transform duration-[1500ms]"
        style={{ transform: step >= 1 ? 'translateX(100%)' : 'translateX(0%)' }} />
      <div className="relative z-10 text-center">
        <h1 className={`text-7xl md:text-9xl font-serif text-[#5C5552] tracking-widest transition-all duration-700 ${step >= 1 ? 'opacity-0 scale-150' : 'opacity-100'}`}>
          Bhavzz
        </h1>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, Icon, desc }) => (
  <div className="group bg-[#FDFCF8] p-8 border border-[#EAE0D5] hover:border-[#C6A87C] hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#F5F0EB] flex items-center justify-center mb-6 group-hover:bg-[#EAD8D0] transition-all">
          <Icon className="text-[#8A7968]" size={24} />
      </div>
      <h4 className="text-xl font-serif text-[#5C5552] mb-3">{title}</h4>
      <p className="text-[#8A7968] text-sm font-light">{desc}</p>
  </div>
);

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
  const whatsappMsg = "Hello Bhavzz Makeover, I would like to enquire about your services.";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const categories = {
    makeup: [
      { title: "Bridal Makeup", icon: Crown, desc: "Radiant, long-lasting looks for your special day." },
      { title: "Non-Bridal Makeup", icon: Smile, desc: "Perfect elegance for attendees and guests." },
      { title: "Party Makeup", icon: Sparkles, desc: "Glamorous looks for evenings and events." },
      { title: "Airbrush Makeup", icon: Cloud, desc: "Flawless, high-definition finish." },
      { title: "Waterproof Makeup", icon: Sun, desc: "Tear and sweat resistant durability." },
      { title: "Glossy Makeup", icon: Star, desc: "Dewy, glass-skin aesthetic." },
    ],
    hairstyle: [
      { title: "Open Hairstyle", icon: Sparkles, desc: "Flowing curls and straight styles." },
      { title: "Half Up Half Down", icon: Heart, desc: "The perfect balance of elegance." },
      { title: "Bun Hairstyle", icon: Crown, desc: "Classic updos and messy buns." },
      { title: "Braided Hairstyle", icon: Feather, desc: "Intricate braids and floral additions." },
    ],
    saree: [{ title: "Saree Draping", icon: Scissors, desc: "Professional draping for all traditional styles." }]
  };

  return (
    <div className="min-h-screen font-sans text-[#5C5552]">
      <CustomStyles />
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFCF8]/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span onClick={() => scrollToSection('home')} className="text-3xl font-serif font-bold tracking-widest cursor-pointer nav-logo-hover">Bhavzz</span>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-[#C6A87C] transition-colors">{item}</button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#F5F0EB] px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] opacity-10 animate-sway"><Brush size={80} /></div>
            <div className="absolute bottom-[20%] right-[10%] opacity-20 animate-float"><Feather size={60} /></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-xs uppercase tracking-[0.4em] mb-8 text-[#8A7968]">Enhance Your Natural Beauty</h2>
          <div className="flex justify-center mb-10">
            {!showIntro && (
              <img src={logoImg} alt="Logo" className="w-full max-w-[500px] h-auto object-contain animate-logo" />
            )}
          </div>
          <p className="text-xl md:text-2xl text-[#8A7968] font-light mb-12">Professional artistry for your most memorable moments.</p>
          <button onClick={() => scrollToSection('contact')} className="bg-[#5C5552] text-white px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#8A7968] transition-all">Book Appointment</button>
        </div>
      </section>

      {/* Restore All Services */}
      <section id="services" className="py-24 px-6 bg-[#FDFCF8]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-20 text-[#5C5552]">Our Services</h2>
          {Object.entries(categories).map(([key, items]) => (
            <div key={key} className="mb-20">
              <h3 className="text-xl font-serif text-center uppercase tracking-widest mb-10 text-[#8A7968]">{key}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => <ServiceCard key={idx} title={item.title} Icon={item.icon} desc={item.desc} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#E6D5C3]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif mb-12">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`} className="flex items-center gap-4 bg-white px-8 py-5 min-w-[250px] shadow-sm hover:shadow-md transition-all">
              <img src={whatsappImg} alt="WA" className="w-10 h-10 object-contain" />
              <div className="text-left"><p className="text-[10px] uppercase font-bold opacity-60">Chat on</p><p className="text-lg font-serif">WhatsApp</p></div>
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a href={`tel:+${phoneNumber}`} className="bg-[#5C5552] w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"><Phone size={24} /></a>
        <a href={`https://wa.me/${phoneNumber}`} className="bg-[#25D366] w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
          <img src={whatsappImg} alt="WA" className="w-11 h-11 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default App;