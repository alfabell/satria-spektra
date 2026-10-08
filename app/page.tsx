import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { ServicesSection } from "./components/sections/services-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { GallerySection } from "./components/sections/gallery-section";
import { ContactSection } from "./components/sections/contact-section";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
