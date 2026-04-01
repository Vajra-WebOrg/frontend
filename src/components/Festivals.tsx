"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const festivals = [
    {
        name: "Thimphu Tshechu",
        date: "October 04 - October 06",
        location: "Thimphu",
        image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop",
        longDesc: "One of the biggest festivals in the country, the Thimphu Tshechu is held at the courtyard of the Tashichho Dzong. It's a grand display of Bhutanese culture, featuring sacred Cham dances, religious blessings, and social gatherings.",
        details: ["Sacred Mask Dances", "Display of Thangka", "Religious Blessings", "Cultural Performances"]
    },
    {
        name: "Paro Tshechu",
        date: "March 21 - March 25",
        location: "Paro",
        image: "https://images.unsplash.com/photo-1578505508709-a0ca679233f2?q=80&w=2070&auto=format&fit=crop",
        longDesc: "Held every spring, the Paro Tshechu is a vibrant spectacle. The highlight is the unveiling of the giant silk Thangka (Thongdrel) of Guru Rinpoche, believed to liberate all who see it.",
        details: ["Giant Thangka Unveiling", "Traditional Gho & Kira", "Local Cuisines", "Spiritual Pilgrimage"]
    },
    {
        name: "Punakha Domche",
        date: "February 19 - February 21",
        location: "Punakha",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        longDesc: "The Punakha Domche features a dramatic re-enactment of the 17th-century battle against invading forces. Held at the majestic Punakha Dzong, it's a powerful display of Bhutan's history.",
        details: ["Battle Re-enactment", "Riverside Ceremonies", "Historical Significance", "Community Spirit"]
    },
    {
        name: "Jambay Lhakhang Drup",
        date: "November 15 - November 18",
        location: "Bumthang",
        image: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=2070&auto=format&fit=crop",
        longDesc: "Famous for the 'Mewang' (Fire Blessing) and the sacred 'Tercham' (Naked Dance), this festival held at one of Bhutan's oldest temples is a deeply spiritual experience representing purification.",
        details: ["Fire Blessing Ceremony", "Sacred Night Dances", "Ancient Temple Setting", "Spiritual Purification"]
    },
    {
        name: "Crane Festival",
        date: "November 11",
        location: "Gangtey",
        image: "https://images.unsplash.com/photo-1524222717473-730000096953?q=80&w=2070&auto=format&fit=crop",
        longDesc: "Celebrating the arrival of the endangered Black-Necked Cranes to Phobjikha Valley. Local school children perform crane dances, promoting conservation and the deep bond between nature and culture.",
        details: ["Black-Necked Crane Dances", "Nature Conservation", "Phobjikha Valley", "Local School Performances"]
    },
    {
        name: "Haa Summer Festival",
        date: "July 12 - July 14",
        location: "Haa Valley",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop",
        longDesc: "A celebration of traditional nomadic lifestyles, Bhutanese cuisine, and local sports. Experience the high-altitude flora, sample local Ara (spirit), and join in traditional horse riding events.",
        details: ["Nomadic Lifestyle", "Traditional Sports", "Alpine Flowers", "Local Cuisine Tasting"]
    }
];

