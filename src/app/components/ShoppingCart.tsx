import Link from "next/link";
import { ShoppingCart as CartIcon } from "lucide-react";

export default function ShoppingCart() {
  return (
    <Link
      href="/cart-page"
      className="text-white no-underline transition duration-300 hover:scale-110"
    >
      <div className="flex items-center gap-2">
        <CartIcon className="w-6" />
        <p className="text-sm font-bold">0</p>
      </div>
    </Link>
  );
}
