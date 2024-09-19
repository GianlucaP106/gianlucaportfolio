import GLogo from "@/components/GLogo/GLogo";
import Link from "next/link";
import GButton from "@/components/GButton/GButton";
import Hamburger from "@/components/Navigation/components/Hamburger";
import { ReactNode } from "react";
import Hero from "../Hero/Hero";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import SkillSection from "../SkillSection/SkillSection";
import ContactSection from "../ContactSection/ContactSection";

export interface NavbarProps {

}

export interface Route {
    name: string;
    route: string;
    id?: string
    component?: ReactNode
}


export const routes: Route[] = [
    {
        name: "Home",
        route: "/",
        id: "section-hero",
        component: <Hero />
    },
    {
        name: "Skills",
        route: "/",
        id: "section-skill",
        component: <SkillSection />
    },
    {
        name: "Experience",
        route: "/",
        id: "section-experience",
        component: <ExperienceSection />
    },
    {
        name: "Contact Me",
        route: "/",
        id: "section-contact",
        component: <ContactSection />
    },
]


export default function Navigation(props: NavbarProps) {
    const Route = ({ route }: { route: Route }) => {
        let href = `${route.route}`
        if (route.id) {
            href += `#${route.id}`
        }
        return (
            <Link className={"text-xl px-4 text-white"} href={href}>
                <small>{route.name}</small>
            </Link>
        )
    }

    const rts = routes.slice(0, routes.length - 1).map((route: Route, index: number) => {
        return (
            <Route key={index} route={route} />
        )
    })

    rts.push(
        <Route key={rts.length} route={{
            name: "Resume",
            route: "/assets/Gianluca Piccirillo C.V.pdf",
        }} />
    )


    return (
        <div className={"flex justify-between items-center px-10 py-4"}>
            <div>
                <GLogo size={"large"} />
            </div>
            <div className={"hidden md:block"}>
                {rts}
            </div>
            <div className={"hidden md:block"}>
                <GButton url="/#section-contact" text={"Contact me"} />
            </div>
            <div className={"md:hidden"}>
                <Hamburger routes={routes} />
            </div>
        </div>
    )
}
