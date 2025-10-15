import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-red-500 mb-3">Rent-A-Car</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Drive your dream car anytime, anywhere. Experience effortless car rentals with style and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-red-600 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-3 text-gray-400">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">Cars</li>
            <li className="hover:text-red-400 cursor-pointer">About</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-red-600 inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex space-x-5 mt-3">
            <Facebook className="hover:text-red-400 cursor-pointer transition duration-200" size={22} />
            <Instagram className="hover:text-red-400 cursor-pointer transition duration-200" size={22} />
            <Twitter className="hover:text-red-400 cursor-pointer transition duration-200" size={22} />
            <Linkedin className="hover:text-red-400 cursor-pointer transition duration-200" size={22} />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} <span className="text-red-500">Rent-A-Car</span>. All rights reserved.
      </div>
    </footer>
  );
}
