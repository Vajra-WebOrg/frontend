"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  const team = [
    { name: "Sonam Dolma", role: "Manager", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop" },
    { name: "Dorji Tenzin", role: "Tour Guide", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop" },
    { name: "Pema Lhamo", role: "Trip Planner", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" },
    { name: "Karma Wangdi", role: "Logistics", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop" },
    { name: "Sonam Dolma", role: "Support", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" },
  ];

  const services = [
    "Tour Packages", "Booking & Reservation", "Travel Information",
    "Destination Guide", "Cultural Experiences", "Travel Resources"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1578505508709-a0ca679233f2?q=80&w=2070&auto=format&fit=crop"
          alt="Bhutan Monastery"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-black/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="text-xs font-bold tracking-[0.5em] uppercase px-4 py-2 border border-white/30 backdrop-blur-md rounded-full">Our Essence</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-heading font-black uppercase tracking-tighter mb-8 leading-none"
          >
            ABOUT <span className="italic font-light text-brand-primary drop-shadow-2xl">US</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light italic leading-relaxed"
          >
            "Embark on a Journey of Discovery: Explore, Experience, and Embrace the Wonders of Bhutan!"
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-48">
        {/* Bhutan Beyond Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] group">
            <Image
              src="https://images.unsplash.com/photo-1524222717473-730000096953?q=80&w=2070&auto=format&fit=crop"
              alt="Bhutan Landscape"
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 m-10 pointer-events-none" />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase flex items-center">
                <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                Our Story
              </h2>
              <h3 className="text-5xl md:text-7xl font-heading font-black leading-none tracking-tighter text-gray-900">
                BHUTAN <br /><span className="italic font-light text-brand-primary">BEYOND</span>
              </h3>
            </div>
            <p className="text-gray-400 text-lg italic leading-relaxed font-light">Know our story, know us better</p>
            <div className="text-gray-500 leading-[1.8] font-light text-lg space-y-6 italic">
              <p>
                "Bhutan Beyond" is a comprehensive tourism sanctuary dedicated to showcasing the diverse cultural, natural, and historical attractions of Bhutan.
              </p>
              <p>
                A small Himalayan kingdom known for its unique blend of tradition and modernity, our website offers unique insight into the rich heritage, stunning landscapes, vibrant festivals, and sustainable tourism initiatives that make Bhutan a truly remarkable destination.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-12">
            <div className="space-y-4">
              <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase flex items-center">
                <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                Purpose
              </h2>
              <h3 className="text-5xl md:text-7xl font-heading font-black leading-none tracking-tighter text-gray-900">
                MISSION <span className="italic font-light text-brand-primary">& VISION</span>
              </h3>
            </div>
            <div className="space-y-10">
              <div className="group space-y-4">
                <h4 className="text-brand-primary font-black text-xl tracking-tight flex items-center">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 text-xs">01</span>
                  Mission
                </h4>
                <p className="text-gray-500 leading-relaxed font-light italic text-lg pl-10 border-l border-brand-primary/10">
                  To promote sustainable tourism, offering travelers an authentic experience of Bhutan's cultural, natural, and historical heritage while preserving the environment for future generations.
                </p>
              </div>
              <div className="group space-y-4">
                <h4 className="text-brand-primary font-black text-xl tracking-tight flex items-center">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 text-xs">02</span>
                  Vision
                </h4>
                <p className="text-gray-500 leading-relaxed font-light italic text-lg pl-10 border-l border-brand-primary/10">
                  To become the leading gateway for conscious travelers, offering a seamless and deeply immersive journey into the heart of the Dragon Kingdom.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(139,30,31,0.1)] group">
            <Image
              src="https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=2070&auto=format&fit=crop"
              alt="Happy Travelers"
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end space-y-8 md:space-y-0 text-left">
            <div className="max-w-2xl">
              <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                Expertise
              </h2>
              <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
                WHAT WE <br />
                <span className="italic font-light text-brand-primary">OFFER</span>
              </h3>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed border-l border-brand-primary/20 pl-6">
                "Our services are crafted with precision to ensure every traveler experiences the true essence of the Dragon Kingdom."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-square bg-white border border-brand-primary/5 flex flex-col items-center justify-center p-10 text-center rounded-sm shadow-[0_20px_50px_rgba(139,30,31,0.03)] group hover:bg-brand-primary transition-all duration-700"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-500">
                  <span className="text-brand-primary font-black text-sm group-hover:text-brand-primary transition-colors">{i + 1}</span>
                </div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-tight text-gray-900 group-hover:text-brand-primary-fg transition-colors duration-500">{service}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-24 text-left">
          <div className="flex flex-col md:flex-row justify-between items-end space-y-8 md:space-y-0">
            <div className="max-w-2xl">
              <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                The Guardians
              </h2>
              <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
                MEET OUR <br />
                <span className="italic font-light text-brand-primary">TEAM</span>
              </h3>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed border-l border-brand-primary/20 pl-6">
                "Driven by passion and deep-rooted knowledge, our team is committed to making your Bhutanese dreams a reality."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="space-y-6 group"
              >
                <div className="relative aspect-[3/4.5] overflow-hidden rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="text-left space-y-2 border-l-2 border-brand-primary/20 pl-4 group-hover:border-brand-primary transition-colors duration-500">
                  <h4 className="text-sm font-black uppercase text-gray-900 tracking-tight leading-none group-hover:text-brand-primary transition-colors">{member.name}</h4>
                  <p className="text-[10px] font-medium text-brand-primary uppercase tracking-[0.2em]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
