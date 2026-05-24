// Misty Horizon Holidays - Premium Travel Website
// Complete production-ready React application

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useForm } from 'react-hook-form';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiX, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Initialize Lenis for smooth scrolling
let lenis;

// ============ COLOR SYSTEM ============
const COLORS = {
  primary: '#F4C46E',      // Golden sun
  secondary: '#7CB8C8',    // Teal mountains
  tertiary: '#8BC4D4',     // Light blue
  dark: '#3D6B4F',         // Deep forest green
  sage: '#A8B89C',         // Soft sage
  cream: '#F5F5F5',        // Off-white
  text: '#1a1a1a',
  textLight: '#666666',
  bgLight: '#FAFAF9',
};

const DESTINATIONS = [
  {
    id: 1,
    name: 'Sikkim',
    description: 'Experience the mystical beauty of the Himalayas with snow-capped peaks and pristine valleys',
    attractions: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'Lachung', 'Yumthang Valley'],
    bestTime: 'March - May, September - November',
    image: 'https://images.pexels.com/photos/20323309/pexels-photo-20323309.jpeg',
    color: 'from-[#7CB8C8]/40 to-[#8BC4D4]/40',
  },
  {
    id: 2,
    name: 'Darjeeling',
    description: 'The land of the Toy Train, tea gardens, and breathtaking mountain vistas',
    attractions: ['Tea Gardens', 'Tiger Hill', 'Toy Train', 'Batasia Loop'],
    bestTime: 'October - December, March - May',
    image: 'https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg',
    color: 'from-[#F4C46E]/40 to-[#E8B84F]/40',
  },
  {
    id: 3,
    name: 'Meghalaya',
    description: 'The wettest place on Earth, famous for living root bridges and pristine nature',
    attractions: ['Shillong', 'Cherrapunji', 'Dawki River', 'Living Root Bridge'],
    bestTime: 'June - September, October - November',
    image: 'https://images.pexels.com/photos/4233677/pexels-photo-4233677.jpeg',
    color: 'from-[#A8B89C]/40 to-[#9AA88B]/40',
  },
  {
    id: 4,
    name: 'Assam',
    description: 'Home to the majestic one-horned rhino and sprawling tea estates',
    attractions: ['Kaziranga National Park', 'Tea Estates', 'Kamakhya Temple'],
    bestTime: 'November - April',
    image: 'https://images.pexels.com/photos/37116953/pexels-photo-37116953.jpeg',
    color: 'from-[#3D6B4F]/40 to-[#4A7D5C]/40',
  },
  {
    id: 5,
    name: 'Arunachal Pradesh',
    description: 'The land of the sunrise with sacred monasteries and untouched mountains',
    attractions: ['Tawang', 'Monasteries', 'Scenic Mountains'],
    bestTime: 'April - June, September - October',
    image: 'https://images.unsplash.com/photo-1589808015717-a626de258af0?q=80',
    color: 'from-[#7CB8C8]/40 to-[#8BC4D4]/40',
  },
  {
    id: 6,
    name: 'Bhutan',
    description: 'The kingdom of gross national happiness with monasteries perched on cliffs',
    attractions: ['Paro', 'Tiger Nest', 'Thimphu'],
    bestTime: 'March - May, September - November',
    image: 'https://waitbutwhy.com/wp-content/uploads/2025/11/bhutan_FEATURE-750x563.jpeg',
    color: 'from-[#A8B89C]/40 to-[#9AA88B]/40',
  },
  {
    id: 7,
    name: 'Kashmir',
    description: 'The crown jewel of India with stunning lakes, gardens, and snow-capped mountains',
    attractions: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    bestTime: 'April - June, September - November',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80',
    color: 'from-[#F4C46E]/40 to-[#E8B84F]/40',
  },
];

