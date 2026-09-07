import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import "./globals.css";

function Home() {
  return (
    <main className="site-main">
      <Navbar/>
      <About/>
      <Contact/>
      
      <footer className="site-footer">
          <div className="container mx-auto">
            <p>Calder Johnson · AI Researcher and Software Engineer · 2026</p>
          </div>
        </footer>
    </main>
  );
}

export default Home;