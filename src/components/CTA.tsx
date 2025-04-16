
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-futuristic-purple to-futuristic-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Memulai Perjalanan Digital Anda?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Hubungi kami sekarang untuk konsultasi gratis dan penawaran khusus untuk
          proyek pengembangan aplikasi Anda.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-white text-futuristic-purple hover:bg-white/90 group"
          onClick={() => window.location.href = "#kontak"}
        >
          Hubungi Kami Sekarang
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
