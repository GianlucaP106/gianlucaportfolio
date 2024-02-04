"use client";

import { Button, TextField } from "@mui/material";
import GButton from "@/components/GButton/GButton";
import TextInput from "../TextInput/TextInput";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "./form/schema";
import { zodResolver } from '@hookform/resolvers/zod'
import { submitForm } from "./form/action";
import { useState } from "react";

export interface ContactFormProps {

}

export default function ContactForm() {
    const [formResponseStatus, setFormResponseStatus] = useState<null | {
        success: boolean;
        messages: string[]
    }>(null);

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    })


    const errors = form.formState.errors;

    const onSubmit = async (formData: FormSchema) => {
        await new Promise(r => setTimeout(r, 1000))
        const success: boolean = await submitForm(formData)
        if (!success) {
            setFormResponseStatus({
                success: false,
                messages: ["There was an error processing your message", "Contact me at gpiccirillo@devpromedia.com"]
            })
        } else {
            setFormResponseStatus({
                success: true,
                messages: ["Message sent successfully"]
            })
            form.reset()
        }
    }

    return (
        <div className={"myGradient p-1 rounded-xl"}>
            <div className={"cardBackgroundColor rounded-xl"}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"grid grid-cols-2 gap-10 p-6"}>
                    {formResponseStatus &&
                        <div className="col-span-2 text-center">
                            {formResponseStatus.messages.map(msg => (
                                <p key={msg} className={`${formResponseStatus.success ? "text-green-500" : "text-red-500"} text-sm mt-2 ml-1`}>{msg}</p>
                            ))}
                        </div>
                    }
                    <div className={"col-span-1"}>
                        <TextInput label="Name" error={errors.name?.message} inputProps={{ ...form.register("name") }} />
                    </div>
                    <div className={"col-span-1"}>
                        <TextInput label="Email" error={errors.email?.message} inputProps={{ ...form.register("email") }} />
                    </div>
                    <div className={"col-span-2"}>
                        <TextInput label="Subject" error={errors.subject?.message} inputProps={{ ...form.register("subject") }} />
                    </div>
                    <div className={"col-span-2"}>
                        <TextInput multiline label="Message" error={errors.message?.message} inputProps={{ ...form.register("message") }} />
                    </div>
                    <div className={"col-span-2 flex justify-between"}>
                        <button className="text-white w-24">Reset</button>
                        <GButton loading={form.formState.isSubmitting} text={"Submit"} type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
