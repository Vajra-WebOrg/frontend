"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Quote } from "lucide-react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:rigphel.developer@gmail.com?subject=${encodeURIComponent(
      `Feedback: ${formData.subject}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message and reset form
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 500);
  };

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Matching ExperienceGrid style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                Your Voice
              </h2>
              <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
                Share Your <br />
                <span className="italic font-light text-brand-primary">
                  Memories
                </span>
              </h3>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed">
              "Share your experience and help us improve our services."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-sm shadow-2xl shadow-brand-primary/5 border border-gray-100"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-brand-primary/10 border-l-4 border-brand-primary text-brand-primary"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-xs font-bold uppercase tracking-widest">
                    Thank you! Your email client should open shortly.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name Field */}
                <div className="group space-y-3">
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-brand-primary transition-colors"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-brand-primary transition-all duration-500 text-gray-900 font-light placeholder:text-gray-200"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>

                {/* Email Field */}
                <div className="group space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-brand-primary transition-colors"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-brand-primary transition-all duration-500 text-gray-900 font-light placeholder:text-gray-200"
                    placeholder="EMAIL@EXAMPLE.COM"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="group space-y-3">
                <label
                  htmlFor="subject"
                  className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-brand-primary transition-colors"
                >
                  Topic of Discussion
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-brand-primary transition-all duration-500 text-gray-900 font-light placeholder:text-gray-200"
                  placeholder="WHAT'S ON YOUR MIND?"
                />
              </div>

              {/* Message Field */}
              <div className="group space-y-3">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-brand-primary transition-colors"
                >
                  Your Thoughts
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-brand-primary transition-all duration-500 text-gray-900 font-light placeholder:text-gray-200 resize-none"
                  placeholder="PLEASE DESCRIBE YOUR EXPERIENCE..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full lg:w-max px-12 py-4 overflow-hidden transition-all duration-500 shadow-xl rounded-sm flex items-center justify-center space-x-4 bg-brand-primary text-brand-primary-fg"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-brand-primary-fg border-t-transparent" />
                ) : (
                  <>
                    <span className="relative z-10 text-[10px] font-bold tracking-[0.6em] uppercase group-hover:text-white transition-colors duration-500">
                      Submit Feedback
                    </span>
                    <Send className="w-3 h-3 relative z-10 group-hover:text-white transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-12 lg:pl-12"
            >
              <div className="space-y-6">
                <h4 className="text-[11px] font-bold uppercase text-gray-900 tracking-[0.3em]">
                  Direct Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Email Us
                      </p>
                      <p className="text-sm text-gray-900 font-medium">
                        rigphel.developer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-brand-primary/5 border border-brand-primary/10 rounded-sm">
                <Quote className="h-8 w-8 text-brand-primary/20 mb-6" />
                <p className="text-sm text-gray-500 italic leading-relaxed mb-6 font-light">
                  Your feedback is valuable to us and helps improve our
                  services.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-800">
                      Tashi Delek
                    </p>
                    <p className="text-[8px] uppercase tracking-tighter text-brand-primary">
                      Founder of Vajra
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
