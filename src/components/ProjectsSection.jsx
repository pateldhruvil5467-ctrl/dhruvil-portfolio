import { ArrowRight, Github, ChevronUp, Star, Sparkles, Zap } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const projects = [
  {
    id: "ai-job-search",
    title: "AI-Powered Job Search & Shortlisting System",
    category: "AI & Automation",
    description:
      "An AI-assisted job search automation system designed to reduce repetitive job discovery and shortlisting work through automated data collection, NLP-based processing, and browser automation.",
    image: "/projects/ai-job-search.png",
    tags: [
      "Python",
      "NLP",
      "Selenium",
      "Playwright",
      "Automation",
      "AI",
    ],
    githubUrl:
      "https://github.com/pateldhruvil5467-ctrl/ai-job-search-agent",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Completed",
    highlights: [
      "Automated job discovery",
      "Job data extraction and filtering",
      "AI-assisted shortlisting",
    ],
  },

  {
    id: "parallel-financial-analytics",
    title: "Parallel Financial Analytics System",
    category: "Systems & Performance",
    description:
      "A C++ financial analytics system that processes historical Tesla stock data using sequential and parallel algorithms, with benchmarking to compare performance across execution strategies.",
    image: "/projects/parallel-financial-analytics.webp",
    tags: [
      "C++",
      "OpenMP",
      "MPI",
      "Multithreading",
      "Parallel Computing",
      "Benchmarking",
    ],
    githubUrl:
      "https://github.com/pateldhruvil5467-ctrl/ParallelFinancialAnalytics",
    featured: true,
    accentColor: "from-orange-500 to-red-600",
    status: "Completed",
    highlights: [
      "Real-world financial dataset",
      "Sequential vs parallel processing",
      "Performance benchmarking",
    ],
  },

  {
    id: "technocloud",
    title: "TechnoCloud",
    category: "Full Stack",
    description:
      "A full-stack music application built with React and Node.js, combining a responsive frontend with backend services for application data and user interactions.",
    image: "/projects/technocloud.png",
    tags: [
      "React",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Full Stack",
      "Git",
    ],
    githubUrl:
      "https://github.com/pateldhruvil5467-ctrl/technocloud",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Completed",
    highlights: [
      "Full-stack application architecture",
      "React-based frontend",
      "Node.js backend services",
    ],
  },

  {
    id: "password-security-analyzer",
    title: "Smart Password Security Analyzer",
    category: "Security",
    description:
      "A Python-based password security application that analyzes password strength and applies security-focused techniques to help users understand password resilience.",
    image: "/projects/password-security-analyzer.png",
    tags: [
      "Python",
      "Flask",
      "Password Security",
      "zxcvbn",
      "Hashing",
    ],
    githubUrl:
      "https://github.com/pateldhruvil5467-ctrl/multi-attack-password-analyzer",
    featured: false,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Completed",
    highlights: [
      "Password strength analysis",
      "Security-focused validation",
      "Hashing techniques",
    ],
  },
];

const categoryColors = {
  "AI & Automation":
    "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",

  "Systems & Performance":
    "from-orange-500/20 to-red-600/20 text-orange-600 border-orange-500/30",

  "Full Stack":
    "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",

  Security:
    "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
};

// Amber is reserved for unfinished work (e.g. "In Progress"), so finished
// projects don't read as a warning.
const statusStyles = {
  Live: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
  Completed: "bg-sky-500/20 text-sky-600 border border-sky-500/30",
};

const defaultStatusStyle =
  "bg-amber-500/20 text-amber-600 border border-amber-500/30";

// Defined at module level: declaring it inside ProjectsSection created a new
// component type on every render, remounting each card's highlight list.
const ProjectHighlights = ({ highlights }) => (
  <div className="space-y-2">
    {highlights.map((highlight, index) => (
      <div key={index} className="flex items-center gap-2 text-sm">
        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        <span className="text-muted-foreground">{highlight}</span>
      </div>
    ))}
  </div>
);

ProjectHighlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    // setIsMobileFilterOpen(false);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            My Projects
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Project
            <span className="block text-primary">Portfolio</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A selection of projects spanning AI-powered automation, parallel computing, full-stack development, and security.
          </motion.p>
        </motion.div>

        {/* Simple Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${statusStyles[project.status] ?? defaultStatusStyle}`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions: shown by CSS on card hover, or when its
                        link has keyboard focus. */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">


                      {/* Code Button */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <Star size={12} className="fill-amber-500" />
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Actions */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium border border-border bg-background text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                    </div>

                    {/* Accent Border */}
                    <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${showAll
                ? "bg-muted text-foreground border border-border"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  View More Projects
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Simple CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-background border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Zap className="h-4 w-4" />
              Get In Touch
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">Like what you see?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Contact Me
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="https://github.com/pateldhruvil5467-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Github size={18} />
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};