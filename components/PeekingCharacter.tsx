"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PeekingCharacterProps {
    className?: string;
    style?: React.CSSProperties;
}

export default function PeekingCharacter({ className, style }: PeekingCharacterProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const calculatePupilPosition = (eyeRef: React.RefObject<HTMLDivElement | null>) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const eyeRect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
        const distance = Math.min(
            8, // Max distance pupil can move
            Math.hypot(mousePosition.x - eyeCenterX, mousePosition.y - eyeCenterY) / 5
        );

        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
        };
    };

    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);

    const leftPupilPos = calculatePupilPosition(leftEyeRef);
    const rightPupilPos = calculatePupilPosition(rightEyeRef);

    const handleBlink = () => {
        if (!isBlinking) {
            setIsBlinking(true);
            setTimeout(() => {
                setIsBlinking(false);
            }, 1000);
        }
    };

    return (
        <div
            className={`relative flex justify-center items-center cursor-pointer select-none ${className}`}
            ref={containerRef}
            onClick={handleBlink}
            style={{
                ...style,
                filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.15))"
            }}
        >
            <div className="relative w-full h-full">
                <Image
                    src={isBlinking ? "/character_body_blinked.png" : "/character_body.png"}
                    alt="Character Body"
                    fill
                    className="object-contain pointer-events-none z-10 transition-opacity duration-75"
                />
                {/* Eyes Container */}
                <div
                    className={`absolute top-[40%] left-[48%] -translate-x-1/2 z-20 flex gap-[15%] w-[25%] justify-center transition-opacity duration-75 ${isBlinking ? 'opacity-0' : 'opacity-100'}`}
                >
                    {/* Left Eye */}
                    <div
                        ref={leftEyeRef}
                        className="w-[30%] aspect-square flex items-center justify-center"
                    >
                        <div
                            className="relative w-[85%] h-[85%]"
                            style={{
                                transform: `translate(${leftPupilPos.x}px, ${leftPupilPos.y}px)`
                            }}
                        >
                            <Image
                                src="/left_pupil.svg"
                                alt="Pupil"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Eye */}
                    <div
                        ref={rightEyeRef}
                        className="w-[30%] aspect-square flex items-center justify-center"
                    >
                        <div
                            className="relative w-[85%] h-[85%]"
                            style={{
                                transform: `translate(${rightPupilPos.x}px, ${rightPupilPos.y}px)`
                            }}
                        >
                            <Image
                                src="/right_pupil.svg"
                                alt="Pupil"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
