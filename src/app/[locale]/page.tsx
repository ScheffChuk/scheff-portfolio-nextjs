import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/ui/section-divider";
import Skills from "@/components/skills";
import Header from "@/components/header";
import Footer from "@/components/footer";

import LocaleSwitcher from "@/components/ui/locale-switcher";
import ThemeSwitch from "@/components/ui/theme-switch";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <div className="fixed right-5 top-7 flex items-center justify-center space-x-3">
        <LocaleSwitcher />
        <ThemeSwitch />
      </div>
    </main>
  );
}
