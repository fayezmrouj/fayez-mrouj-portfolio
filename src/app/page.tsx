import { Navbar } from "@/components/navbar";
import { BackToTop } from "@/components/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Philosophy } from "@/components/sections/philosophy";
import { Expertise } from "@/components/sections/expertise";
import { Innovation } from "@/components/sections/innovation";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { GalleryTestimonials } from "@/components/sections/gallery";
import { ResourcesBlog } from "@/components/sections/resources-blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Journey />
        <Philosophy />
        <Expertise />
        <Innovation />
        <Achievements />
        <Certifications />
        <GalleryTestimonials />
        <ResourcesBlog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
