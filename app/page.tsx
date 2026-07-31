"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Speaking from "@/components/Speaking";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Speaking />
        <Blog />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
