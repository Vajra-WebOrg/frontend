"use client";

import { motion } from "framer-motion";
import { Mountain, Search, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const navItems = [
    { name: "Experiences", href: "/#experiences" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact#contact-form" },
    { name: "Feedback", href: "/feedback" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "py-3 glass-dark shadow-lg shadow-black/20"
            : "py-6 bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="bg-gradient-to-br from-gold to-dark-gold p-2.5 rounded-lg shadow-lg"
              >
                <Mountain className="h-5 w-5 text-black" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold tracking-wider text-white group-hover:text-gold transition-colors duration-300">
                  VAJRA
                </span>
                <span className="text-[8px] text-gold tracking-[0.3em] uppercase font-semibold -mt-1">
                  Bhutan Beyond
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navItems.map((item) => {
                const isActive =
                  (item.href.startsWith("/#") && pathname === "/") ||
                  (pathname !== "/" && item.href.startsWith(pathname));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 group ${
                      isActive
                        ? "text-gold"
                        : "text-light-gray hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-gold to-dark-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <Search className="h-5 w-5" />
              </motion.button>
              <button className="lg:hidden text-white hover:text-gold transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
