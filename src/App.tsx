/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Droplets, Wrench, Drill, ShieldCheck, MapPin, Clock, ChevronDown, Plus, Minus, CheckCircle2, Instagram, Facebook, Menu, X, Mail, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Find Us", href: "#map" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 ${
        isScrolled ? "bg-brand-dark/95 backdrop-blur-md shadow-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white font-display font-bold text-xl md:text-2xl tracking-tight"
        >
          LETLHABILE <span className="text-brand-gold">PLUMBING</span>
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-white/80 hover:text-brand-gold text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0713184718" 
            className="bg-brand-gold text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark border-t border-white/10 mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-brand-gold text-lg font-bold uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:0713184718" 
                className="bg-brand-gold text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call 071 318 4718
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const BlurReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  return (
    <div className={`flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h4 className="text-xl font-display font-medium group-hover:text-brand-gold transition-colors">
          {question}
        </h4>
        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-gray-600 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

// --- Main App ---

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-white">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex items-end relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
            alt="Plumbing Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6"
            >
              Professional 24/7 Services
            </motion.p>
            <BlurReveal 
              text="Reliable Water Solutions" 
              className="text-6xl md:text-8xl text-white font-display font-bold leading-[0.9] mb-4"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-sm"
          >
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              Expert plumbing, maintenance, borehole drilling, and pressure pump solutions. 
              Fast response. Quality workmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:0713184718" 
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-gold hover:text-white transition-all duration-300 group shadow-xl"
              >
                <Phone className="group-hover:rotate-12 transition-transform" />
                071 318 4718
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-dark text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years Experience", value: 10, suffix: "+" },
              { label: "Projects Done", value: 500, suffix: "+" },
              { label: "Happy Clients", value: 450, suffix: "+" },
              { label: "Team Members", value: 15, suffix: "" }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeIn}>
                <p className="text-4xl md:text-6xl font-display font-bold text-brand-gold mb-2">
                  <Counter value={stat.value} />{stat.suffix}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight tracking-tight">
                Committed to <br />
                <span className="text-brand-gold">Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Admire Murambwa Letlhabile Plumbing provides reliable and efficient plumbing services across 
                Lethlabile and surrounding areas. We specialize in modern infrastructure maintenance and 
                sustainable water solutions.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Certified Professional Plumbers",
                  "Advanced Leak Detection Technology",
                  "Sustainable Water Management",
                  "Emergency 24/7 Response Team"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-gold" size={24} />
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-brand-light rounded-2xl text-brand-gold shadow-sm">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Guaranteed</h4>
                    <p className="text-sm text-gray-500">Quality workmanship</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-brand-light rounded-2xl text-brand-gold shadow-sm">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-500">Emergency response</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="/images/murambwa_pipe-fixing.webp" 
                  alt="Plumbing Work" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-dark text-white p-10 rounded-[3rem] hidden md:block shadow-2xl border border-white/10">
                <p className="text-5xl font-display font-bold text-brand-gold mb-1">10+</p>
                <p className="text-sm uppercase tracking-[0.2em] font-bold opacity-60">Years of Mastery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Our <span className="text-brand-gold">Expertise</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Comprehensive water and plumbing solutions tailored to your specific needs.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Wrench />,
                title: "Maintenance",
                desc: "General repairs, leak detection, and preventative maintenance.",
                img: "/images/murambwa_outdoor_pipefixing.webp"
              },
              {
                icon: <Droplets />,
                title: "Water Systems",
                desc: "JoJo tank installations and pressure pump system setups.",
                img: "/images/murambwa_jojoTank_fixing.webp"
              },
              {
                icon: <Drill />,
                title: "Boreholes",
                desc: "Professional borehole drilling and water system upgrades.",
                img: "/images/murambwa_outdoorGeyser_installation.webp"
              },
              {
                icon: <ShieldCheck />,
                title: "Installations",
                desc: "Full pipe installations for new builds and renovations.",
                img: "/images/murambwa_modern_showerDesign.webp"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Project <span className="text-brand-gold">Gallery</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light">
              A showcase of our recent plumbing and renovation work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/images/murambwaPlumbing_bathroom_redesign.webp", title: "Bathroom Redesign" },
              { src: "/images/murambwaPlumbing_bathroom_remodel.webp", title: "Modern Remodel" },
              { src: "/images/murambwaPlumbing_outdoor_illing.webp", title: "Outdoor Tilling" },
              { src: "/images/murambwa_inhouse_celling_work.webp", title: "Ceiling Work" },
              { src: "/images/murambwa_modern_bathroom.webp", title: "Luxury Bathroom" },
              { src: "/images/murambwa_outdoor_geyser.webp", title: "Geyser Installation" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-display font-bold text-xl">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tight">
              Common <span className="text-brand-gold">Questions</span>
            </h2>
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl">
            <FAQItem 
              question="What plumbing services do you offer?" 
              answer="We offer a full range of services including general maintenance, leak detection, geyser installations, borehole drilling, JoJo tank setups, and complete bathroom renovations."
            />
            <FAQItem 
              question="Are you available for emergencies?" 
              answer="Yes, we provide 24/7 emergency plumbing services. Whether it's a burst pipe or a major leak, our team is ready to respond at any time."
            />
            <FAQItem 
              question="How do you charge for your services?" 
              answer="Pricing depends on the scope of the project. We provide transparent, upfront quotes after an initial assessment. For emergency calls, we have a standard call-out fee."
            />
            <FAQItem 
              question="Do you work on commercial projects?" 
              answer="Absolutely. We handle both residential and commercial plumbing needs, from small home repairs to large-scale industrial water systems."
            />
            <FAQItem 
              question="What areas do you cover?" 
              answer="We are based in Lethlabile, Brits, and serve the surrounding areas within a 50km radius."
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Droplets size={300} className="text-brand-gold" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-5xl md:text-7xl text-white font-display font-bold mb-8 tracking-tight">
                  Ready to <br />
                  <span className="text-brand-gold italic">Get Started?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                  Don't let a plumbing issue disrupt your day. Contact us now for professional, 
                  reliable service that lasts.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-gold">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Location</p>
                      <p className="text-white text-lg">Block C Lethlabile, Brits, 0264</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-gold">
                      <Clock size={28} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Availability</p>
                      <p className="text-white text-lg">24/7 Emergency Response</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                <div className="flex flex-col gap-6">
                  <a 
                    href="tel:0713184718" 
                    className="w-full bg-white text-black px-10 py-6 rounded-2xl text-2xl font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-4 shadow-xl"
                  >
                    <Phone size={28} />
                    071 318 4718
                  </a>
                  <a 
                    href="https://wa.me/27713184718" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white px-10 py-6 rounded-2xl text-2xl font-bold hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-4 shadow-xl"
                  >
                    <MessageSquare size={28} />
                    WhatsApp Us
                  </a>
                </div>
                <p className="text-center text-gray-500 mt-8 text-sm">
                  Average response time: <span className="text-white font-bold">15 minutes</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              Find Our <span className="text-brand-gold">Office</span>
            </h2>
            <p className="text-gray-600 font-light">Visit us in Lethlabile for professional consultations.</p>
          </motion.div>
          <motion.div 
            {...fadeIn}
            className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0725028028387!2d27.840085478869476!3d-25.469254376504225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe351638a286a3%3A0x156a7dae20c14efe!2sAdmire%20Murambwa%20Letlhabile%20Plumbing!5e0!3m2!1sen!2sza!4v1776163332303!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold tracking-tight">
                LETLHABILE <span className="text-brand-gold">PLUMBING</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Providing professional, reliable, and efficient plumbing solutions across Lethlabile and surrounding areas for over 10 years.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-white/10 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-white/10 transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-bold text-brand-gold uppercase tracking-widest">Services</h4>
              <ul className="space-y-4">
                {[
                  "Maintenance & Repairs",
                  "Water System Setup",
                  "Borehole Drilling",
                  "JoJo Tank Installation",
                  "Pressure Pump Systems",
                  "Bathroom Renovations"
                ].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-bold text-brand-gold uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "#" },
                  { name: "About Us", href: "#" },
                  { name: "Our Gallery", href: "#gallery" },
                  { name: "Common FAQs", href: "#faq" },
                  { name: "Contact Us", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-bold text-brand-gold uppercase tracking-widest">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-gold shrink-0 mt-1" size={20} />
                  <p className="text-gray-400 font-light">Block C Lethlabile, Brits, 0264</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-brand-gold shrink-0" size={20} />
                  <p className="text-gray-400 font-light">071 318 4718</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-brand-gold shrink-0" size={20} />
                  <p className="text-gray-400 font-light">info@letlhabileplumbing.co.za</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-brand-gold shrink-0" size={20} />
                  <p className="text-gray-400 font-light">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()} Letlhabile Plumbing. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-2 group">
        {/* Tooltip */}
        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-[220px] hidden md:block">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Support Online</p>
            </div>
            <p className="text-sm text-gray-700 font-medium leading-tight">Need help? Chat with us on WhatsApp for a fast response!</p>
          </div>
        </div>

        {/* Button */}
        <motion.a 
          href="https://wa.me/27713184718"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 relative flex items-center justify-center"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.543 4.197 1.57 6.05L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.631 0 12.026-5.398 12.029-12.03.003-3.219-1.254-6.242-3.543-8.524z"/>
          </svg>
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
        </motion.a>
      </div>
    </div>
  );
}
