"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";

export default function ContactUs() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSending(true);
        setStatus("idle");

        try {
            const formData = new FormData(form.current);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch(`https://formsubmit.co/ajax/rigphel.developer@gmail.com`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus("success");
                form.current.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("FormSubmit Error:", error);
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact-us" className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="bg-white py-32 px-6 text-center border-b border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/5 skew-y-6 origin-top opacity-50" />
                <div className="relative z-10 space-y-6">
                    <h2 className="text-brand-primary text-xs font-bold tracking-[0.6em] uppercase flex items-center justify-center">
                        <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                        Get In Touch
                        <span className="w-12 h-[1px] bg-brand-primary/30 ml-4" />
                    </h2>
                    <h3 className="text-5xl md:text-8xl font-heading font-black leading-none tracking-tighter text-gray-900">
                        CONTACT <span className="italic font-light text-brand-primary">US</span>
                    </h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto italic font-light text-lg leading-relaxed"
                    >
                        "Embark on a Journey of Discovery: Explore, Experience, and Embrace the Wonders of Bhutan!"
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 pb-48 relative z-20">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
                    {[
                        {
                            icon: Phone,
                            title: "Call Us",
                            details: ["+975 17445214", "Whatsapp: 17333333"],
                            color: "text-brand-primary"
                        },
                        {
                            icon: MapPin,
                            title: "Address",
                            details: ["Thimphu, Kabaesa, Bhutan"],
                            color: "text-brand-primary"
                        },
                        {
                            icon: Mail,
                            title: "E-mail",
                            details: ["rigphel.developer@gmail.com"],
                            color: "text-brand-primary"
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-16 rounded-sm shadow-2xl shadow-brand-primary/5 flex flex-col items-center text-center space-y-6 border border-brand-primary/5 group hover:bg-brand-primary transition-all duration-700"
                        >
                            <div className="bg-brand-primary/10 p-5 rounded-full mb-2 group-hover:bg-white transition-colors duration-500">
                                <item.icon className={`h-6 w-6 ${item.color} group-hover:text-brand-primary transition-colors duration-500`} />
                            </div>
                            <h4 className="font-black text-xl text-gray-900 tracking-tight group-hover:text-brand-primary-fg transition-colors duration-500">{item.title}</h4>
                            <div className="space-y-2">
                                {item.details.map((detail, i) => (
                                    <p key={i} className="text-gray-500 text-sm italic font-light group-hover:text-brand-primary-fg/80 transition-colors duration-500">{detail}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feedback Form Section */}
                <div id="contact-form" className="max-w-5xl mx-auto">
                    <div className="space-y-10 mb-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase flex items-center justify-center">
                                <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
                                Feedback
                                <span className="w-12 h-[1px] bg-brand-primary/30 ml-4" />
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-heading font-black leading-none tracking-tighter text-gray-900">
                                WE ARE HERE <span className="italic font-light text-brand-primary underline decoration-brand-secondary/30 underline-offset-8">TO HELP YOU</span>
                            </h3>
                        </div>
                        <p className="text-gray-500 text-xl leading-relaxed italic font-light max-w-2xl mx-auto">
                            If you have any feedback or special requests, we'd love to hear from you. We reply within 12 hours.
                        </p>
                    </div>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="bg-white p-8 md:p-12 border border-brand-primary/5 shadow-2xl shadow-brand-primary/5 space-y-8 rounded-sm relative"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                                    Full Name <span className="text-brand-primary font-serif italic text-[8px] tracking-normal">(Required)</span>
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm outline-none focus:border-brand-primary/30 focus:bg-white transition-all text-sm text-gray-900"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                                    Email Address <span className="text-brand-primary font-serif italic text-[8px] tracking-normal">(Required)</span>
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm outline-none focus:border-brand-primary/30 focus:bg-white transition-all text-sm text-gray-900"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {/* City & Country */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                                    City & Country <span className="text-brand-primary font-serif italic text-[8px] tracking-normal">(Required)</span>
                                </label>
                                <input
                                    type="text"
                                    name="user_location"
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm outline-none focus:border-brand-primary/30 focus:bg-white transition-all text-sm text-gray-900"
                                    placeholder="City, Country"
                                />
                                <p className="text-[8px] text-gray-400 italic font-light">Where you currently live.</p>
                            </div>

                            {/* Phone / Whatsapp */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                                    Phone / Whatsapp <span className="text-gray-300 font-serif italic text-[8px] tracking-normal">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm outline-none focus:border-brand-primary/30 focus:bg-white transition-all text-sm text-gray-900"
                                    placeholder="+00 (000) 000-0000"
                                />
                                <p className="text-[8px] text-gray-400 italic font-light">We only call if absolutely necessary.</p>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                required
                                placeholder="Tell us about your dream Bhutan journey..."
                                className="w-full bg-gray-50 border border-gray-100 px-4 py-4 rounded-sm outline-none focus:border-brand-primary/30 focus:bg-white transition-all resize-none text-sm text-gray-900"
                            ></textarea>
                        </div>

                        <div className="pt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`group relative w-full md:w-max px-12 py-4 overflow-hidden transition-all duration-500 shadow-2xl rounded-sm flex items-center justify-center space-x-3 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-brand-primary text-brand-primary-fg"
                                    }`}
                            >
                                <span className="relative z-10 text-[10px] font-bold tracking-[0.6em] uppercase group-hover:text-white transition-colors duration-500">
                                    {isSending ? "Sending..." : "Send Your Inquiry"}
                                </span>
                                {!isSending && <Send className="h-3 w-3 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white transition-colors duration-500" />}
                                <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center space-x-2 text-green-600 font-bold text-[10px] uppercase tracking-widest"
                                >
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>Tashi Delek! Inquiry Sent.</span>
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center space-x-2 text-brand-primary font-bold text-[10px] uppercase tracking-widest"
                                >
                                    <AlertCircle className="h-4 w-4" />
                                    <span>Failed to send. Please try again.</span>
                                </motion.div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
