"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    title: "The Art of Slow Living in the Last Shangri-La",
    excerpt:
      "How Bhutan's philosophy of Gross National Happiness is shaping a more conscious way of travel.",
    date: "March 12, 2024",
    author: "Karma Loday",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    category: "Philosophy",
  },
  {
    title: "Sacred Threads: A Weaver's Tale from Lhuentse",
    excerpt:
      "Discover the intricate symbolism behind the world's most sophisticated hand-woven textiles.",
    date: "February 28, 2024",
    author: "Sonam Pelzom",
    image:
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2080&auto=format&fit=crop",
    category: "Craft",
  },
  {
    title: "Beyond the Clouds: Lessons from the High Pass",
    excerpt:
      "Reflections from a week-long journey through the mist-covered peaks of Dochula.",
    date: "February 15, 2024",
    author: "Tashi Dorji",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    category: "Essays",
  },
];

export default function Journal() {
  return (
    <section
      id="journal"
      className="py-32 px-6 lg:px-12 bg-parchment relative overflow-hidden"
    >
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-secondary/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary text-sm font-bold tracking-[0.3em] uppercase mb-6"
          >
            Vajra Journal
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-medium leading-[1.1]"
          >
            Stories from the <br />
            <span className="italic">Thunder Dragon</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden mb-8">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-brand-primary px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                {articles[0].category}
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-secondary">
              <span>{articles[0].date}</span>
              <span className="w-8 h-[1px] bg-brand-secondary/30" />
              <span>By {articles[0].author}</span>
            </div>
            <h4 className="text-3xl md:text-4xl font-heading mb-6 group-hover:text-brand-primary transition-colors">
              {articles[0].title}
            </h4>
            <p className="text-lg text-foreground/70 leading-relaxed italic max-w-2xl">
              {articles[0].excerpt}
            </p>
          </motion.div>

          {/* Sidebar Articles */}
          <div className="lg:col-span-5 space-y-16">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col gap-8"
              >
                <div className="relative aspect-[4/3] sm:w-1/2 lg:w-full overflow-hidden shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-secondary">
                    <span>{article.category}</span>
                  </div>
                  <h4 className="text-2xl font-heading mb-4 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed italic">
                    {article.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 group text-brand-primary"
            >
              <span className="text-sm font-bold tracking-widest uppercase border-b-2 border-brand-primary pb-1">
                Read All Stories
              </span>
              <span className="text-2xl">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
