import { notFound } from "next/navigation";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import Proof from "@/components/Proof";
import Speaking from "@/components/Speaking";
import { isLocale } from "@/lib/i18n";

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <Problem locale={locale} />
        <About locale={locale} />
        <Speaking locale={locale} />
        <Proof locale={locale} />
        <Audience locale={locale} />
        <Blog locale={locale} />
        <Booking locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
