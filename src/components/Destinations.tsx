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
      className="py-32 bg-brand-deep text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-secondary text-sm font-bold tracking-[0.3em] uppercase mb-6"
            >
              Enchanting Valleys
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-medium leading-[1.1]"
            >
              Sacred <span className="italic font-serif">Sanctuaries</span>{" "}
              <br />
              of the Kingdom
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 md:mt-0 max-w-sm text-white/60 italic text-lg leading-relaxed"
          >
            From the subtropical lowlands to the alpine heights of the north,
            Bhutan’s landscape is as diverse as its heritage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-brand-secondary text-xs font-bold tracking-widest uppercase mb-2 block">
                    {dest.elevation} Elevation
                  </span>
                  <h4 className="text-3xl font-heading text-white">
                    {dest.name}
                  </h4>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <p className="text-white/70 max-w-xs leading-relaxed italic">
                  {dest.description}
                </p>
                <button className="group/btn flex items-center space-x-2 text-brand-secondary font-bold text-xs tracking-widest uppercase mt-2">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
