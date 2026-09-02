import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";
import PropTypes from "prop-types";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import clearkIcon from "@/assets/icons/cleark.png";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";

const skills = [
  // Languages
  { name: "Java", level: "Advanced", category: "languages", icon: "java" },
  { name: "Python", level: "Advanced", category: "languages", icon: "python" },
  { name: "JavaScript", level: "Advanced", category: "languages", icon: "javascript" },
  { name: "C++", level: "Intermediate", category: "languages", icon: "code" },
  { name: "TypeScript", level: "Intermediate", category: "languages", icon: "typescript" },

  // Backend & Databases
  { name: "Spring Boot", level: "Intermediate", category: "backend", icon: "java" },
  { name: "Node.js", level: "Intermediate", category: "backend", icon: "nodejs" },
  { name: "REST APIs", level: "Advanced", category: "backend", icon: "nodejs" },
  { name: "MySQL", level: "Advanced", category: "backend", icon: "mysql" },
  { name: "JWT Authentication", level: "Intermediate", category: "backend", icon: "java" },
  { name: "SQL", level: "Advanced", category: "languages", icon: "sql" },

  // Frontend
  { name: "React", level: "Advanced", category: "frontend", icon: "react" },
  { name: "HTML5", level: "Advanced", category: "frontend", icon: "html" },
  { name: "CSS3", level: "Advanced", category: "frontend", icon: "css" },

  // AI & Automation
  { name: "AI Applications", level: "Intermediate", category: "ai", icon: "python" },
  { name: "NLP", level: "Intermediate", category: "ai", icon: "python" },
  { name: "Selenium", level: "Intermediate", category: "ai", icon: "python" },
  { name: "Playwright", level: "Intermediate", category: "ai", icon: "python" },

  // Systems
  { name: "OpenMP", level: "Intermediate", category: "systems", icon: "code" },
  { name: "MPI", level: "Intermediate", category: "systems", icon: "code" },
  { name: "Multithreading", level: "Intermediate", category: "systems", icon: "code" },
  { name: "Performance Benchmarking", level: "Intermediate", category: "systems", icon: "code" },

  // Tools
  { name: "Git", level: "Advanced", category: "tools", icon: "git" },
  { name: "GitHub", level: "Advanced", category: "tools", icon: "github" },
  { name: "Docker", level: "Beginner", category: "tools", icon: "docker" },
  { name: "VS Code", level: "Advanced", category: "tools", icon: "vscode" },
];

const categories = [
  {
    id: "all",
    label: "All Skills",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: "languages",
    label: "Languages",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    label: "Backend",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "bg-gradient-to-r from-indigo-500 to-blue-500",
  },
  {
    id: "ai",
    label: "AI & Automation",
    color: "bg-gradient-to-r from-purple-500 to-violet-500",
  },
  {
    id: "systems",
    label: "Systems",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    id: "tools",
    label: "Tools",
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  cleark: clearkIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
};

// Skills without a matching brand-logo icon (e.g. C++, OpenMP, MPI) fall back
// to a generic code glyph instead of an unresolved image reference.
const SkillIcon = ({ skill, className }) => {
  const src = iconImages[skill.icon];

  if (!src) {
    return <Code2 className={className} aria-hidden="true" />;
  }

  return <img src={src} alt={skill.name} className={className} />;
};

SkillIcon.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

const levelConfig = {
  Advanced: {
    width: "85%",
    className: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
  Intermediate: {
    width: "65%",
    className: "bg-gradient-to-r from-yellow-400 to-amber-500",
  },
  Beginner: {
    width: "40%",
    className: "bg-gradient-to-r from-red-400 to-pink-500",
  },
};

const SkillBar = ({ level }) => {
  const config = levelConfig[level] || levelConfig.Beginner;

  return (
    <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: config.width }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`h-full rounded-full ${config.className}`}
      />
    </div>
  );
};

SkillBar.propTypes = {
  level: PropTypes.oneOf(["Advanced", "Intermediate", "Beginner"]).isRequired,
};

const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden py-8">
      {/* First row - moves left */}
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <SkillIcon skill={skill} className="w-8 h-8 object-contain" />
            </div>

            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Second row - moves right */}
      <motion.div
        className="flex gap-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => (
          <div
            key={`${skill.name}-reverse-${index}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <SkillIcon skill={skill} className="w-8 h-8 object-contain" />
            </div>

            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

InfiniteScrollSkills.propTypes = {
  skills: PropTypes.array.isRequired,
};


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(skill =>
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I've mastered and my proficiency levels
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg ${activeCategory === category.id
                ? `${category.color} text-white shadow-md`
                : "bg-secondary/50 text-foreground hover:bg-secondary/70"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
                      <SkillIcon skill={skill} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span
                          className={`text-sm font-medium px-2 py-1 rounded-full ${skill.level === "Advanced"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : skill.level === "Intermediate"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-pink-500/10 text-pink-500"
                            }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};