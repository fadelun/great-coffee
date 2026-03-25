"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EditorialFeature() {
  return (
    <section className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-surface-container-low rounded-2xl lg:rounded-3xl p-8 lg:p-16 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - Overlapping the container */}
            <div className="relative lg:-ml-20">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden editorial-shadow">
                <Image
                  src="/images/editorial/journal.jpg"
                  alt="Coffee journal and brewing equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:pr-8">
              <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-4">
                The Journal
              </span>

              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-on-surface tracking-tight mb-4">
                The Art of the Pour Over
              </h2>

              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Discover the meditative practice of pour-over brewing. Our head barista shares
                techniques for achieving the perfect extraction, from water temperature to pour rate.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold group"
              >
                Read the Article
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-container rounded-full opacity-20 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
