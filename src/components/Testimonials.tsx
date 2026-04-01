"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
    {
        text: "Always a pleasure to stay at such a gorgeous place. Everything from the breakfast to specialized room service was top and was really worth it too!",
        name: "Lynette Gemma",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
    },
    {
        text: "Each moment at Bhutan Beyond was filled with tranquility and warmth. The personalized guidance was world-class and really helped us see the true heart of Bhutan.",
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop"
    },
    {
        text: "An unforgettable trip. From the clifftop monasteries to the local hospitality, everything was perfect. We left feeling inspired and rejuvenated by the sacred culture.",
        name: "Sarah Kim",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
                    <div className="max-w-2xl">
                        <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                            <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                            Wall of Love
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
                            What Our <br />
                            <span className="italic font-light text-brand-primary">Guests Say</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed border-l border-brand-primary/20 pl-6">
                            "Every guest leaves with a story. Here are the voices of those who found their peace in Bhutan."
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-0 md:space-x-12">
                    <button className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border border-brand-primary/10 text-brand-primary/40 items-center justify-center hover:text-brand-primary-fg hover:bg-brand-primary hover:border-brand-primary hover:shadow-2xl transition-all duration-500 group">
                        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                        {reviews.map((rev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="bg-white p-12 flex flex-col items-center text-center space-y-8 rounded-sm shadow-[0_20px_50px_rgba(139,30,31,0.03)] border border-brand-primary/5 group hover:shadow-[0_40px_80px_rgba(139,30,31,0.1)] transition-all duration-700"
                            >
                                <Quote className="h-10 w-10 text-brand-primary/10 fill-brand-primary/5 group-hover:text-brand-primary/20 transition-colors" />
                                <p className="text-base text-gray-500 leading-relaxed italic font-light line-clamp-5">
                                    "{rev.text}"
                                </p>
                                <div className="pt-10 border-t border-gray-100 w-full flex flex-col items-center">
                                    <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4 p-1 bg-white border border-brand-primary/10 shadow-xl group-hover:scale-110 transition-transform duration-700">
                                        <Image src={rev.image} alt={rev.name} fill className="object-cover rounded-full p-1" />
                                    </div>
                                    <h4 className="text-[11px] font-bold uppercase text-gray-900 tracking-[0.3em]">{rev.name}</h4>
                                    <p className="text-[9px] text-brand-primary font-medium uppercase tracking-widest mt-1">Verified Traveler</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border border-brand-primary/10 text-brand-primary/40 items-center justify-center hover:text-brand-primary-fg hover:bg-brand-primary hover:border-brand-primary hover:shadow-2xl transition-all duration-500 group">
                        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-20 flex justify-center">
                    <motion.a 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        href="/contact#contact-form"
                        className="group relative px-12 py-4 overflow-hidden transition-all duration-500 shadow-2xl rounded-sm flex items-center justify-center space-x-3 bg-brand-primary text-brand-primary-fg hover:shadow-[0_20px_40px_rgba(139,30,31,0.2)]"
                    >
                        <span className="relative z-10 text-[10px] font-bold tracking-[0.6em] uppercase group-hover:text-white transition-colors duration-500">
                            Share Your Experience
                        </span>
                        <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </motion.a>
                </div>
            </div>

        </section>
    );
}
