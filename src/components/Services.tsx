
import React from "react";
import { Globe, Smartphone, Server, Code, RefreshCw, Shield } from "lucide-react";

const serviceData = [
  {
    icon: <Globe className="h-10 w-10 text-futuristic-purple" />,
    title: "Aplikasi Berbasis Web",
    description:
      "Kami mengembangkan aplikasi web kustom yang responsif, cepat, dan sesuai dengan kebutuhan bisnis Anda, dari sistem manajemen hingga platform e-commerce.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-futuristic-purple" />,
    title: "Aplikasi Android",
    description:
      "Buat aplikasi Android berkualitas tinggi dengan pengalaman pengguna yang optimal untuk mencapai target pasar mobile Anda.",
  },
  {
    icon: <Server className="h-10 w-10 text-futuristic-purple" />,
    title: "Pengembangan Backend",
    description:
      "Kami membangun infrastruktur backend yang kuat, scalable dan aman untuk mendukung aplikasi Anda.",
  },
  {
    icon: <Code className="h-10 w-10 text-futuristic-purple" />,
    title: "Pengembangan Frontend",
    description:
      "Desain antarmuka pengguna yang modern, intuitif dan menarik untuk memberikan pengalaman digital terbaik.",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-futuristic-purple" />,
    title: "Pemeliharaan & Update",
    description:
      "Layanan pemeliharaan dan pembaruan berkelanjutan untuk memastikan aplikasi Anda tetap up-to-date dan berfungsi optimal.",
  },
  {
    icon: <Shield className="h-10 w-10 text-futuristic-purple" />,
    title: "Keamanan & Optimasi",
    description:
      "Implementasi standar keamanan tinggi dan optimasi performa untuk melindungi data dan memberikan kecepatan maksimal.",
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Layanan <span className="gradient-text">Unggulan</span> Kami
          </h2>
          <p className="text-gray-600">
            Kami menyediakan berbagai layanan pengembangan aplikasi untuk memenuhi
            kebutuhan digital bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 group"
            >
              <div className="service-card-content">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
