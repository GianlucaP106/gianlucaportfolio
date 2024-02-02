'use client'

import { useEffect } from 'react'
import { BUBBLE_ID, initBlob } from '@/components/BubbleBlob/BubbleBlobController'

export interface BubbleBlobProps {
}

export const SPHERE_COLOR_DARK = 0x01ffe7

export const SPHERE_COLOR_LIGHT = 0x0a2f8c
export default function BubbleBlob(props: BubbleBlobProps) {
    useEffect(() => {
        initBlob(SPHERE_COLOR_DARK);
    }, []);

    return (
        <div className="w-full">
            <canvas className="mx-auto my-auto" id={BUBBLE_ID}></canvas>
        </div>
    )
}
