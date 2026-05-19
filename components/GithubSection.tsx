"use client";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { resumeData } from "@/lib/data";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useTheme } from "next-themes";

export default function GithubSection() {
    const { theme } = useTheme();
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        // Scroll to the right (latest activity) on mount
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            // Small timeout to allow the calendar to render/size correctly
            setTimeout(() => {
                scrollContainer.scrollLeft = scrollContainer.scrollWidth;
            }, 100);
        }
    }, []);

    return (
        <section className="section py-20" id="github">
            <div className="container">
                <h2 className="heading-jumbo text-4xl md:text-5xl font-bold mb-8 text-center">GitHub Activity</h2>

                <div className="flex flex-col items-center gap-12 w-full max-w-5xl">
                    {/* Heatmap */}
                    <div
                        ref={scrollRef}
                        className="w-full flex overflow-x-auto p-4 border-2 border-foreground rounded-xl shadow-[4px_4px_0px_var(--foreground)] bg-card"
                    >
                        <div className="min-w-max mx-auto"> {/* Ensure it doesn't shrink/wrap weirdly and centers if possible */}
                            <GitHubCalendar
                                username="VJ-E"
                                colorScheme={theme === "dark" ? "dark" : "light"}
                                fontSize={14}
                                blockSize={14}
                                blockMargin={4}
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="flex flex-col items-center text-center p-6 border-2 border-foreground rounded-xl shadow-[4px_4px_0px_var(--foreground)] bg-card">
                            <span className="text-lg font-semibold text-muted-foreground mb-2">Total Contributions</span>
                            <div className="flex items-baseline gap-1">
                                <NumberTicker value={resumeData.githubStats?.contribution || 0} className="text-5xl font-bold tracking-tighter text-foreground" />
                                <span className="text-3xl font-bold text-muted-foreground">+</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 border-2 border-foreground rounded-xl shadow-[4px_4px_0px_var(--foreground)] bg-card">
                            <span className="text-lg font-semibold text-muted-foreground mb-2">Active Days</span>
                            <div className="flex items-baseline gap-1">
                                <NumberTicker value={resumeData.githubStats?.activeDays || 0} className="text-5xl font-bold tracking-tighter text-foreground" />
                                <span className="text-3xl font-bold text-muted-foreground">+</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 border-2 border-foreground rounded-xl shadow-[4px_4px_0px_var(--foreground)] bg-card">
                            <span className="text-lg font-semibold text-muted-foreground mb-2">Stars Earned</span>
                            <div className="flex items-baseline gap-1">
                                <NumberTicker value={resumeData.githubStats?.stars || 0} className="text-5xl font-bold tracking-tighter text-foreground" />
                                <span className="text-3xl font-bold text-muted-foreground">+</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <a href={resumeData.profile.github} target="_blank" className="button w-button bg-foreground text-background border-foreground lift-on-hover w-full md:w-auto text-center justify-center px-8 py-3 text-lg">
                            Visit GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
