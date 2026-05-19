import Image from "next/image";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { IconCloud } from "@/components/ui/icon-cloud";

export default function SkillsList() {
    const categories = Object.keys(resumeData.skills) as Array<keyof typeof resumeData.skills>;

    // Extract all unique icon URLs
    const allIcons = Object.values(resumeData.skills)
        .flat()
        .map((skill: any) => skill.icon)
        .filter((icon) => icon && icon.length > 0);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            {/* Left Side - Skills List */}
            <div className="w-full lg:w-1/2 skills-container">
                {categories.map((category, index) => (
                    <motion.div
                        key={category}
                        className="skill-category flex flex-col"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h4 className="skill-category-title capitalize mb-4">{category}</h4>
                        <div className="skill-tags flex flex-wrap justify-start gap-3">
                            {resumeData.skills[category].map((skill: any) => (
                                <span key={skill.name} className="skill-tag flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-2xl font-medium transition-transform hover:scale-105">
                                    {skill.icon && (
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Right Side - Icon Cloud */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden">
                <IconCloud images={allIcons} />
            </div>
        </div>
    );
}
