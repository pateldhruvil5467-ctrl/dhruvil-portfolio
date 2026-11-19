// Portfolio projects, in display order.
// Content only: card styling (accent bars, category and status colours) is
// decided in ProjectsSection.jsx from each project's id, category and status.

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
    status: "Completed",
    highlights: [
      "Password strength analysis",
      "Security-focused validation",
      "Hashing techniques",
    ],
  },
];

export default projects;
