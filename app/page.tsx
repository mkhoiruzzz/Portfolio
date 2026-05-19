"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard"; // Keep if used? No, replace validation.
import ProjectsScroll from "@/components/ProjectsScroll";
import BlogList from "@/components/BlogList";
import CPStats from "@/components/CPStats";
import Experience from "@/components/Experience";
import SkillsList from "@/components/SkillsList";
import AboutSection from "@/components/AboutSection";
import { resumeData } from "@/lib/data";
import TextBulrUp from "@/components/TextBulrUp";
import PeekingCharacter from "@/components/PeekingCharacter";
import Certifications from "@/components/Certifications";
import GithubSection from "@/components/GithubSection";
import { useState, useEffect } from "react";
import OrbitImages from "@/components/OrbitImages";

// Data gambar untuk orbit (gunakan gambar online dulu untuk test)
 
const orbitImages = [
  "/hhhhhh.jpeg",
  "/hh.jpeg",
  "/hhh (1).jpeg",
  "/hhh (2).jpeg",
  "/hhh (3).jpeg",
  "/hhhhhhhh.jpeg",
];



export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showOrbitModal, setShowOrbitModal] = useState(false); // TAMBAHKAN INI

  // Easter egg click handler
  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 2000);
    setShowOrbitModal(true); // TAMBAHKAN INI - buka modal, bukan window.open
  };

  return (
    <>
      <div className="section hero-section relative overflow-hidden" id="home">
        <div className="container relative z-10">
          <div className="grid-hero">
            <div>
              <TextBulrUp
                text="Hello!"
                className="heading-jumbo block"
                as="h1"
              />
              <TextBulrUp
                text={`I'm ${resumeData.profile.name.split(" ")[0]}.`}
                className="heading-jumbo block"
                as="h1"
                delay={0.5}
              />
              <div className="subhead space-bottom-36">
                <br />
                <TextBulrUp text={resumeData.profile.oneliner1} delay={1.5} />
                <br />
                <TextBulrUp text={resumeData.profile.oneliner2} delay={2.5} />
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href={resumeData.profile.github} target="_blank" className="button w-button bg-foreground text-background border-foreground lift-on-hover w-full md:w-auto text-center justify-center">GitHub</a>
<button
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="button w-button lift-on-hover w-full md:w-auto text-center justify-center"
>
  Let's Talk
</button>
              </div>
            </div>
          </div>
        </div>
        {/* Peeking Character */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[45%] rotate-[-25deg] z-20 hidden lg:block pointer-events-auto">
          <PeekingCharacter className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]" />
        </div>
      </div>

      <div id="about">
        <AboutSection />
      </div>


      <div id="projects" className="relative">
        <ProjectsScroll />
        <div className="container flex justify-end pb-12">
          <Link href="/projects" className="text-lg font-medium hover:underline text-foreground inline-flex items-center gap-1">
            Show more <span>→</span>
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <div className="section">
        <div className="container">
          <h2>Experience</h2>
          <br />
          <Experience />
        </div>
      </div>

      <Certifications />

      {/* Skills Section */}
      <div className="section">
        <div className="container">
          <h2>Skills</h2>
          <br />
          <SkillsList />
        </div>
      </div>

      {/* Github Section */}
      <GithubSection />

      {/* CP Stats Section */}
      <div className="section">
        <div className="container">
          <h2>Competitive Programming</h2>
          {/* <p className="subhead">Rankings & Stats</p> */}
          <CPStats />
        </div>
      </div>

      <div className="section" id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p className="subhead">Let's Get in Touch</p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link href="/contact" className="button w-button lift-on-hover">Contact Form</Link>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resumeData.profile.email}`} target="_blank" className="button w-button bg-foreground text-background border-foreground lift-on-hover">Email Me</a>
            
            {/* EASTER EGG - Orbit Images */}
            <div className="relative">
              <button
                onClick={handleEasterEgg}
                className="group relative px-4 py-2 rounded-md transition-all duration-300 hover:scale-105"
                title="✨ Secret Easter Egg! ✨"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                <span className="relative flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300">
                  🥚
                  <span className="hidden sm:inline">Orbit</span>
                  <span className="animate-pulse">✨</span>
                </span>
              </button>
              
              {/* Toast notification for easter egg */}
              {showEasterEgg && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full whitespace-nowrap animate-bounce">
                  🚀 Launching Orbit Images...
                </div>
              )}
            </div>
          </div>
          
          {/* Hidden hint yang bisa muncul kalau di-hover */}
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground opacity-50 hover:opacity-100 transition-opacity cursor-help" title="Coba klik ikon telur di samping!">
              🥚 <span className="underline decoration-dotted">something magical here...</span>
            </p>
          </div>
          
          <div className="mt-8">
            <Link href="/contact" className="text-lg font-medium hover:underline text-foreground inline-flex items-center gap-1">
              Show more <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========== MODAL ORBIT IMAGES - TAMBAHKAN INI ========== */}
      {showOrbitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setShowOrbitModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setShowOrbitModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Loveyou muwahhhh
              </h2>
              <p className="text-white/50 text-sm mt-2">
                You found the secret easter egg! 🥚
              </p>
            </div>

            {/* Component Orbit Images */}
            <OrbitImages
              images={orbitImages}
              radius={200}
              duration={30}
              itemSize={80}
            />

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-xs text-white/30">
                🪐 Orbiting through space • Easter egg from React Bits
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}