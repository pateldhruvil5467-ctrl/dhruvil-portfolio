// Shared profile, identity, and contact details used across the portfolio.
// Plain, serialisable data only: icons, styling, and layout stay in the
// components that render these values.

const profile = {
  name: "Dhruvil Patel",
  firstName: "Dhruvil",
  headline: "Software Engineer",

  // Stored as parts because some sections show "Berlin, Germany" and others
  // show the city and country separately.
  location: {
    city: "Berlin",
    country: "Germany",
  },

  contact: {
    email: "pateldhruvil5467@gmail.com",
    phone: "+49 15565827420",
    phoneHref: "tel:+4915565827420",
  },

  social: {
    github: "https://github.com/pateldhruvil5467-ctrl",
    linkedin: "https://www.linkedin.com/in/dhruvil-patel12/",
  },

  // Served from public/.
  resume: "/Dhruvil-Patel-Resume.pdf",

  availability: {
    status: "Open to opportunities",
    roles: ["Working Student", "Internship", "Junior Software Engineering"],
  },

  // Technology overview shown in the About section. This is intentionally
  // separate from the Skills section's proficiency list.
  aboutTechStack: [
    {
      category: "Languages",
      items: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "C++",
        "SQL",
      ],
    },
    {
      category: "Backend",
      items: [
        "Spring Boot",
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "JWT",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Vite",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Data & Tools",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
      ],
    },
  ],
};

export default profile;
