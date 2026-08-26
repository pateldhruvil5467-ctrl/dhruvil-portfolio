import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Software Development Intern",
        company: "IT CODES",
        duration: "Mar 2024 – Aug 2024",
        location: "Surat, Gujarat, India",
        description: [
            "Implemented change requests and enhancements for PHP-based websites and applications.",
            "Contributed to the development of mobile applications.",
            "Supported multiple projects for domestic and international clients.",
            "Assisted with academic software projects and collaborated with the development team.",
        ],
        technologies: ["PHP", "Java", "JavaScript", "Android", "Git"],
    },
    {
        title: "Software Developer",
        company: "Microtel Netlinks Pvt. Ltd.",
        duration: "Aug 2023 – Jan 2024",
        location: "Surat, Gujarat, India",
        description: [
            "Contributed to software development activities as part of the development team.",
            "Supported the team in completing assigned development responsibilities and project tasks.",
            "Worked collaboratively with team members to support software development requirements.",
        ],
        technologies: ["Java", "JavaScript", "Android", "Git"],
    },
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional{" "}
                        <span className="text-primary">Experience</span>
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional experience across software development,
                        web applications, and mobile application projects.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {experiences.map((experience) => (
                        <article
                            key={`${experience.company}-${experience.title}`}
                            className="
                                relative
                                rounded-2xl
                                border border-border/60
                                bg-card/40
                                p-6 md:p-8
                                shadow-sm
                                backdrop-blur-sm
                                transition-all duration-300
                                hover:border-primary/40
                                hover:shadow-lg
                                hover:-translate-y-1
                            "
                        >
                            {/* Experience Icon */}
                            <div
                                className="
                                    absolute
                                    -top-4
                                    left-6
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-primary/30
                                    bg-background
                                "
                            >
                                <BriefcaseBusiness className="h-4 w-4 text-primary" />
                            </div>

                            {/* Header */}
                            <div className="mb-6 pt-2">
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    {experience.title}
                                </h3>

                                <p className="text-primary font-medium mt-1">
                                    {experience.company}
                                </p>
                            </div>

                            {/* Metadata */}
                            <div className="flex flex-col gap-3 text-sm text-muted-foreground mb-7">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 shrink-0" />
                                    <span>{experience.duration}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 shrink-0" />
                                    <span>{experience.location}</span>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <ul className="space-y-4 text-muted-foreground">
                                {experience.description.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 leading-relaxed"
                                    >
                                        <span className="text-primary mt-2 text-xs">
                                            ●
                                        </span>

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-border/40">
                                {experience.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="
                                            px-3
                                            py-1.5
                                            text-xs
                                            rounded-full
                                            bg-primary/10
                                            text-primary
                                            border
                                            border-primary/20
                                        "
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};