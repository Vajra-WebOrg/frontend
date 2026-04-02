"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, X, MapPin, Compass } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const destinations = [
  {
    name: "Paro",
    image: "/paroPlace.jpg",
    tag: "Sacred Valley",
    description:
      "Home to the legendary Tiger's Nest Monastery, Paro is a wide and verdant valley with a rich history and a blend of traditional and modern charm. It serves as the gateway to Bhutan for most international travelers.",
    details: [
      "Tiger's Nest Monastery",
      "National Museum",
      "Paro Rinpung Dzong",
      "Kyichu Lhakhang",
    ],
  },
  {
    name: "Thimphu",
    image: "/thimphuPlace.jpg",
    tag: "Capital City",
    description:
      "The unique capital of Bhutan, where traditional culture meets modernity. Thimphu is the only capital in the world without a single traffic light, yet it hums with vibrant energy, art, and political life.",
    details: [
      "Memorial Chorten",
      "Buddha Dordenma",
      "Tashichho Dzong",
      "Authentic Bhutanese Crafts",
    ],
  },
  {
    name: "Punakha",
    image: "/punakhaPlace.jpg",
    tag: "Ancient Capital",
    description:
      "Located at the confluence of the Pho Chhu and Mo Chhu rivers, Punakha is famous for its stunning Dzong—one of the most beautiful in Bhutan—and its subtropical valleys perfect for rice cultivation.",
    details: [
      "Punakha Dzong",
      "Chimi Lhakhang",
      "Suspension Bridge",
      "Khamsum Yulley Namgyal",
    ],
  },
  {
    name: "Phuntsholing",
    image: "/phuentsolingPlace.jpeg",
    tag: "Gateway to India",
    description:
      "Situated on the border with India, Phuntsholing is a bustling commercial hub. It offers a fascinating mix of Bhutanese and Indian cultures and is the starting point for road journeys into the interior.",
    details: [
      "Amo Chhu Crocodile Farm",
      "Karbandi Monastery",
      "Zangtho Pelri Lhakhang",
      "Border Gate",
    ],
  },
  {
    name: "Wangdue",
    image: "/wangduePlace.jpg",
    tag: "Cultural Heartland",
    description:
      "Known for its bamboo work and slate carvings, Wangdue Phodrang is a bridge to central Bhutan. The valley is characterized by its dramatic ridges and the reconstruction of its historic fortress.",
    details: [
      "Wangdue Phodrang Dzong",
      "Radak Neykhang",
      "Phobjikha Valley nearby",
      "Local Bamboo Crafts",
    ],
  },
];

