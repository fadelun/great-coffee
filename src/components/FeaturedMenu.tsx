"use client";

import { menuItems } from "@/lib/data";
import MenuCard from "./MenuCard";

export default function FeaturedMenu() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-4">
            Our Selection
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-on-surface tracking-tight">
            Featured Roasts
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg">
            Discover our most loved coffees, each with its own distinct character.
          </p>
        </div>

        {/* Grid - Asymmetric layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
