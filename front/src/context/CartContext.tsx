"use client";

import { IProduct } from "@/interfaces/IProduct";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface CartContextProps {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => boolean;
  removeFromCart: (productId: number) => void;
  getTotal: () => number;
  getItemCount: () => number;
  clearCart: () => void;
  getIdItems: () => number[];
  getProductQuantity: (productId: number) => number;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => false,
  removeFromCart: () => {},
  getTotal: () => 0,
  getItemCount: () => 0,
  clearCart: () => {},
  getIdItems: () => [],
  getProductQuantity: () => 0,
});

interface CartProviderProps {
  children: React.ReactElement;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      }
    }
  }, []);

  const addToCart = (product: IProduct): boolean => {
    const productExist = cartItems.some((item) => item.id === product.id);
    if (productExist) {
      toast.warning("Este producto ya está en el carrito.");
      return false;
    }
    setCartItems((prevItems) => [...prevItems, product]);
    return true;
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cartItems.length;
  };

  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("cart");
    }
  };

  const getIdItems = () => {
    return cartItems.map((item) => item.id);
  };

  const getProductQuantity = (productId: number) => {
    return cartItems.some((item) => item.id === productId) ? 1 : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getItemCount,
        getTotal,
        getIdItems,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  return context;
};
