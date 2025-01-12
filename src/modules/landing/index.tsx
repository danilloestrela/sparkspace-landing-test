import Logo from "@public/logo.svg"
import { LandingCardSection } from "./LandingCardSection"

export const Landing = () => {
    return (
        <div className="flex min-h-screen w-full flex-1 flex-col">
            <div className="h-2 bg-navy-800"></div>
            <div className="sticky h-10 px-5">
                <div>
                    <img className="h-10" src={Logo} alt="Logo" />
                </div>
            </div>
            <div>
                <div>
                    <p className="mt-10 text-center text-4xl font-bold text-navy-900">Save Time Grading Essays</p>

                    <p className="mt-5 text-center text-lg font-semibold">For ELA teachers in grades 5-12</p>

                    <LandingCardSection />
                </div>
            </div>
        </div>
    )
}
