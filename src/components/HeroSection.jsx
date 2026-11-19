import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../content/profile";

const facts = [
  "MSc Software Engineering",
  "BCA Computer Applications",
  `${profile.location.city}, ${profile.location.country}`,
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

// One short fade-and-rise on load. With reduced motion, the global
// MotionConfig (App.jsx) drops the movement and keeps only the fade.
const reveal = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  return (
    // pt-16 keeps the content clear of the fixed 64px Navbar; svh keeps the
    // height stable while mobile browser toolbars expand and collapse.
    // `relative` keeps the section painted above the fixed StarBackground
    // layer (z-0), as before.
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center bg-background pt-16 text-left"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8">
        {/* Introduction */}
        <motion.div {...reveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-medium text-foreground">
              {profile.availability.status}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {profile.location.city}, {profile.location.country}
            </span>
          </p>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name}{" "}
            <span className="mt-3 block text-2xl font-medium tracking-tight text-primary sm:text-3xl lg:text-4xl">
              {profile.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm an MSc Software Engineering student in Germany building{" "}
            <span className="font-medium text-foreground">
              full-stack applications, AI-powered automation, and backend systems
            </span>{" "}
            with a focus on clean architecture, performance, and solving real-world
            problems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto ${focusRing}`}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto ${focusRing}`}
            >
              View Resume
              <ArrowUpRight className="h-4 w-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <a
              href="#contact"
              className={`inline-flex h-11 items-center justify-center rounded-md px-2 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline sm:justify-start ${focusRing}`}
            >
              Let's Connect
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-0">
            {facts.map((fact) => (
              <li
                key={fact}
                className="sm:border-l sm:border-border sm:px-4 sm:first:border-l-0 sm:first:pl-0"
              >
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Portrait */}
        <motion.figure
          {...reveal}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-sm sm:max-w-[360px] lg:max-w-[380px] lg:justify-self-end xl:max-w-[420px]"
        >
          <img
            src="/Dhruvil_Photo.jpg"
            alt={`Portrait of ${profile.name}`}
            width={1200}
            height={1259}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            // 4:5 crop of a near-square source: only the sides are trimmed;
            // 46% keeps the face (slightly left of centre) centred.
            className="aspect-[4/5] w-full rounded-lg border border-border bg-muted object-cover object-[46%_50%]"
          />
        </motion.figure>
      </div>
    </section>
  );
};
