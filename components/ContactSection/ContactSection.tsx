"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import ContactAni from "./ContactFormAni";
import useMedia, { Media } from "@/utils/MediaUtil/MediaUtil";

export interface ContactSectionProps {

}

export default function ContactSection(props: ContactSectionProps) {
    const media: Media = useMedia();
    const getCols = () => {
        const col1 = (
            <div key={1} className={"flex flex-col items-center justify-center"}>
                <h4 className={"myTextGradient mb-4 text-4xl"}>Contact me</h4>
                <ContactForm />
            </div>
        );
        const col2 = (
            <div key={2}>
                <ContactAni />
            </div>
        );
        if (media.md) return [col1, col2];
        else return [col2, col1];
    }

    return (
        <div className={"w-full grid md:grid-cols-2"}>
            {getCols()}
        </div>
    )
}
