import About from "./assets/Components/About/About";
import Experience from "./assets/Components/Experience/Experience";
import Home from "./assets/Components/Home/Home";
import Navbar from "./assets/Components/Navbar/Navbar";
import Projects from "./assets/Components/Projects/Projects";

function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Projects />
  </div>;
}

export default App;