"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Dock from "@/components/Dock";
import { Home, Folder, User, Mail, Github, Linkedin } from "lucide-react";
import { resumeData } from "@/lib/data";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function DockNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = (id: string) => {
        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const items = [
        {
            icon: <Home size={24} className="text-neutral-950 dark:text-white" />,
            label: "Home",
            onClick: () => handleScroll("home"),
        },
        {
            icon: <Folder size={24} className="text-neutral-950 dark:text-white" />,
            label: "Projects",
            onClick: () => handleScroll("projects"),
        },
        {
            icon: <User size={24} className="text-neutral-950 dark:text-white" />,
            label: "About",
            onClick: () => handleScroll("about"),
        },
        {
            icon: <Mail size={24} className="text-neutral-950 dark:text-white" />,
            label: "Contact",
            onClick: () => handleScroll("contact"),
        },
      
        {
            icon: <AnimatedThemeToggler className="text-neutral-950 dark:text-white" />,
            label: "Theme",
            onClick: () => { },
        },

    ];

    // Responsive Dock State
    const [dockConfig, setDockConfig] = React.useState({
        magnification: 70,
        baseItemSize: 50,
        panelHeight: 68,
        distance: 200
    });

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDockConfig({
                    magnification: 50,
                    baseItemSize: 40,
                    panelHeight: 58,
                    distance: 100 // Smaller trigger zone for magnification
                });
            } else {
                setDockConfig({
                    magnification: 70,
                    baseItemSize: 50,
                    panelHeight: 68,
                    distance: 200
                });
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
                <Dock
                    items={items}
                    panelHeight={dockConfig.panelHeight}
                    baseItemSize={dockConfig.baseItemSize}
                    magnification={dockConfig.magnification}
                    distance={dockConfig.distance}
                />
            </div>
        </div>
    );
}


