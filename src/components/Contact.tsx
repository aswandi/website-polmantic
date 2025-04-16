
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
    });
  };

  return (
    <section id="kontak" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-gray-600">
            Konsultasikan kebutuhan aplikasi bisnis Anda dengan tim kami dan dapatkan
            solusi digital terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-futuristic-darkblue to-futuristic-purple text-white p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 text-futuristic-blue" />
                <div>
                  <h4 className="font-medium mb-1">Alamat</h4>
                  <p className="text-gray-300">
                    Apartemen Springlake Summarecon Kota Bekasi
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 text-futuristic-blue" />
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <p className="text-gray-300">
                    <a href="https://wa.me/62811945222" className="hover:text-white transition-colors">
                      0811945222
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 text-futuristic-blue" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300">
                    <a href="mailto:info@polmanticmediacitra.com" className="hover:text-white transition-colors">
                      info@polmanticmediacitra.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-3">Jam Kerja</h4>
              <p className="text-gray-300 mb-1">Senin - Jumat: 09:00 - 17:00</p>
              <p className="text-gray-300">Sabtu: 09:00 - 14:00</p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Nomor Telepon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Masukkan nomor telepon"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subjek
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Masukkan subjek pesan"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Deskripsikan kebutuhan aplikasi Anda"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90 transition-opacity"
              >
                Kirim Pesan <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
