import About from "@/components/about";
import Skills from "@/components/skills";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Indranil&apos;s Portfolio</title>
        <meta name="description" content="This is my page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