export default function Festivals() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [selectedFes, setSelectedFes] = useState<typeof festivals[0] | null>(null);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % festivals.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + festivals.length) % festivals.length);

    useEffect(() => {
        if (selectedFes) return; // Pause auto-advance when modal is open

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(interval);
    }, [selectedFes]);

    return (
        <section className="pb-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row justify-between items-end space-y-8 md:space-y-0 text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                            <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                            Festivals
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
                            Upcoming <br />
                            <span className="italic font-light text-brand-primary">Celebrations</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed border-l border-brand-primary/20 pl-6">
                            "Experience the vibrant heart of Bhutanese culture through sacred mask dances and communal joy."
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="flex items-center justify-center space-x-0 md:space-x-12 px-4 relative max-w-[1400px] mx-auto">
                    {/* Navigation Left */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-10 z-20 w-16 h-16 rounded-full border border-brand-primary/10 text-brand-primary/40 items-center justify-center hover:text-brand-primary-fg hover:bg-brand-primary hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/30 transition-all duration-500 group"
                    >
                        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center space-x-4 md:space-x-12 overflow-visible py-10">
                        {[-1, 0, 1].map((offset) => {
                            const index = (activeIndex + offset + festivals.length) % festivals.length;
                            const fes = festivals[index];
                            const isActive = offset === 0;

                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    onClick={() => isActive ? setSelectedFes(fes) : setActiveIndex(index)}
                                    className={`flex-shrink-0 transition-all duration-1000 ${!isActive
                                        ? 'w-64 opacity-20 scale-75 blur-[2px] cursor-pointer'
                                        : 'w-[350px] md:w-[650px] scale-100 z-10 shadow-[0_40px_80px_-15px_rgba(139,30,31,0.3)] px-4 cursor-pointer'
                                        }`}
                                >
                                    <div className="relative aspect-[16/10] mb-10 overflow-hidden rounded-sm group">
                                        <Image
                                            src={fes.image}
                                            alt={fes.name}
                                            fill
                                            className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        {isActive && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="bg-white/90 backdrop-blur-sm text-brand-primary px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase shadow-2xl">
                                                    Discover Experience
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.8 }}
                                            className="text-center space-y-4"
                                        >
                                            <h4 className="text-3xl font-heading font-black text-gray-900 tracking-tight uppercase leading-none">
                                                {fes.name}
                                            </h4>
                                            <div className="flex flex-col items-center gap-1">
                                                <p className="text-[10px] text-brand-primary font-bold uppercase tracking-[0.4em] mb-1 px-4 py-1 border border-brand-primary/10 rounded-full inline-block">
                                                    {fes.date}
                                                </p>
                                                <p className="text-xs text-gray-400 italic font-light tracking-widest">{fes.location}, Bhutan</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Navigation Right */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-10 z-20 w-16 h-16 rounded-full border border-brand-primary/10 text-brand-primary/40 items-center justify-center hover:text-brand-primary-fg hover:bg-brand-primary hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/30 transition-all duration-500 group"
                    >
                        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {selectedFes && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFes(null)}
                            className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={selectedFes.name}
                            className="relative w-full max-w-5xl bg-white shadow-[0_50px_100px_-20px_rgba(139,30,31,0.25)] overflow-hidden flex flex-col md:flex-row h-auto max-h-[85vh] rounded-sm z-10"
                        >
                            <button
                                onClick={() => setSelectedFes(null)}
                                className="absolute top-6 right-6 z-30 bg-white/80 backdrop-blur-md hover:bg-brand-primary hover:text-brand-primary-fg p-2.5 rounded-full transition-all duration-500 text-brand-primary shadow-lg active:scale-95"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-full bg-gray-100">
                                <Image
                                    src={selectedFes.image}
                                    alt={selectedFes.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-8 left-8 bg-brand-primary text-brand-primary-fg px-6 py-2.5 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl">
                                    Heritage
                                </div>
                            </div>

                            <div className="w-full md:w-[55%] p-10 lg:p-14 flex flex-col justify-center bg-white overflow-y-auto">
                                <h2 className="text-brand-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 flex items-center">
                                    <span className="w-8 h-[1px] bg-brand-primary/30 mr-3" />
                                    Festival Details
                                </h2>
                                <h3 className="text-4xl lg:text-5xl font-heading font-black leading-[0.95] mb-6 tracking-tighter text-gray-900">
                                    {selectedFes.name}
                                </h3>

                                <div className="flex flex-col gap-3 mb-8">
                                    <div className="flex items-center text-gray-400 gap-3">
                                        <Calendar className="h-4 w-4 text-brand-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{selectedFes.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-3">
                                        <MapPin className="h-4 w-4 text-brand-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{selectedFes.location}, Bhutan</span>
                                    </div>
                                </div>

                                <p className="text-base text-gray-500 leading-relaxed mb-6 font-light italic">
                                    "{selectedFes.longDesc}"
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gray-100">
                                    {selectedFes.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <div className="mt-1.2 w-1.2 h-1.2 bg-brand-primary rounded-full" />
                                            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-gray-900">{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href="/contact#contact-form"
                                        className="group relative bg-brand-primary text-brand-primary-fg px-10 py-4 overflow-hidden transition-all duration-500 shadow-xl shadow-brand-primary/10 inline-block text-center w-full sm:w-auto"
                                    >
                                        <span className="relative z-10 text-[9px] font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">Join Event</span>
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

