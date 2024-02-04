"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import ContactAni from "./ContactFormAni";
import useMedia, { Media } from "@/utils/MediaUtil/MediaUtil";

export interface ContactSectionProps {

}

export default function ContactSection() {
    const media: Media = useMedia();

    const cols = [
        <div key={1} className={"flex flex-col items-center justify-center p-4"}>
            <h4 className={"myTextGradient mb-4 text-4xl"}>Contact me</h4>
            <ContactForm />
        </div>,
        <div key={2}>
            <ContactAni />
        </div>
    ]

    return (
        <div className={"w-full grid md:grid-cols-2 pt-16"}>
            {media.md ? cols : cols[0]}
        </div>
    )
}
