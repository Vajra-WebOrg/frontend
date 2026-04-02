"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Bhutan Landscape"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Multi-layer Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-gold to-transparent opacity-60" />
      <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-gold to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="glass-gold text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase px-6 py-2.5 rounded-full inline-block shadow-lg">
            Spirit of the Himalayas
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-[11rem] font-heading font-black text-white mb-8 leading-[0.85] tracking-tighter"
        >
          Unveil the <br />
          <span className="text-gradient-gold italic font-light drop-shadow-2xl text-glow-gold">
            Sacred Kingdom
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed"
        >
          Where myths are lived and legends are real.{" "}
          <span className="text-gold italic">
            Discover the heart of the Dragon Kingdom.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#experiences"
            className="group relative px-10 py-4 bg-gradient-to-r from-gold to-dark-gold text-black font-bold text-xs tracking-[0.2em] uppercase rounded-sm overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500"
          >
            <span className="relative z-10">Explore Journeys</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="/contact"
            className="group px-10 py-4 glass-gold text-white font-bold text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-gold/20 transition-all duration-500"
          >
            Plan Your Visit
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-gold text-[9px] tracking-[0.3em] uppercase font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
