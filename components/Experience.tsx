"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Experience() {
    return (
        <div className="experience-list">
            {resumeData.experience.map((exp, index) => (
                <motion.div
                    key={index}
                    className="experience-item-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <div className="experience-header">
                        <div className="experience-role-company">
                            <h3 className="experience-role">{exp.role}</h3>
                            <span className="experience-company">@ {exp.company}</span>
                        </div>
                        <span className="experience-duration">{exp.duration}</span>
                    </div>

                    <div className="experience-content">
                        <ul className="experience-points">
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        {exp.link && (
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                                View Credential
                            </a>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
