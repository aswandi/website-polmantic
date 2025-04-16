
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const portfolioData = {
  web: [
    {
      title: "ERP System",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sistem manajemen perusahaan terintegrasi untuk mengelola inventaris, keuangan, dan sumber daya manusia.",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Platform penjualan online dengan fitur pembayaran terintegrasi, manajemen produk, dan analitik pelanggan.",
      tags: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Hotel Booking System",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sistem reservasi hotel dengan kalender ketersediaan, pembayaran online, dan dashboard admin.",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
  ],
  android: [
    {
      title: "Aplikasi Marketplace",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Aplikasi marketplace untuk menghubungkan penjual dan pembeli dengan fitur chat, pembayaran, dan rating.",
      tags: ["Kotlin", "Firebase", "ML Kit"],
    },
    {
      title: "Aplikasi Pendidikan",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Platform pembelajaran dengan konten video, kuis interaktif, dan sertifikasi digital untuk pelajar.",
      tags: ["Java", "Firebase", "ExoPlayer"],
    },
    {
      title: "Fitness Tracker",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Aplikasi pelacak kebugaran dengan integrasi sensor perangkat, rencana latihan, dan analitik kemajuan.",
      tags: ["Kotlin", "Room DB", "Health APIs"],
    },
  ],
};

const PortfolioCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4">
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white/90 hover:bg-white"
            >
              Lihat Detail <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-futuristic-purple/10 text-futuristic-purple px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id="portofolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portofolio <span className="gradient-text">Proyek</span> Kami
          </h2>
          <p className="text-gray-600">
            Beberapa contoh proyek aplikasi web dan Android yang telah kami kembangkan
            untuk klien kami.
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="web">Aplikasi Web</TabsTrigger>
              <TabsTrigger value="android">Aplikasi Android</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.web.map((project, index) => (
                <PortfolioCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="android" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.android.map((project, index) => (
                <PortfolioCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
