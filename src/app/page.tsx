"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <ProductGrid searchQuery={searchQuery} />
      <Footer />
    </main>
  );
}
