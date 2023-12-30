import TypeWriter from "@/components/Hero/TypeWriter/TypeWriter";
import BubbleBlob from "@/components/BubbleBlob/BubbleBlob";

export interface HeroProps {

}

export default function Hero(props: HeroProps) {

    return (
        <div className={"grid md:grid-cols-12 p-10 md:p-20"}>
            <div className={"md:col-span-7 flex justify-center items-center"}>
                <TypeWriter/>
            </div>
            <div className={"md:col-span-5 flex justify-center items-center"}>
                <BubbleBlob />
            </div>
        </div>
    )
}