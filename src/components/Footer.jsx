import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Spiritual Community</h2>
            <p className="text-sm">Your journey to happiness.</p>
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Spiritual Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;