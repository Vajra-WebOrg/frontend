"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact-us" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Matching ExperienceGrid style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-brand-primary/30 mr-4" />
              Get In Touch
            </h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.95] tracking-tighter text-gray-900">
              Let's Connect <br />
              <span className="italic font-light text-brand-primary">
                Together
              </span>
            </h3>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-400 text-sm max-w-xs italic leading-relaxed">
              "Reach out to us and start your journey to the Land of the Thunder
              Dragon."
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Phone,
              title: "Call Us",
              details: ["+975 17445214", "Whatsapp: 17333333"],
              color: "text-brand-primary",
            },
            {
              icon: MapPin,
              title: "Address",
              details: ["Thimphu, Kabaesa, Bhutan"],
              color: "text-brand-primary",
            },
            {
              icon: Mail,
              title: "E-mail",
              details: ["rigphel.developer@gmail.com"],
              color: "text-brand-primary",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-50 p-12 rounded-sm shadow-2xl shadow-brand-primary/5 group-hover:shadow-brand-primary/20 transition-all duration-700 flex flex-col items-center text-center space-y-6 border border-gray-100">
                <div className="bg-brand-primary p-6 rounded-sm mb-2 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-black text-2xl text-gray-900 tracking-tight group-hover:text-brand-primary transition-colors duration-500">
                  {item.title}
                </h4>
                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-gray-500 text-sm italic font-light leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
