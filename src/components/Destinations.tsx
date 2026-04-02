"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Paro Valley",
    description: "Home to the iconic Tiger's Nest and pristine alpine scenery.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    elevation: "2,200m",
  },
  {
    name: "Punakha",
    description:
      "The ancient capital, where two rivers meet at the majestic Dzong.",
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2070&auto=format&fit=crop",
    elevation: "1,200m",
  },
  {
    name: "Thimphu",
    description:
      "A capital like no other, blending deep tradition with modern life.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    elevation: "2,334m",
  },
  {
    name: "Phobjikha",
    description:
      "A wide glacial valley, winter home to the rare black-necked cranes.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    elevation: "3,000m",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="py-32 bg-charcoal text-white overflow-hidden relative"
    >
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center"
            >
              <span className="w-12 h-[1px] bg-gold/30 mr-4" />
              Enchanting Valleys
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-black leading-[1.1] tracking-tighter"
            >
              Sacred{" "}
              <span className="text-gradient-gold italic font-light">
                Sanctuaries
              </span>{" "}
              <br />
              of the Kingdom
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 md:mt-0 max-w-sm text-light-gray text-sm leading-relaxed border-l-2 border-gold/30 pl-6 italic"
          >
            From the subtropical lowlands to the alpine heights of the north,
            Bhutan’s landscape is as diverse as its heritage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-gold/10 group-hover:border-gold/30 transition-all duration-700">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Elevation Badge */}
                <div className="absolute top-6 right-6 glass-gold px-4 py-2">
                  <span className="text-gold text-[9px] font-bold tracking-[0.25em] uppercase">
                    {dest.elevation}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-3xl font-heading font-bold text-white group-hover:text-gold transition-colors duration-500">
                    {dest.name}
                  </h4>
                </div>
              </div>

              <div className="flex justify-between items-start gap-6">
                <p className="text-light-gray text-sm max-w-xs leading-relaxed italic flex-1">
                  {dest.description}
                </p>
                <button className="group/btn flex items-center space-x-2 text-gold hover:text-white font-bold text-[10px] tracking-[0.25em] uppercase mt-1 transition-colors flex-shrink-0">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
