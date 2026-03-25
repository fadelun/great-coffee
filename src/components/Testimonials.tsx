"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="py-24 lg:py-32 bg-primary text-on-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote Icon */}
          <Quote className="w-12 h-12 mx-auto mb-8 opacity-30" />

          {/* Quote Text */}
          <blockquote className="font-serif text-2xl lg:text-3xl font-normal leading-relaxed mb-10 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-on-primary/70 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
