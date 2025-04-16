
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-futuristic-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">POLMANTIC MEDIA CITRA</h3>
            <p className="text-gray-300 mb-4">
              Kami menyediakan layanan pembuatan aplikasi berbasis web dan Android
              untuk membantu bisnis Anda bertumbuh di era digital.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-futuristic-purple transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-futuristic-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-futuristic-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="text-gray-300 hover:text-futuristic-purple transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-300 hover:text-futuristic-purple transition-colors">Layanan</a>
              </li>
              <li>
                <a href="#keunggulan" className="text-gray-300 hover:text-futuristic-purple transition-colors">Keunggulan</a>
              </li>
              <li>
                <a href="#portofolio" className="text-gray-300 hover:text-futuristic-purple transition-colors">Portofolio</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-futuristic-purple transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-futuristic-purple transition-colors">Aplikasi Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-futuristic-purple transition-colors">Aplikasi Android</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-futuristic-purple transition-colors">Website Perusahaan</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-futuristic-purple transition-colors">E-Commerce</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-futuristic-purple transition-colors">Maintenance</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-futuristic-purple" />
                <span className="text-gray-300">Apartemen Springlake Summarecon Kota Bekasi</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-futuristic-purple" />
                <a href="https://wa.me/62811945222" className="text-gray-300 hover:text-futuristic-purple transition-colors">0811945222</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-futuristic-purple" />
                <a href="mailto:info@polmanticmediacitra.com" className="text-gray-300 hover:text-futuristic-purple transition-colors">info@polmanticmediacitra.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} POLMANTIC MEDIA CITRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
