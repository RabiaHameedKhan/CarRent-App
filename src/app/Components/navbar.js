'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Image
            src="/car-logo.png"
            alt="Car Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-2xl font-extrabold text-red-500 tracking-wide">
            Rent-A-Car
          </h1>
        </div>

        {/* Desktop Navlinks */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-red-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button (visible on mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (shows when hamburger clicked) */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block hover:text-red-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
