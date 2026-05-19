"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function CPStats() {
    const { cpStats } = resumeData;

    const platforms = [
        {
            name: "LeetCode",
            data: cpStats.leetcode,
            color: "bg-[#FFA116]", // LeetCode Orange
            textColor: "text-white"
        },
        {
            name: "CodeForces",
            data: cpStats.codeforces,
            color: "bg-[#1F8ACB]", // Codeforces Blue
            textColor: "text-white"
        },
        {
            name: "CodeChef",
            data: cpStats.codechef,
            color: "bg-[#5B4638]", // CodeChef Brown
            textColor: "text-white"
        }
    ];

    return (
        <div className="grid-cp">
            {platforms.map((platform, index) => (
                <motion.a
                    key={platform.name}
                    href={platform.data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="cp-header">
                        <h4 className="cp-title">{platform.name}</h4>
                        <div className={`cp-badge ${platform.color} ${platform.textColor}`}>
                            {platform.data.rank}
                        </div>
                    </div>

                    <div className="cp-stats">
                        <div className="cp-stat-row">
                            <span className="cp-label">Rating</span>
                            <span className="cp-value">{platform.data.rating}</span>
                        </div>

                        {/* Conditional rendering based on platform specific data */}
                        {'solved' in platform.data && (
                            <div className="cp-stat-row">
                                <span className="cp-label">Solved</span>
                                <span className="cp-value">{platform.data.solved}</span>
                            </div>
                        )}
                        {'top' in platform.data && (
                            <div className="cp-stat-row">
                                <span className="cp-label">Top</span>
                                <span className="cp-value">{platform.data.top}</span>
                            </div>
                        )}
                        {'highestRank' in platform.data && (
                            <div className="cp-stat-row">
                                <span className="cp-label">Highest Rank</span>
                                <span className="cp-value">{platform.data.highestRank}</span>
                            </div>
                        )}
                    </div>
                </motion.a>
            ))}

            <div className="col-span-full mt-32 flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="flex flex-col items-center text-center">
                    <span className="text-lg font-semibold text-muted-foreground mb-2">Total Questions Solved</span>
                    <div className="flex items-baseline gap-1">
                        <NumberTicker value={cpStats.totals.totalQuestions} className="text-6xl md:text-7xl font-bold tracking-tighter text-foreground dark:text-white" />
                        <span className="text-5xl font-bold text-muted-foreground">+</span>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-lg font-semibold text-muted-foreground mb-2">Total Active Days</span>
                    <div className="flex items-baseline gap-1">
                        <NumberTicker value={cpStats.totals.activeDays} className="text-6xl md:text-7xl font-bold tracking-tighter text-foreground dark:text-white" />
                        <span className="text-3xl font-bold text-muted-foreground">+</span>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-lg font-semibold text-muted-foreground mb-2">Total Contests</span>
                    <div className="flex items-baseline gap-1">
                        <NumberTicker value={cpStats.totals.totalContests} className="text-6xl md:text-7xl font-bold tracking-tighter text-foreground dark:text-white" />
                        <span className="text-3xl font-bold text-muted-foreground">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
