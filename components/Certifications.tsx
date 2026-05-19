"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { ExternalLink, Award } from "lucide-react";

export default function Certifications() {
    return (
        <section className="section py-20 overflow-hidden" id="certifications">
            <div className="container">
                <h2 className="heading-jumbo text-4xl md:text-5xl font-bold mb-2">Certifications</h2>
                <p className="subhead mb-12 text-muted-foreground">Credentials that validate my technical expertise.</p>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl">
                    {/* Left Side - Character Image - 40% Bigger & Aligned Left */}
                    <motion.div
                        className="w-full lg:w-2/5 flex justify-center lg:justify-start lg:-ml-24"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-[420px] h-[420px] md:w-[560px] md:h-[560px]" style={{ filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.15))" }}>
                            <Image
                                src="/character_body_certificate.png"
                                alt="Character with certificate"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Certifications List - Strip Style */}
                    <div className="w-full lg:w-3/5 flex flex-col gap-4">
                        {resumeData.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-card border-2 md:border-2 border-foreground rounded-xl p-3 md:p-4 shadow-[4px_4px_0px_var(--foreground)] md:shadow-[6px_6px_0px_var(--foreground)] flex flex-col md:flex-row items-center justify-between gap-3 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--foreground)] md:hover:shadow-[8px_8px_0px_var(--foreground)] transition-all w-full"
                            >
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    {/* Icon Placeholder - Smaller size for strip look */}
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground flex items-center justify-center bg-background">
                                        <Award className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="font-bold text-lg leading-tight mb-0.5">{cert.name}</h3>
                                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-muted-foreground font-medium">
                                            <span>{cert.detail || "Certification"}</span>
                                            <span className="hidden md:inline">•</span>
                                            <span>Issued: {cert.year}</span>
                                        </div>
                                    </div>
                                </div>

                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 px-4 py-1.5 border-2 border-foreground rounded-lg font-bold text-xs md:text-sm flex items-center gap-2 text-black dark:text-white hover:bg-foreground hover:text-background transition-colors whitespace-nowrap w-full md:w-auto justify-center"
                                    >
                                        Verify Credential <ExternalLink size={14} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
