"use client";

import { Mountain, MessageCircle, Mail, Share2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const discoverLinks = [
    { name: "Experiences", href: "/#experiences" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact#contact-form" },
  ];

  return (
    <footer className="relative bg-background pt-16 pb-10 px-6 lg:px-12 border-t border-parchment/10 overflow-hidden">
      {/* Decorative Mountain Path Silhouette */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-center mb-12">
          {/* Left Column: Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-brand-primary/20 rounded-lg blur group-hover:blur-md transition-all duration-500" />
                <div className="relative bg-brand-primary p-2.5 rounded-lg transform transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-brand-primary/20 text-brand-primary-fg">
                  <Mountain className="h-5 w-5" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-heading font-black tracking-widest text-foreground block leading-none">
                  VAJRA
                </span>
                <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-brand-secondary mt-1 block">
                  Expeditions
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Branding Information */}
          <div className="flex flex-col items-center text-center px-4">
            <p className="text-foreground/70 leading-relaxed italic max-w-sm text-sm font-light">
              &ldquo;Experience the profound beauty and timeless wisdom of the
              Last Shangri-La. Discover the heart of Bhutan with us.&rdquo;
            </p>
          </div>

          {/* Right Column: Links and Socials */}
          <div className="flex flex-col md:items-end space-y-8">
            <ul className="flex flex-col space-y-3 items-end">
              {discoverLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-brand-primary transition-all duration-300 font-medium tracking-wide whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4 justify-end items-center">
              {[
                { Icon: MessageCircle, href: "#" },
                { Icon: Mail, href: "#" },
                { Icon: Share2, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group relative p-2 rounded-full bg-foreground/5 hover:bg-brand-primary transition-all duration-500"
                >
                  <Icon className="h-4 w-4 text-foreground/60 group-hover:text-brand-primary-fg transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30 text-center md:text-left">
            <p>© 2024 Vajra Expeditions Bhutan.</p>
          </div>
          <div className="flex space-x-8 text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">
            <a
              href="#"
              className="hover:text-brand-primary transition-colors duration-300 tracking-widest"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-brand-primary transition-colors duration-300 tracking-widest"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
