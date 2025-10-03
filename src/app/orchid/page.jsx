"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useState } from "react";
import { FaLeaf, FaShoppingCart } from "react-icons/fa";

const orchidData = [
  {
    id: 1,
    name: "White Phalaenopsis",
    price: 25,
    image: "/orchids/orchides1.jpg",
    description: "Elegant white petals symbolizing purity and grace.",
  },
  {
    id: 2,
    name: "Pink Dendrobium",
    price: 30,
    image: "/orchids/orchides2.jpg",
    description: "Vibrant pink orchid perfect for gifts and decor.",
  },
  {
    id: 3,
    name: "Purple Vanda",
    price: 40,
    image: "/orchids/orchids3.jpeg",
    description: "Rich purple orchid loved for its striking color.",
  },
];

export default function OrchidPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <Container className="py-28">
      <div className="min-h-screen bg-gray-50 py-46">
        {/* Hero Section */}
        <section className="bg-green-100">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-green-800 mb-4">
              Orchid Paradise
            </h1>
            <p className="text-lg text-green-700 mb-6">
              Discover the beauty of exotic orchids. Bring nature’s elegance to
              your home.
            </p>
            <a
              href="#shop"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FaLeaf className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Fresh & Healthy
              </h3>
              <p className="text-gray-600">
                Locally grown orchids with top-quality care.
              </p>
            </div>
            <div>
              <FaShoppingCart className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Easy Purchase
              </h3>
              <p className="text-gray-600">
                Quick and secure checkout experience.
              </p>
            </div>
            <div>
              <FaLeaf className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Sustainably grown plants with love for nature.
              </p>
            </div>
          </div>
        </section>

        {/* Orchid Shop */}
        <section id="shop" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
              Our Orchid Collection
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {orchidData.map((orchid) => (
                <div
                  key={orchid.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={orchid.image}
                      alt={orchid.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {orchid.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {orchid.description}
                    </p>
                    <p className="text-green-700 font-bold text-lg mb-4">
                      ${orchid.price}
                    </p>
                    <button
                      onClick={() => addToCart(orchid.id)}
                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                      {cart.includes(orchid.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
