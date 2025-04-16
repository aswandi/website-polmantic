
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="pt-28 pb-20 bg-gradient-to-br from-slate-950 to-futuristic-darkblue text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-futuristic-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-futuristic-blue/20 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solusi Digital <span className="gradient-text">Terbaik</span> untuk Bisnis Anda
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              POLMANTIC MEDIA CITRA menyediakan layanan pembuatan aplikasi berbasis web 
              dan Android untuk membantu perusahaan dan UMKM bertransformasi digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90 transition-opacity group"
                onClick={() => window.location.href = "#layanan"}
              >
                Jelajahi Layanan
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "#kontak"}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-futuristic-purple to-futuristic-blue rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-futuristic-darkblue p-1 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Solutions" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 animate-float">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/20">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-400 rounded-full mr-2"></div>
                  <p className="text-sm font-medium">Aplikasi Kustom</p>
                </div>
                <p className="text-xs text-gray-300 mt-1">Dibuat sesuai kebutuhan bisnis Anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
