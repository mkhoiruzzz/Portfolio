"use client"

import { useTheme } from "next-themes"
import ClickSpark from "./ClickSpark"
import { useEffect, useState } from "react"

export default function GlobalClickSpark({ children }: { children: React.ReactNode }) {
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

    return (
        <ClickSpark
            sparkColor={color}
            sparkSize={10}
            sparkRadius={20}
            sparkCount={8}
            duration={400}
        >
            {children}
        </ClickSpark>
    )
}
