import About from "@/components/about";
import Skills from "@/components/skills";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr class="h-2 mx-8  bg-gray-200 border-0 dark:bg-gray-700 my-8" />
      <Skills />
      <About />
      <Footer />
    </>
  );
}
