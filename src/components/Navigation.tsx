"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mountain, Search, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
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
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 glass-morphism" : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Mountain className="h-6 w-6 text-brand-primary-fg" />
              </div>
              <span
                className={`text-2xl font-heading font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                VAJRA
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => {
                const isActive = (item.href.startsWith('/#') && pathname === '/') || (pathname !== '/' && item.href.startsWith(pathname));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-brand-primary ${
                      isActive ? "text-brand-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] font-bold" : (isScrolled ? "text-foreground" : "text-white/90")
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center space-x-6">
              <button
                className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-brand-primary transition-colors`}
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="lg:hidden">
                <Menu
                  className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
