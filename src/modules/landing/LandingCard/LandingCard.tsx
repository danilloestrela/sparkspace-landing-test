import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface LandingCardProps {
    iconSrc: string
    alt?: string
    title: string
    children: React.ReactNode
    contentStyles?: string
}

export const LandingCard = ({iconSrc, title,  alt = '', contentStyles, children}: LandingCardProps) => {

    const contentInnerStyles = cn('flex w-[200px] items-center justify-center', contentStyles)

    return (
        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-16 w-16" src={iconSrc} alt={alt} />
                    <p>{title}</p>
                </div>
                <div className={contentInnerStyles}>
                    {children}
                </div>
            </Card>
    )
}