import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react";

const WELCOME_SEEN_KEY = "dhruvil-portfolio:welcome-seen";

// The intro plays once per browser session, only on the home page, and never
// for visitors who ask for reduced motion.
const shouldShowWelcome = () => {
  if (window.location.pathname !== "/") return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    return window.sessionStorage.getItem(WELCOME_SEEN_KEY) !== "1";
  } catch {
    // Storage can be unavailable (e.g. blocked by privacy settings).
    return true;
  }
};

function App() {
  const [showWelcome, setShowWelcome] = useState(shouldShowWelcome);

  useEffect(() => {
    if (!showWelcome) return;

    try {
      window.sessionStorage.setItem(WELCOME_SEEN_KEY, "1");
    } catch {
      // Without storage the intro simply plays again next time.
    }
  }, [showWelcome]);

  const handleWelcomeComplete = useCallback(() => setShowWelcome(false), []);

  return (
    // reducedMotion="user": Framer Motion drops transform/layout animations
    // (keeping opacity fades) when the OS requests reduced motion.
    <MotionConfig reducedMotion="user">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <BrowserRouter>
          {/* The page mounts immediately beneath the intro so it (and its
              images) is ready when the intro lifts. `inert` keeps the hidden
              page out of the focus and accessibility order meanwhile. */}
          <div inert={showWelcome ? "" : undefined}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {showWelcome && (
            <WelcomeScreen onWelcomeComplete={handleWelcomeComplete} />
          )}
        </BrowserRouter>
        <Analytics />
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
