"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-center items-center text-xl">
        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Bouton menu burger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-4 text-center">
          <li>
            <Link
              href="/"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
