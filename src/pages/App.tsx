import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ToolsMarquee from "@/components/ToolsMarquee";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { cases } from "@/data/cases";
import { profile } from "@/data/profile";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        <Hero />
        <About />
        <ToolsMarquee />

        {/* PROYECTOS (grilla estable) */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-10 scroll-mt-28">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl font-extrabold text-brand-graphite dark:text-brand-light">
              Proyectos
            </h2>
            <a
              href={profile?.links?.behance ?? "#"}
              target="_blank"
              className="text-brand-accent hover:opacity-90"
            >
              Ver más en Behance →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {cases.map((c: any) => (
              <ProjectCard key={c.slug} item={c} />
            ))}
          </div>
        </section>

        <Experience />
        <Testimonials />
        {/* <Pricing /> */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
  