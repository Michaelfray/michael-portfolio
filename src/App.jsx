import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonails } from "@/sections/Testimonails";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <main>
        <Hero />
         </main>
        <About />
        <Projects />
        <Experience />
        <Testimonails />
        <Contact />
    </div>
  );
}
export default App;
