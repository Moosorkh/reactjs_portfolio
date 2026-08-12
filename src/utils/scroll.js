let smoothScroller = null;

export const setSmoothScroller = (scroller) => {
  smoothScroller = scroller;
};

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const headerHeight =
    Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-height")
    ) || 0;

  if (smoothScroller && !reducedMotion) {
    smoothScroller.scrollTo(el, {
      offset: -headerHeight,
      duration: 1.15,
    });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({
    top,
    behavior: reducedMotion ? "auto" : "smooth",
  });
};
