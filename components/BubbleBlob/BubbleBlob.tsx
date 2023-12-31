'use client'

import {useEffect} from 'react'
import {BUBBLE_ID, initBlob} from '@/components/BubbleBlob/BubbleBlobController'
import {useMediaQuery} from "@mui/material";

export interface BubbleBlobProps {
}

export const SPHERE_COLOR_DARK = 0x01ffe7

export const SPHERE_COLOR_LIGHT = 0x0a2f8c
export default function BubbleBlob(props: BubbleBlobProps) {
    const matches = useMediaQuery('(max-width:600px)');
    useEffect(() => {
        initBlob(SPHERE_COLOR_DARK, matches);
    }, [matches]);

    return (
        <div>
            <canvas style={{width: "100%"}} id={BUBBLE_ID}></canvas>
        </div>
    )
}
