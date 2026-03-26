"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems, categories } from "@/lib/data";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-4">
              Our Menu
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-medium text-on-surface tracking-tight mb-4">
              Crafted for You
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              From single-origin pour-overs to house-made pastries, every item is made with
              intention and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 glassmorphism border-b ghost-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-espresso-gradient text-white"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-on-surface-variant">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
