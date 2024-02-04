"use client";

import { Logo, logos } from "@/components/LogoSlider/logos";
import { motion, useAnimationControls } from "framer-motion";
import useMedia, { Media } from "@/utils/MediaUtil/MediaUtil";
import { useCallback, useEffect } from "react";
import LogoComponent from "@/components/LogoSlider/LogoComponent";

export interface LogoSliderProps {

}

const animationLength = 14;
export default function LogoSlider(props: LogoSliderProps) {
    const media: Media = useMedia();
    const dupedLogos: Logo[] = [...logos, ...logos];
    const animationControl = useAnimationControls();

    const startAnimation = useCallback(() => {
        animationControl.start({
            x: "-50%",
            transition: {
                ease: "linear",
                repeatType: "loop",
                duration: 15,
                repeat: Infinity
            }
        })
    }, [animationControl]);

    const pauseAnimation = () => {
        animationControl.stop();
    }

    useEffect(() => {
        startAnimation();
    }, [startAnimation]);

    const getWidth = (m: Media) => {
        if (m.lg) return "200%";
        if (m.md) return "300%";
        if (m.sm) return "400%";
        return "500%";
    }

    return (
        <div className={"w-full overflow-hidden"}>
            <motion.div
                animate={animationControl}
                className={"flex"}
                style={{ width: getWidth(media) }}>
                {dupedLogos.map((logo: Logo, index) => {
                    return (
                        <LogoComponent startAnimation={startAnimation} pauseAnimation={pauseAnimation} logo={logo}
                            key={index} />
                    );
                })}
            </motion.div>
        </div>
    )
}
