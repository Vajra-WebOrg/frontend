"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Mountain Treks",
    shortDesc: "Navigate the pristine trails of the high Himalayas.",
    longDesc: "Traverse the legendary Snowman Trek or find solace in the Jhomolhari circuits. Our treks are designed to respect the environment while challenging your limits, guided by local experts who carry the wisdom of the mountains. Expect high-altitude passes, turquoise glacial lakes, and nights under the clearest stars on Earth.",
    image: "/images/trekking.png",
    category: "Adventure",
    details: ["7-21 Day Itineraries", "Professional Local Guides", "High Altitude Logistics", "Eco-friendly Camping"]
  },
  {
    title: "Spiritual Retreats",
    shortDesc: "Find inner peace in ancient cliffside monasteries.",
    longDesc: "Bhutan is the heart of Vajrayana Buddhism. Experience guided meditation sessions in clifftop hermitages like Tiger's Nest, participate in butter lamp ceremonies, and learn from the residing monks about the path to Inner Gross National Happiness. We provide access to private prayer halls and quiet retreat centers far from the tourist paths.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    category: "Soul",
    details: ["Guided Meditation", "Monastery Overnights", "Spiritual Consultations", "Sacred Site Access"]
  },
  {
    title: "Cultural Festivals",
    shortDesc: "Witness the vibrant colors of Bhutanese heritage.",
    longDesc: "Witness the spectacular Tshechus of Paro and Thimphu. These vibrant festivals are a mosaic of mask dances, religious blessings, and social gatherings that have remained unchanged for centuries. Gain deep insights into the symbolism of the Cham dances and receive blessings alongside local families dressed in their finest Gho and Kira.",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop",
    category: "Culture",
    details: ["Festival Photography", "Vip Seating", "Cultural Historian Guide", "Local Family Dinners"]
  },
  {
    title: "Luxury Sanctuary",
    shortDesc: "Experience world-class hospitality in the heart of nature.",
    longDesc: "Retreat to the most exclusive lodges in the world, including Amankora and Six Senses. Every stay is curated to provide contemporary comfort while deeply honoring Bhutanese architectural traditions and sustainable local sourcing. Enjoy traditional hot stone baths, organic farm-to-table dining, and wellness rituals that utilize local medicinal herbs.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop",
    category: "Comfort",
    details: ["Aman & Six Senses", "Traditional Spas", "Private Chefs", "Helicopter Transfers"]
  },
];

export default function ExperienceGrid() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experiences" className="py-32 px-6 lg:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
              Our Experiences
            </h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
              Curated Journeys <br />
              <span className="italic font-light text-brand-primary">for the Conscious</span>
            </h3>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed">
              "We don't just offer tours; we offer transformations in the land of happiness."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setSelectedExp(exp)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-sm shadow-2xl shadow-brand-primary/5 group-hover:shadow-brand-primary/20 transition-all duration-700">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-6 left-6 bg-brand-primary text-brand-primary-fg px-5 py-2 text-[9px] font-bold tracking-[0.2em] uppercase shadow-xl">
                  {exp.category}
                </div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-[10px] uppercase tracking-widest font-bold flex items-center">
                    View Details <ArrowRight className="ml-2 h-3 w-3" />
                  </p>
                </div>
              </div>
              <h4 className="text-2xl font-heading mb-3 group-hover:text-brand-primary transition-colors font-bold tracking-tight text-gray-900 leading-none">
                {exp.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed italic font-light line-clamp-2">
                {exp.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl"
            />

            <motion.div
              layoutId={selectedExp.title}
              className="relative w-full max-w-6xl bg-white shadow-[0_50px_100px_-20px_rgba(139,30,31,0.25)] overflow-hidden flex flex-col md:flex-row min-h-[80vh] rounded-sm z-10"
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-8 right-8 z-20 bg-white hover:bg-brand-primary hover:text-brand-primary-fg p-4 rounded-full transition-all duration-500 text-brand-primary shadow-2xl active:scale-95"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="w-full md:w-1/2 relative min-h-[500px]">
                <Image
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-10 left-10 bg-brand-primary text-brand-primary-fg px-8 py-3 text-xs font-bold tracking-[0.3em] uppercase shadow-[0_10px_30px_rgba(139,30,31,0.4)]">
                  {selectedExp.category}
                </div>
              </div>

              <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
                <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                  <span className="w-8 h-[1px] bg-brand-primary/30 mr-4" />
                  Legacy Journey
                </h2>
                <h3 className="text-5xl lg:text-7xl font-heading font-black leading-[0.9] mb-10 tracking-tighter text-gray-900">
                  {selectedExp.title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed mb-12 font-light italic">
                  "{selectedExp.longDesc}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-gray-100">
                  {selectedExp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="mt-1 w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(139,30,31,0.5)]" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 leading-tight">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <Link
                    href="/contact#contact-form"
                    className="group relative bg-brand-primary text-brand-primary-fg px-16 py-6 overflow-hidden transition-all duration-500 shadow-2xl shadow-brand-primary/20 inline-block text-center"
                  >
                    <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-500">Enquire Now</span>
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
