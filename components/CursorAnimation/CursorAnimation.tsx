"use client";

import {ReactNode, useEffect} from "react";

export interface CursorAnimationProps {
    children: ReactNode;
}

function initCanvas() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.height = document.body.scrollHeight;
    canvas.width = window.innerWidth;

    let trail: { x: number, y: number, opacity: number }[] = [];

    document.addEventListener('mousemove', (event) => {
        trail.push({ x: event.pageX, y: event.pageY, opacity: 1.0 });

    });

    // Update canvas dimensions on window resize
    window.addEventListener('resize', () => {
        canvas.height = document.body.scrollHeight;
        canvas.width = window.innerWidth;
    });

    function drawTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < trail.length - 1; i++) {
            const currentPoint = trail[i];
            const nextPoint = trail[i + 1];

            for (let j = 0; j < 10; j++) {
                const angle = j * (Math.PI / 6);
                const offsetX = Math.cos(angle) * 10;
                const offsetY = Math.sin(angle) * 10;

                ctx.beginPath();
                ctx.moveTo(currentPoint.x + offsetX, currentPoint.y + offsetY);
                ctx.lineTo(nextPoint.x + offsetX, nextPoint.y + offsetY);
                ctx.strokeStyle = `rgba(0, 0, 255, ${currentPoint.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            currentPoint.opacity -= 0.01;

            if (currentPoint.opacity <= 0) {
                trail.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        drawTrail();
        requestAnimationFrame(animate);
    }

    animate();
}

export default function CursorAnimation(props: CursorAnimationProps) {

    useEffect(() => {
        initCanvas();
    }, []);

    return (
        <div>
            <canvas className={"w-full mainBackgroundColor absolute top-0 left-0 -z-10 flex justify-center items-center"} id={"canvas"}></canvas>
            {props.children}
        </div>
    )
}