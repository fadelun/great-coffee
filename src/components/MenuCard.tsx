"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { MenuItem } from "@/lib/data";
import { useCart } from "@/context/CartContext";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleIncrement = () => {
    if (cartItem) {
      updateQuantity(item.id, quantity + 1);
    } else {
      addItem(item);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      updateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:editorial-shadow-lg transition-shadow duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Tags */}
        {item.tags && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-surface/90 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Quantity Badge */}
        {quantity > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold"
          >
            {quantity}
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-serif text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-secondary font-semibold whitespace-nowrap">
            {item.price}
          </span>
        </div>

        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          {quantity > 0 ? (
            <div className="flex items-center gap-3 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDecrement}
                className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                aria-label={`Remove one ${item.name}`}
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <span className="flex-1 text-center font-semibold text-on-surface">
                {quantity} in cart
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleIncrement}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label={`Add another ${item.name}`}
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleIncrement}
              className="w-full py-3 rounded-full bg-surface-container-high text-primary font-medium flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors"
              aria-label={`Add ${item.name} to order`}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Order
            </motion.button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
