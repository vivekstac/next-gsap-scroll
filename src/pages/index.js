import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollSection from "@/components/ScrollSection";
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
    <div>
      <Header />
    </div>
      <Hero />
      <ScrollSection />

      <Projects />
      <Footer />
    </>
  );
}
