"use client";

import { ShoppingCart } from "lucide-react";
import type { Product } from "../api/products";
import { useCart } from "./ShoppingCart";
import { useRouter } from "next/navigation";

type ButtonsProps = {
  product: Product;
};

export default function Buttons({ product }: ButtonsProps) {
  const { addToCart, openCart } = useCart();
  const router = useRouter();

  const handleBuy = () => {
    addToCart(product);
    router.push("/checkout");
  };

  const handleAddToCart = () => {
    addToCart(product);
    openCart();
  };

  return (
    <div className="flex flex-col gap-2 flex-1 mt-2 justify-end">
      <button
        onClick={handleBuy}
        type="button"
        className="flex items-center justify-center cursor-pointer text-white bg-green-500 rounded-md p-2 shadow-md hover:scale-105 transition duration-300 h-10 w-full"
      >
        Buy
      </button>
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex gap-2 items-center justify-center cursor-pointer text-white bg-gray-400 rounded-md p-2 shadow-md hover:scale-105 transition duration-300 h-10 w-full"
      >
        <ShoppingCart /> Add to cart
      </button>
    </div>
  );
}
