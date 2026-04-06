import React, { useState } from 'react';
import { 
  Dumbbell, 
  TrendingUp, 
  ShowerHead, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { 
  WHATSAPP_LINK, 
  MAPS_LINK, 
  ADDRESS, 
  TESTIMONIALS, 
  FAQ, 
  DIFFERENTIALS, 
  SERVICES 
} from './constants';

// --- Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4",
        light ? "text-brand-white" : "text-brand-white"
      )}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className="h-1.5 w-24 bg-brand-red mx-auto mt-6"
    />
  </div>
);

const WhatsAppButton = ({ className, text = "Falar no WhatsApp", variant = "primary" }: { className?: string, text?: string, variant?: "primary" | "outline" }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95",
      variant === "primary" 
        ? "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-red-900/20" 
        : "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
      className
    )}
  >
    <MessageCircle className="w-5 h-5" />
    {text}
  </a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-red transition-colors group"
      >
        <span className="text-lg font-bold uppercase tracking-tight">{question}</span>
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Localização", href: "#location" },
  ];

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-black tracking-tighter text-brand-white">
                CT <span className="text-brand-red">MONTANHATEAM</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-brand-red px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
                >
                  Matricule-se
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-black border-b border-white/5"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-brand-red block px-3 py-4 text-base font-bold uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-red text-white block px-3 py-4 rounded-md text-base font-bold uppercase tracking-widest text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweo355qLAOOMMzyOvlIeLMkHt74LFaSZaEche9qXDahtO5GD8EJFSqonc3Fc5vjO9cPf2ThuAUc29TT5TPQ_eAn6kBk-_x-GjBOHI4NYiz97xfoRUUjqhfHLpAwSmbZ0VsceXqXBeQ=w1920-h1080-k-no"
            alt="CT MontanhaTeam"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
          <div className="absolute inset-0 bg-brand-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-sm text-sm font-black uppercase tracking-[0.2em] mb-6 animate-pulse">
              Evolução Real
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Transforme seu corpo <br />
              <span className="text-brand-red">com treino de verdade</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Estrutura completa, equipamentos de alto nível e ambiente ideal para quem quer evoluir de verdade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton className="w-full sm:w-auto" />
              <a 
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-white border-2 border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Conheça o CT
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-black uppercase tracking-widest text-sm mb-4 block">Sobre a Academia</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Onde os fortes <br /> se encontram
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              O CT MONTANHATEAM é um centro de treinamento completo para quem busca evolução real. 
              Com equipamentos de alta qualidade, ambiente motivador e estrutura profissional, 
              é o lugar ideal tanto para iniciantes quanto para atletas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-lg mx-auto">
              {DIFFERENTIALS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center sm:justify-start">
                  <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-gray-200 uppercase text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <WhatsAppButton text="Agende sua visita agora" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-gray/5">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading subtitle="Tudo o que você precisa para atingir sua melhor versão.">
            Nossos <span className="text-brand-red">Serviços</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = { Dumbbell, TrendingUp, ShowerHead }[service.icon] || Dumbbell;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-black p-10 rounded-3xl border border-white/5 hover:border-brand-red/30 transition-all group"
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors">
                    <Icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <a href={WHATSAPP_LINK} className="text-brand-red font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                    Saber mais <TrendingUp className="w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-brand-red font-black uppercase tracking-widest text-sm mb-4 block">Depoimentos</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                Quem treina <br /> <span className="text-brand-red">aprova</span>
              </h2>
            </div>
            <div className="bg-brand-gray/5 p-6 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="text-center">
                <span className="block text-3xl font-black text-white">4,5</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">237 Avaliações <br /> no Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray/5 p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center font-black text-white">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-white uppercase text-sm tracking-tight">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-brand-gray/5">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading subtitle="Tire suas dúvidas e comece hoje mesmo.">
            Perguntas <span className="text-brand-red">Frequentes</span>
          </SectionHeading>
          
          <div className="bg-brand-black p-8 md:p-12 rounded-3xl border border-white/5">
            {FAQ.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Ainda tem dúvidas?</p>
            <WhatsAppButton variant="outline" text="Chamar no suporte" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-red font-black uppercase tracking-widest text-sm mb-4 block">Localização</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Fácil de chegar, <br /> difícil de sair
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Endereço</span>
                    <p className="text-lg text-white font-bold">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">WhatsApp</span>
                    <p className="text-lg text-white font-bold">+55 31 99186-7682</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider bg-white text-brand-black hover:bg-gray-200 transition-all"
                >
                  Ver no Google Maps <ExternalLink className="w-4 h-4" />
                </a>
                <WhatsAppButton text="Chamar agora" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[450px] rounded-3xl overflow-hidden border-4 border-white/5 relative group bg-brand-gray/10"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.844111304554!2d-44.0439675!3d-19.9367013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695967e1b7aaf%3A0x6165e566e4f59ef8!2sCT%20MONTANHATEAM!5e0!3m2!1spt-BR!2sbr!4v1712400000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Localização CT MONTANHATEAM"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-brand-black/20">
                <a 
                  href={MAPS_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-brand-red text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest shadow-xl"
                >
                  Abrir no Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Pare de dar desculpas, <br /> comece sua transformação
          </h2>
          <p className="text-white/80 text-xl mb-12 font-bold uppercase tracking-widest">
            Fale agora e agende sua visita
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] bg-white text-brand-red hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 text-xl"
          >
            <MessageCircle className="w-8 h-8" />
            Começar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <span className="text-2xl font-black tracking-tighter text-brand-white">
                CT <span className="text-brand-red">MONTANHATEAM</span>
              </span>
              <p className="text-gray-500 text-sm mt-2 font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} - Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-6">
              {/* Social placeholders */}
              {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-brand-red font-bold uppercase tracking-widest text-xs transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-8 right-8 z-[100]"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-brand-green rounded-full animate-ping opacity-20" />
        
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 group transition-transform"
        >
          <MessageCircle className="w-9 h-9" />
          <span className="absolute right-full mr-4 bg-white text-brand-black px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-100">
            Fale Conosco
          </span>
        </motion.a>
      </motion.div>

    </div>
  );
}
