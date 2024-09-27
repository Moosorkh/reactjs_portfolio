import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // Import transition components
import About from "./assets/Components/About/About";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Contact from "./assets/Components/Contact/Contact";
import NotFound from "./assets/Components/NotFound/NotFound";
import Navbar from "./assets/Components/Navbar/Navbar";
import Projects from "./assets/Components/Projects/Projects";
import Footer from "./assets/Components/Footer/Footer";
import "./assets/Components/transition.css";

// Custom component for handling transitions
const AnimatedRoutes = () => {
  const location = useLocation(); // useLocation should be called inside Router
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Router>
        <Navbar />
        <AnimatedRoutes /> {/* Handle transitions and routing */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
