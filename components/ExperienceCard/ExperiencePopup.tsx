"use client";

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import ExperienceCard, {Experience} from "@/components/ExperienceCard/ExperienceCard";
import useMedia from "@/utils/MediaUtil/MediaUtil";

export type ExperiencePopupProps = {} & Experience;
export default function ExperiencePopup(props: ExperiencePopupProps) {
    const [open, setOpen] = useState(false);
    const media = useMedia();
    function disableScrolling() {
        document.body.style.overflow = 'hidden';
    }

    function enableScrolling() {
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        if (open) {
            disableScrolling();
        } else {
            enableScrolling();
        }
    }, [open]);


    return (
        <motion.div
            whileHover={{
                scale: open ? 1 : 1.05
            }}
            className={`${open ? "z-20 backdrop-blur-md fixed top-0 left-0 w-screen h-screen" : "w-full h-full"}`}>
            <motion.div
                onClick={() => setOpen(!open)}
                variants={{
                    closed: {
                        x: 0,
                        y: 0,
                    },
                    open: {
                        // rotateY: 180,
                        y: [-150, 0]
                    }
                }}
                initial={"closed"}
                animate={open ? "open" : "closed"}
                transition={{
                    duration: 0.75,
                    ease: "easeInOut"
                }}
                className={`w-full h-full cursor-pointer`}
                style={open ? {
                    top: "50%",
                    left: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                    position: "absolute",
                    width: media.md ? "40%" : (media.sm ? "70%" : "90%"),
                    height: 300,
                } : {}}
            >
                <ExperienceCard {...props} back={open}/>
            </motion.div>
        </motion.div>
    )
}