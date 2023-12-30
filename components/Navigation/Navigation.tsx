import GLogo from "@/components/GLogo/GLogo";
import Link from "next/link";
import GButton from "@/components/GButton/GButton";
import Hamburger from "@/components/Navigation/components/Hamburger";

export interface NavbarProps {

}

export interface Route {
    name: string;
    route: string;
}

export const routes: Route[] = [
    {
        name: "Home",
        route: "/"
    },
    {
        name: "Experience",
        route: "/"
    },
    {
        name: "Skills",
        route: "/"
    },
    {
        name: "Resume",
        route: "/"
    },
]

export default function Navigation(props: NavbarProps) {

    const getRoutes = () => {
        return routes.map((route: Route, index: number) => {
            return (
                <Link className={"text-xl px-4 text-white"} key={index} href={route.route}>
                    <small>{route.name}</small>
                </Link>
            )
        });
    }

    return (
        <div className={"flex justify-between items-center px-10 py-4"}>
            <div>
                <GLogo size={"large"}/>
            </div>
            <div className={"hidden md:block"}>
                {getRoutes()}
            </div>
            <div className={"hidden md:block"}>
                <GButton text={"Contact me"}/>
            </div>
            <div className={"md:hidden"}>
                <Hamburger routes={routes}/>
            </div>
        </div>
    )
}