// ============ HERO SECTION ============
const HeroSection = ({ onOpenModal }) => {
  const { ref, inView } = useInView({ threshold: 0.3, once: true });
  
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const trustCards = [
    { icon: '✓', text: 'Trusted Travel Partner' },
    { icon: '✓', text: 'North East Experts' },
    { icon: '✓', text: 'Custom Tour Packages' },
    { icon: '✓', text: 'Local Travel Support' },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#F5F5F5] via-[#FAFAF9] to-white"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16 md:py-24">
        <motion.div
          className="text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Main Heading */}
          <motion.h1
            variants={heroVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Explore Northeast with Misty Horizon Holiday
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={heroVariants}
            className="text-2xl md:text-3xl text-[#F4C46E] mb-5 font-semibold italic tracking-wide"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            More than Travels — it's a Story
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={heroVariants}
            className="flex justify-center gap-4 mb-6"
          >
            <a
              href="https://www.instagram.com/mistyhorizon123?igsh=aWw1ZnViZDUzMXEy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <FaInstagram className="w-5 h-5 text-pink-300" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/1DmNbJFHFa/?ref=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <FaFacebook className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={heroVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide"
          >
            Premium Tours • Hotel Booking • Ticket Booking
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroVariants}
            className="flex flex-col md:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-[#F4C46E] text-[#3D6B4F] font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Packages
            </button>
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-white/90 text-[#3D6B4F] font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Plan Your Trip
            </button>
            <a
              href="tel:+917384853108"
              className="px-8 py-4 bg-[#7CB8C8] text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiPhone /> Call Now
            </a>
          </motion.div>

          {/* Trust Cards */}
          <motion.div
            variants={heroVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {trustCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4 text-white hover:bg-white/30 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <p className="text-sm font-semibold">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Counters */}
          <motion.div
            variants={heroVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 text-white mb-12 md:mb-0"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6">
              <p className="text-4xl font-bold mb-2">
                <CountUp start={0} end={5000} duration={2.5} separator="," />+
              </p>
              <p className="text-sm opacity-90">Happy Travelers</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6">
              <p className="text-4xl font-bold mb-2">
                <CountUp start={0} end={1000} duration={2.5} separator="," />+
              </p>
              <p className="text-sm opacity-90">Trips Organized</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6">
              <p className="text-4xl font-bold mb-2">
                <CountUp start={0} end={7} duration={2.5} />+
              </p>
              <p className="text-sm opacity-90">Destinations</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-3 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-white/60 text-sm mb-2 text-center">Scroll to explore</p>
        <FiChevronDown className="text-white/60 w-6 h-6 mx-auto" />
      </motion.div>
    </motion.section>
  );
};

// ============ ENQUIRY MODAL ============
const EnquiryModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const message = [
      'Hi Misty Horizon, I want to inquire about travel packages.',
      '',
      `Destination: ${data.destination}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Travel Month: ${data.month}`,
      `Travel Type: ${data.travelType || 'Not specified'}`,
      `Members: ${data.members}`,
      `Additional Message: ${data.message || 'Not specified'}`,
    ].join('\n');

    window.open(`https://wa.me/917384853108?text=${encodeURIComponent(message)}`, '_blank');
    reset();
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const destinations = DESTINATIONS.map((destination) => destination.name);
  const travelTypes = ['Family Tour', 'Honeymoon', 'Group Trip', 'Adventure', 'Solo Trip'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#7CB8C8] to-[#8BC4D4] p-5 text-white">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-all"
              >
                <FiX className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                Where Do You Want To Go?
              </h2>
              <p className="text-white/80 text-sm">Let us craft your perfect mountain adventure</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-3">
                {/* Destination (full width) */}
                <div>
                  <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Destination *</label>
                  <select
                    {...register('destination', { required: true })}
                    className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Full Name *</label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Phone *</label>
                    <input
                      {...register('phone', { required: true })}
                      type="tel"
                      className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                      placeholder="+91"
                    />
                  </div>
                </div>

                {/* Email & Travel Month */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Email *</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Travel Month *</label>
                    <select
                      {...register('month', { required: true })}
                      className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                    >
                      <option value="">Select month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Travel Type & Members */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Travel Type</label>
                    <select
                      {...register('travelType')}
                      className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                    >
                      <option value="">Select type</option>
                      {travelTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Members *</label>
                    <input
                      {...register('members', { required: true })}
                      type="number"
                      min="1"
                      className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                      placeholder="No. of travelers"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#3D6B4F] mb-1">Additional Message</label>
                  <textarea
                    {...register('message')}
                    className="w-full px-3 py-2 border-2 border-[#E0E0E0] rounded-lg focus:border-[#7CB8C8] focus:outline-none transition-all text-sm"
                    placeholder="Tell us more about your travel plans..."
                    rows="2"
                  />
                </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp className="w-4 h-4" /> Send Details On WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============ DESTINATIONS SECTION ============
const DestinationsSection = () => {
  const destinations = DESTINATIONS;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the most enchanting destinations across the North East and Himalayas
          </p>
        </motion.div>

        <div className="space-y-12">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white">
                {/* Image */}
                <motion.div
                  className="h-96 md:h-full overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className={`bg-gradient-to-br ${dest.color} backdrop-blur p-8 md:p-12 flex flex-col justify-between`}>
                  <div>
                    <h3 className="text-4xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      {dest.name}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {dest.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#3D6B4F] mb-3">Popular Attractions</h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.attractions.map((attr, i) => (
                          <span
                            key={i}
                            className="bg-white/60 text-[#3D6B4F] px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {attr}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-6">
                      <span className="font-semibold">Best Time:</span> {dest.bestTime}
                    </p>
                  </div>

                  <motion.a
                    href={`https://wa.me/917384853108?text=${encodeURIComponent(`Hi Misty Horizon Holidays, I'm interested in exploring ${dest.name}. Please share package details and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg self-start hover:bg-[#1ebe5d] transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp className="w-5 h-5" /> Explore Package →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ SERVICES SECTION ============
const ServicesSection = () => {
  const services = [
    { icon: '🏔️', title: 'North East Tour Packages', desc: 'Customized tours across all NE states' },
    { icon: '⛷️', title: 'Sikkim Tours', desc: 'Explore the beauty of Sikkim' },
    { icon: '🏮', title: 'Darjeeling Tours', desc: 'Experience tea gardens and mountain views' },
    { icon: '🌊', title: 'Meghalaya Tours', desc: 'Discover the wettest region on Earth' },
    { icon: '🏜️', title: 'Arunachal Tours', desc: 'Land of the sunrise adventure' },
    { icon: '🏛️', title: 'Bhutan Tours', desc: 'Happiness kingdom exploration' },
    { icon: '❄️', title: 'Kashmir Packages', desc: 'Paradise on Earth experience' },
    { icon: '🏨', title: 'Hotel Booking', desc: 'Premium accommodation options' },
    { icon: '🎫', title: 'Ticket Booking', desc: 'Flight, train, cable car tickets' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete travel solutions for your Himalayan adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4"
              style={{ borderColor: COLORS.secondary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#3D6B4F] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ WHY CHOOSE US ============
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: '🌍',
      title: 'Local Travel Experts',
      desc: 'Born and raised in the mountains with deep local knowledge',
    },
    {
      icon: '💰',
      title: 'Affordable Packages',
      desc: 'Premium experiences at competitive prices',
    },
    {
      icon: '🛡️',
      title: 'Premium Support',
      desc: '24/7 customer support throughout your journey',
    },
    {
      icon: '🏨',
      title: 'Hotel Assistance',
      desc: 'Curated hotels and accommodations',
    },
    {
      icon: '✨',
      title: 'Custom Packages',
      desc: 'Tailor-made itineraries for your preferences',
    },
    {
      icon: '🚗',
      title: 'Safe Travel',
      desc: 'Premium vehicles and experienced drivers',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#7CB8C8]/10 to-[#8BC4D4]/10 p-8 rounded-2xl backdrop-blur"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-[#3D6B4F] mb-3">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ TESTIMONIALS ============
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'An absolutely unforgettable journey through Sikkim! The team made everything so seamless and personalized.',
      avatar: '👩‍🦰',
    },
    {
      name: 'Rahul Singh',
      location: 'Mumbai',
      rating: 5,
      text: 'Best travel experience ever. The local insights and premium service exceeded all expectations.',
      avatar: '👨‍💼',
    },
    {
      name: 'Anjali Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'From Darjeeling to Bhutan, every moment was magical. Highly recommend Misty Horizon!',
      avatar: '👩',
    },
    {
      name: 'Vikram Kumar',
      location: 'Hyderabad',
      rating: 5,
      text: 'The honeymoon package was perfect. Professional team, beautiful destinations, wonderful memories.',
      avatar: '👨',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Guest Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who explored with us
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-bold text-[#3D6B4F] text-lg">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.location}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// ============ GALLERY SECTION ============
const GallerySection = () => {
  const images = [
    ...DESTINATIONS.map((destination) => ({
      src: destination.image,
      alt: destination.name,
    })),
    { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779617085/WhatsApp_Image_2026-05-24_at_14.43.51_xn1vlv.jpg', alt: 'Misty Horizon Travel' },
    { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779617085/WhatsApp_Image_2026-05-24_at_14.43.51_1_uaam2p.jpg', alt: 'Misty Horizon Journey' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Gallery
          </h2>
          <p className="text-xl text-gray-600">Beautiful moments from our journeys</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <motion.div
              key={image.alt}
              className="rounded-xl overflow-hidden shadow-lg h-64 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTACT SECTION ============
const ContactSection = () => {
  const contactInfo = [
    { icon: FiPhone, label: 'Phone', value: '+91 7384853108', href: 'tel:+917384853108' },
    { icon: FiMail, label: 'Email', value: 'mistyhorizonholidays@gmail.com', href: 'mailto:mistyhorizonholidays@gmail.com' },
    { icon: FiMapPin, label: 'Address', value: 'Kutchery Rd, near DM Office, Chauk Bazaar, Darjeeling' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#3D6B4F] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">We're here to help plan your adventure</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-12 h-12 text-[#7CB8C8] mb-4" />
                <h3 className="text-xl font-bold text-[#3D6B4F] mb-2">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="text-gray-700 hover:text-[#7CB8C8] transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.value}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Google Maps */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg h-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8239038249517!2d88.26365397655774!3d27.0412341755176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42b8ba0c14ba5%3A0x1d3d8db36c5b7e2!2sKutchery%20Rd%2C%20Chauk%20Bazaar%2C%20Darjeeling!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

// ============ FLOATING WHATSAPP BUTTON ============
const FloatingWhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917384853108?text=Hi%20Misty%20Horizon%2C%20I%20want%20to%20inquire%20about%20travel%20packages"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-40 hover:shadow-3xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <FaWhatsapp className="w-6 h-6" />
    </motion.a>
  );
};

// ============ MAIN APP ============
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }).catch(() => {
      console.log('Lenis smooth scroll disabled');
    });

    // Open modal whenever the site loads
    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-30 border-b border-gray-100"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1779605655/WhatsApp_Image_2026-05-24_at_12.23.32-removebg-preview_pb4rxf.png"
                alt="Misty Horizon Holidays logo"
                className="h-11 w-11 object-contain"
              />
              <div className="text-2xl font-bold text-[#3D6B4F]" style={{ fontFamily: 'Georgia, serif' }}>
                Misty Horizon
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-[#7CB8C8] text-white font-semibold rounded-lg hover:bg-[#6BA8B8] transition-all"
            >
              Plan Trip
            </button>
          </div>
        </motion.nav>

        {/* Hero */}
        <div className="pt-20">
          <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        </div>

        {/* Sections */}
        <DestinationsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />

        {/* Modal */}
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Floating Buttons */}
        <FloatingWhatsAppButton />

        {/* Footer */}
        <motion.footer
          className="bg-[#3D6B4F] text-white py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">&copy; 2026 Misty Horizon Holidays. All rights reserved.</p>
            <p className="text-sm text-white/70">
              Exploring the magic of the Himalayas, one journey at a time.
            </p>
          </div>
        </motion.footer>
      </div>
  );
}
