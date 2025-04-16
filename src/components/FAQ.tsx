
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk mengembangkan sebuah aplikasi?",
    answer:
      "Waktu pengembangan bervariasi tergantung pada kompleksitas dan fitur yang diminta. Aplikasi sederhana dapat selesai dalam 1-2 bulan, sedangkan aplikasi yang lebih kompleks mungkin membutuhkan 3-6 bulan. Kami akan memberikan estimasi waktu yang akurat setelah berdiskusi tentang kebutuhan Anda.",
  },
  {
    question: "Bagaimana sistem pembayaran yang diterapkan?",
    answer:
      "Kami menerapkan sistem pembayaran bertahap tanpa uang muka. Pembayaran dilakukan berdasarkan pencapaian progres: 10%, 40%, 70%, dan 100%. Hal ini memberikan keamanan dan fleksibilitas bagi klien kami.",
  },
  {
    question: "Apakah saya bisa melihat progres pengembangan aplikasi?",
    answer:
      "Ya, kami sangat transparan dalam proses pengembangan. Anda akan mendapatkan akses ke demo versi aplikasi yang sedang dikembangkan dan laporan progres berkala. Kami juga dapat melakukan presentasi langsung untuk wilayah Jabodetabek.",
  },
  {
    question: "Apakah aplikasi yang dikembangkan bisa diintegrasikan dengan sistem yang sudah ada?",
    answer:
      "Ya, kami dapat mengintegrasikan aplikasi baru dengan sistem atau aplikasi yang sudah ada di perusahaan Anda, seperti ERP, CRM, atau platform e-commerce. Kami melakukan analisis menyeluruh untuk memastikan integrasi yang mulus.",
  },
  {
    question: "Bagaimana layanan maintenance setelah aplikasi selesai?",
    answer:
      "Kami menyediakan layanan maintenance dan dukungan teknis berkelanjutan setelah aplikasi diluncurkan. Paket maintenance kami mencakup perbaikan bug, update keamanan, dan optimasi performa. Kami juga menawarkan paket pengembangan fitur baru sesuai kebutuhan.",
  },
  {
    question: "Apakah aplikasi yang dikembangkan mobile-friendly?",
    answer:
      "Ya, semua aplikasi web yang kami kembangkan dirancang dengan pendekatan mobile-first dan responsif, sehingga dapat berfungsi dengan baik pada perangkat desktop maupun seluler. Untuk aplikasi Android, kami mengikuti standar desain Material Design untuk pengalaman pengguna yang optimal.",
  },
  {
    question: "Apakah POLMANTIC MEDIA CITRA membantu dalam proses publikasi aplikasi?",
    answer:
      "Ya, kami membantu seluruh proses publikasi aplikasi Android ke Google Play Store, termasuk persiapan materi publikasi, pengaturan akun developer, dan pemenuhan persyaratan publikasi. Untuk aplikasi web, kami membantu dalam proses deployment ke server produksi.",
  },
  {
    question: "Bisakah saya mendapatkan penawaran harga secara gratis?",
    answer:
      "Tentu saja, kami menyediakan konsultasi dan penawaran harga secara gratis tanpa kewajiban. Silakan hubungi kami melalui WhatsApp atau email untuk mendiskusikan kebutuhan Anda dan mendapatkan estimasi biaya yang sesuai.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering <span className="gradient-text">Diajukan</span>
          </h2>
          <p className="text-gray-600">
            Temukan jawaban atas pertanyaan umum mengenai layanan pengembangan
            aplikasi kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
