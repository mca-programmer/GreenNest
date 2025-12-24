import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="GreenNest"
              className="w-12 h-12 rounded-full bg-white p-1"
            />
            <h2 className="text-2xl font-bold">GreenNest</h2>
          </div>
          <p className="text-sm text-white/90">
            Grow healthier plants with expert tips, community support, and
            sustainable gardening ideas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/care-tips" className="hover:underline">
                Care Tips
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:underline">
                Community
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>

          <div className="flex gap-4 mb-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-blue-600 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-red-500 transition transform hover:scale-110"
            >
              <FaPinterest />
            </a>
          </div>

          <p className="text-sm text-white/90">
            Follow us for daily plant inspiration 🌱
          </p>
        </div>
      </div>

      <div className="border-t border-white/30 text-center py-4 text-sm bg-black/10">
        © {new Date().getFullYear()} GreenNest — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