export default function TopDestinations() {
  const [selectedDest, setSelectedDest] = useState<
    (typeof destinations)[0] | null
  >(null);

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
          <div className="max-w-2xl text-left">
            <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
              Discover Bhutan
            </h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
              Top <br />
              <span className="italic font-light text-brand-primary">
                Destinations
              </span>
            </h3>
          </div>
          <div className="flex flex-col items-end space-y-8">
            <div className="hidden md:block">
              <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed border-l border-brand-primary/20 pl-6 text-left">
                &ldquo;From the bustling capital to the sacred valleys, every
                corner of Bhutan whispers a story of ancient wisdom.&rdquo;
              </p>
            </div>
            <button className="group relative border border-brand-primary/20 text-brand-primary px-10 py-5 overflow-hidden transition-all duration-500 shadow-lg shadow-brand-primary/5 hover:border-brand-primary">
              <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] uppercase group-hover:text-brand-primary-fg transition-colors duration-500">
                Explore Destinations
              </span>
              <div className="absolute inset-0 bg-brand-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 lg:mb-32">
          {/* Paro - Takes vertical space */}
          <div
            onClick={() => setSelectedDest(destinations[0])}
            className="md:col-span-1 md:row-span-2 relative aspect-[4/5] md:aspect-auto group overflow-hidden bg-gray-100 rounded-sm shadow-2xl shadow-brand-primary/5 cursor-pointer"
          >
            <Image
              src={destinations[0].image}
              alt="Paro"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-10 left-10">
              <span className="text-white font-black text-3xl uppercase tracking-tighter drop-shadow-2xl flex items-center">
                {destinations[0].name}{" "}
                <ArrowRight className="ml-4 h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-brand-primary" />
              </span>
              <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] mt-2 font-medium">
                {destinations[0].tag}
              </p>
            </div>
          </div>

          {/* Thimphu */}
          <div
            onClick={() => setSelectedDest(destinations[1])}
            className="relative aspect-square group overflow-hidden bg-gray-100 rounded-sm shadow-2xl shadow-brand-primary/5 cursor-pointer"
          >
            <Image
              src={destinations[1].image}
              alt="Thimphu"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8">
              <span className="text-white font-black text-xl uppercase tracking-tighter">
                {destinations[1].name}
              </span>
            </div>
          </div>

          {/* Punakha */}
          <div
            onClick={() => setSelectedDest(destinations[2])}
            className="relative aspect-square group overflow-hidden bg-gray-100 rounded-sm shadow-2xl shadow-brand-primary/5 cursor-pointer"
          >
            <Image
              src={destinations[2].image}
              alt="Punakha"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8">
              <span className="text-white font-black text-xl uppercase tracking-tighter">
                {destinations[2].name}
              </span>
            </div>
          </div>

          {/* Phuntsholing & Wangdue row */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <div
              onClick={() => setSelectedDest(destinations[3])}
              className="relative aspect-[16/10] group overflow-hidden bg-gray-100 rounded-sm shadow-2xl shadow-brand-primary/5 cursor-pointer"
            >
              <Image
                src={destinations[3].image}
                alt="Phuntsholing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <span className="text-white font-black text-xl uppercase tracking-tighter leading-none">
                  {destinations[3].name}
                </span>
              </div>
            </div>
            <div
              onClick={() => setSelectedDest(destinations[4])}
              className="relative aspect-[16/10] group overflow-hidden bg-gray-100 rounded-sm shadow-2xl shadow-brand-primary/5 cursor-pointer"
            >
              <Image
                src={destinations[4].image}
                alt="Wangdue"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <span className="text-white font-black text-xl uppercase tracking-tighter leading-none">
                  {destinations[4].name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDest(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl"
            />

            <motion.div
              layoutId={selectedDest.name}
              className="relative w-full max-w-5xl bg-white shadow-[0_50px_100px_-20px_rgba(139,30,31,0.25)] overflow-hidden flex flex-col md:flex-row h-auto max-h-[85vh] rounded-sm z-10"
            >
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-6 right-6 z-30 bg-white/80 backdrop-blur-md hover:bg-brand-primary hover:text-brand-primary-fg p-2.5 rounded-full transition-all duration-500 text-brand-primary shadow-lg active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-full bg-gray-100">
                <Image
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-8 left-8 bg-brand-primary text-brand-primary-fg px-6 py-2.5 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl">
                  Focus
                </div>
              </div>

              <div className="w-full md:w-[55%] p-10 lg:p-14 flex flex-col justify-center bg-white overflow-y-auto">
                <h2 className="text-brand-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 flex items-center">
                  <span className="w-8 h-[1px] bg-brand-primary/30 mr-3" />
                  Explore Location
                </h2>
                <h3 className="text-4xl lg:text-5xl font-heading font-black leading-[0.95] mb-6 tracking-tighter text-gray-900">
                  {selectedDest.name}
                </h3>

                <div className="flex items-center text-brand-primary gap-3 mb-8">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                    {selectedDest.tag}
                  </span>
                </div>

                <p className="text-base text-gray-500 leading-relaxed mb-6 font-light italic">
                  &quot;{selectedDest.description}&quot;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gray-100">
                  {selectedDest.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Compass className="h-4 w-4 text-brand-primary/40" />
                      <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-gray-900">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact#contact-form"
                    className="group relative bg-brand-primary text-brand-primary-fg px-12 py-4 overflow-hidden transition-all duration-500 shadow-xl shadow-brand-primary/10 inline-block text-center w-full sm:w-auto"
                  >
                    <span className="relative z-10 text-[9px] font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">
                      Plan Visit
                    </span>
                    <div className="absolute inset-0 bg-gray-900 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
