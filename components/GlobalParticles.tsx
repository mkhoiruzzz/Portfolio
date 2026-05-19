"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Particles } from "@/components/ui/particles"

export default function GlobalParticles() {
    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState("#ffffff")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted && resolvedTheme) {
            setColor(resolvedTheme === "light" ? "#000000" : "#ffffff")
        }
    }, [resolvedTheme, mounted])

    if (!mounted) return null

    return (
        <Particles
            className="fixed inset-0 z-0 pointer-events-none"
            quantity={100}
            ease={80}
            color={color}
            refresh
        />
    )
}
