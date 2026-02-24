import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex bg-black text-white py-10 px-10 mt-10">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-row gap-10">
            <Link href="/">
              <button
                type="button"
                className="font-bold text-white transition duration-300 hover:scale-110 cursor-pointer"
              >
                Shop
              </button>
            </Link>
            <Link href="/about">
              <button
                type="button"
                className="font-bold text-white transition duration-300 hover:scale-110 cursor-pointer"
              >
                About
              </button>
            </Link>
            <Link href="/contact">
              <button
                type="button"
                className="font-bold text-white transition duration-300 hover:scale-110 cursor-pointer"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <p className="text-white">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
