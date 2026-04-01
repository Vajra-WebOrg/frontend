"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, HelpCircle, ArrowRight } from "lucide-react";

export default function SDFWidget() {
  const [days, setDays] = useState(7);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const sdfRate = 100; // Updated rate

  const totalSDF = days * sdfRate;

  return (
    <section
      id="sdf-calculator"
      className="py-32 bg-brand-deep text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-brand-secondary text-sm font-bold tracking-[0.3em] uppercase mb-6">
              Sustainable Travel
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
              Investing in the <br />
              <span className="italic">Future of Bhutan</span>
            </h3>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
              The Sustainable Development Fee (SDF) helps fund Bhutan&apos;s
              environmental preservation, cultural heritage, and carbon-neutral
              initiatives.
            </p>

            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-secondary transition-colors">
                <HelpCircle className="h-5 w-5 text-brand-secondary" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">
                Learn about our SDF policy
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-xl border border-white/20 p-10 md:p-16 rounded-3xl"
          >
            <div className="flex items-center mb-12">
              <Calculator className="h-6 w-6 text-brand-secondary mr-4" />
              <h4 className="text-xl font-heading tracking-wide">
                Journey Calculator
              </h4>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex justify-between mb-6">
                  <label className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                    Duration of Stay
                  </label>
                  <span className="text-brand-secondary font-bold">
                    {days} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
                />
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-2 block">
                      Estimated SDF
                    </label>
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-5xl font-heading font-medium text-brand-secondary">
                        Nu {totalSDF}
                      </span>
                      <span className="ml-2 text-white/40 font-medium">
                        BTN
                      </span>
                    </div>
                  </div>
                  <button className="bg-brand-secondary text-brand-deep px-8 py-4 rounded-none font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors flex items-center">
                    Plan Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
