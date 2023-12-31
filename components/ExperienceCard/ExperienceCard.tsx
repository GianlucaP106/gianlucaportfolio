"use client";

import Image from "next/image";

export type Experience = {
    position: string;
    company: string;
    imageUrl: string;
    description: string;
}

export type ExperienceCardProps = {
    back: boolean;
} & Experience;

export default function ExperienceCard(props: ExperienceCardProps) {
    return (
        <div className={"p-0.5 rounded-2xl h-full w-full myGradient"}>
            <div className={"w-full h-full rounded-2xl py-16 px-12 cardBackgroundColor"}>
                {props.back ?
                    <ExperienceBack />
                    :
                    <ExperienceFront exp={props} />
                }
            </div>
        </div>
    )
}


export interface ExperienceFrontProps {
    exp: ExperienceCardProps;
}

export function ExperienceFront(props: ExperienceFrontProps) {
    return (
        <div className={"grid grid-cols-2 w-full h-full gap-5"}>
            <div className={"flex flex-col justify-center items-center"}>
                <h3 className={"text-white text-lg"}>{props.exp.position}</h3>
                <h3 className={"myBlue text-md"}>{props.exp.company}</h3>
                <small className={"myBlue"}>Click to view more</small>
            </div>
            <div className={"flex justify-center items-center"}>
                <div className={"relative h-full w-full"}>
                    <Image src={props.exp.imageUrl} alt={props.exp.company} fill style={{objectFit: "contain"}}/>
                </div>
            </div>
        </div>
    )
}


export interface ExperienceBackProps {

}

export function ExperienceBack(props: ExperienceBackProps) {
    return (
        <div>
        </div>
    )
}