import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./globals.css";

function Home() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      
       <footer className=" text-white py-4 text-center">
          <div className="container mx-auto">
            <p>Image by <a href="https://www.freepik.com/free-vector/gradient-connection-background_45176473.htm#query=purple%20technology%20background%20code&position=24&from_view=keyword&track=ais&uuid=23600519-bc10-4216-8883-8ba1fbf74623">Freepik</a></p>
          </div>
        </footer>
    </main>
  );
}

export default Home;