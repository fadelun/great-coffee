"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { businessInfo } from "@/lib/data";

export default function ContactPage() {
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
              Visit Us
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-medium text-on-surface tracking-tight mb-4">
              Come Say Hello
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              We&apos;d love to see you. Stop by for a coffee, stay for the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 lg:h-96 bg-surface-container relative">
        <div className="absolute inset-0 flex items-center justify-center bg-surface-container-high">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
            <p className="text-on-surface-variant">{businessInfo.address.full}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary font-medium hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-surface-container-high">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-on-surface">
                  Opening Hours
                </h2>
              </div>
              <div className="space-y-4">
                {businessInfo.hours.map((item) => (
                  <div
                    key={item.days}
                    className="flex justify-between items-start py-3 border-b ghost-border last:border-0"
                  >
                    <span className="text-on-surface font-medium">{item.days}</span>
                    <span className="text-on-surface-variant">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-surface-container-high">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-on-surface">
                  Get in Touch
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-on-surface-variant" />
                  <a
                    href={`tel:${businessInfo.contact.phoneRaw}`}
                    className="text-on-surface hover:text-primary transition-colors"
                  >
                    {businessInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-on-surface-variant" />
                  <a
                    href={`mailto:${businessInfo.contact.email}`}
                    className="text-on-surface hover:text-primary transition-colors"
                  >
                    {businessInfo.contact.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-surface-container-high">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-on-surface">
                  Find Us
                </h2>
              </div>
              <address className="not-italic text-on-surface-variant leading-relaxed">
                <p className="font-medium text-on-surface">{businessInfo.name}</p>
                <p>{businessInfo.address.street}</p>
                <p>{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                <p className="mt-4 text-sm">
                  Located in the heart of the Pearl District, just off NW Lovejoy Street.
                </p>
              </address>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-4">
            Can&apos;t Make It In?
          </h2>
          <p className="text-on-primary/70 mb-8">
            Order online and we&apos;ll have it ready for pickup, or message us on WhatsApp for
            custom orders.
          </p>
          <a
            href={`https://wa.me/${businessInfo.contact.phoneRaw}?text=Hi!%20I%27d%20like%20to%20place%20an%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-on-primary text-primary font-semibold hover:bg-white/90 transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
