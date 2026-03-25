"use client";

import { useState, ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      {children}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
}
