"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/logo";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme || storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white dark:bg-black border-b border-[#e5c888] relative z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-[#e5c888]">
              TrainedToGrow
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-[#e5c888] hover:text-[#947ac0] transition-all"
            >
              About TTG
            </Link>
            <Link
              href="/mission"
              className="text-[#e5c888] hover:text-[#947ac0] transition-all"
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="text-[#e5c888] hover:text-[#947ac0] transition-all"
            >
              Contact
            </Link>
            <Button className="bg-[#e5c888] hover:bg-[#947ac0] hover:text-white text-black dark:text-black dark:bg-[#e5c888] dark:hover:text-white transition-all">
              Schedule Meeting
            </Button>
          </div>

          {/* Right Section (Dark Mode + Mobile Menu) */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md transition-all"
            >
              {darkMode ? (
                <Sun className="text-[#e5c888] hover:text-white transition-all" />
              ) : (
                <Moon className="text-[#e5c888] hover:text-[#947ac0] transition-all" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md transition-all"
            >
              {menuOpen ? (
                <X className="text-[#e5c888] h-7 w-7 transition-all transform rotate-180" />
              ) : (
                <Menu className="text-[#e5c888] h-7 w-7 transition-all transform rotate-0" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu with Fixed Position and Overlay */}
      {menuOpen && (
        <>
          {/* Overlay to darken background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <Link
              href="/"
              className="text-[#e5c888] hover:text-[#947ac0] text-xl transition-all"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#e5c888] hover:text-[#947ac0] text-xl transition-all"
              onClick={toggleMenu}
            >
              About TTG
            </Link>
            <Link
              href="/mission"
              className="text-[#e5c888] hover:text-[#947ac0] text-xl transition-all"
              onClick={toggleMenu}
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="text-[#e5c888] hover:text-[#947ac0] text-xl transition-all"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              className="bg-[#e5c888] hover:bg-[#947ac0] hover:text-white text-black dark:text-black dark:bg-[#e5c888] dark:hover:text-white transition-all"
              onClick={toggleMenu}
            >
              Schedule Meeting
            </Button>
          </div>
        </>
      )}

      {children}

      <footer className="bg-[#947ac0] dark:bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-[#e5c888] dark:text-[#e5c888]">
                Leading financial services provider helping people achieve their
                goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-[#e5c888] hover:text-white transition-all"
                  >
                    About TTG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="text-[#e5c888] hover:text-white transition-all"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[#e5c888] hover:text-white transition-all"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-[#e5c888] hover:text-white transition-all"
                  >
                    Financial Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[#e5c888] hover:text-white transition-all"
                  >
                    Investment Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[#e5c888] hover:text-white transition-all"
                  >
                    Financial Planning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e5c888] mt-8 pt-8 text-center text-[#e5c888] dark:text-gray-400">
            <p>&copy; 2024 TrainedToGrow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
