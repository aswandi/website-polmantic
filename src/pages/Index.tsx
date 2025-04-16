
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Portfolio />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
