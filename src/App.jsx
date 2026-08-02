import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // Import transition components
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import "./assets/Components/transition.css";

const About = lazy(() => import("./assets/Components/About/About"));
const Portfolio = lazy(() => import("./assets/Components/Portfolio"));
const Contact = lazy(() => import("./assets/Components/Contact/Contact"));
const NotFound = lazy(() => import("./assets/Components/NotFound/NotFound"));
const Resume = lazy(() => import("./assets/Components/Resume/Resume"));

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
    <Suspense fallback={<div className="min-h-[60vh]" />}>
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
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="bg-bg-primary min-h-screen w-full overflow-hidden transition-colors duration-300">
        <Router>
          <ScrollToTop /> {/* Add ScrollToTop component */}
          <Navbar />
          <AnimatedRoutes /> {/* Handle transitions and routing */}
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
