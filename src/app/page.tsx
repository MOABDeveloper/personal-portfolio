import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Experience } from '@/sections/Experience';
import { AboutSection } from '@/sections/About';
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import BackgroundImage from '@/assets/images/LooperGroup2.png';
import StarsCanvas from '@/components/StarsBackground';

export default function Home() {
  return (
    <div className="relative">
      {/* Looper Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
        {/* Circles Background */}
        <div className="absolute inset-0 -z-30">
          <StarsCanvas />
        </div>
      </div>

      {/* Page Content */}
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="experience">
        <TapeSection />
        <Experience />
        <TapeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}