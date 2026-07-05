import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.__shradhaLenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    const frameId = requestAnimationFrame(resetScroll);

    return () => cancelAnimationFrame(frameId);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
