import React, { useEffect } from "react";
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
import Resume from "./assets/Components/Resume/Resume";
import Footer from "./assets/Components/Footer/Footer";
import "./assets/Components/transition.css";

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Custom component for handling transitions
const AnimatedRoutes = () => {
  const location = useLocation(); // useLocation should be called inside Router
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
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
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <Navbar />
        <AnimatedRoutes /> {/* Handle transitions and routing */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;