"use client";

import {AnimationControls, motion} from "framer-motion";
import {Logo} from "@/components/LogoSlider/logos";
import Image from "next/image";
import {useState} from "react";

export interface LogoComponentProps {
    logo: Logo;
    pauseAnimation: () => void;
    startAnimation: () => void;
}

export default function LogoComponent(props: LogoComponentProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    const onHoverEvent = async (h: boolean) => {
        setHovered(h);
        // if (h) props.pauseAnimation();
        // else props.startAnimation();
    }

    return (
        <motion.div
            variants={{
                initial: {},
                hovered: {
                    scale: 1.2
                }
            }}
            animate={hovered ? "hovered" : "initial"}
            onHoverStart={() => onHoverEvent(true)}
            onHoverEnd={() => onHoverEvent(false)}
            className={"relative mx-2"}
            style={{width: "80px", height: "100px"}}>
            <Image src={props.logo.src} alt={props.logo.alt} fill style={{objectFit: "contain"}}/>
        </motion.div>
    )
}