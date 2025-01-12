import GoogleClassroomIcon from "@/assets/modules/landing/google-classroom.svg"
import GradedPaperIcon from "@/assets/modules/landing/paper.svg"
import RubricIcon from "@/assets/modules/landing/rubric.svg"
import WarningIcon from "@/assets/modules/landing/warning.svg"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useTypewriter } from "react-simple-typewriter"
import { LandingCard } from "./LandingCard/LandingCard"

    export const LandingCardSection = () => {

        const cardsContent = [
            {
                props: {
                    iconSrc: GradedPaperIcon,
                    title: "AI Feedback",
                    alt: "Graded Paper",
                    contentStyles: 'text-sm',
                },
                content: <AiFeedbackContent />
            },
            {
                props: {
                    iconSrc: WarningIcon,
                    title: "AI Detection",
                    alt: "AI Detection",
                },
                content: <AiDetectionContent desiredProgressPercentage={40} title="Probability AI generated" />
            },
            {
                props: {
                    iconSrc: GoogleClassroomIcon,
                    title: "Import Essays",
                    alt: "Import Essays",
                },
                content: <ImportEssayContent />
            },
            {
                props: {
                    iconSrc: RubricIcon,
                    title: "Use Your Rubric",
                    alt: "Use Your Rubric",
                },
                content: <UseYourRubricContent />
            }
        ]

    const renderCards = () => {
        return cardsContent.map((card, index) => (
            <LandingCard key={`card-${index}-${card.props.title}`} {...card.props}>
                {card.content}
            </LandingCard>
        ))
    }

    return (
        <section className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-4">
            {renderCards()}
        </section>
    )
}

const CANNED_FEEDBACK =
    "**Summary Evaluation Against Rubric: Accuracy (10/10):** The essay presents accurate information about Abraham Lincoln's life, presidency, and significant contributions, including key events like his election, the Civil..."

const AiFeedbackContent = () => {
    const [text, ] = useTypewriter({
        words: [CANNED_FEEDBACK],
        loop: 1,
        typeSpeed: 20,
        onLoopDone: () => {
            console.log("done")
        }
    })

    return (
        <ReactMarkdown>{text}</ReactMarkdown>
    )
}



const AiDetectionContent = ({desiredProgressPercentage, title }: {desiredProgressPercentage: number, title: string}) => {
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsAnimating(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isAnimating) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= desiredProgressPercentage) {
                        clearInterval(interval);
                        return desiredProgressPercentage;
                    }
                    return prev + 1;
                });
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isAnimating, desiredProgressPercentage]);

    return (
        <div>
            <p className="mb-3 text-sm">{title}</p>
            <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-navy-900">
                <div
                   className={`absolute top-0 rotate-[-45deg] aspect-square w-full bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500 ${
                    isAnimating ? "" : "rotate-[-45deg]"
                    }`}
                    style={{
                        transform: isAnimating
                            ? `rotate(${(progress / 100) * 180 - 45}deg)`
                            : "rotate(-45deg)",
                    }}
                ></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-2xl leading-none">
                    {progress}%
                </div>
            </div>
        </div>
    );
};

const ImportEssayContent = () => {
    return <p>Import Essays</p>
}

const UseYourRubricContent = () => {
    return <p>Use Your Rubric</p>
}