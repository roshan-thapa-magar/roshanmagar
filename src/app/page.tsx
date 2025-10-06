import Navbar from "@/components/navbar";
import Hero from '@/components/hero';
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
