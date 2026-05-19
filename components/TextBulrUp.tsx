import { ElementType } from "react"
import { TextAnimate } from "./ui/text-animate"

interface TextBulrUpProps {
    text: string
    className?: string
    delay?: number
    as?: ElementType
}

export default function TextBulrUp({ text, className, delay, as }: TextBulrUpProps) {
    return (
        <TextAnimate
            animation="blurInUp"
            by="word"
            once
            className={className}
            delay={delay}
            as={as}
        >
            {text}
        </TextAnimate>
    )
}
