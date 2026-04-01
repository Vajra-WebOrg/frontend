"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Mail, User, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Show success message
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-deep/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-parchment overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-brand-deep/40 hover:text-brand-primary transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Sidebar Info */}
              <div className="hidden md:block col-span-2 bg-brand-primary p-10 text-brand-primary-fg">
                <h3 className="text-2xl font-heading mb-6 leading-tight">
                  Begin Your <br />
                  Sacred Journey
                </h3>
                <p className="text-white/70 text-sm leading-relaxed italic mb-8">
                  &ldquo;Happiness is a place, and we are honored to guide you
                  there.&rdquo;
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-xs font-bold tracking-widest uppercase">
                    <Calendar className="h-4 w-4 text-brand-secondary" />
                    <span>Expert Planning</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-bold tracking-widest uppercase">
                    <Users className="h-4 w-4 text-brand-secondary" />
                    <span>Personal Host</span>
                  </div>
                </div>
              </div>

              {/* Form Area */}
              <div className="col-span-1 md:col-span-3 p-10 bg-white">
                {step === 1 ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h4 className="text-brand-secondary text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                        Inquiry Details
                      </h4>
                      <h5 className="text-2xl font-heading text-brand-deep mb-8">
                        Traveler Information
                      </h5>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-0 top-3 h-4 w-4 text-brand-secondary" />
                        <input
                          required
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-transparent border-b border-brand-deep/10 py-3 pl-8 text-sm focus:outline-none focus:border-brand-secondary transition-colors text-brand-deep"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-0 top-3 h-4 w-4 text-brand-secondary" />
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          className="w-full bg-transparent border-b border-brand-deep/10 py-3 pl-8 text-sm focus:outline-none focus:border-brand-secondary transition-colors text-brand-deep"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <Calendar className="absolute left-0 top-3 h-4 w-4 text-brand-secondary" />
                          <input
                            required
                            type="text"
                            placeholder="Date"
                            onFocus={(e) => (e.target.type = "date")}
                            className="w-full bg-transparent border-b border-brand-deep/10 py-3 pl-8 text-sm focus:outline-none focus:border-brand-secondary transition-colors text-brand-deep"
                          />
                        </div>
                        <div className="relative">
                          <Users className="absolute left-0 top-3 h-4 w-4 text-brand-secondary" />
                          <input
                            required
                            type="number"
                            min="1"
                            placeholder="Guests"
                            className="w-full bg-transparent border-b border-brand-deep/10 py-3 pl-8 text-sm focus:outline-none focus:border-brand-secondary transition-colors text-brand-deep"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-deep text-white py-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-brand-primary transition-colors group mt-8"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-[10px] text-brand-deep/40 text-center italic mt-4">
                      Our travel concave will respond within 24 hours.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12 }}
                      >
                        <ArrowRight className="h-10 w-10 text-brand-secondary -rotate-45" />
                      </motion.div>
                    </div>
                    <h4 className="text-3xl font-heading text-brand-deep">
                      Tashi Delek
                    </h4>
                    <p className="text-brand-deep/70 italic leading-relaxed">
                      Your inquiry has been received. <br />A Vajra specialist
                      will be in touch shortly to refine your journey.
                    </p>
                    <button
                      onClick={onClose}
                      className="text-brand-primary font-bold text-xs tracking-widest uppercase border-b-2 border-brand-primary pb-1"
                    >
                      Back to Explore
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
