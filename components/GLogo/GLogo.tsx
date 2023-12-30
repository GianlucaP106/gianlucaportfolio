import Image from "next/image";

export interface GLogoProps {
    size: "small" | "medium" | "large";
}

export default function GLogo(props: GLogoProps) {
    const getSize = () => {
        if (props.size === "large") {
            return {
                width: 70,
                height: 70
            }
        } else if (props.size === "medium") {
            return {
                width: 50,
                height: 50
            }
        } else {
            return {
                width: 30,
                height: 30
            }
        }
    }
    return (
        <div className={"relative"} style={{width: getSize().width, height: getSize().height}}>
            <Image src={"/assets/logos/G LOGO.png"} alt={"G logo"} fill style={{objectFit: "contain"}}/>
        </div>
    )
}