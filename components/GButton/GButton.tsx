"use client";

import styles from "./GButton.module.css";
import Link from "next/link";
import {motion} from "framer-motion";

export interface GButtonProps {
    text: string;
    url?: string;
    handler?: () => void;
}

export default function GButton(props: GButtonProps) {
    const Button = () => {
        return (
            <motion.button onClick={props.handler ? props.handler : undefined} whileHover={{scale: 1.05}} className={`${styles.contactMeButton}`}>
                {props.text}
            </motion.button>
        )
    }

    if (props.url) {
        return (
            <Link href={"/"}>
                <Button />
            </Link>
        );
    }

    return <Button />
}