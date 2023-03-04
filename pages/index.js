import About from "@/components/about";
import Skills from "@/components/skills";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Skills />
      
      <About />
      <Contact />
      <Footer />
    </>
  );
}
