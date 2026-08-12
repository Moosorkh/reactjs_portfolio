import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import About from "./assets/Components/About/About";
import Portfolio from "./assets/Components/Portfolio";
import Contact from "./assets/Components/Contact/Contact";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import BootScreen from "./assets/Components/BootScreen/BootScreen";
import { setSmoothScroller } from "./utils/scroll";

function App() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis = null;

    const stop = () => {
      setSmoothScroller(null);
      lenis?.destroy();
      lenis = null;
      document.documentElement.removeAttribute("data-smooth-scroll");
    };

    const start = () => {
      stop();
      if (reducedMotion.matches) return;

      try {
        lenis = new Lenis({
          autoRaf: true,
          lerp: 0.08,
          wheelMultiplier: 0.5,
          smoothWheel: true,
          syncTouch: false,
          overscroll: true,
          anchors: false,
          prevent: (node) =>
            node instanceof HTMLElement && Boolean(node.closest("[data-lenis-prevent]")),
        });
        setSmoothScroller(lenis);
        document.documentElement.setAttribute("data-smooth-scroll", "true");
      } catch (error) {
        console.warn("Smooth scrolling is unavailable; using native scrolling.", error);
        stop();
      }
    };

    start();
    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", start);
    } else {
      reducedMotion.addListener(start);
    }

    return () => {
      if (typeof reducedMotion.removeEventListener === "function") {
        reducedMotion.removeEventListener("change", start);
      } else {
        reducedMotion.removeListener(start);
      }
      stop();
    };
  }, []);

  return (
    // `overflow-x-clip` avoids creating a scroll container that would break
    // sticky positioning in the long-form animation sections.
    <div className="bg-bg-primary min-h-screen w-full overflow-x-clip transition-colors duration-300">
      <BootScreen onReveal={() => setHeroReady(true)} />
      <Navbar ready={heroReady} />
      <main>
        <About heroReady={heroReady} />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
