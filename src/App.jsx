import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/Footer/Footer";
import FloatingBall from "./components/utils/FloatingBall";
import InteractiveBackground from "./components/hero/InteractiveBackground";

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-background relative">
      <InteractiveBackground />
      <div className="noise" />
      <div className="site-frame z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Contacts />
        </main>
        <Footer />
        <FloatingBall />
      </div>
    </div>
  );
}

export default App;
