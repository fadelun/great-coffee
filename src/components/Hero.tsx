"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-6">
              Artisan Roasters Since 2018
            </span>

            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium text-on-surface leading-tight mb-6 tracking-tight">
              Coffee Crafted with
              <span className="italic text-primary"> Intention</span>
            </h1>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Every cup tells a story. From the highlands of Ethiopia to the volcanic soils of
              Guatemala, we source exceptional beans and roast them to perfection.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-espresso-gradient text-white font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                Explore Our Menu
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 text-primary font-medium group"
              >
                <span className="relative">
                  Visit Our Cafe
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-90" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/coffee-pour.jpg"
                alt="Artisan coffee being poured"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Decorative offset element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-surface-container-low rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container rounded-full -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/50 -z-10 blur-3xl" />
    </section>
  );
}
