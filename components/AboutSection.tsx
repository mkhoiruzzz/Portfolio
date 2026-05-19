"use client";

import { resumeData } from "@/lib/data";
import PeekingCharacter from "@/components/PeekingCharacter";
import Link from "next/link";

export default function AboutSection() {
    return (
        <div className="section py-20 relative">
            <div className="container !grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
                {/* Left Side text */}
                <div className="text-center lg:!text-left order-1 px-4 lg:pl-0">
                    <h2 className="mb-8 font-bold text-4xl">About Me</h2>
                    <ul className="space-y-8 max-w-none list-none lg:list-disc inline-block lg:block text-left lg:!text-left">
                        {resumeData.profile.about.map((paragraph, index) => (
                            <>
                                <li key={index} className="text-2xl md:text-3xl leading-relaxed text-muted-foreground pl-0 lg:pl-2">
                                    {paragraph}
                                </li>
                                <br />
                            </>
                        ))}
                    </ul>
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <Link href="/about" className="text-lg font-medium hover:underline text-foreground inline-flex items-center gap-1">
                            Show more <span>→</span>
                        </Link>
                    </div>
                </div>

                {/* Right Side Character */}
                <div className="relative hidden lg:flex justify-end items-center order-2">
                    <PeekingCharacter className="w-[500px] h-[500px]" />
                </div>
            </div>
        </div>
    );
}
