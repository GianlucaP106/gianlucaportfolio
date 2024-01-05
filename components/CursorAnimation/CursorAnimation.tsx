"use client";

import {ReactNode, useEffect} from "react";

export interface CursorAnimationProps {
    children: ReactNode;
}

function initCanvas() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.height = document.body.scrollHeight + 100;
    canvas.width = window.innerWidth;

    let trail: { x: number, y: number, opacity: number, color: string }[] = [];
    let colorIndex = 0;
    const colors = ['#01debe', '#81a4d8', '#9491e1'];

    document.addEventListener('mousemove', (event) => {
        trail.push({ x: event.pageX, y: event.pageY, opacity: 1.0, color: interpolateColor() });
        colorIndex = (colorIndex + 1) % colors.length;
    });

    // Update canvas dimensions on window resize
    window.addEventListener('resize', () => {
        canvas.height = document.body.scrollHeight;
        canvas.width = window.innerWidth;
    });

    function interpolateColor() {
        const color1 = colors[colorIndex];
        const color2 = colors[(colorIndex + 1) % colors.length];

        const t = Math.random(); // Use Math.random() for a smooth, random-like transition
        const hex = (c: number[]) => Math.round(c[0] * (1 - t) + c[1] * t);

        const r = hex([parseInt(color1.slice(1, 3), 16), parseInt(color2.slice(1, 3), 16)]);
        const g = hex([parseInt(color1.slice(3, 5), 16), parseInt(color2.slice(3, 5), 16)]);
        const b = hex([parseInt(color1.slice(5, 7), 16), parseInt(color2.slice(5, 7), 16)]);

        return colors[1]; // for now
        // return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    function drawTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < trail.length - 1; i++) {
            const currentPoint = trail[i];
            const nextPoint = trail[i + 1];

            for (let j = 0; j < 1; j++) {
                const angle = j * (Math.PI / 6);
                const offsetX = Math.cos(angle) * 10;
                const offsetY = Math.sin(angle) * 10;

                ctx.beginPath();
                ctx.moveTo(currentPoint.x + offsetX, currentPoint.y + offsetY);
                ctx.lineTo(nextPoint.x + offsetX, nextPoint.y + offsetY);
                // ctx.strokeStyle = `rgba(0, 0, 255, ${currentPoint.opacity})`;
                // ctx.strokeStyle = `rgba(${currentPoint.color}, ${currentPoint.opacity})`;
                ctx.strokeStyle = `rgba(${parseInt(currentPoint.color.slice(1, 3), 16)}, 
                                ${parseInt(currentPoint.color.slice(3, 5), 16)}, 
                                ${parseInt(currentPoint.color.slice(5, 7), 16)}, 
                                ${currentPoint.opacity})`;
                ctx.lineWidth = 3;
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
