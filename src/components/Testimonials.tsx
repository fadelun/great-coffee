"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  // Get 4 random testimonials (memoized to prevent re-shuffle on re-render)
  const randomTestimonials = useMemo(() => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      skipSnaps: false,
      dragFree: true,
      loop: true,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 lg:py-32 bg-primary text-on-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Quote Icon */}
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-30" />

          {/* Section Title */}
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-on-primary/70">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!emblaApi?.canScrollPrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!emblaApi?.canScrollNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4">
              {randomTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-[0_0_100%] px-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className={cn(
                    "bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center transition-opacity",
                    index === selectedIndex ? "opacity-100" : "opacity-60"
                  )}>
                    {/* Quote Text */}
                    <blockquote className="font-serif text-lg lg:text-xl font-normal leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === selectedIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                )}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
