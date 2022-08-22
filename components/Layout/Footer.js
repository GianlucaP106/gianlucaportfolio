import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footerBg">
            <div className="footerContainer">
                <div className="footerContainer footerLinks">
                    <Link href="/"><p className="navLink myfont40 footerLink">Home</p></Link>
                    <Link href="/experience"><p className="navLink myfont40 footerLink">Experience</p></Link>
                    <Link href="/skills"><p className="navLink myfont40 footerLink">Skills</p></Link>
                </div>
                <Link href="/contact"><button className="contactMeButton footerButton"><p style={{margin: "0"}} className="">Contact Me</p></button></Link>
                <div style={{marginTop: "20px", cursor: "pointer"}}>
                    <Link href="/"><Image width={75} height={75} src="/assets/logos/G LOGO.png" /></Link>
                </div>
            </div>
        </div>
    );
}