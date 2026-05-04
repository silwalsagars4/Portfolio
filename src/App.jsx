import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
