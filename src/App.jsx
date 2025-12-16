import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Menu, X, Scissors, Star, Heart, Sparkles, Brush, Crown, Smile, Sun, Cloud, Feather } from 'lucide-react';

// --- CUSTOM STYLES AND FONT IMPORTS ---
const CustomStyles = () => (
  <style>
    {`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-logo {
        animation: fade-in-up 1.5s ease-out forwards;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-1deg); }
      }
      .animate-float { animation: float 10s ease-in-out infinite; }
      .animate-float-delayed { animation: float-delayed 12s ease-in-out infinite; }
      .animate-sway { animation: float 15s ease-in-out infinite reverse; }

      .nav-logo-hover {
        transition: transform 0.3s ease, text-shadow 0.3s ease;
        display: inline-block;
      }
      .nav-logo-hover:hover {
        transform: scale(1.05);
        text-shadow: 0 0 5px rgba(198, 168, 124, 0.5); 
      }
    `}
  </style>
);

// --- Intro Animation Component ---
const IntroOverlay = ({ onComplete }) => {
  const [step, setStep] = useState(0); 
  
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1200);
    const timer2 = setTimeout(() => setStep(2), 3000);
    const timer3 = setTimeout(onComplete, 3500);
    return () => {
      clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1000 ${step === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[140%] bg-[#FDFCF8] transition-transform duration-[2000ms] ease-in-out z-0"
        style={{ transform: step >= 1 ? 'translateX(-100%)' : 'translateX(0%)', filter: 'blur(60px)', borderRadius: '0 40% 40% 0' }} />
      <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[140%] bg-[#FDFCF8] transition-transform duration-[2000ms] ease-in-out z-0"
        style={{ transform: step >= 1 ? 'translateX(100%)' : 'translateX(0%)', filter: 'blur(60px)', borderRadius: '40% 0 0 40%' }} />
      <div className={`absolute inset-0 bg-[#FDFCF8] z-0 transition-opacity duration-500 ${step >= 1 ? 'opacity-0' : 'opacity-100'}`} />
      <div className="relative z-10">
        <h1 className={`text-7xl md:text-9xl font-serif text-[#5C5552] tracking-[0.2em] font-bold transition-all duration-700 ${step >= 1 ? 'opacity-0 scale-150' : 'opacity-100'}`}>
          Bhavzz
        </h1>
      </div>
    </div>
  );
};

// Helper Icon
function LayersIcon(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    );
}

const ServiceCard = ({ title, Icon, desc }) => (
  <div className="group bg-[#FDFCF8] p-8 border border-[#EAE0D5] hover:border-[#C6A87C] hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#F5F0EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#EAD8D0] transition-all duration-500">
          <Icon className="text-[#8A7968] group-hover:text-[#5C5552]" size={24} strokeWidth={1.5} />
      </div>
      <h4 className="text-xl font-serif text-[#5C5552] mb-3 group-hover:text-[#C6A87C] transition-colors">{title}</h4>
      <p className="text-[#8A7968] text-sm leading-relaxed font-light">{desc}</p>
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
  const whatsappMessage = "Hello Bhavzz Makeover, I would like to enquire about your services.";

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
    saree: [{ title: "Saree Draping", icon: LayersIcon, desc: "Professional draping for all traditional styles." }]
  };

  return (
    <div className="min-h-screen font-sans text-[#5C5552]">
      <CustomStyles />
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFCF8]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span onClick={() => scrollToSection('home')} className={`text-4xl font-bold tracking-widest ${scrolled ? 'text-[#8A7968]' : 'text-[#5C5552]'} font-serif nav-logo-hover cursor-pointer`}>
            Bhavzz
          </span>
          <div className="hidden md:flex gap-10 text-[#5C5552] text-sm tracking-widest uppercase font-medium">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-[#C6A87C] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6A87C] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <button className="md:hidden text-[#5C5552]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section with Logo Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F0EB]">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#EAD8D0] opacity-40 blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#E6D5C3] opacity-30 blur-[120px]"></div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] left-[10%] opacity-10 animate-sway"><Brush size={80} className="text-[#8A7968]" /></div>
            <div className="absolute bottom-[20%] right-[10%] opacity-20 animate-float"><Feather size={60} className="text-[#C6A87C]" /></div>
            <div className="absolute top-[30%] right-[20%] opacity-15 animate-float-delayed"><Sparkles size={40} className="text-[#5C5552]" /></div>
            <div className="absolute bottom-[15%] left-[25%] opacity-10 animate-float" style={{animationDuration: '8s'}}><Crown size={30} className="text-[#8A7968]" /></div>
        </div>

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
             <Star className="w-6 h-6 text-[#C6A87C] animate-pulse" />
          </div>
          
          <h2 className="text-sm md:text-base font-medium tracking-[0.3em] mb-8 text-[#8A7968] uppercase font-sans">
            Enhance Your Natural Beauty
          </h2>
          
          {/* Logo integrated here replacing the text */}
          <div className="flex justify-center mb-8">
            {!showIntro && (
              <img 
                src="logo.png" 
                alt="Bhavzz Makeover Logo" 
                className="max-w-[300px] sm:max-w-[450px] md:max-w-[600px] h-auto object-contain animate-logo"
              />
            )}
          </div>

          <p className="max-w-lg mx-auto text-2xl text-[#8A7968] mb-12 font-light leading-relaxed font-sans">
            Professional artistry for your most memorable moments. Specialized in Bridal, Party, and Aesthetic Styling.
          </p>
          <button onClick={() => scrollToSection('contact')} className="bg-[#5C5552] text-[#FDFCF8] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#8A7968] transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#FDFCF8]">
        <div className="container mx-auto max-w-5xl text-center">
            <h3 className="text-[#C6A87C] font-medium tracking-[0.2em] uppercase text-xs mb-4">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#5C5552] mb-12">Artistry & Passion</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center text-left">
                <div className="bg-[#FAF7F5] p-12 rounded-tr-[50px] rounded-bl-[50px] border border-[#EAE0D5]">
                    <h4 className="font-serif text-2xl text-[#8A7968] mb-6">Our Philosophy</h4>
                    <p className="text-[#8A7968] leading-8 font-light font-sans">
                    At Bhavzz Makeover, we believe that makeup is not a mask, but a form of art and expression. Our goal is to make you feel like the best version of yourself.
                    </p>
                </div>
                <div className="space-y-8">
                    {[{Icon: Star, title: "Premium Products", desc: "High-end, skin-friendly international brands."}, {Icon: Scissors, title: "Expert Styling", desc: "Hairstyles that complement your face and outfit."}, {Icon: Heart, title: "Client Centric", desc: "Customized packages tailored to your needs."}].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="p-3 bg-[#F5F0EB] rounded-full group-hover:bg-[#EAD8D0] transition-colors"><item.Icon className="w-5 h-5 text-[#8A7968]" /></div>
                        <div><h5 className="font-serif text-lg text-[#5C5552] mb-2">{item.title}</h5><p className="text-sm text-[#8A7968] font-light font-sans">{item.desc}</p></div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#F5F0EB]">
        <div className="container mx-auto">
          <div className="text-center mb-20"><h2 className="text-4xl md:text-5xl font-serif text-[#5C5552] mb-6">Our Services</h2><div className="w-px h-16 bg-[#C6A87C] mx-auto"></div></div>
          {Object.entries(categories).map(([key, items]) => (
            <div key={key} className="mb-20">
              <div className="flex items-center gap-4 mb-10 justify-center">
                <div className="h-px bg-[#D6C0B3] w-12"></div>
                <h3 className="text-xl font-serif text-[#8A7968] uppercase tracking-widest">{key === 'makeup' ? 'Makeup Artistry' : key === 'hairstyle' ? 'Hairstyling' : 'Traditional Draping'}</h3>
                <div className="h-px bg-[#D6C0B3] w-12"></div>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 ${key !== 'saree' ? 'lg:grid-cols-3' : 'max-w-4xl mx-auto'} gap-6`}>
                {items.map((item, idx) => <ServiceCard key={idx} title={item.title} Icon={item.icon} desc={item.desc} />)}
                {key === 'saree' && (
                  <div className="bg-[#FDFCF8] p-10 flex flex-col justify-center items-center text-center border border-dashed border-[#C6A87C] group hover:bg-white transition-colors">
                    <h4 className="text-xl font-serif text-[#5C5552] mb-3">Custom Package?</h4>
                    <p className="text-[#8A7968] text-sm mb-6 font-light font-sans">We can combine services for a complete makeover.</p>
                    <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="text-[#C6A87C] text-sm font-bold uppercase tracking-widest hover:text-[#8A7968] transition-colors">Enquire Now &rarr;</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#E6D5C3] text-[#5C5552] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-serif mb-8">Get In Touch</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mb-12">
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#FDFCF8] text-[#5C5552] px-8 py-5 min-w-[250px] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#C6A87C]">
              <img src="whatsapp.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
              <div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Chat on</p><p className="text-lg font-serif">WhatsApp</p></div>
            </a>
            <a href={`tel:+${phoneNumber}`} className="flex items-center gap-4 bg-[#5C5552] text-[#FDFCF8] px-8 py-5 min-w-[250px] hover:bg-[#4a4442] hover:shadow-lg transition-all duration-300">
              <Phone className="w-6 h-6" /><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Call Us</p><p className="text-lg font-serif">+91 98765 43210</p></div>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#FDFCF8] text-[#5C5552] px-8 py-5 min-w-[250px] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#C6A87C]">
              <Instagram className="w-6 h-6 text-[#E1306C]" /><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Follow on</p><p className="text-lg font-serif">Instagram</p></div>
            </a>
          </div>
          <p className="text-[#8A7968] text-xs mt-8 tracking-widest uppercase">© 2024 Bhavzz Makeover</p>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a href={`tel:+${phoneNumber}`} className="bg-[#5C5552] w-14 h-14 rounded-full text-[#FDFCF8] shadow-xl hover:scale-110 transition-transform hover:bg-[#8A7968] flex items-center justify-center" aria-label="Call Now"><Phone size={24} /></a>
        <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] w-14 h-14 rounded-full text-white shadow-xl hover:scale-110 transition-transform flex items-center justify-center" aria-label="Chat on WhatsApp">
          <img src="whatsapp.png" alt="WhatsApp Chat" className="w-11 h-11 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default App;