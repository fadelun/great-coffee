"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function AboutSnippet() {
  return (
    <section className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/roasting.jpg"
                alt="Coffee roasting process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-2xl -z-10">
              <Image
                src="/images/about/beans.jpg"
                alt="Coffee beans close-up"
                fill
                className="object-cover rounded-2xl opacity-80"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-4">
              Our Process
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-on-surface tracking-tight mb-6">
              From Farm to Cup
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Every step of our process is guided by intention. We don&apos;t just make coffee—we
              craft experiences that connect you to the origins of each bean.
            </p>

            {/* Process Steps */}
            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative pl-16">
                  {/* Number indicator */}
                  <span className="absolute left-0 top-0 text-4xl font-serif text-secondary/30">
                    {step.number}
                  </span>

                  {/* Border accent */}
                  <div className="absolute left-8 top-2 bottom-0 w-px bg-secondary/20" />

                  <h3 className="font-serif text-xl font-semibold text-on-surface mb-2">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
