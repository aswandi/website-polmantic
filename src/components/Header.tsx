
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              POLMANTIC
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#beranda" className="nav-link">
              Beranda
            </a>
            <a href="#layanan" className="nav-link">
              Layanan
            </a>
            <a href="#keunggulan" className="nav-link">
              Keunggulan
            </a>
            <a href="#portofolio" className="nav-link">
              Portofolio
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="#kontak" className="nav-link">
              Kontak
            </a>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = "#kontak"}
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a
                href="#beranda"
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#layanan"
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Layanan
              </a>
              <a
                href="#keunggulan"
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Keunggulan
              </a>
              <a
                href="#portofolio"
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portofolio
              </a>
              <a
                href="#faq"
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#kontak"
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontak
              </a>
              <Button
                className="w-full bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90 transition-opacity"
                onClick={() => {
                  window.location.href = "#kontak";
                  setIsMobileMenuOpen(false);
                }}
              >
                Hubungi Kami
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
