"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "628123456789"; // Placeholder - ganti dengan nomor asli

export default function CartSidebar() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice, isCartOpen, closeCart } = useCart();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return "";

    let message = "*PESANAN BARU - Great Coffee*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━\n\n";

    items.forEach((item, index) => {
      const itemTotal = parseFloat(item.price.replace("$", "")) * item.quantity;
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} x ${item.price}\n`;
      message += `   Subtotal: $${itemTotal.toFixed(2)}\n\n`;
    });

    message += "━━━━━━━━━━━━━━━━━━━━━\n";
    message += `*TOTAL: $${totalPrice.toFixed(2)}*\n\n`;
    message += "Terima kasih! Mohon konfirmasi pesanan saya.";

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b ghost-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl font-semibold text-on-surface">
                  Your Order
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {totalItems > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-on-surface-variant hover:text-error transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-on-surface-variant/30 mb-4" />
                  <p className="text-on-surface-variant">Your cart is empty</p>
                  <p className="text-sm text-on-surface-variant/70 mt-1">
                    Add some items from the menu
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-4 bg-surface-container-lowest rounded-xl"
                    >
                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-on-surface truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-secondary font-semibold">
                          {item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                          aria-label={`Remove one ${item.name}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-semibold text-on-surface">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                          aria-label={`Add another ${item.name}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 rounded-full bg-error/10 text-error flex items-center justify-center hover:bg-error/20 transition-colors ml-2"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Total and Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t ghost-border bg-surface-container-low">
                {/* Summary */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant">
                    {totalItems} item{totalItems > 1 ? "s" : ""}
                  </span>
                  <div className="text-right">
                    <span className="text-sm text-on-surface-variant">Total: </span>
                    <span className="text-xl font-bold text-on-surface">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-full bg-green-600 text-white font-medium flex items-center justify-center gap-3 hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Checkout via WhatsApp
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
