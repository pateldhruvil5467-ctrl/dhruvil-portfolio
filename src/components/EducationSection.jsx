import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
    {
        degree: "M.Sc. Software Engineering",
        institution: "University of Europe for Applied Sciences",
        duration: "Sep 2025 – Present",
        location: "Potsdam, Germany",
        status: "In Progress",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Veer Narmad South Gujarat University (VNSGU)",
        duration: "Graduated 2023",
        location: "India",
        status: "Completed",
    },
];

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My{" "}
                        <span className="text-primary">Education</span>
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Academic background supporting my software engineering practice.
                    </p>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {education.map((item) => (
                        <article
                            key={`${item.institution}-${item.degree}`}
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
                            {/* Education Icon */}
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
                                <GraduationCap className="h-4 w-4 text-primary" />
                            </div>

                            {/* Header */}
                            <div className="mb-6 pt-2">
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    {item.degree}
                                </h3>

                                <p className="text-primary font-medium mt-1">
                                    {item.institution}
                                </p>
                            </div>

                            {/* Metadata */}
                            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 shrink-0" />
                                    <span>{item.duration}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 shrink-0" />
                                    <span>{item.location}</span>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-border/40">
                                <span
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
                                    {item.status}
                                </span>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};
