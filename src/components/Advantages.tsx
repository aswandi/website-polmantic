
import React from "react";
import { Code, Users, CreditCard, Clock } from "lucide-react";

const advantagesData = [
  {
    icon: <Code className="h-12 w-12 text-white" />,
    title: "Pengembangan dari Nol",
    description:
      "Aplikasi dibuat oleh tim kami sendiri dari nol, memastikan kode yang bersih, efisien, dan sesuai dengan kebutuhan spesifik Anda.",
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    title: "Presentasi Langsung",
    description:
      "Kami bisa mempresentasikan di kantor Anda untuk wilayah Jabodetabek, memberikan komunikasi langsung dan pemahaman yang lebih baik.",
  },
  {
    icon: <CreditCard className="h-12 w-12 text-white" />,
    title: "Pembayaran Bertahap",
    description:
      "Sistem pembayaran bertahap tanpa uang muka. Pembayaran hanya dilakukan saat progres mencapai 10%, 40%, 70%, dan 100%.",
  },
  {
    icon: <Clock className="h-12 w-12 text-white" />,
    title: "Perusahaan Berpengalaman",
    description:
      "Kami adalah perusahaan existing yang sudah lama berdiri di Kota Bekasi. Kami akan terus melayani termasuk maintenance dan update sistem.",
  },
];

const Advantages = () => {
  return (
    <section id="keunggulan" className="py-24 bg-gradient-to-br from-futuristic-darkblue to-futuristic-purple">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-gray-300">
            Beberapa alasan mengapa Anda sebaiknya memilih layanan POLMANTIC MEDIA CITRA
            untuk pengembangan aplikasi bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantagesData.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="bg-gradient-to-br from-futuristic-purple to-futuristic-blue p-3 rounded-lg inline-block mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
              <p className="text-gray-300">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
