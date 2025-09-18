import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ToolsMarquee from "@/components/ToolsMarquee";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import EasterEggChallenge from "@/components/EasterEggChallenge";
import Footer from "@/components/Footer";

import { cases } from "@/data/cases";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";


export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <ToolsMarquee />
        </motion.div>

        {/* PROYECTOS (grilla estable) */}
        <motion.section 
          id="projects" 
          className="max-w-6xl mx-auto px-6 py-6 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
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
            {cases.map((c: any, index: number) => (
              <ProjectCard key={c.slug} item={c} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <Experience />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Testimonials />
        </motion.div>

        {/* <Pricing /> */}
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactSection />
        </motion.div>

        {/* Easter Egg Challenge */}
        <EasterEggChallenge />
      </main>

      <Footer />
    </>
  );
}
  