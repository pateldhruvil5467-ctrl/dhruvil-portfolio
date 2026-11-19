import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Github, Linkedin, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import profile from "../content/profile";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Sections tracked for the active state, in page order. #hero is the
// wordmark's destination.
const trackedSections = ["#hero", ...navItems.map((item) => item.href)];

// Matches the header's h-16 and the html scroll-padding-top in index.css.
const HEADER_HEIGHT = 64;

// A section becomes active once its top passes this far below the header.
const ACTIVE_OFFSET = 100;

const MOBILE_MENU_ID = "mobile-navigation";

// Keys that scroll the page; pressing one counts as the user scrolling.
const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
]);

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const iconButton = cn(
  "inline-flex h-11 w-11 items-center justify-center rounded-md",
  "text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
  focusRing
);

const ThemeToggle = () => {
  // next-themes (see App.jsx) owns the `dark` class and the persisted choice.
  // resolvedTheme is "light" or "dark" even when following the system theme.
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={iconButton}
      title={label}
      aria-label={label}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

const SocialLinks = () => (
  <>
    <a
      href={profile.social.github}
      target="_blank"
      rel="noopener noreferrer"
      className={iconButton}
      title="GitHub profile"
      aria-label="GitHub profile (opens in a new tab)"
    >
      <Github className="h-5 w-5" />
    </a>
    <a
      href={profile.social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={iconButton}
      title="LinkedIn profile"
      aria-label="LinkedIn profile (opens in a new tab)"
    >
      <Linkedin className="h-5 w-5" />
    </a>
  </>
);

const ResumeLink = () => (
  <a
    href={profile.resume}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex h-11 items-center rounded-md border border-border px-4",
      "text-sm font-medium text-foreground transition-colors",
      "hover:border-primary hover:text-primary",
      focusRing
    )}
  >
    Resume
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showOnScroll, setShowOnScroll] = useState(true);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  // True while the page is scrolling because a nav link was clicked. The
  // header stays visible until the user scrolls by hand again. It starts true
  // so the browser's own scroll restoration (or a #hash jump) on page load,
  // which can arrive after mount, doesn't hide the header either.
  const navigationScrollRef = useRef(true);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // The header stays visible while it holds keyboard focus or the mobile
  // menu is open, even if the page was scrolled down.
  const isHidden = !showOnScroll && !hasKeyboardFocus && !menuOpen;

  useEffect(() => {
    // Look the sections up once rather than on every scroll frame.
    const sections = trackedSections
      .map((href) => [href, document.getElementById(href.slice(1))])
      .filter(([, element]) => element);

    let frameId = 0;

    // Runs at most once per animation frame (see handleScroll below).
    const updateFromScroll = () => {
      frameId = 0;
      const currentScrollY = window.scrollY;

      if (navigationScrollRef.current) {
        // Scrolling caused by a nav link: keep the header visible.
        setShowOnScroll(true);
      } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowOnScroll(false);
      } else {
        setShowOnScroll(true);
      }

      lastScrollYRef.current = currentScrollY;

      // The active section is the last one whose top has passed the line
      // just below the header. Sections that aren't in the nav (e.g.
      // #approach) leave the previous section active, as before.
      const line = HEADER_HEIGHT + ACTIVE_OFFSET;
      let current = sections[0]?.[0] ?? "#hero";
      for (const [href, element] of sections) {
        if (element.getBoundingClientRect().top <= line) current = href;
      }
      setActiveSection(current);
    };

    // Scroll events can fire many times per frame; batch them so the layout
    // reads happen once per frame at most.
    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateFromScroll);
    };

    // Set the correct active section on load (e.g. after a reload mid-page)
    // instead of waiting for the first scroll. Syncing the last position
    // first means a restored scroll position isn't mistaken for scrolling
    // down, so the header starts visible.
    lastScrollYRef.current = window.scrollY;
    updateFromScroll();

    // Any manual scrolling input ends a nav-link scroll, so hide-on-scroll
    // resumes. pointerdown also covers dragging the scrollbar; it fires
    // before a link's click, so clicking another nav link sets the flag again.
    const endNavigationScroll = () => {
      navigationScrollRef.current = false;
    };
    const handleScrollKey = (e) => {
      if (SCROLL_KEYS.has(e.key)) endNavigationScroll();
    };
    const userScrollEvents = ["wheel", "touchmove", "pointerdown"];

    window.addEventListener("scroll", handleScroll, { passive: true });
    userScrollEvents.forEach((type) =>
      window.addEventListener(type, endNavigationScroll, { passive: true })
    );
    window.addEventListener("keydown", handleScrollKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      userScrollEvents.forEach((type) =>
        window.removeEventListener(type, endNavigationScroll)
      );
      window.removeEventListener("keydown", handleScrollKey);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // While the mobile menu is open: Escape closes it and returns focus to the
  // menu button, and a click or tap outside the header closes it.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  // The mobile menu isn't shown at desktop widths, so close it if the
  // viewport grows past the breakpoint while it is open.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  // Track keyboard focus only (:focus-visible), so a mouse click on a link
  // doesn't pin the header open for the rest of the scroll.
  const handleFocus = (e) => {
    let isKeyboardFocus = true;
    try {
      isKeyboardFocus = e.target.matches(":focus-visible");
    } catch {
      // Older browsers without :focus-visible: treat all focus as keyboard.
    }
    if (isKeyboardFocus) setHasKeyboardFocus(true);
  };
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setHasKeyboardFocus(false);
  };

  // Used by every in-page nav link (wordmark, desktop and mobile).
  const handleNavClick = () => {
    navigationScrollRef.current = true;
    setShowOnScroll(true);
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        {/* Wordmark */}
        <a
          href="#hero"
          aria-current={activeSection === "#hero" ? "location" : undefined}
          onClick={handleNavClick}
          className={cn(
            "justify-self-start rounded-md font-heading text-base font-semibold tracking-tight text-foreground",
            focusRing
          )}
        >
          {profile.name}
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center rounded-md px-3 text-sm font-medium transition-colors",
                      "after:absolute after:inset-x-3 after:bottom-2 after:h-px after:transition-colors",
                      isActive
                        ? "text-foreground after:bg-primary"
                        : "text-muted-foreground hover:text-foreground after:bg-transparent",
                      focusRing
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 justify-self-end">
          <div className="hidden items-center gap-1 lg:flex">
            <SocialLinks />
            <div className="ml-2 mr-1">
              <ResumeLink />
            </div>
          </div>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(iconButton, "lg:hidden")}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu: only rendered while open, so its links can't take
          keyboard focus when it is closed. */}
      {menuOpen && (
        <div
          id={MOBILE_MENU_ID}
          className="border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "flex min-h-11 items-center rounded-md border-l-2 px-3 text-base transition-colors",
                        isActive
                          ? "border-primary font-medium text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground",
                        focusRing
                      )}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
              <SocialLinks />
              <ResumeLink />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
