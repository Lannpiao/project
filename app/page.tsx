import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Differentials from "@/components/sections/differentials";
import Projects from "@/components/sections/projects";
import Process from "@/components/sections/process";
import TargetAudience from "@/components/sections/target-audience";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Projects />
        <Process />
        <TargetAudience />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
