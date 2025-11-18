import  { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Gamepad2, Users, Wifi, Coffee } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollMagic from 'scrollmagic';
import './App.css';
import dota2 from './assets/dota2.jpg'
import cs2 from './assets/cs2.jpg'
import valorant from './assets/valorant.jpg'

export default function PixelArenaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    hours: '1',
    setup: 'standard'
  });

  const games = [
    {
      name: 'Dota 2',
      image: dota2,
      description: 'Epic MOBA battles',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'CS 2',
      image: cs2,
      description: 'Tactical FPS action',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Valorant',
      image: valorant,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'League of Legends',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80',
      description: 'Strategic MOBA',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Fortnite',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80',
      description: 'Battle Royale',
      color: 'from-purple-500 to-blue-500'
    },
    {
      name: 'Apex Legends',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
      description: 'Fast-paced BR',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const rates = [
    {
      title: 'Standard Gaming',
      price: '₹50',
      duration: 'per hour',
      features: ['High-end Gaming PCs', 'Mechanical Keyboards', 'Gaming Mouse', 'HD Monitor', 'High-Speed Internet']
    },
    {
      title: 'Premium Gaming',
      price: '₹80',
      duration: 'per hour',
      features: ['RTX 4070 Graphics', 'RGB Mechanical Keyboard', 'Pro Gaming Mouse', '144Hz Monitor', 'Gigabit Internet', 'Premium Headset']
    },
    {
      title: 'VIP Lounge',
      price: '₹120',
      duration: 'per hour',
      features: ['RTX 4090 Graphics', 'Custom RGB Setup', 'Pro Peripherals', '240Hz Monitor', 'Private Booth', 'Unlimited Snacks', 'Dedicated Service']
    }
  ];

  const handleBookingSubmit = () => {
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone || !bookingForm.date || !bookingForm.time) {
      alert('Please fill in all required fields!');
      return;
    }
    alert(`Booking request received for ${bookingForm.name}! We'll contact you at ${bookingForm.phone} to confirm.`);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      hours: '1',
      setup: 'standard'
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out"
    });

    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    // Fade in animation for Games section title
    new ScrollMagic.Scene({
      triggerElement: ".games-section-title",
      triggerHook: 0.9, // show when scrolled 90% of the way in
      reverse: false // does not repeat when scrolling back up
    })
    .setClassToggle(".games-section-title", "fade-in-up") // add class to games-section-title
    .addTo(controller);

    // Fade in animation for each game card
    document.querySelectorAll('.game-card').forEach((element, index) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
        reverse: false
      })
      .on("enter", () => {
        gsap.fromTo(element, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: index * 0.1 }
        );
      })
      .addTo(controller);
    });

    // Fade in animation for Rates section title
    new ScrollMagic.Scene({
      triggerElement: ".rates-section-title",
      triggerHook: 0.9,
      reverse: false
    })
    .setClassToggle(".rates-section-title", "fade-in-up")
    .addTo(controller);

    // Fade in animation for each rate card
    document.querySelectorAll('.rate-card').forEach((element, index) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
        reverse: false
      })
      .on("enter", () => {
        gsap.fromTo(element, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: index * 0.1 }
        );
      })
      .addTo(controller);
    });

    // Fade in animation for Booking section title
    new ScrollMagic.Scene({
      triggerElement: ".booking-section-title",
      triggerHook: 0.9,
      reverse: false
    })
    .setClassToggle(".booking-section-title", "fade-in-up")
    .addTo(controller);

    // Fade in animation for Contact section title
    new ScrollMagic.Scene({
      triggerElement: ".contact-section-title",
      triggerHook: 0.9,
      reverse: false
    })
    .setClassToggle(".contact-section-title", "fade-in-up")
    .addTo(controller);

  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                PixelArena
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition">Home</button>
              <button onClick={() => scrollToSection('games')} className="hover:text-purple-400 transition">Games</button>
              <button onClick={() => scrollToSection('rates')} className="hover:text-purple-400 transition">Rates</button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-purple-400 transition">Book Now</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition">Contact</button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-purple-500/20">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-purple-400">Home</button>
              <button onClick={() => scrollToSection('games')} className="block w-full text-left hover:text-purple-400">Games</button>
              <button onClick={() => scrollToSection('rates')} className="block w-full text-left hover:text-purple-400">Rates</button>
              <button onClick={() => scrollToSection('booking')} className="block w-full text-left hover:text-purple-400">Book Now</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-purple-400">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse hero-title">
              Welcome to PixelArena
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience gaming like never before with high-end PCs, lightning-fast internet, and an electric atmosphere
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-6 py-3 rounded-lg border border-purple-500/50">
                <Wifi className="w-5 h-5 text-purple-400" />
                <span>500Mbps Internet</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-6 py-3 rounded-lg border border-purple-500/50">
                <Users className="w-5 h-5 text-purple-400" />
                <span>10+ Gaming Stations</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-6 py-3 rounded-lg border border-purple-500/50">
                <Coffee className="w-5 h-5 text-purple-400" />
                <span>Cafe & Snacks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent games-section-title">
            Popular Games Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 game-card">
                <div className="h-48 bg-gradient-to-br relative overflow-hidden">
                  <img src={game.image} alt={game.name} className="w-full h-full object-cover"  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-30`}></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-purple-400">{game.name}</h3>
                  <p className="text-gray-400 mt-2">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent rates-section-title">
            Our Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rates.map((rate, index) => (
              <div key={index} className={`bg-gray-800 rounded-lg p-8 border-2 ${index === 1 ? 'border-purple-500 scale-105' : 'border-gray-700'} hover:border-purple-500 transition-all rate-card`}>
                <h3 className="text-2xl font-bold text-center mb-4">{rate.title}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-purple-400">{rate.price}</span>
                  <span className="text-gray-400 ml-2">{rate.duration}</span>
                </div>
                <ul className="space-y-3">
                  {rate.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent booking-section-title">
            Book Your Session
          </h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-purple-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  required
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <input
                  type="time"
                  required
                  value={bookingForm.time}
                  onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Hours</label>
                <select
                  value={bookingForm.hours}
                  onChange={(e) => setBookingForm({...bookingForm, hours: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  {[1,2,3,4,5,6].map(h => <option key={h} value={h}>{h} Hour{h > 1 ? 's' : ''}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Setup Type</label>
                <select
                  value={bookingForm.setup}
                  onChange={(e) => setBookingForm({...bookingForm, setup: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  <option value="standard">Standard Gaming (₹50/hr)</option>
                  <option value="premium">Premium Gaming (₹80/hr)</option>
                  <option value="vip">VIP Lounge (₹120/hr)</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleBookingSubmit}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent contact-section-title">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-400">Shop No : 6, Kishor Kunj, Building No 4, Chintamani Vihar, Y K Nagar, Virar West, Virar, Maharashtra 401303</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+91 7507230677</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">info@pixelarena.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-400">Mon-Thu: 10 AM - 12 AM<br/>Fri-Sun: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-purple-500/30 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.4827224747661!2d72.80164526962373!3d19.458546263368895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI3JzMwLjgiTiA3MsKwNDgnMDguMiJF!5e0!3m2!1sen!2sin!4v1763486742206!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="PixelArena Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gamepad2 className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold">PixelArena</span>
          </div>
          <p className="text-gray-400">© 2025 PixelArena Gaming Cafe. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Level up your gaming experience!</p>
        </div>
      </footer>
    </div>
  );
}