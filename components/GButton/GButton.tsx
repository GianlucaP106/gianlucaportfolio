"use client";

import styles from "./GButton.module.css";
import Link from "next/link";
import {motion} from "framer-motion";

export interface GButtonProps {
    text: string;
}

export default function GButton(props: GButtonProps) {
    return (
        <Link href={"/"}>
            <motion.button whileHover={{scale: 1.05}} className={`${styles.contactMeButton}`}>
                {props.text}
            </motion.button>
        </Link>
    )
}