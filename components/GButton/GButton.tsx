"use client";

import styles from "./GButton.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";

export interface GButtonProps {
    text: string;
    url?: string;
    handler?: () => void;
    loading?: boolean;
    type?: "button" | "submit";
}

export default function GButton(props: GButtonProps) {
    const Button = () => {
        return (
            <motion.button type={props.type ? props.type : "button"} onClick={props.handler ? props.handler : undefined} whileHover={{ scale: 1.05 }} className={`${styles.contactMeButton} flex justify-center items-center gap-3`}>
                {props.text}
                {props.loading && <CircularProgress sx={{ color: "white" }} size={20} />}
            </motion.button>
        )
    }

    if (props.url) {
        return (
            <Link href={props.url}>
                <Button />
            </Link>
        );
    }

    return <Button />
}
