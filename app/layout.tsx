import {Oxanium} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import Navigation from "@/components/Navigation/Navigation";
import CursorAnimation from "@/components/CursorAnimation/CursorAnimation";
import Footer from '@/components/Footer/Footer';

const oxanium = Oxanium({
    weight: "500",
    subsets: ["latin"]
});

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="en">
        <head>
            <title>Portfolio</title>
            <meta name={"description"} content={""}/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className={oxanium.className}>
        {/*<main className={"mainBackgroundColor"}>*/}
            <main>
                <CursorAnimation>
                    <Navigation/>
                    {props.children}
                    <Footer />
                </CursorAnimation>
            </main>
        </body>
        </html>
)
}
