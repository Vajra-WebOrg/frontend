"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with refined Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Bhutan Landscape"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-brand-primary text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md rounded-full inline-block">
            Spirit of the Himalayas
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-white mb-10 leading-[0.85] tracking-tighter"
        >
          Unveil the <br />
          <span className="italic font-light text-brand-primary drop-shadow-2xl">Sacred Kingdom</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light italic leading-relaxed"
        >
          "Where myths are lived and legends are real. Discover the heart of the Dragon Kingdom."
        </motion.p>


      </div>


    </section>
  );
}
