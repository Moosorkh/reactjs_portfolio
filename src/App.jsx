import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Components/Footer/Footer";

const About = lazy(() => import("./assets/Components/About/About"));
const Portfolio = lazy(() => import("./assets/Components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./assets/Components/Contact/Contact"));
const NotFound = lazy(() => import("./assets/Components/NotFound/NotFound"));
const Resume = lazy(() => import("./assets/Components/Resume/Resume"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-hidden">
        <Router>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
