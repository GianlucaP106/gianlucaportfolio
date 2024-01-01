import ContactForm from "@/components/ContactForm/ContactForm";

export interface ContactSectionProps {

}

export default function ContactSection(props: ContactSectionProps) {
    return (
        <div className={"w-full grid grid-cols-2"}>
            <div className={"flex flex-col items-center justify-center"}>
                <h4 className={"myTextGradient text-4xl"}>Contact me</h4>
                <ContactForm />
            </div>
            <div>

            </div>
        </div>
    )
}