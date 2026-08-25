import { motion } from "framer-motion";
import { Lightbulb, Code2, TestTube2, Rocket } from "lucide-react";

const approaches = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the problem, requirements, users, and constraints before choosing a technical solution.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description:
      "I break the problem into clear components and make deliberate decisions around architecture, data, APIs, security, and scalability.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "I focus on clean, maintainable implementation and validate the solution through testing, debugging, benchmarking, and iteration.",
    icon: TestTube2,
  },
  {
    number: "04",
    title: "Improve",
    description:
      "I measure the result, identify bottlenecks, improve the implementation, and document what I learn along the way.",
    icon: Rocket,
  },
];

const MyApproach = () => {
  return (
    <section
      id="approach"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            How I Work
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            My Engineering
            <span className="block text-primary">Approach</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I approach software development as an engineering process:
            understand the problem, design the solution, build it carefully,
            and continuously improve it.
          </p>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;

            return (
              <motion.div
                key={approach.number}
                className="group relative p-6 rounded-2xl border border-border bg-background/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-mono text-muted-foreground">
                    {approach.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {approach.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyApproach;