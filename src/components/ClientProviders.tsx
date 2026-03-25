"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  );
}
