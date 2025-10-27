import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // Import transition components
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import ScrollProgress from "./assets/Components/ScrollProgress/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import FloatingMenu from "./components/FloatingMenu";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import { KonamiCodeListener } from "./hooks/useKonamiCode";
import { useTheme } from "./context/ThemeContext";
import "./assets/Components/transition.css";

// Lazy load components for better performance
const About = lazy(() => import("./assets/Components/About/About"));
const Portfolio = lazy(() => import("./assets/Components/Portfolio"));
const Contact = lazy(() => import("./assets/Components/Contact/Contact"));
const NotFound = lazy(() => import("./assets/Components/NotFound/NotFound"));
const Resume = lazy(() => import("./assets/Components/Resume/Resume"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <div className="mt-4 text-white text-center">Loading...</div>
    </div>
  </div>
);

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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-[#171d32]' : 'bg-gray-50'} h-auto w-full overflow-hidden transition-colors duration-300 relative`}>
      <ParticleBackground />
      <CustomCursor />
      <KonamiCodeListener />
      <Router>
        <ScrollProgress />
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <div className="relative z-10">
          <Navbar />
          <AnimatedRoutes /> {/* Handle transitions and routing */}
          <Footer />
        </div>
        <ThemeToggle />
        <FloatingMenu />
      </Router>
    </div>
  );
}

export default App;