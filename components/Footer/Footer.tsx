import Image from "next/image";
import Link from "next/link";

export interface FooterProps {

}


export default function Footer() {
	return (
		<div className={"w-full flex justify-center items-center"}>
			<Link href={"/"}>
				<div className={"relative"} style={{ width: "60px", height: "60px" }}>
					<Image src={"/assets/logos/G LOGO.png"} alt="glogo" fill style={{ objectFit: "contain" }} />
				</div>
			</Link>
		</div>
	);
}
