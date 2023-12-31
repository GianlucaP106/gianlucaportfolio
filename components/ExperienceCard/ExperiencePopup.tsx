"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import ExperienceCard, {Experience, ExperienceCardProps} from "@/components/ExperienceCard/ExperienceCard";

export type ExperiencePopupProps = {} & Experience;
export default function ExperiencePopup(props: ExperiencePopupProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`bg-transparent ${open ? "absolute top-0 left-0 w-screen h-screen" : "h-full w-full"}`}>
            <div className={`bg-transparent w-full h-full relative`}>
                <motion.div
                    onClick={() => setOpen(!open)}
                    variants={{
                        closed: {
                        },
                        open: {
                            rotateY: 180,
                            top: "50%",
                            left: "50%",
                            x: "-50%",
                            y: "-50%",
                            width: 500,
                            height: 300
                        }
                    }}
                    initial={"closed"}
                    animate={open ? "open" : "closed"}
                    transition={{
                        duration: 1
                    }}
                    className={`w-full h-full cursor-pointer ${open ? "absolute" : ""}`}>
                    <ExperienceCard {...props} back={open}/>
                </motion.div>
            </div>
        </div>
    )
}