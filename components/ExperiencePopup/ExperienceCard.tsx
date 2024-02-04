"use client";

import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export type Experience = {
    position: string;
    company: string;
    type: string;
    imageUrl: string;
    description: string;
}

export type ExperienceCardProps = {
    back: boolean;
} & Experience;

export default function ExperienceCard(props: ExperienceCardProps) {
    return (
        <div className={"p-0.5 rounded-2xl h-full w-full myGradient"}>
            <div
                className={`w-full h-full rounded-2xl ${props.back ? "py-2 px-4" : "py-16 px-12"} cardBackgroundColor`}>
                {props.back ?
                    <ExperienceBack exp={props} />
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
                <h3 className={"myBlue text-md"}>{props.exp.type}</h3>
                <small className={"myBlue"}>Click to view more</small>
            </div>
            <div className={"flex justify-center items-center"}>
                <div className={"relative h-full w-full"}>
                    <Image src={props.exp.imageUrl} alt={props.exp.company} fill style={{ objectFit: "contain" }} />
                </div>
            </div>
        </div>
    )
}


export interface ExperienceBackProps {
    exp: ExperienceCardProps
}

export function ExperienceBack(props: ExperienceBackProps) {
    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className={"flex justify-between items-center"}>
                <div className={"flex flex-col items-start"}>
                    <div className={"relative"} style={{ height: "50px", width: "50px" }}>
                        <Image src={props.exp.imageUrl} alt={props.exp.company} fill style={{ objectFit: "contain" }} />
                    </div>
                    <p className={"text-white text-xs md:text-sm"}>{props.exp.position}</p>
                    <p className={"myBlue text-xs md:text-sm"}>{props.exp.type} &#8729; {props.exp.company}</p>
                </div>
                <div>
                    <IconButton sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
            <div className={"w-full text-center"}>
                <p className={"myBlue my-3"}>Description</p>
                <p className={"text-white"}>{props.exp.description}</p>
            </div>
        </div>
    )
}
