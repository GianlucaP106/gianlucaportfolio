import {experiences} from "@/components/ExperienceSection/experiences";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import ExperiencePopup from "@/components/ExperienceCard/ExperiencePopup";

export interface ExperienceSectionProps {

}

const exps = experiences.reverse();

export default function ExperienceSection(props: ExperienceSectionProps) {
    return (
        <div className={"w-full text-center pt-20"}>
            <h2 className={"text-4xl text-white my-3"}>What is my relevant <span
                className={"myTextGradient"}>Experience</span>?</h2>
            <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10"}>
                {exps.map((exp, index) => {
                    return (
                        <div key={index} className={"w-full flex justify-center items-center px-8 sm:px-20 md:px-5"}>
                            <ExperiencePopup position={exp.title} company={exp.location} imageUrl={exp.image}
                                            description={exp.description} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}