"use client";

import styles from "./TypeWriter.module.css";
import { useCallback, useEffect, useState } from "react";
import useTypeWriter from "@/components/Hero/TypeWriter/useTypeWriter";
import useTypeWriterFunction from "./useTypeWriterFunction";

export interface TypeWriterProps {

}

export default function TypeWriter() {
    const { tag1, hi, myName, description, tag2 } = useTypeWriterFunction();
    return (
        <div className={"text-white"} style={{ minWidth: "250px" }}>
            <p className={`${styles.op0} text-gray-500 text-5xl`} id={"hero-tag1"}>{tag1}</p>
            <div className={"pl-10 md:pl-20 py-8"}>
                <p className={`${styles.op0} text-6xl`} id={"hero-hi"}>{hi}</p>
                <p className={`${styles.op0} my-3 text-6xl ${styles.myName} animateColor`} id={"hero-myName"}>{myName}</p>
                <p className={`${styles.op0} text-xl`} id={"hero-description"}>{description}</p>
            </div>
            <p className={`${styles.op0} text-gray-500 text-5xl`} id={"hero-tag2"}>{tag2}</p>
        </div>
    )
}
