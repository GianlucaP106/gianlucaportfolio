import styles from "./SkillCard.module.css";

export interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard(props: SkillCardProps) {
    return (
        <div className={`${styles.skillContainerBorder} w-full h-full flex justify-center items-center myGradient rounded-xl p-1`}>
            <div
                className={`w-full h-full rounded-xl cardBackgroundColor p-4 ${styles.skillContainerIn}`}>
                <h3 className={"myBlue text-xl"}>{props.title}</h3>
                <div className={"w-full p-3 pb-10 mt-3.5 grid grid-cols-2"}>
                    {props.skills.map((skill: string, index: number) => {
                        return (
                            <div key={index} className={"flex justify-center items-center py-0.5"}>
                                <small className={"text-white text-xl"}>{skill}</small>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}