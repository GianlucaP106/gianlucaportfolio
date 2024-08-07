import TypeWriter from "@/components/Hero/TypeWriter/TypeWriter";
import BubbleBlob from "@/components/BubbleBlob/BubbleBlob";

export interface HeroProps {

}

export default function Hero(props: HeroProps) {

    return (
        <div className={"grid md:grid-cols-12 p-10 pt-15 md:p-20 md:pt-0 min-h-screen"}>
            <div className={"md:col-span-7 flex justify-start items-center"}>
                <TypeWriter />
            </div>
            <div className={"md:col-span-5 flex justify-center items-center"}>
                <BubbleBlob />
            </div>
        </div>
    )
}
