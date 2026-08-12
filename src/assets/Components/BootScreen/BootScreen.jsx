import React, { useState, useEffect, useRef } from "react";

const COMMAND = "npm run dev";

const CODE_LINES = [
  <>
    <span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">Developer</span>{" "}
    <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@mehdi/portfolio'</span>
    <span className="text-white/50">;</span>
  </>,
  <>
    <span className="text-[#c586c0]">export default</span> <span className="text-[#c586c0]">new</span>{" "}
    <span className="text-[#4ec9b0]">Developer</span>
    <span className="text-white/50">(</span>
    <span className="text-[#ce9178]">'Mehdi Azar'</span>
    <span className="text-white/50">);</span>
  </>,
];

const OUTPUT_LINES = [
  <>
    <span className="text-[#4ec9b0] font-semibold">VITE</span> <span className="text-white/50">v5.4.5</span>{" "}
    <span className="text-white/70">ready in</span> <span className="text-white/90">138 ms</span>
  </>,
  <>
    <span className="text-[#4ec9b0]">➜</span> <span className="text-white/80">Local:</span>{" "}
    <span className="text-[#9cdcfe] underline">http://localhost:5173/</span>
  </>,
];

/**
 * Full-screen intro: shows the source file, types `npm run dev`, prints the
 * dev-server output, then fades away so the real site reads as its result.
 */
const BootScreen = ({ onReveal }) => {
  const [phase, setPhase] = useState("typing"); // typing -> running -> done -> exiting -> hidden
  const [typedCommand, setTypedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);

  // Keep the latest callback in a ref so the phase machine below never depends
  // on its identity — an inline arrow from the parent would otherwise re-run
  // (and cancel) the exit timer on every render.
  const onRevealRef = useRef(onReveal);
  useEffect(() => {
    onRevealRef.current = onReveal;
  });

  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Type the command
  useEffect(() => {
    if (phase !== "typing") return;

    if (reducedMotion) {
      setTypedCommand(COMMAND);
      setVisibleLines(OUTPUT_LINES.length);
      setPhase("done");
      return;
    }

    let charIndex = 0;
    const timeouts = [];

    const typeNextChar = () => {
      charIndex++;
      setTypedCommand(COMMAND.slice(0, charIndex));
      if (charIndex < COMMAND.length) {
        timeouts.push(setTimeout(typeNextChar, 55));
      } else {
        timeouts.push(setTimeout(() => setPhase("running"), 280));
      }
    };

    timeouts.push(setTimeout(typeNextChar, 500));
    return () => timeouts.forEach(clearTimeout);
  }, [phase, reducedMotion]);

  // Print output lines one at a time
  useEffect(() => {
    if (phase !== "running") return;
    const timeouts = OUTPUT_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), 180 * i + 120)
    );
    timeouts.push(setTimeout(() => setPhase("done"), 180 * OUTPUT_LINES.length + 380));
    return () => timeouts.forEach(clearTimeout);
  }, [phase]);

  // Hold on success, then begin the exit
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => setPhase("exiting"), reducedMotion ? 200 : 420);
    return () => clearTimeout(t);
  }, [phase, reducedMotion]);

  // Hand off to the site, then unmount once the fade completes
  useEffect(() => {
    if (phase !== "exiting") return;
    onRevealRef.current?.();
    const t = setTimeout(() => setPhase("hidden"), 800);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "hidden") return null;

  const isTyping = phase === "typing";
  const showOutput = phase === "running" || phase === "done" || phase === "exiting";
  const isDone = phase === "done" || phase === "exiting";
  const isExiting = phase === "exiting";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#12121a] px-6 transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
        isExiting ? "opacity-0 scale-[1.04] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="w-full max-w-lg font-mono">
        {/* Window chrome */}
        <div className="flex items-center gap-2 bg-[#252537] px-4 py-2.5 rounded-t-xl border border-white/10 border-b-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center text-[11px] text-white/40 truncate">developer.ts</span>
          <span className="w-14" />
        </div>

        {/* Source file */}
        <div className="bg-[#1e1e2e] border-x border-white/10 px-5 py-4 text-[12.5px] leading-6">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="select-none text-white/20 w-3 text-right shrink-0">{i + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="bg-[#181822] border border-white/10 rounded-b-xl px-5 py-4 text-[12.5px] leading-6 min-h-[6.5rem] shadow-2xl">
          <p className="text-white/60">
            <span className="text-[#4ec9b0]">➜</span> <span className="text-[#9cdcfe]">portfolio</span>{" "}
            {typedCommand}
            {isTyping && <span className="inline-block w-[7px] h-3.5 -mb-0.5 ml-0.5 bg-white/70 animate-pulse" />}
          </p>

          {showOutput &&
            OUTPUT_LINES.slice(0, visibleLines).map((line, i) => (
              <p key={i} className="animate-fade-in mt-1">
                {line}
              </p>
            ))}

          {isDone && <p className="mt-2 text-[#28c840] animate-fade-in">✓ build complete</p>}
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
